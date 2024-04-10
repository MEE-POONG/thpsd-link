import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                const { username, firstname, lastname, email, password } = req.body;

                const existingUser = await prisma.userData.findFirst({
                    where: {
                        OR: [
                            { username },
                            { email }
                        ]
                    }
                });

                if (existingUser) {
                    const field = existingUser.username === username ? 'username' : 'email';
                    res.status(409).json({ error: `An account with this ${field} already exists.` });
                    return;
                }

                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = await prisma.userData.create({
                    data: {
                        username,
                        firstname,
                        lastname,
                        email,
                        password: hashedPassword,
                        createdBy: 'system',
                        updateBy: 'system'
                    },
                });
                res.status(201).json({ message: 'User created successfully', user: newUser });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the user." });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
