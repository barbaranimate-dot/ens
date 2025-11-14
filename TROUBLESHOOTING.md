# Troubleshooting Guide - Login Issue

## Problem: Login button tidak respond / tidak ada yang terjadi

### Cara Debug:

#### 1. Cek Backend Running
```powershell
# Test health endpoint
Invoke-RestMethod http://localhost:8080/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

#### 2. Test Login API Langsung
```powershell
Invoke-RestMethod -Uri "http://localhost:8080/api/auth/login" -Method POST -ContentType "application/json" -Body '{"username":"admin","password":"admin123"}'
```

Expected: Success dengan token

#### 3. Buka Test Page
```
http://localhost:3001/test-login
```

Klik button "Test Backend Health" dan "Test Login"

#### 4. Check Browser Console
1. Buka Developer Tools (F12)
2. Tab "Console"
3. Coba login lagi
4. Lihat log yang muncul:
   - "Login attempt:"
   - "authAPI.login called with:"
   - "Response status:"
   - "Response data:"

### Common Issues & Solutions:

#### Issue 1: CORS Error
**Symptom:** Console shows "CORS policy blocked" atau "Access-Control-Allow-Origin"

**Solution:**
Backend CORS sudah dikonfigurasi untuk allow http://localhost:3000 dan 3001

Check backend config:
```yaml
# config/config.yaml
server:
  cors_origins:
    - "http://localhost:3000"
    - "http://localhost:3001"
```

#### Issue 2: Network Error / Failed to fetch
**Symptom:** Console shows "Failed to fetch" atau "net::ERR_CONNECTION_REFUSED"

**Solution:**
- Backend tidak running pada port 8080
- Check dengan: `curl http://localhost:8080/health`
- Restart backend: `go run cmd/server/main.go`

#### Issue 3: 404 Not Found
**Symptom:** Response status 404

**Solution:**
- API endpoint URL salah
- Check: http://localhost:8080/api/auth/login (harus ada /api/)
- Verify di browser: http://localhost:8080/health

#### Issue 4: Token tidak tersimpan
**Symptom:** Login sukses tapi langsung logout / redirect ke login lagi

**Solution:**
1. Open console
2. Type: `localStorage.getItem('token')`
3. Kalau null, berarti tidak tersimpan

Check:
```javascript
// In browser console after login
localStorage.getItem('token')
localStorage.getItem('user')
```

#### Issue 5: Redirect tidak jalan
**Symptom:** Login sukses, console log "Login successful" tapi tidak redirect

**Solution:**
- Hapus .next folder: `Remove-Item -Recurse -Force .next`
- Restart: `npm run dev`

### Quick Fix Commands:

```powershell
# Stop all Node processes
Get-Process node | Stop-Process -Force

# Delete .next cache
cd "E:\IT Project\InventAcctGO\inventory-frontend-phase1"
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Restart frontend
npm run dev

# In another terminal, restart backend
cd "E:\IT Project\InventAcctGO\inventory-backend"
go run cmd/server/main.go
```

### Test Login Manually in Console:

```javascript
// Open browser console on http://localhost:3001/login
// Paste this code:

async function testLogin() {
  try {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'admin123'
      })
    });
    
    const data = await response.json();
    console.log('Response:', data);
    
    if (data.success) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));
      alert('Login berhasil! Token saved. Refresh page.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Login gagal: ' + error.message);
  }
}

testLogin();
```

### Verify Everything Works:

1. **Backend Health:**
   ```
   http://localhost:8080/health
   ```
   Should return: `{"status":"ok","message":"Server is running"}`

2. **Frontend Running:**
   ```
   http://localhost:3001
   ```
   Should show login page

3. **Test Page:**
   ```
   http://localhost:3001/test-login
   ```
   Use this to debug API calls

4. **Login Flow:**
   - Enter: admin / admin123
   - Click "Sign In"
   - Watch console for logs
   - Should redirect to /dashboard

### Still Not Working?

1. **Restart Both Servers:**
   ```powershell
   # Terminal 1 - Backend
   cd "E:\IT Project\InventAcctGO\inventory-backend"
   go run cmd/server/main.go
   
   # Terminal 2 - Frontend
   cd "E:\IT Project\InventAcctGO\inventory-frontend-phase1"
   npm run dev
   ```

2. **Clear Browser Cache:**
   - Ctrl + Shift + Delete
   - Clear "Cached images and files"
   - Or use Incognito mode

3. **Check Ports:**
   ```powershell
   # Check port 8080 (backend)
   netstat -ano | findstr :8080
   
   # Check port 3001 (frontend)
   netstat -ano | findstr :3001
   ```

4. **Use Test Page:**
   Navigate to http://localhost:3001/test-login and use the test buttons

### Success Indicators:

When login works correctly, you should see in console:
```
Login attempt: {username: "admin", password: "admin123"}
authAPI.login called with: {username: "admin"}
API URL: http://localhost:8080/api/auth/login
Response status: 200
Response ok: true
Response data: {success: true, data: {...}, message: "Login successful"}
Saving token to localStorage
Login successful, redirecting...
```

And then redirect to dashboard with real data!
