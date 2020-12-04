const ping = async () => {
    try {
        return "pong";
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    ping
};