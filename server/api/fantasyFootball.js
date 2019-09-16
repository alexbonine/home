const express = require('express');

const router = express.Router();

// router.use((req, res, next) => {
//   if (!req.user) {
//     res.status(401).json({ error: 'Unauthorized' });
//     return;
//   }

//   next();
// });

router.get('/test', async (req, res) => {
  try {
    res.json({ status: 'OK' });
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
});

module.exports = router;
