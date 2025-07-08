import {Hono} from 'hono';
import{ checkEndPoint, fetchOriginalUrl }from '../Controllers/url.controllers';
import { handlePasteUrl } from '../Controllers/url.controllers';

const url = new Hono()

url.get('/', checkEndPoint)
url.post('/shorten',handlePasteUrl)
url.get('/:code', fetchOriginalUrl)


export default url;