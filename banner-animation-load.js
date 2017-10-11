//jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        var myslider = null;

        jQuery(window).load(function() {
            var flexy = null;
            var newsize = calculateResize();
            flexy = jQuery('.flexslider').flexslider({
                animation: "slide",
                animationLoop: true,
                itemWidth: newsize.width,
                itemHeight: newsize.height,
                itemMargin: 0,
                pausePlay: false,
                controlNav: true,
                prevText: "",
                nextText: "",
                useCSS: false,
                touch: true,
                before: function(slider) {
                    myslider = slider;
                    jQuery('body').removeClass('loading');
                },
                start: function(slider) {},
            });

            jQuery(".flexslider ul.slides > li").css("height", newsize.height);

            var readMoreMsgLink = document.getElementById('readMoreBannerMsgLink');
            var closeReadMoreMsgLink = document.getElementById('closeBannerMsgLink');


            if (readMoreMsgLink !== null && readMoreMsgLink) {

                readMoreMsgLink.onclick = openReadMoreBannerMessage;
                closeReadMoreMsgLink.onclick = closeReadMoreBannerMessage;

                function openReadMoreBannerMessage() {
                    $("#readMoreBannerMsgLink").hide();
                    $("#closeBannerMsgLink").show();
                    $("#banner-info-content").show();
                    return false;
                }

                function closeReadMoreBannerMessage() {
                    $("#readMoreBannerMsgLink").show();
                    $("#closeBannerMsgLink").hide();
                    $("#banner-info-content").hide();
                    return false;
                }
            }
        });
        // creates animations objects and sets to canvas.
        jQuery(function() {
            //createBannerAnnimations();
        });

        //async download banner image3
        var $imgBanner3 = $("#imgBanner3");
        var $banner3ImageDownload = $("<img>");
        $banner3ImageDownload.load(function() {
            $imgBanner3.attr("src", $(this).attr("src"));
        });
        $banner3ImageDownload.attr("src", "https://www.grmdocumentmanagement.com/wp-content/uploads/2017/02/BANNER3_resized.jpg");

        //async download banner image4
        var $imgBanner4 = $("#imgBanner4");
        var $banner4ImageDownload = $("<img>");
        $banner4ImageDownload.load(function() {
            $imgBanner4.attr("src", $(this).attr("src"));
        });
        $banner4ImageDownload.attr("src", "https://www.grmdocumentmanagement.com/wp-content/uploads/2017/02/BANNER4_resized.jpg");

        //async download banner image5
        var $imgBanner5 = $("#imgBanner5");
        var $banner5ImageDownload = $("<img>");
        $banner5ImageDownload.load(function() {
            $imgBanner5.attr("src", $(this).attr("src"));
        });
        $banner5ImageDownload.attr("src", "https://www.grmdocumentmanagement.com/wp-content/uploads/2017/02/BANNER5_resized.jpg");

        //async download banner image6
        var $imgBanner6 = $("#imgBanner6");
        var $banner6ImageDownload = $("<img>");
        $banner6ImageDownload.load(function() {
            $imgBanner6.attr("src", $(this).attr("src"));
        });
        $banner6ImageDownload.attr("src", "https://www.grmdocumentmanagement.com/wp-content/uploads/2017/02/BANNER6_resized.jpg");

        //async download banner image7
        var $imgBanner7 = $("#imgBanner7");
        var $banner7ImageDownload = $("<img>");
        $banner7ImageDownload.load(function() {
            $imgBanner7.attr("src", $(this).attr("src"));
        });
        $banner7ImageDownload.attr("src", "https://www.grmdocumentmanagement.com/wp-content/uploads/2017/02/BANNER7_resized.jpg");


        // check grid size on resize event
        jQuery(window).resize(function() {
            var sliderWidth = jQuery("#homepage-slider-2016").width();
            var sliderHeight = jQuery("#homepage-slider-2016").height();
            if (myslider) {
                myslider.vars.itemWidth = sliderWidth;
                myslider.vars.itemHeight = sliderHeight;
                jQuery(".flexslider ul.slides > li").css("height", sliderHeight);
                myslider.setup();
            }
            //createBannerAnnimations();
        });
        // Function that sets the animation of the canvas item 
        // with color and opacity options.
        // function createBannerAnnimations() {
        //     addRadialAnime("HomePageBannerCanvas", "255, 255, 255, .5");
        // }

        // Radial Animation
        // function addRadialAnime(canvasId, rgba) {
        //     var newsize = calculateResize();
        //     $(".GraphicCanvas").attr("width", newsize.width);
        //     var rgbaColor = rgba;
        //     createAnimationGraphics(libw = libw || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, rgbaColor);
        //     var slide1 = createSlideAnimation;
        //     slide1(canvasId);
        // }
        // HexAnimation
        // function addHexAnimeToDocManagement(canvasId, rgba) {
        //     var newsize = calculateResize();
        //     $(".GraphicCanvas").attr("width", newsize.width);
        //     var rgbaColor = rgba;
        //     createHexAnimation(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, rgbaColor);
        //     var slide1 = createHexSlideAnimation;
        //     slide1(canvasId);
        // };
        // MeicalAnimation (circles and arrows)
        // function addMedicalAnime(canvasId, rgba) {
        //     var newsize = calculateResize();
        //     $(".GraphicCanvas").attr("width", newsize.width);
        //     var rgbaColor = rgba;
        //     createMedicalAnimation(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, rgbaColor);
        //     var slide1 = createMedicalSlideAnimation;
        //     slide1(canvasId);
        // };

        // store the slider in a local variable
        var $window = $(window),
            flexslider = { vars: {} };

        function getItemWidth() {
            return jQuery("#homepage-slider-2016").width();
        }

        function getItemHeight() {
            return jQuery("#homepage-slider-2016").height();
        }




        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

        function init() {
            //EP add vaiables to change color and size.
            var newsize = calculateResize();
            $("#canvas, #animation_container").attr("width", newsize.width);
            $("#canvas, #animation_container").attr("width", newsize.height);
            var rgbaColor = "255, 255, 255, .5";



            canvas = document.getElementById("canvas");
            anim_container = document.getElementById("animation_container");
            dom_overlay_container = document.getElementById("dom_overlay_container");
            var comp = AdobeAn.getComposition("82139CFF3191064A81B781B549AED9EF");
            var lib = comp.getLibrary();
            handleComplete({}, comp);
        }

        function handleComplete(evt, comp) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib = comp.getLibrary();
            var ss = comp.getSpriteSheet();
            exportRoot = new lib.technics();
            stage = new lib.Stage(canvas);
            stage.addChild(exportRoot);
            //Registers the "tick" event listener.
            fnStartAnimation = function() {
                    createjs.Ticker.setFPS(lib.properties.fps);
                    createjs.Ticker.addEventListener("tick", stage);
                }
                //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS = 1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();

                function resizeCanvas() {
                    var w = lib.properties.width,
                        h = lib.properties.height;
                    var iw = window.innerWidth,
                        ih = window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1,
                        xRatio = iw / w,
                        yRatio = ih / h,
                        sRatio = 1;
                    if (isResp) {
                        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                            sRatio = lastS;
                        } else if (!isScale) {
                            if (iw < w || ih < h)
                                sRatio = Math.min(xRatio, yRatio);
                        } else if (scaleType == 1) {
                            sRatio = Math.min(xRatio, yRatio);
                        } else if (scaleType == 2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w * pRatio * sRatio;
                    canvas.height = h * pRatio * sRatio;
                    //canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                    //canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                    stage.scaleX = pRatio * sRatio;
                    stage.scaleY = pRatio * sRatio;
                    lastW = iw;
                    lastH = ih;
                    lastS = sRatio;

                    var bannerWidth = $("#homepage-slider-2016").outerWidth();
                    // var bannerHeight = $("#homepage-slider-2016").outerHeight();
                    canvas.width = bannerWidth;
                    anim_container.width = bannerWidth;
                    dom_overlay_container = bannerWidth;
                    // canvas.height = bannerHeight;
                    canvas.style.width = bannerWidth + 'px';
                    anim_container.style.width = bannerWidth + 'px';
                    dom_overlay_container = bannerWidth + 'px';
                    // canvas.style.height = bannerHeight+'px';


                }
            }
            makeResponsive(false, 'both', false, 1);
            AdobeAn.compositionLoaded(lib.properties.id);
            fnStartAnimation();
        }

        if (document.getElementById("flexslider1")) {
            init();
        }

        function calculateResize() {

            // Original height and width used to calculate ratio:
            var oWidth = 1280;
            var oHeight = 448;
            var height = 0;

            // Use screen width to set up width for fullscreen bleed
            var width = $(window).width();

            // find difference ratio
            var ratio = (width / oWidth);

            // used the difference ration to calculate height.
            var newheight = (ratio * oHeight);
            height = Math.ceil(newheight);

            return { height: height, width: width };
            //return { rWidth, rHeight };

        };

        $(window).resize(function() {
            var sliderWidth = $("#homepage-slider-2016").width();
            var sliderHeight = $("#homepage-slider-2016").height();
            // if (myslider) {
            //     myslider.vars.itemWidth = sliderWidth;
            //     myslider.vars.itemHeight = sliderHeight;
            //     $(".flexslider ul.slides > li").css("height", sliderHeight);
            //     myslider.setup();
            // }
            init();
        });
    });




}(jQuery));