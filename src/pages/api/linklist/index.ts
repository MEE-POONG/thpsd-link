import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const links = await prisma.linkListData.findMany({
                    include: {
                        user: true, // Include related user data
                    },
                });
                res.status(200).json(links);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the link data" });
            }
            break;
        case 'POST':
            try {
                const link = await prisma.linkListData.create({
                    data: {
                        ...req.body,
                        userId: req.body.userId || null, // Handle optional userId
                    },
                });
                res.status(201).json(link);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the link data" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
