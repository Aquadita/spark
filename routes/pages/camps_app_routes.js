const express = require('express');
const router = express.Router({ mergeParams: true });
const userRole = require('../../libs/user_role');
const passportLib = require('../../libs/passport');

router.get('/', userRole.isLoggedIn(), function (req, res) {
    const options = { httpOnly: true };
    if (process.env.NODE_ENV === 'production') {
        options.domain = '.midburn.org';
    }
    res.cookie('authToken', passportLib.generateJwtToken(req.user.attributes.email), options);
    res.redirect(process.env.CAMPS_APP_BASE_URL || 'http://localhost:3006');
});

module.exports = router;