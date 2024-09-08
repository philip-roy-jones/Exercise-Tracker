import express from 'express';
import dotenv from 'dotenv';
import {connect} from './models/exerciseModel.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_CONNECT_STRING = process.env.MONGODB_CONNECT_STRING;
const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS.split(',');
const app = express();

app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
  }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const initializeRoutes = async () => {
    try {
        const exerciseRoute = await import('./routes/exerciseRoutes.js');
        app.use('/', exerciseRoute.default);
    } catch (error) {
        console.error('Failed to initialize routes:', error);
        process.exit(1);  // Exit the process if route initialization fails
    }
};

const startServer = async () => {
    try {
        // Connect to MongoDB and wait for it to complete
        await connect(MONGODB_CONNECT_STRING);

        // Initialize routes
        await initializeRoutes();

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);  // Exit the process if server start fails
    }
};

startServer()