import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
export const ___dirname = path.dirname(__dirname);

export const isValidURL = (imageURL) => {
    let url
    try {
        url = new URL(imageURL)
    } catch (_) {
        return false
    }
    return url.protocol === 'http:' || url.protocol === 'https:'
}



export default __dirname;
