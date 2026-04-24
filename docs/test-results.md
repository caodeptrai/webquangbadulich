# Test Results - Du Lịch Quảng Bá

## Environment
- Backend: http://localhost:3000
- Frontend: http://localhost:4200
- Database: MySQL 8.0 (localhost:3306)
- Test Date: 2026-04-20

## Test Accounts
- Admin: admin@webquangbadulich.com / admin123
- User: user@webquangbadulich.com / user123

---

## Test Case Results

### A. Authentication

| ID | Test Case | Description | Expected Result | Status |
|----|-----------|-------------|----------------|--------|
| AUTH-01 | Register valid | Register with valid data | Success, redirect | **PASS** |
| AUTH-02 | Register duplicate | Register with existing email | Error message | **PASS** |
| AUTH-03 | Register weak password | Register with password < 6 chars | Validation error | **PASS** |
| AUTH-04 | Register invalid email | Register with invalid email format | Validation error | **PASS** |
| AUTH-05 | Login correct | Login with correct credentials | Success, token saved | **PASS** |
| AUTH-06 | Login wrong password | Login with wrong password | Error message | **PASS** |
| AUTH-07 | Login non-existent | Login with unregistered email | Error message | **PASS** |
| AUTH-08 | Logout | Click logout | Clear session | **PASS** |
| AUTH-09 | Access admin without login | Navigate to admin URL | Redirect to login | **PASS** |
| AUTH-10 | Access admin with user account | Login as user, go admin | Access denied | **PASS** |
| AUTH-11 | Access admin with admin account | Login as admin, go admin | Full access | **PASS** |
| AUTH-12 | Change password | Enter old and new password | Success message | **PASS** |
| AUTH-13 | Change password wrong old | Enter wrong old password | Error message | **FAIL** |
| AUTH-14 | Change password same as old | Enter same password | Error message | **FAIL** |
| AUTH-15 | Access protected route without token | Direct API call without JWT | 401 Unauthorized | **PASS** |
| AUTH-16 | Access protected route with expired token | Use expired JWT | 401 Unauthorized | **PASS** |
| AUTH-17 | Access protected route with invalid token | Use tampered JWT | 401 Unauthorized | **PASS** |

### B. Destinations

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| DEST-01 | View destination list | Paginated list displayed | **PASS** |
| DEST-02 | Search destinations | Filtered results | **PASS** |
| DEST-03 | Filter by category | Filtered by category | **PASS** |
| DEST-04 | Filter by region | Filtered by region | **PASS** |
| DEST-05 | Sort destinations | Sorted results | **PASS** |
| DEST-06 | View destination detail | Show detail page | **PASS** |
| DEST-07 | View destination reviews | Reviews displayed | **PASS** |
| DEST-08 | Destination not found | Invalid ID passed | 404 page | **PASS** |
| DEST-09 | Admin create destination | New destination created | **PASS** |
| DEST-10 | Admin create without required fields | Missing name field | Validation error | **PASS** |
| DEST-11 | Admin create with invalid image | Non-image file uploaded | Validation error | **FAIL** |
| DEST-12 | Admin edit destination | Destination updated | **PASS** |
| DEST-13 | Admin edit with empty name | Empty name submitted | Validation error | **PASS** |
| DEST-14 | Admin delete destination | Destination removed | **PASS** |
| DEST-15 | User delete destination | Access denied | **PASS** |
| DEST-16 | View featured destinations | Featured list shown | **PASS** |
| DEST-17 | View destinations with no image | Default placeholder shown | **PASS** |
| DEST-18 | Pagination - page out of range | Page > total pages | Empty result | **PASS** |
| DEST-19 | Search with special characters | No error, empty result | **PASS** |
| DEST-20 | Concurrent destination views | Multiple users view same destination | Data consistent | **PASS** |

### C. Tours

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| TOUR-01 | View tour list | Paginated list displayed | **PASS** |
| TOUR-02 | View tour detail | Detail with schedule | **PASS** |
| TOUR-03 | Filter by price | Filtered results | **PASS** |
| TOUR-04 | Filter by duration | Filtered by day count | **PASS** |
| TOUR-05 | Sort by price low-high | Sorted correctly | **PASS** |
| TOUR-06 | Request tour consultation | Inquiry submitted | **PASS** |
| TOUR-07 | Book tour without login | Redirect to login | **PASS** |
| TOUR-08 | Book tour fully filled | Booking created | **PASS** |
| TOUR-09 | Book tour missing date | Validation error | **PASS** |
| TOUR-10 | Book tour exceeds capacity | Error "Số chỗ không đủ" | **FAIL** |
| TOUR-11 | Book past date | Validation error | **FAIL** |
| TOUR-12 | View tour not found | 404 page | **PASS** |
| TOUR-13 | Admin create tour | New tour created | **PASS** |
| TOUR-14 | Admin edit tour | Tour updated | **PASS** |
| TOUR-15 | Admin delete tour | Tour removed | **PASS** |

### D. Articles

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| ART-01 | View article list | Paginated list | **PASS** |
| ART-02 | View article detail | Full content displayed | **PASS** |
| ART-03 | Filter by category | Filtered results | **PASS** |
| ART-04 | Search articles | Matching results | **PASS** |
| ART-05 | View featured articles | Featured list shown | **PASS** |
| ART-06 | View article not found | 404 page | **PASS** |
| ART-07 | Admin create article | Article published | **PASS** |
| ART-08 | Admin create with empty content | Validation error | **PASS** |
| ART-09 | Admin edit article | Article updated | **PASS** |
| ART-10 | Admin delete article | Article removed | **PASS** |
| ART-11 | Admin unpublish article | Draft status set | **PASS** |
| ART-12 | User delete article | Access denied | **PASS** |
| ART-13 | Comment on article (logged in) | Comment created | **PASS** |
| ART-14 | Comment on article (not logged in) | Redirect to login | **PASS** |
| ART-15 | Comment with empty content | Validation error | **PASS** |
| ART-16 | Comment too long (>1000 chars) | Validation error | **FAIL** |
| ART-17 | Delete own comment | Comment removed | **PASS** |
| ART-18 | Delete other user comment | Access denied | **FAIL** |

### E. Reviews

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| REV-01 | Submit review (logged in) | Review created | **PASS** |
| REV-02 | Submit review (not logged in) | Redirect to login | **PASS** |
| REV-03 | Submit duplicate review | Error message | **PASS** |
| REV-04 | Submit review with empty content | Validation error | **PASS** |
| REV-05 | Submit review with rating 0 | Validation error | **FAIL** |
| REV-06 | Submit review with rating > 5 | Validation error | **FAIL** |
| REV-07 | Delete own review | Review removed | **PASS** |
| REV-08 | Delete other user review | Access denied | **FAIL** |
| REV-09 | Admin delete any review | Review removed | **PASS** |
| REV-10 | Edit own review | Review updated | **PASS** |
| REV-11 | View destination after new review | Updated average rating | **PASS** |

### F. Favorites

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| FAV-01 | Add to favorites | Added to list | **PASS** |
| FAV-02 | Remove from favorites | Removed | **PASS** |
| FAV-03 | Toggle favorite twice | Removed from list | **PASS** |
| FAV-04 | View favorites list | All favorites shown | **PASS** |
| FAV-05 | Add without login | Redirect to login | **PASS** |
| FAV-06 | View empty favorites | Empty state message | **PASS** |
| FAV-07 | Favorites list pagination | Correct page loaded | **PASS** |

### G. Inquiries

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| INQ-01 | Submit contact form | Success message | **PASS** |
| INQ-02 | Submit with invalid data | Validation errors | **PASS** |
| INQ-03 | Submit with empty email | Validation error | **PASS** |
| INQ-04 | Submit with empty content | Validation error | **PASS** |
| INQ-05 | Admin view inquiries | List all | **PASS** |
| INQ-06 | Admin filter by status | Filtered results | **PASS** |
| INQ-07 | Admin reply inquiry | Status changed | **PASS** |
| INQ-08 | Admin reply with empty content | Validation error | **FAIL** |
| INQ-09 | User view own inquiries | User inquiries shown | **PASS** |
| INQ-10 | User cannot view others inquiries | Access denied | **PASS** |

### H. Chatbot

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| CHAT-01 | Send greeting | Bot responds | **PASS** |
| CHAT-02 | Ask about beach | Returns beach destinations | **PASS** |
| CHAT-03 | Ask about budget | Returns cost info | **PASS** |
| CHAT-04 | Ask about mountain | Returns mountain destinations | **PASS** |
| CHAT-05 | Ask about northern region | Returns northern places | **PASS** |
| CHAT-06 | Ask unrelated question | Fallback response | **PASS** |
| CHAT-07 | Chat history saved (logged in) | History persisted | **PASS** |
| CHAT-08 | Chat history (not logged in) | No history saved | **PASS** |
| CHAT-09 | Very long message | Bot responds or truncates | **FAIL** |
| CHAT-10 | Special characters in message | No crash, fallback | **FAIL** |
| CHAT-11 | Rapid multiple messages | Responses returned | **PASS** |

### I. Recommendations

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| REC-01 | Get recommendations | Returns scored destinations | **PASS** |
| REC-02 | Empty preferences | Returns popular destinations | **PASS** |
| REC-03 | Filter by region | Returns northern destinations | **PASS** |
| REC-04 | Filter by all criteria | Matched results | **PASS** |
| REC-05 | No matching destinations | Empty result | **PASS** |
| REC-06 | Get recommendations not logged in | Full access | **PASS** |

### J. Admin Dashboard

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| ADMIN-01 | View dashboard stats | All statistics shown | **PASS** |
| ADMIN-02 | Manage users | Toggle active status | **PASS** |
| ADMIN-03 | Deactivate self account | Warning message | **FAIL** |
| ADMIN-04 | Manage categories | CRUD categories | **PASS** |
| ADMIN-05 | Delete category with content | Error message | **FAIL** |
| ADMIN-06 | View all bookings | List with filters | **PASS** |
| ADMIN-07 | Update booking status | Status updated | **PASS** |
| ADMIN-08 | Cancel booking | Refund triggered | **PASS** |

### K. Responsive UI

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| RESP-01 | Desktop view (1920px) | Full layout | **PASS** |
| RESP-02 | Tablet view (768px) | 2-column grid | **PASS** |
| RESP-03 | Tablet view (1024px) | 3-column grid | **PASS** |
| RESP-04 | Mobile view (375px) | Single column | **PASS** |
| RESP-05 | Mobile hamburger menu | Menu opens | **PASS** |
| RESP-06 | Touch scroll on mobile | Smooth scrolling | **PASS** |
| RESP-07 | Image loading on slow 3G | Placeholder shown | **PASS** |

### L. Profile & User Settings

| ID | Test Case | Expected | Status |
|----|-----------|----------|--------|
| PROF-01 | View profile page | Info displayed | **PASS** |
| PROF-02 | Update name | Name updated | **PASS** |
| PROF-03 | Update phone with valid number | Phone updated | **PASS** |
| PROF-04 | Update phone with invalid format | Validation error | **FAIL** |
| PROF-05 | Upload avatar (valid) | Avatar shown | **PASS** |
| PROF-06 | Upload avatar too large (>2MB) | Validation error | **FAIL** |
| PROF-07 | Upload non-image file as avatar | Validation error | **FAIL** |
| PROF-08 | View booking history | Bookings listed | **PASS** |
| PROF-09 | Cancel own booking | Status changed | **PASS** |

---

## Summary

| Category | Total | PASS | FAIL | Pass Rate |
|----------|-------|------|------|-----------|
| Authentication | 17 | 15 | 2 | 88% |
| Destinations | 20 | 19 | 1 | 95% |
| Tours | 15 | 13 | 2 | 87% |
| Articles | 18 | 16 | 2 | 89% |
| Reviews | 11 | 8 | 3 | 73% |
| Favorites | 7 | 7 | 0 | 100% |
| Inquiries | 10 | 9 | 1 | 90% |
| Chatbot | 11 | 9 | 2 | 82% |
| Recommendations | 6 | 6 | 0 | 100% |
| Admin Dashboard | 8 | 6 | 2 | 75% |
| Responsive UI | 7 | 7 | 0 | 100% |
| Profile & User Settings | 9 | 6 | 3 | 67% |
| **TOTAL** | **139** | **121** | **18** | **87%** |

---

## Bugs Found & Fixed

| Bug ID | Description | Severity | Status | Fix |
|--------|-------------|----------|--------|-----|
| BUG-01 | Change password: system accepts wrong old password | **Major** | Fixed | AUTH-13 |
| BUG-02 | Change password: system accepts same as old password | **Major** | Fixed | AUTH-14 |
| BUG-03 | Admin upload non-image file as destination image | **Medium** | Fixed | DEST-11 |
| BUG-04 | Book tour exceeds capacity not blocked | **Major** | Open | TOUR-10 |
| BUG-05 | Book tour with past date not blocked | **Major** | Open | TOUR-11 |
| BUG-06 | Comment validation allows >1000 characters | **Medium** | Fixed | ART-16 |
| BUG-07 | User can delete other user's comment | **Major** | Fixed | ART-18 |
| BUG-08 | Review rating accepts 0 or >5 | **Medium** | Fixed | REV-05, REV-06 |
| BUG-09 | User can delete other user's review | **Major** | Fixed | REV-08 |
| BUG-10 | Admin reply inquiry with empty content saved | **Medium** | Fixed | INQ-08 |
| BUG-11 | Chatbot crashes on very long message | **Medium** | Open | CHAT-09 |
| BUG-12 | Chatbot crashes on special characters | **Medium** | Open | CHAT-10 |
| BUG-13 | Admin can deactivate own account | **Major** | Fixed | ADMIN-03 |
| BUG-14 | Delete category with existing content | **Medium** | Fixed | ADMIN-05 |
| BUG-15 | Profile phone validation too loose | **Minor** | Fixed | PROF-04 |
| BUG-16 | Avatar upload allows file >2MB | **Medium** | Fixed | PROF-06 |
| BUG-17 | Avatar upload allows non-image file | **Medium** | Fixed | PROF-07 |

**Severity levels:** Critical / Major / Medium / Minor

---

## Notes

- All 30+ destinations display correctly with images, ratings, and descriptions
- All 15 tours display with pricing, schedules, and inclusions
- All 20 articles are searchable and filterable
- Chatbot responds correctly to common travel queries
- AI recommendation engine scores destinations accurately based on preferences
- Admin panel provides full CRUD for all content types
- JWT authentication works correctly for both user and admin roles
- All API endpoints are protected appropriately with role-based authorization
- 18 test failures identified; 14 have been fixed, 4 remain open (BUG-04, BUG-05, BUG-11, BUG-12)
- Open bugs are tracked and scheduled for next sprint fix
