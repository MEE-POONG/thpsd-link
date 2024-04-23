import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { page = '1', pageSize = '10', search = '' } = req.query as {
            page?: string;
            pageSize?: string;
            search?: string;
        };

        const pageNumber = parseInt(page, 10);
        const size = parseInt(pageSize, 10);
        const skip = (pageNumber - 1) * size;

        const whereClause: Prisma.URLsDataWhereInput = search
            ? {
                OR: [
                    { title: { contains: search, mode: 'insensitive' } },
                    { origUrl: { contains: search, mode: 'insensitive' } }
                ],
            }
            : {};

        const dataList = await prisma.uRLsData.findMany({
            where: whereClause,
            skip,
            take: size,
            include: {
                user: true, // Join with UserData
            },
        });

        const total = await prisma.uRLsData.count({ where: whereClause });

        res.status(200).json({
            dataList,
            pagination: {
                total,
                totalPages: Math.ceil(total / size),
                page: pageNumber,
                pageSize: size,
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve URLs", error });
    }
}
