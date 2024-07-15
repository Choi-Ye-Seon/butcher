$(document).ready(function() {
    // PC - Header - LNB
    $("header .inner  ul.gnb li.main-menu").mouseenter(function() {
        $("ul.lnb").stop().slideDown('fast');
    });

    $("header .inner ul.gnb li.main-menu").mouseleave(function() {
        $("ul.lnb").stop().slideUp('fast');
    });


});