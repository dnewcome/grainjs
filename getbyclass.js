  function getElementsByClassName(node, classname) {
        var i,
            j,
            ret = [],
            re = new RegExp('(^| )' + classname + '( |$)'),
            els = node.getElementsByTagName("*");

        for (i = 0, j = els.length; i < j; i += 1) {
            if (re.test(els[i].className)) {
                ret.push(els[i]);
            }
        }
        return ret;
    }