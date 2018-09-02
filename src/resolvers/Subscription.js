function newWebsiteSubscribe (parent, args, context, info) {
    return context.db.subscription.website(
        { where: { mutation_in: ['CREATED'] } },
        info,
    )
}

const newWebsite = {
    subscribe: newWebsiteSubscribe
}

module.exports = {
    newWebsite,
}