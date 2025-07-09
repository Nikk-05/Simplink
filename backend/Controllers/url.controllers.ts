import type { Context } from 'hono'
import { customAlphabet } from 'nanoid'
import { createUrl } from '../models/createUrl.model'
import { getUrl } from '../models/getUrl.models'


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

    // Get the database URL from environment variables
    const databaseUrl = c.env.DATABASE_URL

    await createUrl(url, randomeString, databaseUrl);

    return c.json({
        message: 'URL pasted successfully',
        shorten_url: shortenURL,
        original_url: url,
        status: 'success'
    })
}

const fetchOriginalUrl = async (c: Context) => {
    const shortCode = c.req.param('code');
    const urlRecord = await getUrl(shortCode, c.env.DATABASE_URL)
    if (!urlRecord || !urlRecord.originalUrl) {
        return c.json({
            message: 'Short URL is invalid',
            status: 'error'
        }, 404)
    }
    return c.redirect(urlRecord.originalUrl, 302)
}


export { checkEndPoint, handlePasteUrl, fetchOriginalUrl }