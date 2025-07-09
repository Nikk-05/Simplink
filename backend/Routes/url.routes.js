import { Hono } from 'hono';
import { fetchOriginalUrl } from '../Controllers/url.controllers';
import { handlePasteUrl } from '../Controllers/url.controllers';
const url = new Hono();
url.post('/shorten', handlePasteUrl);
url.get('/:code', fetchOriginalUrl);
export default url;
