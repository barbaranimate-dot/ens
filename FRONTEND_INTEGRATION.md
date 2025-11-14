# Frontend Integration Guide

## ✅ Integration Status: COMPLETED

### What Has Been Done

1. **✅ API Library Created** (`lib/api.ts`)
   - Complete API endpoints configuration
   - Helper functions for auth headers
   - API call wrappers for all modules
   - Token management functions

2. **✅ Login Page** (`app/login/page.tsx`)
   - Modern UI with Tailwind CSS
   - Form validation
   - Error handling
   - Default credentials displayed

3. **✅ Authentication Flow**
   - JWT token storage in localStorage
   - Automatic redirect to login if not authenticated
   - Logout functionality in sidebar

4. **✅ Dashboard Layout** (`app/(dashboard)/layout.tsx`)
   - Auth check on every page load
   - Protected routes
   - Sidebar integration

5. **✅ Updated Dashboard** (`app/(dashboard)/dashboard/page.tsx`)
   - Fetches real data from backend API
   - Displays system statistics
   - Shows connection status

## 🚀 How to Run

### 1. Backend (Already Running)
```bash
cd E:\IT Project\InventAcctGO\inventory-backend
go run cmd/server/main.go
```
✅ Backend running on: http://localhost:8080

### 2. Frontend
```bash
cd E:\IT Project\InventAcctGO\inventory-frontend-phase1
npm run dev
```
Frontend will run on: http://localhost:3000

## 🔐 Login Credentials

**Default Account:**
- **Username:** admin
- **Password:** admin123
- **Role:** superadmin (Full Access)

**Other Accounts:**
- Username: `finance` / Password: `admin123` (Finance role)
- Username: `warehouse` / Password: `admin123` (Warehouse role)

## 📁 File Structure Changes

```
inventory-frontend-phase1/
├── lib/
│   └── api.ts                    # ✅ NEW - API configuration & helpers
├── app/
│   ├── page.tsx                  # ✅ UPDATED - Root redirect
│   ├── login/
│   │   └── page.tsx             # ✅ NEW - Login page
│   ├── (dashboard)/              # ✅ NEW - Protected route group
│   │   ├── layout.tsx           # ✅ NEW - Auth wrapper
│   │   ├── dashboard/
│   │   │   └── page.tsx         # ✅ NEW - Real dashboard
│   │   └── master/              # Existing master pages
│   │       ├── items/
│   │       ├── suppliers/
│   │       ├── customers/
│   │       └── warehouses/
│   └── layout.tsx                # ✅ UPDATED - Simplified root layout
├── components/
│   └── Sidebar.tsx               # ✅ UPDATED - Added logout button
└── middleware.ts                 # ✅ NEW - Route protection (optional)
```

## 🔄 Authentication Flow

```
1. User opens http://localhost:3000
   ↓
2. Root page checks localStorage for token
   ↓
3a. Has token → Redirect to /dashboard
3b. No token → Redirect to /login
   ↓
4. User logs in with admin/admin123
   ↓
5. API call to backend: POST /api/auth/login
   ↓
6. Backend returns JWT token
   ↓
7. Token saved to localStorage
   ↓
8. Redirect to /dashboard
   ↓
9. Dashboard fetches stats from backend
   ↓
10. Display real data
```

## 🛠️ API Usage Examples

### Login
```typescript
import { authAPI } from '@/lib/api';

const response = await authAPI.login('admin', 'admin123');
// Token automatically saved to localStorage
```

### Fetch Items
```typescript
import { masterAPI } from '@/lib/api';

const response = await masterAPI.getItems(1, 10);
console.log(response.data); // Array of items
```

### Create Item
```typescript
const newItem = {
  code: 'ITM001',
  name: 'Product A',
  category: 'Electronics',
  unit: 'pcs',
  cost: 100000,
  price: 150000,
  is_vat_applicable: true,
  is_active: true
};

const response = await masterAPI.createItem(newItem);
```

### Get System Stats
```typescript
import { systemAPI } from '@/lib/api';

const response = await systemAPI.getStats();
console.log(response.data);
// {
//   items: 0,
//   customers: 0,
//   suppliers: 0,
//   purchase_orders: 0,
//   ...
// }
```

## 📝 Next Steps

### 1. Update Master Pages to Use Real API

Example for Items page:

```typescript
'use client';

import { useEffect, useState } from 'react';
import { masterAPI } from '@/lib/api';

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await masterAPI.getItems(1, 10);
        if (response.success) {
          setItems(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // ... render items
}
```

### 2. Add CRUD Operations

Use the API methods from `lib/api.ts`:

- `masterAPI.createItem(data)`
- `masterAPI.updateItem(id, data)`
- `masterAPI.getItemById(id)`
- `masterAPI.getItems(page, limit)`

### 3. Add Transaction Pages

Create pages for:
- Purchase Orders
- Sales Orders
- Invoices
- Returns

### 4. Add Accounting Pages

Create pages for:
- Chart of Accounts
- Journals
- AR/AP
- Financial Reports

### 5. Add Error Handling

```typescript
try {
  const response = await masterAPI.createItem(data);
  if (response.success) {
    // Show success message
    alert('Item created successfully!');
  }
} catch (error: any) {
  // Show error message
  alert('Failed to create item: ' + error.message);
}
```

## 🔒 Security Notes

### Token Management
- Token stored in localStorage
- Automatically included in all API requests
- Token expires after 24 hours (configurable in backend)

### Protected Routes
- All pages under `/dashboard` require authentication
- Automatic redirect to login if token missing
- Sidebar has logout button

### CORS
Backend already configured to allow:
- http://localhost:3000
- http://localhost:3001

## 🐛 Troubleshooting

### "Failed to fetch"
- Check if backend is running on port 8080
- Verify CORS settings in backend config
- Check browser console for errors

### "Authorization header required"
- Token not saved or expired
- Logout and login again
- Check localStorage for 'token' key

### "Invalid credentials"
- Wrong username or password
- Use: admin / admin123

### Pages not loading
- Clear browser cache
- Delete `.next` folder and rebuild: `npm run dev`
- Check console for errors

## ✅ Testing Checklist

- [ ] Backend running on port 8080
- [ ] Frontend running on port 3000
- [ ] Can access http://localhost:3000
- [ ] Redirects to /login
- [ ] Can login with admin/admin123
- [ ] Redirects to /dashboard after login
- [ ] Dashboard shows real stats from backend
- [ ] Sidebar logout button works
- [ ] After logout, redirects to /login
- [ ] Cannot access /dashboard without login

## 🎉 Success!

Your frontend is now connected to the backend! You can:
- ✅ Login with JWT authentication
- ✅ Fetch real data from PostgreSQL
- ✅ Make API calls to all endpoints
- ✅ View system statistics
- ✅ Logout securely

**Next:** Start building out the CRUD interfaces for Items, Suppliers, Customers, and Transactions!
