import type { Context } from 'hono'
import { customAlphabet } from 'nanoid'

interface urlDirectoryType {
    shorten_url: string;
    original_url: string;
}

const urlDirectory: urlDirectoryType[] = []



const checkEndPoint = ((c: Context) => {
    return c.json({
        message: 'Welcome to Simplink API',
        status: 'success'
    })
})

const generateShortUrl = () => {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const nanoid = customAlphabet(alphabet, 8) // Generates a random string of length 8
    return nanoid()
}
const handlePasteUrl = async (c: Context) => {
    const data = await c.req.json();
    const url = data.url;
    console.log('Received URL:', url);
    const randomeString = generateShortUrl();
    const shortenURL = 'http://127.0.0.1:8787/' + randomeString;
    console.log('Generated Short URL:', shortenURL);
    urlDirectory.push({ shorten_url: randomeString, original_url: url });

    return c.json({
        message: 'URL pasted successfully',
        shorten_url: shortenURL,
        original_url: url,
        status: 'success'
    })
}


const fetchOriginalUrl = async (c: Context) => {
    console.log('Fetching original URL');
    urlDirectory.map((item) => (console.log('URL Directory:', item.original_url, item.shorten_url)));
    const shortCode = c.req.param('code');
    console.log('Short URL:', shortCode);
    const foundUrl = urlDirectory.find(item => item.shorten_url === shortCode);
    return c.json({
        message: 'Original URL fetched successfully',
        original_url: foundUrl ? foundUrl.original_url : 'URL not found',
        status: 'success'
    })
}

urlDirectory.map((item) => (console.log('URL Directory:', item.original_url, item.shorten_url)));

export { checkEndPoint, handlePasteUrl, fetchOriginalUrl }