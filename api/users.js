const connectDB = require('./config/db');
const { register, login } = require('./controllers/userController');

export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();
  } catch (error) {
    return res.status(500).json({ message: 'Database connection failed' });
  }

  if (req.method === 'POST') {
    const { action } = req.query;

    if (action === 'register') {
      return register(req, res);
    } else if (action === 'login') {
      return login(req, res);
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
};
