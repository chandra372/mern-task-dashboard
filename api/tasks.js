const connectDB = require('./config/db');
const authMiddleware = require('./middleware/auth');
const { getTasks, createTask, updateTask, deleteTask } = require('./controllers/taskController');

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

  // Apply auth middleware
  authMiddleware(req, res, async () => {
    if (req.method === 'GET') {
      return getTasks(req, res);
    } else if (req.method === 'POST') {
      return createTask(req, res);
    } else if (req.method === 'PUT') {
      return updateTask(req, res);
    } else if (req.method === 'DELETE') {
      return deleteTask(req, res);
    }

    res.status(405).json({ message: 'Method not allowed' });
  });
};
