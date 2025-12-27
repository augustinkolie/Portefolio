# Portfolio Backend API

Backend API for handling contact form submissions with MongoDB storage and email notifications.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=augustinkolie54@gmail.com

# CORS
FRONTEND_URL=http://localhost:5173
```

3. **Gmail App Password Setup** (if using Gmail):
   - Go to Google Account settings
   - Security → 2-Step Verification (enable if not already)
   - Security → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS`

4. **MongoDB Setup**:
   - **Local**: Install MongoDB and run `mongod`
   - **Atlas**: Create free cluster at mongodb.com/cloud/atlas

## Running

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+224 620 00 00 00",
  "subject": "Project Inquiry",
  "message": "Hello, I would like to discuss..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message",
  "errors": [...]
}
```

## Testing

Test the API with curl:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+224 620 00 00 00",
    "subject": "Test",
    "message": "This is a test message"
  }'
```
