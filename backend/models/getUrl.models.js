import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
const getPrisma = (databaseUrl) => new PrismaClient({
    datasources: {
        db: {
            url: databaseUrl
        }
    }
}).$extends(withAccelerate());
const getUrl = async (shortCode, databaseUrl) => {
    const prisma = getPrisma(databaseUrl);
    try {
        const originalUrl = await prisma.url_directory.findUnique({
            where: {
                shortUrl: shortCode
            }
        });
        return originalUrl;
    }
    catch (error) {
        console.error('Error fetching URL:', error);
        throw new Error('Failed to fetch URL');
    }
};
export { getUrl };
