function websites(parent, args, context, info) {
    return context.db.query.websites({}, info);
}

module.exports = {
    websites,
}