import express from 'express';
import user from './user.routes.js';
import investimento from './investimento.routes.js';
import desempenho from './desempenho.routes.js';
import login from './login.routes.js';

const router = express.Router();

router.use('/user', user);
router.use('/investimento', investimento);
router.use('/desempenho', desempenho);
router.use('/login', login);

export default router;