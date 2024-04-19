import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const links = await prisma.linkListData.findMany();
                res.status(200).json(links);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while fetching links' });
            }
            break;
        case 'POST':
            const { origUrl, userId } = req.body;
            try {
                const shortUrl = generateShortUrl(origUrl);
                const link = await prisma.linkListData.create({
                    data: {
                        origUrl,
                        shortUrl,
                        createdBy: userId || 'system', // Assume a default system user
                        updateBy: userId || 'system'
                    }
                });
                res.status(201).json(link);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while creating the link' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
function generateShortUrl(url: string): string {
    // Simple hash function or use a library like shortid
    return `https://thpsd.com/s/${Buffer.from(url).toString('base64').slice(0, 8)}`;
}