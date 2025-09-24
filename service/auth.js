const JWT = require('jsonwebtoken');
const secretKey = 'mysecrect@1234'

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };

    const token = JWT.sign(payload, secretKey);
    return token;
}

function validatToken(token) {
    const payload = JWT.verify(token, secretKey);
    return payload;

}

module.exports = {
    createTokenForUser,
    validatToken
}