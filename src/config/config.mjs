import { fileURLToPath } from "url";
import dotenv from 'dotenv'
dotenv.config('dotenv');

const config = () => {
    const NASA_API_KEY = process.env.NASA_API_KEY;
    const __filename = fileURLToPath(import.meta.url);

    return { NASA_API_KEY, __filename };
}

export { config }