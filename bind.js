    /**
     * small abstraction for downlevel browsers
     */
    function listen(el, name, callback) {
        if (el.addEventListener) {
            el.addEventListener(name, callback, false);
        } else {
            el.attachEvent('on' + name, callback);
        }
    }

    /**
     * simple function binding
     */
    function bind(el, evt, context, callback) {
        if (el) {
            listen(el, evt, (function () {
                return function () {
                    callback.apply(context);
                };
            }(context)));
        }
    }
