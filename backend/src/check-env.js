import dotenv from 'dotenv';
dotenv.config();
console.log('--- BACKEND ENV CHECK ---');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
console.log('-------------------------');
process.exit(0);
