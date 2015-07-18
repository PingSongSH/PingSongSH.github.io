
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
        setTimeout(r, 200);
        setTimeout(r, 500);
        setTimeout(r, 1000);
        setTimeout(r, 2000);
    };
    
    setAligner('.design-4-siblings');
    setAligner('.need-align-design5');
})();
(function () {
    var imgrsfn = function () {
        var img = $('#home_bg'), hp = $('#home_patch');
        if (img.length > 0) {
            img.css('height', 'auto').css('width', '100%');
            img.css('top', '0px').css('bottom', '0px').css('left', '0px').css('right', '0px')
            img.parent().css('height', 'auto');
            hp.removeClass('hidden');
            if (window.innerWidth > 520) {
                //h and w are the actual visible height and width of banner pic
                var h = window.innerHeight - 60, w = window.innerWidth;
                var oh = img.height(), ow = img.width();
                if (h / w > oh / ow) {
                    //ih and iw are browser width of banner pic
                    var ih = h, iw = ow / oh * ih;
                    img.css('height', ih + 'px').css('width', iw + 'px');
                    img.css('left', -iw / 2 + w / 2);
                }
                else if (h / w < oh / ow) {
                    var iw = w, ih = oh / ow * iw;
                    img.css('height', ih + 'px').css('width', iw + 'px');
                    img.css('top', -ih / 5 + h / 5).css('bottom', -ih * 4 / 5 + h * 4 / 5);
                    img.parent().css('height', h);
                }
            }
            if (hp.height() < 240)
                hp.addClass('hidden');
        }
    };
    $(window).on('resize', imgrsfn);
    setTimeout(imgrsfn, 100);
    setTimeout(imgrsfn, 300);
    setTimeout(imgrsfn, 1000);
    
    
    var imgrsfn_about = function () {
        var img = $('#about_bg');
        if (img.length > 0) {
            img.css('height', 'auto').css('width', '100%');
            img.css('top', '0px').css('bottom', '0px').css('left', '0px').css('right', '0px')
            img.parent().css('height', 'auto');
            if (window.innerWidth > 520) {
                //h and w are the actual visible height and width of banner pic
                var h = window.innerHeight - 60, w = window.innerWidth;
                var oh = img.height(), ow = img.width();
                if (h / w > oh / ow) {
                    //ih and iw are browser width of banner pic
                    var ih = h, iw = ow / oh * ih;
                    img.css('height', ih + 'px').css('width', iw + 'px');
                    img.css('left', -iw / 2 + w / 2);
                }
                else if (h / w < oh / ow) {
                    var iw = w, ih = oh / ow * iw;
                    img.css('height', ih + 'px').css('width', iw + 'px');
                    img.css('top', -ih / 5 + h / 5).css('bottom', -ih * 4 / 5 + h * 4 / 5);
                    img.parent().css('height', h);
                }
            }
        }
    };
    $(window).on('resize', imgrsfn_about);
    setTimeout(imgrsfn_about, 100);
    setTimeout(imgrsfn_about, 300);
    setTimeout(imgrsfn_about, 1000);
})();