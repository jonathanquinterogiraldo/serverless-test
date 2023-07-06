
const hello = async (event, context) => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({ 'message': 'tetst david' }),
    }
}

module.exports = {
    hello
}
