# Testing Plan - Du Lịch Quảng Bá

## 1. Test Scope

### In Scope
- All user-facing features (public pages, user account)
- Admin dashboard and management features
- API endpoints (backend)
- Authentication and authorization
- AI features (chatbot, recommendations)
- Responsive UI on multiple devices

### Out of Scope
- Performance testing under load
- Security penetration testing
- Third-party service integration (payment gateway, email)

## 2. Test Types

### 2.1. Unit Testing
- Backend service methods (scoring algorithm, validation)
- Frontend utility functions
- Component logic (Angular services)

### 2.2. Integration Testing
- API endpoints (CRUD operations)
- Database operations
- Authentication flow

### 2.3. Manual Testing
- All user-facing features
- UI/UX validation
- Cross-browser testing
- Responsive design

## 3. Test Cases

### 3.1 Authentication
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| AUTH-01 | Register with valid data | Fill form, submit | Success, redirect to home | |
| AUTH-02 | Register with duplicate email | Use existing email | Error message | |
| AUTH-03 | Register with invalid email | Enter invalid format | Validation error | |
| AUTH-04 | Login with correct credentials | Enter valid email/password | Login success, token saved | |
| AUTH-05 | Login with wrong password | Enter wrong password | Error message | |
| AUTH-06 | Login with non-existent email | Enter unregistered email | Error message | |
| AUTH-07 | Logout | Click logout | Clear session, redirect | |
| AUTH-08 | Access admin without login | Navigate to admin | Redirect to login | |
| AUTH-09 | Access admin with user account | Login as user, go admin | Access denied | |
| AUTH-10 | Change password | Enter correct old, new password | Success message | |

### 3.2 Destinations
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| DEST-01 | View destination list | Navigate to destinations page | Display paginated list | |
| DEST-02 | Search destinations | Enter keyword in search | Filtered results | |
| DEST-03 | Filter by category | Select category | Filtered by category | |
| DEST-04 | Sort destinations | Select sort option | Sorted results | |
| DEST-05 | View destination detail | Click destination card | Show detail page | |
| DEST-06 | View destination reviews | Scroll to reviews section | Show reviews | |
| DEST-07 | Admin create destination | Fill form, submit | New destination created | |
| DEST-08 | Admin edit destination | Edit fields, save | Destination updated | |
| DEST-09 | Admin delete destination | Click delete, confirm | Destination removed | |

### 3.3 Tours
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| TOUR-01 | View tour list | Navigate to tours page | Display paginated list | |
| TOUR-02 | View tour detail | Click tour card | Show detail with schedule | |
| TOUR-03 | Filter tours by price | Set price range | Filtered results | |
| TOUR-04 | Request tour consultation | Fill form, submit | Inquiry submitted | |

### 3.4 Articles
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| ART-01 | View article list | Navigate to articles page | Display paginated list | |
| ART-02 | View article detail | Click article | Show full content | |
| ART-03 | Filter by category | Select category | Filtered results | |
| ART-04 | Admin create article | Fill form, submit | Article published | |

### 3.5 Reviews
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| REV-01 | Submit review (logged in) | Login, rate, comment, submit | Review created | |
| REV-02 | Submit review (not logged in) | Try to submit | Redirect to login | |
| REV-03 | Submit duplicate review | Review same item again | Error message | |
| REV-04 | Delete own review | Click delete | Review removed | |
| REV-05 | Admin delete any review | Click delete | Review removed | |

### 3.6 Favorites
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| FAV-01 | Add to favorites | Click heart icon | Added to list | |
| FAV-02 | Remove from favorites | Click again | Removed from list | |
| FAV-03 | View favorites list | Go to profile > favorites | Show all favorites | |
| FAV-04 | Add without login | Click heart | Redirect to login | |

### 3.7 Inquiries
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| INQ-01 | Submit contact form | Fill form, submit | Success message | |
| INQ-02 | Submit with invalid data | Leave required fields empty | Validation errors | |
| INQ-03 | Admin view inquiries | Go to admin > inquiries | List all inquiries | |
| INQ-04 | Admin reply inquiry | Add reply, update status | Status changed | |
| INQ-05 | User view own inquiries | Go to profile > inquiries | Show user inquiries | |

### 3.8 Chatbot
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| CHAT-01 | Send greeting | Type "xin chào" | Bot responds | |
| CHAT-02 | Ask about beach destinations | Type "địa điểm biển" | Returns beach destinations | |
| CHAT-03 | Ask about budget | Type "chi phí đi Sapa" | Returns cost info | |
| CHAT-04 | Ask unrelated question | Type random text | Fallback response | |
| CHAT-05 | Chat history saved | Login, chat, logout, login | History restored | |

### 3.9 Recommendations
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| REC-01 | Get recommendations | Select preferences, submit | Returns scored destinations | |
| REC-02 | Empty preferences | Submit without selecting | Returns popular destinations | |
| REC-03 | Filter by region | Select NORTH, submit | Returns northern destinations | |

### 3.10 Admin Dashboard
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| ADMIN-01 | View dashboard stats | Login as admin | Show all statistics | |
| ADMIN-02 | Manage users | View user list, toggle active | Status updated | |
| ADMIN-03 | Manage categories | Add/edit/delete category | Changes reflected | |

### 3.11 Responsive UI
| ID | Test Case | Steps | Expected Result | Status |
|----|-----------|-------|----------------|--------|
| RESP-01 | Desktop view | Open on desktop (1920px) | Full layout, 3-column grid | |
| RESP-02 | Tablet view | Open on tablet (768px) | 2-column grid, adjusted nav | |
| RESP-03 | Mobile view | Open on mobile (375px) | Single column, hamburger menu | |

## 4. Test Execution

### Environment Setup
- Frontend: http://localhost:4200
- Backend: http://localhost:3000
- Database: MySQL on localhost:3306

### Test Accounts
- Admin: admin@webquangbadulich.com / admin123
- User: user@webquangbadulich.com / user123

## 5. Bug Reporting

All bugs found will be documented in `test-results.md` with:
- Bug ID
- Description
- Steps to reproduce
- Severity (Critical/Major/Minor)
- Status (Open/Fixed/Closed)
- Fix notes
