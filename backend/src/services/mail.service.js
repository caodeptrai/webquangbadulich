const nodemailer = require('nodemailer');

let transporter;
let warnedMissingConfig = false;

const STATUS_LABELS = {
  pending: 'Chờ xác nhận',
  confirmed: 'Đã xác nhận',
  cancelled: 'Đã hủy',
};

const parseBoolean = (value, defaultValue = false) => {
  if (value === undefined || value === null || value === '') return defaultValue;
  return ['1', 'true', 'yes', 'y'].includes(String(value).trim().toLowerCase());
};

const escapeHtml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};

const formatCurrency = (value) => new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0,
}).format(Number(value) || 0);

const getFrontendUrl = () => (process.env.FRONTEND_URL || 'http://localhost:4200').replace(/\/+$/, '');

const getRecipientEmail = (booking) => booking.contactEmail || booking.user?.email;

const getDisplayName = (booking) => booking.contactName || booking.user?.fullName || 'Quý khách';

const isMailEnabled = () => {
  if (process.env.MAIL_ENABLED !== undefined) {
    return parseBoolean(process.env.MAIL_ENABLED);
  }
  return Boolean(process.env.SMTP_HOST);
};

const getTransporter = () => {
  if (!isMailEnabled()) return null;

  if (!process.env.SMTP_HOST) {
    if (!warnedMissingConfig) {
      console.warn('Email notification skipped: SMTP_HOST is not configured.');
      warnedMissingConfig = true;
    }
    return null;
  }

  if (!transporter) {
    const auth = process.env.SMTP_USER && process.env.SMTP_PASS
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined;

    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: parseBoolean(process.env.SMTP_SECURE),
      auth,
    });
  }

  return transporter;
};

const getFromAddress = () => process.env.MAIL_FROM || process.env.SMTP_USER || 'Du Lịch Quảng Bá <no-reply@webquangbadulich.local>';

const bookingRows = (booking) => [
  ['Mã đặt tour', booking.bookingCode],
  ['Tour', booking.tour?.name],
  ['Điểm đến', booking.tour?.destination?.name],
  ['Ngày khởi hành', formatDate(booking.startDate)],
  ['Số khách', booking.peopleCount],
  ['Tổng tiền', formatCurrency(booking.totalAmount)],
  ['Người liên hệ', booking.contactName],
  ['Email', booking.contactEmail],
  ['Số điện thoại', booking.contactPhone],
  ['Trạng thái', STATUS_LABELS[booking.status] || booking.status],
].filter(([, value]) => value !== undefined && value !== null && value !== '');

const buildBookingTable = (booking) => `
  <table style="border-collapse:collapse;width:100%;margin:18px 0;color:#1f2937">
    <tbody>
      ${bookingRows(booking).map(([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:38%">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb">${escapeHtml(value)}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
`;

const buildLayout = ({
  title,
  intro,
  booking,
  actionText = 'Xem booking của tôi',
  actionPath = '/user/bookings',
  followUpText = 'Bạn có thể theo dõi trạng thái booking trong tài khoản của mình.',
  recipientName,
}) => {
  const bookingUrl = `${getFrontendUrl()}${actionPath}`;
  const greetingName = recipientName || getDisplayName(booking);

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;background:#f3f4f6;padding:24px">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:8px;padding:28px">
        <h2 style="margin:0 0 12px;color:#0f766e">${escapeHtml(title)}</h2>
        <p style="margin:0 0 14px">Xin chào ${escapeHtml(greetingName)},</p>
        <p style="margin:0">${escapeHtml(intro)}</p>
        ${buildBookingTable(booking)}
        <p style="margin:0 0 20px">${escapeHtml(followUpText)}</p>
        <a href="${escapeHtml(bookingUrl)}" style="display:inline-block;background:#0f766e;color:#ffffff;text-decoration:none;padding:11px 18px;border-radius:6px;font-weight:600">
          ${escapeHtml(actionText)}
        </a>
        <p style="margin:24px 0 0;color:#6b7280;font-size:13px">Email này được gửi tự động từ hệ thống Du Lịch Quảng Bá.</p>
      </div>
    </div>
  `;
};

const buildPlainText = ({
  title,
  intro,
  booking,
  actionPath = '/user/bookings',
  recipientName,
}) => [
  title,
  '',
  `Xin chào ${recipientName || getDisplayName(booking)},`,
  intro,
  '',
  ...bookingRows(booking).map(([label, value]) => `${label}: ${value}`),
  '',
  `Theo dõi booking: ${getFrontendUrl()}${actionPath}`,
].join('\n');

const sendMailSafely = async (mailOptions) => {
  const client = getTransporter();
  if (!client || !mailOptions.to) return;

  try {
    await client.sendMail({
      from: getFromAddress(),
      ...mailOptions,
    });
  } catch (error) {
    console.error('Email notification failed:', error.message);
  }
};

const notifyBookingCreated = async (booking) => {
  const title = 'Đã nhận yêu cầu đặt tour';
  const intro = 'Yêu cầu đặt tour của bạn đã được ghi nhận và đang chờ quản trị viên xác nhận.';
  const content = { title, intro, booking };

  const tasks = [
    sendMailSafely({
      to: getRecipientEmail(booking),
      subject: `[Du Lịch Quảng Bá] Đã nhận đặt tour ${booking.bookingCode}`,
      html: buildLayout(content),
      text: buildPlainText(content),
    }),
  ];

  if (process.env.BOOKING_NOTIFY_EMAIL) {
    tasks.push(sendMailSafely({
      to: process.env.BOOKING_NOTIFY_EMAIL,
      subject: `[Du Lịch Quảng Bá] Booking mới ${booking.bookingCode}`,
      html: buildLayout({
        title: 'Có booking mới cần xác nhận',
        intro: 'Một khách hàng vừa gửi yêu cầu đặt tour mới.',
        booking,
        actionText: 'Mở trang quản trị',
        actionPath: '/admin/bookings',
        followUpText: 'Vui lòng kiểm tra và xác nhận booking trong trang quản trị.',
        recipientName: 'Quản trị viên',
      }),
      text: buildPlainText({
        title: 'Có booking mới cần xác nhận',
        intro: 'Một khách hàng vừa gửi yêu cầu đặt tour mới.',
        booking,
        actionPath: '/admin/bookings',
        recipientName: 'Quản trị viên',
      }),
    }));
  }

  await Promise.all(tasks);
};

const notifyBookingConfirmed = async (booking) => {
  const title = 'Booking của bạn đã được xác nhận';
  const intro = 'Quản trị viên đã xác nhận yêu cầu đặt tour của bạn. Vui lòng kiểm tra lại thông tin chuyến đi bên dưới.';
  const content = { title, intro, booking };

  await sendMailSafely({
    to: getRecipientEmail(booking),
    subject: `[Du Lịch Quảng Bá] Booking ${booking.bookingCode} đã được xác nhận`,
    html: buildLayout(content),
    text: buildPlainText(content),
  });
};

module.exports = {
  notifyBookingConfirmed,
  notifyBookingCreated,
};
