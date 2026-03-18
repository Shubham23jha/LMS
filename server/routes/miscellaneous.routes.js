import { Router } from 'express';
import {
  contactUs,
  userStats,
  sendEmailCampaign,
} from '../controllers/miscellaneous.controller.js';
import { authorizeRoles, isLoggedIn } from '../middlewares/auth.middleware.js';

const router = Router();


router.route('/contact').post(contactUs);
router
  .route('/admin/stats/users')
  .get(isLoggedIn, authorizeRoles('ADMIN'), userStats);

router
  .route('/admin/email-campaign')
  .post(isLoggedIn, authorizeRoles('ADMIN'), sendEmailCampaign);

export default router;
