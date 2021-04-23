exports.catchErrors = (func) = {
    return function(req, res, next) {
        return func(req, res, next).catch(next);
    }
};