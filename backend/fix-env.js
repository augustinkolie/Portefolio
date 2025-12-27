import fs from 'fs';
const envPath = 'c:/Users/theke/Desktop/portefolio/backend/.env';
const content = 'PORT=5000\\nNODE_ENV=development\\nMONGODB_URI=mongodb://127.0.0.1:27017/portfolio\\nFRONTEND_URL=http://localhost:5173';
fs.writeFileSync(envPath, content);
console.log('Fixed .env');