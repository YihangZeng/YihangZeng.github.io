$(document).ready(function () {
    // 切换语言
    $('#toggle-language').on('click', function () {
        let currentLang = $(this).text();
        if (currentLang === '简体中文') {
            $(this).text('English');
            $('[data-en]').each(function () {
                $(this).text($(this).data('cn'));
            });
        } else {
            $(this).text('简体中文');
            $('[data-en]').each(function () {
                $(this).text($(this).data('en'));
            });
        }
    });

    // 模块展开和折叠
    $('.module h3, .course h3, .research-project h3').click(function () {
        var target = $(this).parent().data('target');
        $(target).slideToggle();
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('#navbar').outerHeight()
        }, 500);
    });

    // 导航栏链接点击滚动
    $('.scroll-to').click(function () {
        var target = $(this).data('target');
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('#navbar').outerHeight()
        }, 500);
    });
});

