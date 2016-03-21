module.exports = function BadRequest (){
    return function (req, res, next) {
        throw new Error('400:Bad Request.');
    };
};
