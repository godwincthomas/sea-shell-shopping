(function ($) {
    "use strict";
    $(window).on('load', function () {
        $("#preloder").fadeOut();
        $(".loader").delay(400).fadeOut("slow");
    });
    // $(function () {
    //     $('[data-toggle="tooltip"]').tooltip()
    // })
});