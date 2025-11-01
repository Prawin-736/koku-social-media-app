import { config } from '../../config.js';
import jwt from 'jsonwebtoken';
import UserRepository from '../features/user/user-repository.js';


// Detects environment
const isProduction = process.env.NODE_ENV === 'production';

const API_URL = isProduction
  ? 'https://prawin.dev/project/koku-socialmedia-app'
  : 'http://localhost:3000';

const userRepository = new UserRepository();

export const jwtAuth = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.redirect(`${API_URL}/api/user/signIn`);
  }

  try {
    const payload = jwt.verify(token, config.jwt.secretKey);
    req.userId = payload.userId;
    req.email = payload.email;
    req.userName = payload.userName;

    const userTokens = await userRepository.fetchUserToken(req.userId);
    //checking the token from database and token from cookies matches
    if (userTokens && userTokens.some((t) => t.token === token)) {
      return next();
    } else {
      return res.redirect(`${API_URL}/api/user/signIn`);
    }
  } catch (err) {
    console.error('JWT verification failed:', err.message);
    return res.redirect(`${API_URL}/api/user/signIn`);
  }
};

export const jwtOtpAuth = (req, res, next) => {
  const tokenMain = req.cookies.jwtOtp;
  req.headers['authorization'] = req.cookies.jwtOtp;
  const token = req.headers['authorization'];

  if (!token) {
    return res.redirect(`${API_URL}/api/user/forgotPassword`);
  }

  try {
    const payload = jwt.verify(token, config.jwt.otpSecretKey);
    req.userId = payload.userId;
    req.email = payload.email;
    req.userName = payload.userName;

    next();
  } catch (err) {
    console.log('JWT verification failed:', err.message);
    return res.redirect(`${API_URL}/api/user/forgotPassword`);
  }
};

export const jwtNewPassAuth = (req, res, next) => {
  const tokenMain = req.cookies.jwtNewPass;
  req.headers['authorization'] = req.cookies.jwtNewPass;
  const token = req.headers['authorization'];

  if (!token) {
    return res.redirect(`${API_URL}/api/user/newPassword`);
  }
  try {
    const payload = jwt.verify(token, config.jwt.newPassSecretKey);
    req.userId = payload.userId;
    req.email = payload.email;
    req.userName = payload.userName;

    next();
  } catch (err) {
    console.log('JWT verification failed:', err.message);
    return res.redirect(`${API_URL}/api/user/newPassword`);
  }
};
