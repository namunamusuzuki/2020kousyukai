﻿﻿$(document).ready(function () {
    $("main").css("min-height", $(window).height());
    $(".navigation").html('<a href= "../index.html" >TOP</a ><h3 class = "slider">Rationale</h3><ol><li><a href="../vol33/index.html">vol.33(2019)</a></li><li><a href="../vol32/index.html">vol.32(2018)</a></li></ol>');
    $(".slider").css("cursor", "pointer").click(function () {
        $(this).next().slideToggle("2500");
    });
    $(window).resize(function () {
        $("main").css("min-height", $(window).height());
        if ($(window).width() > 800 && $("nav").css("display") === "none") {
            $("nav").show();
        }
    });
});