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

const limitUrlCount = async (databaseUrl: string) => {
    const prisma = getPrisma(databaseUrl);
    try {
        // 1. Find the IDs of all but the 5 most recent URLs
        const oldUrls = await prisma.url_directory.findMany({
            orderBy: { createdAt: 'desc' },
            skip: 10,
            select: { id: true }
        });

        // 2. Delete those old URLs
        if (oldUrls.length > 0) {
            const idsToDelete = oldUrls.map(url => url.id);
            await prisma.url_directory.deleteMany({
                where: { id: { in: idsToDelete } }
            });
        }
    } catch (error) {
        console.error('Error limiting URL count:', error);
    }
};

export { limitUrlCount};