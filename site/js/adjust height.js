
(function () {
    var aligner = function (name) {
        return function () {
            $(name).css('height', 'auto');
            var maxH = 0;
            $(name).each(function () {
                if ($(this).outerHeight() > maxH)
                    maxH = $(this).outerHeight();
            });
            $(name).css('height', maxH + 'px');
        };
    }
    
    var setAligner = function (name) {
        var r = aligner(name);
        $(window).on('resize', r);
        setTimeout(r, 100);
    };
    
    setAligner('.design-4-siblings');
    setAligner('.need-align-design5');
})();