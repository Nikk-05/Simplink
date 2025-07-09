import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
// Load environment variables from .env file
const getPrisma = (databaseUrl: string) => 
    new PrismaClient({
        datasources: {
            db: {
                url: databaseUrl
            }
        }
    }).$extends(withAccelerate())

const createUrl = async (original_url: string, shorten_url: string, databaseUrl: string) => {
    const prisma = getPrisma(databaseUrl);
    try {
        await prisma.url_directory.create({
            data: {
                originalUrl: original_url,
                shortUrl: shorten_url
            }
        })
        console.log('URL created successfully');
    }
    catch (error) {
        console.error('Error creating URL:', error);
    }
}

export { createUrl };

