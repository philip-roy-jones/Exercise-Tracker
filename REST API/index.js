import express from 'express';
import dotenv from 'dotenv';
import {connect} from './models/exerciseModel.js';

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_CONNECT_STRING = process.env.MONGODB_CONNECT_STRING;
const app = express();

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