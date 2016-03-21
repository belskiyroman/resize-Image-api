module.exports = function Error (){
    return function (err, req, res, next) {
        var standartErr = err.message.split(':');
        var error = parseFloat(standartErr[0]) ? standartErr : [500, 'Internal Server Error'];
        var code = error.shift();
        var message = error.join(':');

        res.status(code);
        res.send({
          "status": "error",
          "data": null,
          "message": message
        });
    };
};
