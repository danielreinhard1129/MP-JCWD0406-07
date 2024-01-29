import prisma from '@/prisma';
<<<<<<< HEAD
import { IReferralPoints } from '@/types/reward.type';
=======
import { IReferralPoints } from '@/models/reward.type';
>>>>>>> 190be0601e79525477435dcaa1624e7256f4b6d6

export const createPointReferral = async (data: IReferralPoints) => {
  try {
    const { referrerUserId, referredUserId, pointEarned, expiresOn } = data;
    const result = await prisma.referralPoints.create({
      data: {
        referrerUserId,
        referredUserId,
        pointEarned,
        expiresOn,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 190be0601e79525477435dcaa1624e7256f4b6d6
