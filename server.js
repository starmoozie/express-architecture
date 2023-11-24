import * as dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

async function main() {
    const port = process.env.APP_PORT || 3000;

    app.listen(port);

    console.log(`Server run on port: ${port}`);
}

main();
