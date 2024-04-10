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
                // Validation logic here (omitted for brevity)

                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = await prisma.userData.create({
                    data: {
                        username,
                        firstname, // Updated to match the Prisma schema
                        lastname,
                        email,
                        password: hashedPassword,
                        createdBy: 'system', // Adjust this depending on your application logic
                        updateBy: 'system'  // Adjust this depending on your application logic
                    },
                });
                res.status(201).json({ message: 'User created successfully', user: newUser });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the user" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
