import Router from 'express';

const router = Router();

router.get('/teste', (req, res) => {
  res.status(201).json({
    name: 'Fábio Salomão',
    age: '41',
    email: 'fabio@arquivarnet.com.br',
  });
});

export default router;
