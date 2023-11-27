import express, { Application } from 'express';
import Server from './src/index';

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app
    .listen(PORT, 'localhost', () => {
        console.log(`Server is running on port ${PORT}.`);
    })
    .on('error', (err: any) => {
        err.code === 'EADDRINUSE'
            ? console.log('Error: address already in use')
            : console.log(err);

    });


