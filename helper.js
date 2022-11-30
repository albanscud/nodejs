exports.success = (message, data) => {
    return { message, data }
}

exports.getUniqueId = (cryptos) => {
    const cryptosIds = cryptos.map(crypto => crypto.id)
    const maxId = cryptosIds.reduce((a, b) => Math.max(a, b))
    const uniqueId = maxId + 1

    return uniqueId
}