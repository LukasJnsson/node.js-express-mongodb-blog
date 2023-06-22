
import path from 'path';
import {fileURLToPath} from 'url';


const getViews = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'views', 'pages');
const getPublic = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');


export { getViews, getPublic};