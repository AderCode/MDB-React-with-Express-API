import express from 'express';
import { join } from 'path';

// import routes from './routes';

const CLIENT_PATH = join(__dirname, '../../client/public');

let app = express();

app.use(express.static(CLIENT_PATH));

// app.use('/api', routes);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
