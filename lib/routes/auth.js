const { Router } = require('express');

const router = Router();

// /api/auth/register
router.post('/register', async (request, response) => {
  try {
    //const { email, password } = request.body;
  } catch (error) {
    response.status(500).json({ message: 'Something went wrong, try again!' });
  }
});

module.exports = router;
