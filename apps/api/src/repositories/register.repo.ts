import prisma from '@/prisma';
import { IUser } from '../models/user.type';

export const createUser = async (data: IUser) => {
  try {
<<<<<<< HEAD

    const { email, firstName, lastName, password, referralCode, role } = data;

=======
    const { email, firstName, lastName, password, referralCode, role } = data;
>>>>>>> 190be0601e79525477435dcaa1624e7256f4b6d6
    const result = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password,
<<<<<<< HEAD

=======
>>>>>>> 190be0601e79525477435dcaa1624e7256f4b6d6
        referralCode,
        role: {
          create: { name: role.name },
        },
<<<<<<< HEAD

=======
>>>>>>> 190be0601e79525477435dcaa1624e7256f4b6d6
      },
      include: {
        role: true,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
