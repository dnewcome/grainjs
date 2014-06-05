 function merge(obj1, obj2) {
        var item;
        for(item in obj2) {
            obj1[item] = obj2[item];
        }
        return obj2;
    }

    function proxy(fn, ctx, args) {
        return function() {
            fn.apply(ctx, args);
        };
    }

    function map(arr, fn) {
        var out = [];
        for(var i=0;i<arr.length;i++){
            out.push(fn(arr[i], i));
        }
        return out;
    }