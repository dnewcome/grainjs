    /**
     * utility for applying multiple css styles to an element
     * allows assignment of of dimensions using numeric values
     */
    function applyStyles(el, obj) {
        var style;
        for (style in obj) {
            if (obj.hasOwnProperty(style)) {
                if (style === 'top' || style === 'left' || style === 'width' || style === 'height') {
                    el.style[style] = obj[style] + 'px';
                } else {
                    el.style[style] = obj[style];
                }
            }
        }
    }
