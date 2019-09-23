import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './src/routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

// MongoDB connection.
mongoose.Promise = global.Promise;
const MONGO_USER = process.env.MONGO_USERNAME;
const MONGO_PASS = process.env.MONGO_PASSWORD;
const URI = "mongodb+srv://" + MONGO_USER + ":" + MONGO_PASS + "@maincluster-bmnhf.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI);

// BodyParser Setup:
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

routes(app);

app.get('/', (req, res) => {
	res.send(`Node and express server is running on port ${PORT}`);
});

app.get('/api/test', (req, res) => {
	res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`Your server is runing on port ${PORT}`);
});