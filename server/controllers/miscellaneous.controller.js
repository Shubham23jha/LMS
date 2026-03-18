import axios from 'axios';
import asyncHandler from '../middlewares/asyncHandler.middleware.js';
import User from '../models/user.model.js';
import AppError from '../utils/appError.js';
import sendEmail from '../utils/sendEmail.js';


export const sendEmailCampaign = asyncHandler(async (req, res, next) => {
  const { emails, subject, body } = req.body;

  if (!emails || !subject || !body || emails.length === 0) {
    return next(new AppError('Emails, Subject, and Body are required', 400));
  }

  try {
    const response = await axios.post(process.env.GO_WORKER_URL, {
      recipients: emails,
      subject,
      body,
    });

    res.status(200).json({
      success: true,
      message: 'Campaign initiated successfully',
      data: response.data,
    });
  } catch (error) {
    return next(new AppError(error.message || 'Failed to initiate campaign', 500));
  }
});


export const contactUs = asyncHandler(async (req, res, next) => {
  
  const { name, email, message } = req.body;

  
  if (!name || !email || !message) {
    return next(new AppError('Name, Email, Message are required'));
  }

  try {
    const subject = 'Contact Us Form';
    const textMessage = `${name} - ${email} <br /> ${message}`;

    
    await sendEmail(process.env.CONTACT_US_EMAIL, subject, textMessage);
  } catch (error) {
    console.log(error);
    return next(new AppError(error.message, 400));
  }

  res.status(200).json({
    success: true,
    message: 'Your request has been submitted successfully',
  });
});


export const userStats = asyncHandler(async (req, res, next) => {
  const allUsersCount = await User.countDocuments();

  const subscribedUsersCount = await User.countDocuments({
    'subscription.status': 'active', 
  });

  res.status(200).json({
    success: true,
    message: 'All registered users count',
    allUsersCount,
    subscribedUsersCount,
  });
});
