const jwt = require('jsonwebtoken');
const APP_SECRET = 'GraphQL-is-aw3some';
const API_SECRET = 'mysecret123';

function getUserId(context) {
    const Authorization = context.request.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId
    }

    throw new Error('Not authenticated');
}

module.exports = {
    API_SECRET,
    APP_SECRET,
    getUserId,
}
