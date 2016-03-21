module.exports = function CheckKey (keyStorage) {

    return function (req, res, next) {
        var isValidKey = keyStorage[req.query.key];
        console.log('isValidKey: ', isValidKey);
        if (!isValidKey) throw new Error('401:API key is not valid.');
        next();
    };

};
