<<<<<<< HEAD

import { findUserByReferralCodeAction } from '@/actions/referal/reward/findUserByReferalCode';
=======
import { findUserByReferralCodeAction } from '@/action/referal/findReferalUser';
>>>>>>> 190be0601e79525477435dcaa1624e7256f4b6d6
import { NextFunction, Request, Response } from 'express';
export class RewardController {
  async checkReferralCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { referralCode } = req.body;
      const result = await findUserByReferralCodeAction(referralCode);
      return res.status(result?.status).send(result);
    } catch (error) {
      next(error);
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 190be0601e79525477435dcaa1624e7256f4b6d6
