import prisma from '@/prisma';
<<<<<<< HEAD
import { ICouponDiscount } from '@/types/reward.type';
=======
import { ICouponDiscount } from '@/models/reward.type';
>>>>>>> 190be0601e79525477435dcaa1624e7256f4b6d6

export const createDiscountReferral = async (data: ICouponDiscount) => {
  try {
    const { userId, couponCode, discountPersentase, expiresOn } = data;
    const result = await prisma.couponDiscount.create({
      data: {
        userId,
        couponCode,
        discountPersentase,
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
