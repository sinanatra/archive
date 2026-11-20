
// // if header num is visible highlite
$(document).ready(function () {
    $('.menu').find('#1chapter').html("ABSTRACT");
    $('.menu').find('#2chapter').html("INTRODUCTION");
    $('.menu').find('#3chapter').html("EVERYTHING BUT THE KITCHEN SINK");
    $('.menu').find('#4chapter').html("BIAS AS A BUG");
    $('.menu').find('#5chapter').html("BIAS AS A FEATURE");
    $('.menu').find('#6chapter').html("BIAS AS ARTEFACTS");
    $('.menu').find('#7chapter').html("CONCLUSION");
    $('.menu').find('#8chapter').html("BIBLIOGRAPHY");
    //     $("a").click(function () {
    //         $('.menu:not(.menu-collapsed)').find('#1chapter').html("I");
    //         $('.menu:not(.menu-collapsed)').find('#2chapter').html("II");
    //         $('.menu:not(.menu-collapsed)').find('#3chapter').html("III");
    //         $('.menu:not(.menu-collapsed)').find('#4chapter').html("IV");
    //         $('.menu:not(.menu-collapsed)').find('#5chapter').html("V");
    //         $('.menu:not(.menu-collapsed)').find('#6chapter').html("VI");
    //         $('.menu:not(.menu-collapsed)').find('#7chapter').html("VII");
    //         $('.menu:not(.menu-collapsed)').find('#8chapter').html("VIII");

});

// });
$(document).ready(function () {
    $(".section-content ").scroll(function () {
        if ($('#chapter1').visible(true)) {
            $('.menu').find('#1chapter').css('background', 'var(--highlite-color)');
            $('.menu').find('#1chapter').css('color', 'var(--main-color)');
            $('.menu').find('#1chapter').html("ABSTRACT");
            $('.menu').find('#2chapter').html("INTRODUCTION");
            $('.menu').find('#3chapter').html("EVERYTHING BUT THE KITCHEN SINK");
            $('.menu').find('#4chapter').html("BIAS AS A BUG");
            $('.menu').find('#5chapter').html("BIAS AS A FEATURE");
            $('.menu').find('#6chapter').html("BIAS AS ARTEFACTS");
            $('.menu').find('#7chapter').html("CONCLUSION");
            $('.menu').find('#8chapter').html("BIBLIOGRAPHY");

        } else {
            $('.menu').find('#1chapter').css('background', 'none');
            $('.menu').find('#1chapter').css('color', 'var(--highlite-color)');
            $('.menu').find('#1chapter').html("I");
            $('.menu').find('#2chapter').html("II");
            $('.menu').find('#3chapter').html("III");
            $('.menu').find('#4chapter').html("IV");
            $('.menu').find('#5chapter').html("V");
            $('.menu').find('#6chapter').html("VI");
            $('.menu').find('#7chapter').html("VII");
            $('.menu').find('#8chapter').html("VIII");

        }
        if ($('#chapter2').visible(true)) {
            $('.menu').find('#2chapter').css('background', 'var(--highlite-color)');
            $('.menu').find('#2chapter').css('color', 'var(--main-color)');
            $('.menu').find('#2chapter').html("INTRODUCTION");
            // $('.menu:not(.menu-collapsed)').find('#2chapter').html("INTRODUCTION");


        } else {
            $('.menu').find('#2chapter').css('background', 'none');
            $('.menu').find('#2chapter').css('color', 'var(--highlite-color)');
            $('.menu').find('#2chapter').html("II");
            // $('.menu:not(.menu-collapsed)').find('#2chapter').html("INTRODUCTION");

        }
        if ($('#chapter3').visible(true)) {
            $('.menu').find('#3chapter').css('background', 'var(--highlite-color)');
            $('.menu').find('#3chapter').css('color', 'var(--main-color)');
            $('.menu').find('#3chapter').html("EVERYTHING BUT THE KITCHEN SINK");
            // $('.menu:not(.menu-collapsed)').find('#3chapter').html("EVERYTHING BUT THE KITCHEN SINK");


        } else {
            $('.menu').find('#3chapter').css('background', 'none');
            $('.menu').find('#3chapter').css('color', 'var(--highlite-color)');
            $('.menu').find('#3chapter').html("III");
            // $('.menu:not(.menu-collapsed)').find('#3chapter').html("EVERYTHING BUT THE KITCHEN SINK");

        }
        if ($('#chapter4').visible(true)) {
            $('.menu').find('#4chapter').css('background', 'var(--highlite-color)');
            $('.menu').find('#4chapter').css('color', 'var(--main-color)');
            $('.menu').find('#4chapter').html("BIAS AS A BUG");
            // $('.menu:not(.menu-collapsed)').find('#4chapter').html("BIAS AS A BUG");


        } else {
            $('.menu').find('#4chapter').css('background', 'none');
            $('.menu').find('#4chapter').css('color', 'var(--highlite-color)');
            $('.menu').find('#4chapter').html("IV");
            // $('.menu:not(.menu-collapsed)').find('#4chapter').html("BIAS AS A BUG");

        }
        if ($('#chapter5').visible(true)) {
            $('.menu').find('#5chapter').css('background', 'var(--highlite-color)');
            $('.menu').find('#5chapter').css('color', 'var(--main-color)');
            $('.menu').find('#5chapter').html("BIAS AS A FEATURE");
            // $('.menu:not(.menu-collapsed)').find('#5chapter').html("BIAS AS A FEATURE");


        } else {
            $('.menu').find('#5chapter').css('background', 'none');
            $('.menu').find('#5chapter').css('color', 'var(--highlite-color)');
            $('.menu').find('#5chapter').html("V");
            // $('.menu:not(.menu-collapsed)').find('#5chapter').html("BIAS AS A FEATURE");

        }
        if ($('#chapter6').visible(true)) {
            $('.menu').find('#6chapter').css('background', 'var(--highlite-color)');
            $('.menu').find('#6chapter').css('color', 'var(--main-color)');
            $('.menu').find('#6chapter').html("BIAS AS ARTEFACTS");
            // $('.menu:not(.menu-collapsed)').find('#6chapter').html("BIAS AS ARTEFACTS");


        } else {
            $('.menu').find('#6chapter').css('background', 'none');
            $('.menu').find('#6chapter').css('color', 'var(--highlite-color)');
            $('.menu').find('#6chapter').html("VI");
            // $('.menu:not(.menu-collapsed)').find('#6chapter').html("BIAS AS ARTEFACTS");

        }
        if ($('#chapter7').visible(true)) {
            $('.menu').find('#7chapter').css('background', 'var(--highlite-color)');
            $('.menu').find('#7chapter').css('color', 'var(--main-color)');
            $('.menu').find('#7chapter').html("CONCLUSION");
            // $('.menu:not(.menu-collapsed)').find('#7chapter').html("CONCLUSION");


        } else {
            $('.menu').find('#7chapter').css('background', 'none');
            $('.menu').find('#7chapter').css('color', 'var(--highlite-color)');
            $('.menu').find('#7chapter').html("VII");
            // $('.menu:not(.menu-collapsed)').find('#7chapter').html("CONCLUSION");

        }
        if ($('#chapter8').visible(true)) {
            $('.menu').find('#8chapter').css('background', 'var(--highlite-color)');
            $('.menu').find('#8chapter').css('color', 'var(--main-color)');
            $('.menu').find('#8chapter').html("BIBLIOGRAPHY");
            // $('.menu:not(.menu-collapsed)').find('#8chapter').html("BIBLIOGRAPHY");


        } else {
            $('.menu').find('#8chapter').css('background', 'none');
            $('.menu').find('#8chapter').css('color', 'var(--highlite-color)');
            $('.menu').find('#8chapter').html("VII");
            // $('.menu:not(.menu-collapsed)').find('#8chapter').html("BIBLIOGRAPHY");

        }

    });

});

// notes clicked, change colors
$(document).ready(function () {
    $(".quote-note").click(function () {
        if ($(this).find(".quote-inside").is(":visible")) {
            console.log("here")
            $("#texts").css("background", "var(--highlite-color)");
            $(".quote-note>em").css("color", "var(--main-color)");
            $("span").css("color", "var(--main-color)");
            $(".quote-inside>a").css("color", "var(--main-color)");
            $(".quote-inside>em").css("color", "var(--main-color)");
            $(".innerFootnotesNumber>a").css("color", "var(--main-color)");
            $(".footnotesText>a").css("color", "var(--main-color)");
            $("figcaption").css("color", "var(--main-color)");
            $("figcaption>a").css("color", "var(--main-color)");
            $(".img2").css("border", "1px solid var(--main-color)");
            $("#texts").css("background", "var(--highlite-color)");
            $("#texts>.section-heading").css("background", "var(--main-color)");
            $("#about").css("background", "var(--main-color)");
            $(".footnotesNumber").css("color", "var(--main-color)");
        } else {
            $("#texts").css("background", "var(--main-color)");
            $(".quote-note>em").css("color", "var(--highlite-color)");
            $("span").css("color", "var(--highlite-color)");
            $(".quote-inside>a").css("color", "var(--highlite-color)");
            $(".quote-inside>em").css("color", "var(--highlite-color)");
            $(".innerFootnotesNumber>a").css("color", "var(--main-color)");
            $(".footnotesText>a").css("color", "var(--highlite-color)");
            $("figcaption").css("color", "var(--highlite-color)");
            $("figcaption>a").css("color", "var(--highlite-color)");
            $(".img2").css("border", "none");

            $("#texts>.section-heading").css("background", "var(--main-color)");
            $("#about").css("background", "var(--highlite-color)");

            $(".footnotesNumber").css("color", "var(--higlite-color)");
        }
    });

    $(".footnotesNumber").click(function () {
        if ($(this).find(".footnotesText").is(":visible")) {
            $("#texts").css("background", "var(--highlite-color)");
            $(".quote-note>em").css("color", "var(--main-color)");
            $("span").css("color", "var(--main-color)");
            $(".quote-inside>a").css("color", "var(--main-color)");
            $(".quote-inside>em").css("color", "var(--main-color)");
            $(".innerFootnotesNumber>a").css("color", "var(--main-color)");
            $(".footnotesText>a").css("color", "var(--main-color)");
            $("figcaption").css("color", "var(--main-color)");
            $("figcaption>a").css("color", "var(--main-color)");
            $(".img2").css("border", "1px solid var(--main-color)");
            $("#texts>.section-heading").css("background", "var(--main-color)");
            $("#about").css("background", "var(--main-color)");

            $(".footnotesNumber").css("color", "var(--main-color)");

        } else {
            $("#texts").css("background", "var(--main-color)");
            $(".quote-note>em").css("color", "var(--highlite-color)");
            $("span").css("color", "var(--highlite-color)");
            $(".quote-inside>a").css("color", "var(--highlite-color)");
            $(".quote-inside>em").css("color", "var(--highlite-color)");
            $(".innerFootnotesNumber>a").css("color", "var(--main-color)");
            $(".footnotesText>a").css("color", "var(--highlite-color)");
            $("figcaption").css("color", "var(--highlite-color)");
            $("figcaption>a").css("color", "var(--highlite-color)");
            $("#about").css("background", "var(--highlite-color)");
            $(".img2").css("border", "none");
            $(".footnotesNumber").css("color", "var(--higlite-color)");
        }
    });

    $("body").bind("mousewheel", function () {
        $("#texts").css("background", "var(--main-color)");
        $(".quote-note>em").css("color", "var(--highlite-color)");
        $("span").css("color", "var(--highlite-color)");
        $(".quote-inside>a").css("color", "var(--highlite-color)");
        $(".quote-inside>em").css("color", "var(--highlite-color)");
        $(".innerFootnotesNumber>a").css("color", "var(--main-color)");
        $(".footnotesText>a").css("color", "var(--highlite-color)");
        $("figcaption").css("color", "var(--highlite-color)");
        $("figcaption>a").css("color", "var(--highlite-color)");
        $(".img2").css("border", "none");
        $("#texts>.section-heading").css("background", "var(--main-color)");
        $("#about").css("background", "var(--highlite-color)");
        $(".footnotesNumber").css("color", "var(--highlite-color)");
    });


});


// var earth;
// var marker;

// // initialize map
// function initialize() {
//     earth = new WE.map('earthMap');
//     earth.setView([46.8011, 8.2266], 1);
//     WE.tileLayer('https://api.mapbox.com/styles/v1/sinanatra/cjserw8062fm51gqi09wbpx5c/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2luYW5hdHJhIiwiYSI6ImNpcTloaTlocjAwNWFodm0yODJjODF5MXYifQ.urgyj3bpfbG3dX4uTOOZtQ', {
//         attribution: '© OpenStreetMap contributors'
//     }).addTo(earth);

//     marker = WE.marker([46, 11], "../assets/images/mark.png", 15, 15).addTo(earth);
//     // function that adds all the markers from a tsv file
// }

// //Action when element is scrolled into view
// $(window).scroll(function () {
//     // i know - its a jquery plugin, but life is too short to write proper code

//     if ($('#foo').visible(true)) {
//         // marker.removeFrom(earth)
//         // marker = WE.marker([46, 11], "../assets/images/mark.png", 15, 15).addTo(earth);
//         earth.setView([46, 11], 3);

//         // start an onclick action - of course it doesnt work
//         //marker.element.onclick = console.log("i aint clicking!")

//         // neee
//         //dataset("tv")

//     } else {
//         // marker.removeFrom(earth)
//         // marker = WE.marker([38, 77], "../assets/images/mark.png", 15, 15).addTo(earth);
//         earth.setView([38, 77], 3);

//     }
// });

// function dataset(file) {
//     d3.tsv("data/" + file + ".tsv", function (data) {
//         marker.removeFrom(earth)
//         data.filter(function (d) {
//             marker = WE.marker([d.latitude, d.longitude], "./assets/img/mark.png", 15, 15).addTo(earth);
//             //console.log(marker)
//             // popupContent = '<img  class="datasetImg" src="' + d.original + '" >' + d.desc1 + ' </img>';
//             // marker.bindPopup(popupContent);

//         });
//     });
// }
