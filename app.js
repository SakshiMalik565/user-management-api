import express from 'express';
import userRouter from './routes/users.routes.js';

const app = express();

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the User Management App');
});

// User routes
app.use('/api/users', userRouter);

// Export app
export default app;
