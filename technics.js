(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [];

    var gColor = "rgba(255, 255, 255, .5)";

    lib.updateListCache = function(cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas)
                cacheList[i].updateCache();
        }
    };

    lib.addElementsToCache = function(textInst, cacheList) {
        var cur = textInst;
        while (cur != null && cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1)
                break;
            cur = cur.parent;
        }
        if (cur != exportRoot) {
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != null && cur2 != cur) {
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++;
            }
        } else {
            cur = textInst;
            while (cur != null && cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent;
            }
        }
    };

    lib.gfontAvailable = function(family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList);
        }
    };

    lib.tfontAvailable = function(family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList);
        }
    };
    // symbols:
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.Tween7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AhRAzIBZhZIhIAAIAsgrIBmAAIAABmIgsAsIAAhHIhZBZg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.2, -8.2, 16.5, 16.5);


    (lib.Tween6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AhRAzIBZhZIhIAAIAsgrIBmAAIAABmIgsAsIAAhHIhZBZg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.2, -8.2, 16.5, 16.5);


    (lib.sageatajos = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgyAgIA2g3IgrAAIAbgbIA/AAIAAA/IgbAbIAAgsIg3A3g");
        this.shape.setTransform(5.1, 5.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.sageatajos, new cjs.Rectangle(0, 0, 10.2, 10.2), null);


    (lib.sageata2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AhFArIBLhLIg8AAIAlglIBXAAIAABXIglAlIAAg8IhMBLg");
        this.shape.setTransform(7, 7);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.sageata2, new cjs.Rectangle(0, 0, 14, 14), null);


    (lib.mediumcross = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgGArIAAgkIglAAIAAgNIAlAAIAAgkIAMAAIAAAkIAmAAIAAANIgmAAIAAAkg");
        this.shape.setTransform(4.4, 4.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.mediumcross, new cjs.Rectangle(0, 0, 8.8, 8.6), null);


    (lib.cross1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgQBnIAAhWIhaAAIAAghIBaAAIAAhXIAgAAIAABXIBaAAIAAAhIhaAAIAABWg");
        this.shape.setTransform(10.7, 10.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cross1, new cjs.Rectangle(0, 0, 21.3, 20.7), null);


    (lib.cross = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgGArIAAgkIglAAIAAgNIAlAAIAAgkIANAAIAAAkIAlAAIAAANIglAAIAAAkg");
        this.shape.setTransform(4.4, 4.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cross, new cjs.Rectangle(0, 0, 8.9, 8.6), null);


    (lib.crosstanga = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgGArIAAgkIglAAIAAgNIAlAAIAAgkIANAAIAAAkIAlAAIAAANIglAAIAAAkg");
        this.shape.setTransform(4.4, 4.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.crosstanga, new cjs.Rectangle(0, 0, 8.8, 8.6), null);


    (lib.cercjos = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AhUBVQgjgjAAgyQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjgAhChCQgcAcAAAmQAAAnAcAbQAcAcAmAAQAnAAAcgcQAbgbAAgnQAAgmgbgcQgcgcgnAAQgmAAgcAcg");
        this.shape.setTransform(12, 12);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cercjos, new cjs.Rectangle(0, 0, 24.1, 24.1), null);


    (lib.bigwheel = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AkNACIIbgNIAAAJIobAOg");
        this.shape.setTransform(747.7, 377.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f(gColor).s().p("AjoCJIHMkZIAFAIInMEZg");
        this.shape_1.setTransform(694.7, 199);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f(gColor).s().p("AACEOIgNobIAKAAIANIbg");
        this.shape_2.setTransform(396.9, 747.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f(gColor).s().p("AiQjjIAIgFIEZHMIgIAFg");
        this.shape_3.setTransform(575.8, 694.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f(gColor).s().p("Ajvh8IAFgIIHaEBIgEAIg");
        this.shape_4.setTransform(704.2, 559.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f(gColor).s().p("AiEDrIEBnaIAIAFIkBHag");
        this.shape_5.setTransform(215.5, 704);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f(gColor).s().p("AkEBIIIGiYIACAJIoFCYg");
        this.shape_6.setTransform(733, 285);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f(gColor).s().p("Ai8DAIFymGIAHAGIlyGHg");
        this.shape_7.setTransform(139.4, 648.8);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f(gColor).s().p("AhQkAIAJgEICZIGIgKACg");
        this.shape_8.setTransform(489.8, 732.9);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f(gColor).s().p("AjGi2IAHgGIGGFzIgGAHg");
        this.shape_9.setTransform(648.9, 635.4);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f(gColor).s().p("AkHg6IADgJIIMB9IgCAKg");
        this.shape_10.setTransform(737.9, 471.5);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f(gColor).s().p("AhDEGIB9oNIAKADIh9IMg");
        this.shape_11.setTransform(303.3, 737.8);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f(gColor).s().p("AkNAKIIbgcIAAAKIobAbg");
        this.shape_12.setTransform(747.3, 368.5);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f(gColor).s().p("AjkCPIHEklIAFAIInEElg");
        this.shape_13.setTransform(689.7, 191);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f(gColor).s().p("AgSkNIAJAAIAcIbIgKAAg");
        this.shape_14.setTransform(406.3, 747.2);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f(gColor).s().p("AiWjfIAIgFIElHEIgIAFg");
        this.shape_15.setTransform(583.7, 689.6);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f(gColor).s().p("Ajyh2IAFgIIHgD0IgEAJg");
        this.shape_16.setTransform(708.6, 551);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f(gColor).s().p("Ah+DvID0nhIAJAEIj0Hhg");
        this.shape_17.setTransform(223.9, 708.4);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f(gColor).s().p("AkCBPIIBimIAEAJIoBCmg");
        this.shape_18.setTransform(730.2, 276);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f(gColor).s().p("Ai3DGIFomRIAIAGIlpGRg");
        this.shape_19.setTransform(146.3, 655.2);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f(gColor).s().p("AhXj+IAJgDICmIBIgJADg");
        this.shape_20.setTransform(498.8, 730.1);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f(gColor).s().p("AjLiwIAGgHIGRFoIgHAIg");
        this.shape_21.setTransform(655.3, 628.5);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f(gColor).s().p("AkIgzIABgJIIRBvIgCAKg");
        this.shape_22.setTransform(740, 462.3);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f(gColor).s().p("Ag8EHIBwoPIAJACIhwIPg");
        this.shape_23.setTransform(312.5, 739.8);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f(gColor).s().p("AkNARIIagqIABAJIoaAqg");
        this.shape_24.setTransform(746.7, 359.1);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f(gColor).s().p("AjgCVIG8kxIAGAIIm9Exg");
        this.shape_25.setTransform(684.5, 183.2);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f(gColor).s().p("AgZkMIAKgBIApIaIgKABg");
        this.shape_26.setTransform(415.7, 746.6);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f(gColor).s().p("AicjbIAIgFIExG8IgIAFg");
        this.shape_27.setTransform(591.6, 684.3);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f(gColor).s().p("Aj1hvIAFgJIHmDoIgEAJg");
        this.shape_28.setTransform(712.7, 542.5);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f(gColor).s().p("Ah4DyIDonnIAJAEIjoHng");
        this.shape_29.setTransform(232.3, 712.6);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f(gColor).s().p("Aj/BWIH8i0IAEAJIn9C0g");
        this.shape_30.setTransform(727.2, 267);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f(gColor).s().p("AiyDKIFemaIAHAGIleGbg");
        this.shape_31.setTransform(153.4, 661.4);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f(gColor).s().p("Ahej8IAKgEICzH9IgJADg");
        this.shape_32.setTransform(507.7, 727.1);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f(gColor).s().p("AjQirIAHgHIGaFeIgHAHg");
        this.shape_33.setTransform(661.5, 621.4);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f(gColor).s().p("AkKgsIACgJIISBiIgBAJg");
        this.shape_34.setTransform(741.8, 453);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f(gColor).s().p("Ag1EJIBioTIAJACIhhITg");
        this.shape_35.setTransform(321.8, 741.7);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f(gColor).s().p("AkMAXIIYg3IABAKIoYA3g");
        this.shape_36.setTransform(745.9, 349.7);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f(gColor).s().p("AjdCbIG1k9IAGAIIm1E9g");
        this.shape_37.setTransform(679, 175.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f(gColor).s().p("AggkLIAJgBIA4IYIgJABg");
        this.shape_38.setTransform(425.1, 745.7);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f(gColor).s().p("AiijXIAIgGIE9G1IgIAGg");
        this.shape_39.setTransform(599.3, 678.9);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f(gColor).s().p("Aj4hpIAEgJIHtDcIgEAJg");
        this.shape_40.setTransform(716.7, 533.9);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f(gColor).s().p("AhxD1IDantIAJAEIjbHtg");
        this.shape_41.setTransform(240.9, 716.6);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f(gColor).s().p("Aj9BcIH4jAIADAJIn4DAg");
        this.shape_42.setTransform(723.9, 258.2);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f(gColor).s().p("AitDPIFTmjIAIAGIlUGjg");
        this.shape_43.setTransform(160.7, 667.4);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f(gColor).s().p("Ahlj6IAJgDIDCH4IgJADg");
        this.shape_44.setTransform(516.6, 723.8);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f(gColor).s().p("AjUilIAGgIIGjFTIgGAIg");
        this.shape_45.setTransform(667.5, 614.1);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f(gColor).s().p("AkLglIACgJIIVBUIgCAJg");
        this.shape_46.setTransform(743.4, 443.7);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f(gColor).s().p("AguEKIBToVIAKACIhTIVg");
        this.shape_47.setTransform(331.1, 743.3);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f(gColor).s().p("AkLAfIIWhGIABAKIoWBFg");
        this.shape_48.setTransform(744.8, 340.3);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f(gColor).s().p("AjZChIGtlIIAFAHImrFIg");
        this.shape_49.setTransform(673.4, 167.9);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f(gColor).s().p("AgnkKIAKgCIBFIXIgJACg");
        this.shape_50.setTransform(434.5, 744.6);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f(gColor).s().p("AinjSIAHgGIFIGsIgIAFg");
        this.shape_51.setTransform(606.9, 673.2);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f(gColor).s().p("Aj7hiIAEgJIHyDOIgDAJg");
        this.shape_52.setTransform(720.4, 525.3);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f(gColor).s().p("AhrD4IDOnzIAJAEIjOHzg");
        this.shape_53.setTransform(249.5, 720.3);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f(gColor).s().p("Aj7BjIHzjOIADAJInyDOg");
        this.shape_54.setTransform(720.4, 249.4);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f(gColor).s().p("AioDUIFJmtIAIAHIlJGrg");
        this.shape_55.setTransform(168.1, 673.3);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f(gColor).s().p("Ahrj3IAJgEIDOHzIgJAEg");
        this.shape_56.setTransform(525.4, 720.3);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f(gColor).s().p("AjZifIAHgJIGrFJIgFAHg");
        this.shape_57.setTransform(673.4, 606.7);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f(gColor).s().p("AkLgeIABgJIIWBFIgBAKg");
        this.shape_58.setTransform(744.8, 434.4);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f(gColor).s().p("AgnELIBFoXIAKACIhGIXg");
        this.shape_59.setTransform(340.4, 744.6);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f(gColor).s().p("AkLAmIIVhUIACAKIoVBTg");
        this.shape_60.setTransform(743.4, 331);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f(gColor).s().p("AjUCmIGjlTIAGAIImjFTg");
        this.shape_61.setTransform(667.5, 160.5);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f(gColor).s().p("AgukJIAJgCIBUIVIgKACg");
        this.shape_62.setTransform(443.8, 743.3);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f(gColor).s().p("AitjOIAHgGIFUGjIgIAGg");
        this.shape_63.setTransform(614.3, 667.4);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f(gColor).s().p("Aj9hbIADgJIH4DAIgDAJg");
        this.shape_64.setTransform(723.9, 516.5);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f(gColor).s().p("AhlD7IDCn4IAJADIjCH4g");
        this.shape_65.setTransform(258.3, 723.8);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f(gColor).s().p("Aj4BpIHtjaIAEAJIntDag");
        this.shape_66.setTransform(716.7, 240.8);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f(gColor).s().p("AiiDYIE9m1IAIAGIk9G1g");
        this.shape_67.setTransform(175.6, 678.9);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f(gColor).s().p("Ahxj0IAIgEIDbHtIgJAEg");
        this.shape_68.setTransform(534, 716.6);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f(gColor).s().p("AjdiaIAGgIIG1E9IgGAIg");
        this.shape_69.setTransform(679, 599.2);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f(gColor).s().p("AkMgXIABgJIIZA3IgBAKg");
        this.shape_70.setTransform(745.9, 425);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f(gColor).s().p("AggEMIA3oYIAKABIg3IYg");
        this.shape_71.setTransform(349.8, 745.7);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f(gColor).s().p("AkKAsIIThhIABAKIoSBhg");
        this.shape_72.setTransform(741.8, 321.7);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f(gColor).s().p("AjQCsIGaleIAHAHImaFeg");
        this.shape_73.setTransform(661.5, 153.3);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f(gColor).s().p("Ag1kIIAJgCIBiITIgJACg");
        this.shape_74.setTransform(453.1, 741.7);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f(gColor).s().p("AiyjKIAHgGIFeGaIgHAHg");
        this.shape_75.setTransform(621.5, 661.4);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f(gColor).s().p("Aj/hVIADgJIH9C0IgEAJg");
        this.shape_76.setTransform(727.2, 507.6);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f(gColor).s().p("AheD9IC0n9IAJAEIizH8g");
        this.shape_77.setTransform(267.1, 727.1);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f(gColor).s().p("Aj1BwIHnjoIAEAJInmDog");
        this.shape_78.setTransform(712.7, 232.2);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f(gColor).s().p("AicDcIExm9IAIAGIkxG9g");
        this.shape_79.setTransform(183.3, 684.4);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f(gColor).s().p("Ah4jxIAJgEIDoHnIgJAEg");
        this.shape_80.setTransform(542.6, 712.6);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f(gColor).s().p("AjgiUIAFgIIG9ExIgGAIg");
        this.shape_81.setTransform(684.5, 591.5);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f(gColor).s().p("AkNgPIABgKIIaApIgBAKg");
        this.shape_82.setTransform(746.7, 415.6);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f(gColor).s().p("AgZENIApoaIAKABIgpIag");
        this.shape_83.setTransform(359.2, 746.6);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f(gColor).s().p("AkIAzIIQhvIACAJIoRBwg");
        this.shape_84.setTransform(740, 312.4);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f(gColor).s().p("AjLCxIGQloIAHAHImRFog");
        this.shape_85.setTransform(655.3, 146.2);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f(gColor).s().p("Ag8kGIAKgCIBvIPIgKACg");
        this.shape_86.setTransform(462.4, 739.8);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f(gColor).s().p("Ai3jFIAGgGIFqGRIgIAGg");
        this.shape_87.setTransform(628.6, 655.2);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f(gColor).s().p("AkChOIAEgJIIBCmIgEAJg");
        this.shape_88.setTransform(730.2, 498.7);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f(gColor).s().p("AhXEAICmoBIAJADIimIBg");
        this.shape_89.setTransform(276.1, 730.1);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f(gColor).s().p("AjyB2IHhj0IAEAIIngD1g");
        this.shape_90.setTransform(708.6, 223.7);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f(gColor).s().p("AiWDgIElnEIAIAFIklHEg");
        this.shape_91.setTransform(191.2, 689.6);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f(gColor).s().p("Ah+juIAIgEID1HhIgIAEg");
        this.shape_92.setTransform(551.1, 708.5);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f(gColor).s().p("AjkiOIAFgJIHEEmIgFAJg");
        this.shape_93.setTransform(689.7, 583.6);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f(gColor).s().p("AkNgIIAAgKIIbAbIAAAKg");
        this.shape_94.setTransform(747.3, 406.2);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f(gColor).s().p("AgSEOIAbobIAKAAIgbIbg");
        this.shape_95.setTransform(368.6, 747.2);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f(gColor).s().p("AkHA7IINh+IACAKIoNB9g");
        this.shape_96.setTransform(737.9, 303.2);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f(gColor).s().p("AjGC2IGHlyIAGAHImGFzg");
        this.shape_97.setTransform(648.9, 139.3);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f(gColor).s().p("AhDkEIAKgDIB9INIgKACg");
        this.shape_98.setTransform(471.6, 737.8);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f(gColor).s().p("Ai8jAIAGgGIF0GGIgHAHg");
        this.shape_99.setTransform(635.5, 648.8);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f(gColor).s().p("AkEhHIADgJIIFCYIgCAJg");
        this.shape_100.setTransform(733, 489.7);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f(gColor).s().p("AhRECICZoGIAJAEIiYIEg");
        this.shape_101.setTransform(285.1, 732.9);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f(gColor).s().p("AjvB9IHbkBIAEAIInaEBg");
        this.shape_102.setTransform(704.2, 215.4);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f(gColor).s().p("AiRDkIEanMIAJAFIkaHMg");
        this.shape_103.setTransform(199.2, 694.6);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f(gColor).s().p("AiEjqIAIgFIEBHaIgIAFg");
        this.shape_104.setTransform(559.4, 704);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f(gColor).s().p("AjoiIIAFgIIHMEZIgFAIg");
        this.shape_105.setTransform(694.7, 575.6);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f(gColor).s().p("AkOgBIABgKIIbANIAAAKg");
        this.shape_106.setTransform(747.7, 396.8);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f(gColor).s().p("AgLEOIAOobIAJAAIgNIbg");
        this.shape_107.setTransform(378, 747.6);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f(gColor).s().p("AkGBBIIKiKIADAJIoKCKg");
        this.shape_108.setTransform(735.6, 294.1);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f(gColor).s().p("AjCC8IF+l+IAHAHIl+F9g");
        this.shape_109.setTransform(642.3, 132.5);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f(gColor).s().p("AjCC7IF+l9IAHAIIl+F8g");
        this.shape_110.setTransform(132.6, 642.2);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f(gColor).s().p("AhKkDIAKgCICLIJIgKACg");
        this.shape_111.setTransform(480.7, 735.4);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f(gColor).s().p("AjCi6IAHgIIF+F9IgHAHg");
        this.shape_112.setTransform(642.3, 642.2);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f(gColor).s().p("AkGhBIADgJIIKCLIgDAKg");
        this.shape_113.setTransform(735.6, 480.6);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f(gColor).s().p("AhKEEICLoJIAKACIiLIJg");
        this.shape_114.setTransform(294.2, 735.4);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f(gColor).s().p("AjsCDIHTkNIAGAIInTENg");
        this.shape_115.setTransform(699.6, 207.1);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f(gColor).s().p("AiKDoIENnUIAJAFIkOHTg");
        this.shape_116.setTransform(207.3, 699.4);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f(gColor).s().p("AiKjnIAIgFIENHUIgIAEg");
        this.shape_117.setTransform(567.6, 699.4);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f(gColor).s().p("AjsiCIAGgIIHTENIgGAIg");
        this.shape_118.setTransform(699.6, 567.5);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f(gColor).s().p("AkNAFIAAgJIIbAAIAAAJg");
        this.shape_119.setTransform(747.8, 387.3);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f(gColor).s().p("AgEEOIAAobIAJAAIAAIbg");
        this.shape_120.setTransform(387.5, 747.7);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f(gColor).s().p("AkNACIIbgNIAAAJIobAOg");
        this.shape_121.setTransform(27.2, 396.8);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f(gColor).s().p("AjoCJIHMkZIAFAIInMEag");
        this.shape_122.setTransform(80.2, 575.7);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f(gColor).s().p("AgLkNIAJgBIAOIcIgKAAg");
        this.shape_123.setTransform(378, 27.2);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f(gColor).s().p("AiQjjIAIgFIEZHMIgIAFg");
        this.shape_124.setTransform(199.1, 80.1);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f(gColor).s().p("Ajvh8IAFgIIHaEBIgFAIg");
        this.shape_125.setTransform(70.7, 215.4);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f(gColor).s().p("AiEDrIEBnaIAIAEIkBHbg");
        this.shape_126.setTransform(559.4, 70.7);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f(gColor).s().p("AkEBIIIGiYIADAJIoGCZg");
        this.shape_127.setTransform(41.9, 489.7);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f(gColor).s().p("Ai8DAIFzmGIAHAGIl0GHg");
        this.shape_128.setTransform(635.5, 126);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f(gColor).s().p("AhQkAIAJgDICZIFIgJADg");
        this.shape_129.setTransform(285.1, 41.9);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f(gColor).s().p("AjHi2IAHgHIGIF0IgIAGg");
        this.shape_130.setTransform(126, 139.3);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f(gColor).s().p("AkHg5IACgKIINB9IgCAKg");
        this.shape_131.setTransform(37, 303.2);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f(gColor).s().p("AhDEGIB+oNIAJACIh9INg");
        this.shape_132.setTransform(471.6, 37);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f(gColor).s().p("AkNAJIIbgbIAAAKIobAbg");
        this.shape_133.setTransform(27.5, 406.2);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f(gColor).s().p("AjkCPIHEklIAFAIInEElg");
        this.shape_134.setTransform(85.2, 583.6);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f(gColor).s().p("AgSkNIAKAAIAbIbIgJAAg");
        this.shape_135.setTransform(368.6, 27.5);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f(gColor).s().p("AiWjfIAIgFIElHEIgIAFg");
        this.shape_136.setTransform(191.1, 85.2);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f(gColor).s().p("Ajyh1IAFgJIHgD1IgEAIg");
        this.shape_137.setTransform(66.3, 223.8);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f(gColor).s().p("Ah+DvID0nhIAJAFIj1Hgg");
        this.shape_138.setTransform(551.1, 66.3);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f(gColor).s().p("AkCBPIICimIADAJIoCCmg");
        this.shape_139.setTransform(44.7, 498.7);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f(gColor).s().p("Ai4DGIFpmRIAIAGIlpGRg");
        this.shape_140.setTransform(628.6, 119.6);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f(gColor).s().p("AhXj/IAJgDICmIBIgJADg");
        this.shape_141.setTransform(276.1, 44.7);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f(gColor).s().p("AjLiwIAHgHIGQFpIgHAHg");
        this.shape_142.setTransform(119.6, 146.2);

        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f(gColor).s().p("AkIgyIABgKIIRBvIgCAKg");
        this.shape_143.setTransform(34.9, 312.4);

        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f(gColor).s().p("Ag8EIIBwoQIAJABIhwIRg");
        this.shape_144.setTransform(462.4, 34.9);

        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f(gColor).s().p("AkNAQIIagpIABAKIoaApg");
        this.shape_145.setTransform(28.2, 415.6);

        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f(gColor).s().p("AjhCVIG9kxIAFAIIm8Exg");
        this.shape_146.setTransform(90.4, 591.5);

        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f(gColor).s().p("AgZkMIAJgBIAqIaIgKABg");
        this.shape_147.setTransform(359.2, 28.1);

        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f(gColor).s().p("AicjbIAIgFIExG8IgIAFg");
        this.shape_148.setTransform(183.3, 90.4);

        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f(gColor).s().p("Aj1hvIAEgJIHnDoIgEAJg");
        this.shape_149.setTransform(62.2, 232.2);

        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f(gColor).s().p("Ah4DyIDonnIAJAEIjoHng");
        this.shape_150.setTransform(542.6, 62.1);

        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f(gColor).s().p("AkABVIH9izIADAJIn8C0g");
        this.shape_151.setTransform(47.7, 507.7);

        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f(gColor).s().p("AiyDKIFemZIAHAGIleGZg");
        this.shape_152.setTransform(621.5, 113.4);

        this.shape_153 = new cjs.Shape();
        this.shape_153.graphics.f(gColor).s().p("Ahej9IAJgDIC0H9IgJADg");
        this.shape_153.setTransform(267.1, 47.7);

        this.shape_154 = new cjs.Shape();
        this.shape_154.graphics.f(gColor).s().p("AjQirIAHgHIGaFeIgHAHg");
        this.shape_154.setTransform(113.4, 153.3);

        this.shape_155 = new cjs.Shape();
        this.shape_155.graphics.f(gColor).s().p("AkKgrIACgKIITBiIgCAJg");
        this.shape_155.setTransform(33.1, 321.7);

        this.shape_156 = new cjs.Shape();
        this.shape_156.graphics.f(gColor).s().p("Ag1EJIBioTIAJACIhiISg");
        this.shape_156.setTransform(453.1, 33.1);

        this.shape_157 = new cjs.Shape();
        this.shape_157.graphics.f(gColor).s().p("AkMAXIIYg3IABAKIoYA3g");
        this.shape_157.setTransform(29, 425);

        this.shape_158 = new cjs.Shape();
        this.shape_158.graphics.f(gColor).s().p("AjdCbIG1k9IAFAIImzE9g");
        this.shape_158.setTransform(95.9, 599.2);

        this.shape_159 = new cjs.Shape();
        this.shape_159.graphics.f(gColor).s().p("AggkMIAJAAIA4IYIgKACg");
        this.shape_159.setTransform(349.8, 29);

        this.shape_160 = new cjs.Shape();
        this.shape_160.graphics.f(gColor).s().p("AiijXIAIgFIE9G0IgIAFg");
        this.shape_160.setTransform(175.6, 95.8);

        this.shape_161 = new cjs.Shape();
        this.shape_161.graphics.f(gColor).s().p("Aj4hpIAEgIIHtDbIgEAIg");
        this.shape_161.setTransform(58.2, 240.8);

        this.shape_162 = new cjs.Shape();
        this.shape_162.graphics.f(gColor).s().p("AhyD1IDcntIAJAEIjcHtg");
        this.shape_162.setTransform(534, 58.2);

        this.shape_163 = new cjs.Shape();
        this.shape_163.graphics.f(gColor).s().p("Aj9BdIH4jCIADAJIn4DCg");
        this.shape_163.setTransform(51, 516.5);

        this.shape_164 = new cjs.Shape();
        this.shape_164.graphics.f(gColor).s().p("AitDPIFTmjIAIAHIlTGig");
        this.shape_164.setTransform(614.2, 107.3);

        this.shape_165 = new cjs.Shape();
        this.shape_165.graphics.f(gColor).s().p("Ahkj5IAJgEIDAH4IgJADg");
        this.shape_165.setTransform(258.3, 51);

        this.shape_166 = new cjs.Shape();
        this.shape_166.graphics.f(gColor).s().p("AjUilIAGgIIGjFUIgGAHg");
        this.shape_166.setTransform(107.4, 160.6);

        this.shape_167 = new cjs.Shape();
        this.shape_167.graphics.f(gColor).s().p("AkLglIACgJIIVBUIgCAJg");
        this.shape_167.setTransform(31.5, 331);

        this.shape_168 = new cjs.Shape();
        this.shape_168.graphics.f(gColor).s().p("AguEKIBUoVIAJACIhTIVg");
        this.shape_168.setTransform(443.8, 31.5);

        this.shape_169 = new cjs.Shape();
        this.shape_169.graphics.f(gColor).s().p("AkMAfIIXhGIACAKIoXBFg");
        this.shape_169.setTransform(30.1, 434.4);

        this.shape_170 = new cjs.Shape();
        this.shape_170.graphics.f(gColor).s().p("AjZCgIGtlHIAGAHImsFIg");
        this.shape_170.setTransform(101.5, 606.8);

        this.shape_171 = new cjs.Shape();
        this.shape_171.graphics.f(gColor).s().p("AgnkLIAKgBIBFIYIgJABg");
        this.shape_171.setTransform(340.4, 30.1);

        this.shape_172 = new cjs.Shape();
        this.shape_172.graphics.f(gColor).s().p("AinjSIAHgGIFIGrIgHAGg");
        this.shape_172.setTransform(168, 101.5);

        this.shape_173 = new cjs.Shape();
        this.shape_173.graphics.f(gColor).s().p("Aj7hiIAEgJIHzDOIgEAJg");
        this.shape_173.setTransform(54.5, 249.5);

        this.shape_174 = new cjs.Shape();
        this.shape_174.graphics.f(gColor).s().p("AhrD4IDOnyIAJADIjOHzg");
        this.shape_174.setTransform(525.3, 54.5);

        this.shape_175 = new cjs.Shape();
        this.shape_175.graphics.f(gColor).s().p("Aj7BjIHzjOIAEAJInzDOg");
        this.shape_175.setTransform(54.5, 525.3);

        this.shape_176 = new cjs.Shape();
        this.shape_176.graphics.f(gColor).s().p("AioDTIFJmrIAIAGIlIGrg");
        this.shape_176.setTransform(606.8, 101.5);

        this.shape_177 = new cjs.Shape();
        this.shape_177.graphics.f(gColor).s().p("Ahrj3IAJgDIDOHyIgJAEg");
        this.shape_177.setTransform(249.5, 54.5);

        this.shape_178 = new cjs.Shape();
        this.shape_178.graphics.f(gColor).s().p("AjZigIAHgHIGsFIIgGAHg");
        this.shape_178.setTransform(101.5, 168);

        this.shape_179 = new cjs.Shape();
        this.shape_179.graphics.f(gColor).s().p("AkMgeIACgJIIXBFIgCAKg");
        this.shape_179.setTransform(30.1, 340.3);

        this.shape_180 = new cjs.Shape();
        this.shape_180.graphics.f(gColor).s().p("AgnEMIBFoYIAKABIhGIYg");
        this.shape_180.setTransform(434.5, 30.1);

        this.shape_181 = new cjs.Shape();
        this.shape_181.graphics.f(gColor).s().p("AkLAmIIVhUIACAKIoVBTg");
        this.shape_181.setTransform(31.5, 443.7);

        this.shape_182 = new cjs.Shape();
        this.shape_182.graphics.f(gColor).s().p("AjUCmIGjlTIAGAHImjFUg");
        this.shape_182.setTransform(107.4, 614.2);

        this.shape_183 = new cjs.Shape();
        this.shape_183.graphics.f(gColor).s().p("AgukJIAKgCIBTIVIgKACg");
        this.shape_183.setTransform(331.1, 31.5);

        this.shape_184 = new cjs.Shape();
        this.shape_184.graphics.f(gColor).s().p("AitjNIAIgHIFTGjIgIAGg");
        this.shape_184.setTransform(160.6, 107.3);

        this.shape_185 = new cjs.Shape();
        this.shape_185.graphics.f(gColor).s().p("Aj9hcIADgJIH4DCIgDAJg");
        this.shape_185.setTransform(51, 258.2);

        this.shape_186 = new cjs.Shape();
        this.shape_186.graphics.f(gColor).s().p("AhkD7IDAn4IAJAEIjAH3g");
        this.shape_186.setTransform(516.6, 51);

        this.shape_187 = new cjs.Shape();
        this.shape_187.graphics.f(gColor).s().p("Aj4BqIHtjbIAEAJIntDag");
        this.shape_187.setTransform(58.2, 533.9);

        this.shape_188 = new cjs.Shape();
        this.shape_188.graphics.f(gColor).s().p("AiiDYIE9m0IAIAFIk9G0g");
        this.shape_188.setTransform(599.3, 95.8);

        this.shape_189 = new cjs.Shape();
        this.shape_189.graphics.f(gColor).s().p("Ahxj0IAJgEIDaHtIgIAEg");
        this.shape_189.setTransform(240.8, 58.2);

        this.shape_190 = new cjs.Shape();
        this.shape_190.graphics.f(gColor).s().p("AjdiaIAHgIIGzE9IgFAIg");
        this.shape_190.setTransform(95.9, 175.5);

        this.shape_191 = new cjs.Shape();
        this.shape_191.graphics.f(gColor).s().p("AkMgWIABgKIIZA4IgBAJg");
        this.shape_191.setTransform(29, 349.7);

        this.shape_192 = new cjs.Shape();
        this.shape_192.graphics.f(gColor).s().p("AggEMIA4oYIAJABIg4IYg");
        this.shape_192.setTransform(425.1, 29);

        this.shape_193 = new cjs.Shape();
        this.shape_193.graphics.f(gColor).s().p("AkKAtIIThiIACAKIoTBhg");
        this.shape_193.setTransform(33.1, 453);

        this.shape_194 = new cjs.Shape();
        this.shape_194.graphics.f(gColor).s().p("AjQCsIGaleIAHAHImaFeg");
        this.shape_194.setTransform(113.4, 621.4);

        this.shape_195 = new cjs.Shape();
        this.shape_195.graphics.f(gColor).s().p("Ag1kIIAKgCIBhITIgJABg");
        this.shape_195.setTransform(321.8, 33.1);

        this.shape_196 = new cjs.Shape();
        this.shape_196.graphics.f(gColor).s().p("AiyjJIAHgGIFeGZIgHAGg");
        this.shape_196.setTransform(153.4, 113.4);

        this.shape_197 = new cjs.Shape();
        this.shape_197.graphics.f(gColor).s().p("AkAhVIAEgJIH8CzIgDAKg");
        this.shape_197.setTransform(47.7, 267.1);

        this.shape_198 = new cjs.Shape();
        this.shape_198.graphics.f(gColor).s().p("AheD9IC0n9IAJADIi0H9g");
        this.shape_198.setTransform(507.7, 47.7);

        this.shape_199 = new cjs.Shape();
        this.shape_199.graphics.f(gColor).s().p("Aj1BwIHnjoIAEAJInnDog");
        this.shape_199.setTransform(62.2, 542.5);

        this.shape_200 = new cjs.Shape();
        this.shape_200.graphics.f(gColor).s().p("AicDcIExm8IAIAFIkxG8g");
        this.shape_200.setTransform(591.6, 90.4);

        this.shape_201 = new cjs.Shape();
        this.shape_201.graphics.f(gColor).s().p("Ah4jxIAJgEIDoHnIgJAEg");
        this.shape_201.setTransform(232.3, 62.1);

        this.shape_202 = new cjs.Shape();
        this.shape_202.graphics.f(gColor).s().p("AjhiUIAGgIIG8ExIgFAIg");
        this.shape_202.setTransform(90.4, 183.2);

        this.shape_203 = new cjs.Shape();
        this.shape_203.graphics.f(gColor).s().p("AkNgPIABgKIIaApIgBAKg");
        this.shape_203.setTransform(28.2, 359.1);

        this.shape_204 = new cjs.Shape();
        this.shape_204.graphics.f(gColor).s().p("AgZENIApoaIAKABIgpIag");
        this.shape_204.setTransform(415.7, 28.1);

        this.shape_205 = new cjs.Shape();
        this.shape_205.graphics.f(gColor).s().p("AkIAzIIQhvIACAKIoRBvg");
        this.shape_205.setTransform(34.9, 462.3);

        this.shape_206 = new cjs.Shape();
        this.shape_206.graphics.f(gColor).s().p("AjLCyIGQlqIAHAHImQFpg");
        this.shape_206.setTransform(119.6, 628.5);

        this.shape_207 = new cjs.Shape();
        this.shape_207.graphics.f(gColor).s().p("Ag8kHIAJgBIBwIQIgJACg");
        this.shape_207.setTransform(312.5, 34.9);

        this.shape_208 = new cjs.Shape();
        this.shape_208.graphics.f(gColor).s().p("Ai3jEIAHgHIFoGRIgHAGg");
        this.shape_208.setTransform(146.3, 119.6);

        this.shape_209 = new cjs.Shape();
        this.shape_209.graphics.f(gColor).s().p("AkChOIADgJIICCmIgDAJg");
        this.shape_209.setTransform(44.7, 276);

        this.shape_210 = new cjs.Shape();
        this.shape_210.graphics.f(gColor).s().p("AhXD/ICmoBIAJADIimIBg");
        this.shape_210.setTransform(498.8, 44.7);

        this.shape_211 = new cjs.Shape();
        this.shape_211.graphics.f(gColor).s().p("AjyB2IHhj0IAEAJIngD0g");
        this.shape_211.setTransform(66.3, 551);

        this.shape_212 = new cjs.Shape();
        this.shape_212.graphics.f(gColor).s().p("AiXDgIEmnEIAIAFIklHEg");
        this.shape_212.setTransform(583.7, 85.2);

        this.shape_213 = new cjs.Shape();
        this.shape_213.graphics.f(gColor).s().p("Ah+jtIAIgFID1HhIgJAEg");
        this.shape_213.setTransform(223.8, 66.3);

        this.shape_214 = new cjs.Shape();
        this.shape_214.graphics.f(gColor).s().p("AjkiOIAFgIIHEElIgFAIg");
        this.shape_214.setTransform(85.2, 191.1);

        this.shape_215 = new cjs.Shape();
        this.shape_215.graphics.f(gColor).s().p("AkNgIIAAgKIIbAbIAAAKg");
        this.shape_215.setTransform(27.5, 368.5);

        this.shape_216 = new cjs.Shape();
        this.shape_216.graphics.f(gColor).s().p("AgSEOIAbobIAKAAIgcIbg");
        this.shape_216.setTransform(406.3, 27.5);

        this.shape_217 = new cjs.Shape();
        this.shape_217.graphics.f(gColor).s().p("AkHA6IINh9IACAKIoNB9g");
        this.shape_217.setTransform(37, 471.5);

        this.shape_218 = new cjs.Shape();
        this.shape_218.graphics.f(gColor).s().p("AjHC3IGIl0IAHAIImIFzg");
        this.shape_218.setTransform(126, 635.4);

        this.shape_219 = new cjs.Shape();
        this.shape_219.graphics.f(gColor).s().p("AhDkFIAKgCIB9INIgJACg");
        this.shape_219.setTransform(303.3, 37);

        this.shape_220 = new cjs.Shape();
        this.shape_220.graphics.f(gColor).s().p("Ai8jAIAHgGIFyGGIgHAHg");
        this.shape_220.setTransform(139.4, 126);

        this.shape_221 = new cjs.Shape();
        this.shape_221.graphics.f(gColor).s().p("AkEhHIADgKIIGCZIgDAJg");
        this.shape_221.setTransform(41.9, 285);

        this.shape_222 = new cjs.Shape();
        this.shape_222.graphics.f(gColor).s().p("AhQECICYoFIAJADIiYIFg");
        this.shape_222.setTransform(489.8, 41.9);

        this.shape_223 = new cjs.Shape();
        this.shape_223.graphics.f(gColor).s().p("AjvB9IHakBIAFAIInaEBg");
        this.shape_223.setTransform(70.7, 559.3);

        this.shape_224 = new cjs.Shape();
        this.shape_224.graphics.f(gColor).s().p("AiQDkIEZnMIAIAFIkZHMg");
        this.shape_224.setTransform(575.7, 80.1);

        this.shape_225 = new cjs.Shape();
        this.shape_225.graphics.f(gColor).s().p("AiEjqIAIgFIEBHaIgIAFg");
        this.shape_225.setTransform(215.5, 70.7);

        this.shape_226 = new cjs.Shape();
        this.shape_226.graphics.f(gColor).s().p("AjoiIIAFgJIHMEaIgFAIg");
        this.shape_226.setTransform(80.2, 199.1);

        this.shape_227 = new cjs.Shape();
        this.shape_227.graphics.f(gColor).s().p("AkOgBIABgKIIbANIAAAKg");
        this.shape_227.setTransform(27.2, 377.9);

        this.shape_228 = new cjs.Shape();
        this.shape_228.graphics.f(gColor).s().p("AgLEOIANobIAKAAIgNIbg");
        this.shape_228.setTransform(396.9, 27.1);

        this.shape_229 = new cjs.Shape();
        this.shape_229.graphics.f(gColor).s().p("AkFBBIIJiLIACAKIoJCLg");
        this.shape_229.setTransform(39.3, 480.6);

        this.shape_230 = new cjs.Shape();
        this.shape_230.graphics.f(gColor).s().p("AjCC8IF+l9IAHAGIl+F+g");
        this.shape_230.setTransform(132.6, 642.2);

        this.shape_231 = new cjs.Shape();
        this.shape_231.graphics.f(gColor).s().p("AjCC8IF+l+IAGAHIl8F+g");
        this.shape_231.setTransform(642.3, 132.5);

        this.shape_232 = new cjs.Shape();
        this.shape_232.graphics.f(gColor).s().p("AhJkDIAJgDICKIKIgJACg");
        this.shape_232.setTransform(294.2, 39.3);

        this.shape_233 = new cjs.Shape();
        this.shape_233.graphics.f(gColor).s().p("AjCi7IAHgHIF+F+IgHAHg");
        this.shape_233.setTransform(132.6, 132.5);

        this.shape_234 = new cjs.Shape();
        this.shape_234.graphics.f(gColor).s().p("AkFhAIACgKIIJCLIgCAKg");
        this.shape_234.setTransform(39.3, 294.1);

        this.shape_235 = new cjs.Shape();
        this.shape_235.graphics.f(gColor).s().p("AhKEEICLoKIAJADIiLIJg");
        this.shape_235.setTransform(480.7, 39.3);

        this.shape_236 = new cjs.Shape();
        this.shape_236.graphics.f(gColor).s().p("AjrCDIHTkOIAFAJInTENg");
        this.shape_236.setTransform(75.3, 567.6);

        this.shape_237 = new cjs.Shape();
        this.shape_237.graphics.f(gColor).s().p("AiKDoIENnUIAIAGIkNHTg");
        this.shape_237.setTransform(567.6, 75.3);

        this.shape_238 = new cjs.Shape();
        this.shape_238.graphics.f(gColor).s().p("AiKjmIAIgGIENHUIgIAFg");
        this.shape_238.setTransform(207.2, 75.3);

        this.shape_239 = new cjs.Shape();
        this.shape_239.graphics.f(gColor).s().p("AjriCIAFgIIHTENIgFAIg");
        this.shape_239.setTransform(75.3, 207.2);

        this.shape_240 = new cjs.Shape();
        this.shape_240.graphics.f(gColor).s().p("AkNAFIAAgJIIbAAIAAAJg");
        this.shape_240.setTransform(27, 387.4);

        this.shape_241 = new cjs.Shape();
        this.shape_241.graphics.f(gColor).s().p("AgEEOIAAobIAJAAIAAIbg");
        this.shape_241.setTransform(387.4, 27);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_241 }, { t: this.shape_240 }, { t: this.shape_239 }, { t: this.shape_238 }, { t: this.shape_237 }, { t: this.shape_236 }, { t: this.shape_235 }, { t: this.shape_234 }, { t: this.shape_233 }, { t: this.shape_232 }, { t: this.shape_231 }, { t: this.shape_230 }, { t: this.shape_229 }, { t: this.shape_228 }, { t: this.shape_227 }, { t: this.shape_226 }, { t: this.shape_225 }, { t: this.shape_224 }, { t: this.shape_223 }, { t: this.shape_222 }, { t: this.shape_221 }, { t: this.shape_220 }, { t: this.shape_219 }, { t: this.shape_218 }, { t: this.shape_217 }, { t: this.shape_216 }, { t: this.shape_215 }, { t: this.shape_214 }, { t: this.shape_213 }, { t: this.shape_212 }, { t: this.shape_211 }, { t: this.shape_210 }, { t: this.shape_209 }, { t: this.shape_208 }, { t: this.shape_207 }, { t: this.shape_206 }, { t: this.shape_205 }, { t: this.shape_204 }, { t: this.shape_203 }, { t: this.shape_202 }, { t: this.shape_201 }, { t: this.shape_200 }, { t: this.shape_199 }, { t: this.shape_198 }, { t: this.shape_197 }, { t: this.shape_196 }, { t: this.shape_195 }, { t: this.shape_194 }, { t: this.shape_193 }, { t: this.shape_192 }, { t: this.shape_191 }, { t: this.shape_190 }, { t: this.shape_189 }, { t: this.shape_188 }, { t: this.shape_187 }, { t: this.shape_186 }, { t: this.shape_185 }, { t: this.shape_184 }, { t: this.shape_183 }, { t: this.shape_182 }, { t: this.shape_181 }, { t: this.shape_180 }, { t: this.shape_179 }, { t: this.shape_178 }, { t: this.shape_177 }, { t: this.shape_176 }, { t: this.shape_175 }, { t: this.shape_174 }, { t: this.shape_173 }, { t: this.shape_172 }, { t: this.shape_171 }, { t: this.shape_170 }, { t: this.shape_169 }, { t: this.shape_168 }, { t: this.shape_167 }, { t: this.shape_166 }, { t: this.shape_165 }, { t: this.shape_164 }, { t: this.shape_163 }, { t: this.shape_162 }, { t: this.shape_161 }, { t: this.shape_160 }, { t: this.shape_159 }, { t: this.shape_158 }, { t: this.shape_157 }, { t: this.shape_156 }, { t: this.shape_155 }, { t: this.shape_154 }, { t: this.shape_153 }, { t: this.shape_152 }, { t: this.shape_151 }, { t: this.shape_150 }, { t: this.shape_149 }, { t: this.shape_148 }, { t: this.shape_147 }, { t: this.shape_146 }, { t: this.shape_145 }, { t: this.shape_144 }, { t: this.shape_143 }, { t: this.shape_142 }, { t: this.shape_141 }, { t: this.shape_140 }, { t: this.shape_139 }, { t: this.shape_138 }, { t: this.shape_137 }, { t: this.shape_136 }, { t: this.shape_135 }, { t: this.shape_134 }, { t: this.shape_133 }, { t: this.shape_132 }, { t: this.shape_131 }, { t: this.shape_130 }, { t: this.shape_129 }, { t: this.shape_128 }, { t: this.shape_127 }, { t: this.shape_126 }, { t: this.shape_125 }, { t: this.shape_124 }, { t: this.shape_123 }, { t: this.shape_122 }, { t: this.shape_121 }, { t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bigwheel, new cjs.Rectangle(0, 0, 774.9, 774.8), null);


    (lib.bigcross = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgPBoIAAhXIhaAAIAAghIBaAAIAAhWIAfAAIAABWIBbAAIAAAhIhbAAIAABXg");
        this.shape.setTransform(10.7, 10.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bigcross, new cjs.Rectangle(0, 0, 21.3, 20.7), null);


    (lib.Path = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AmBOSQiyhMiJiJQiKiJhKiyQhPi4AAjKQAAjJBPi4QBKiyCKiJQCJiKCyhKQC4hPDJAAQDKAAC4BPQCyBKCJCKQCJCJBMCyQBNC4AADJQAADKhNC4QhMCyiJCJQiJCJiyBMQi4BNjKAAQjJAAi4hNg");
        this.shape.setTransform(99.2, 99.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0, 0, 198.3, 198.3), null);


    (lib.Path_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f(gColor).s().p("Aj7D8QhphoAAiUQAAiTBphpQBohoCTAAQCUAABoBoQBpBpAACTQAACUhpBoQhoBpiUAAQiTAAhohpg");
        this.shape_1.setTransform(35.7, 35.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0, 0, 71.4, 71.4), null);


    (lib.Path_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f(gColor).s().p("AnjHkQjIjJAAkbQAAkaDIjJQDJjIEaAAQEbAADJDIQDHDJABEaQgBEbjHDJQjJDHkbABQkagBjJjHg");
        this.shape_2.setTransform(68.4, 68.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0, 0, 136.7, 136.7), null);


    (lib.Path_3 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f(gColor).s().p("ApGVjQkMhxjPjQQjQjPhxkNQh2kWAAkwQAAkwB2kVQBxkNDQjPQDPjPEMhyQEWh1EwgBQEwABEWB1QENByDPDPQDPDPByENQB2EVAAEwQAAEwh2EWQhyENjPDPQjPDQkNBxQkWB2kwAAQkwAAkWh2g");
        this.shape_3.setTransform(149.7, 149.7);

        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0, 0, 299.4, 299.3), null);


    (lib.Path_4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f(gColor).s().p("Ap/XrQkoh8jjjkQjkjkh9knQiBkxAAlPQAAlNCBkyQB9koDkjjQDjjkEoh8QExiCFOAAQFOAAEyCCQEnB8DkDkQDkDjB8EoQCCEyAAFNQAAFPiCExQh8EnjkDkQjkDkknB8QkyCClOAAQlOAAkxiCg");
        this.shape_4.setTransform(164.5, 144.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0, -20, 329, 329), null);


    (lib.Path_5 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f(gColor).s().p("AmnPqQjDhSiWiXQiXiXhSjCQhWjLAAjdQAAjcBWjKQBSjECXiWQCWiWDDhTQDLhVDcgBQDdABDKBVQDEBTCWCWQCXCWBSDEQBWDKAADcQAADehWDKQhSDCiXCXQiWCXjEBSQjKBWjdAAQjcAAjLhWg");
        this.shape_5.setTransform(108.8, 108.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0, 0, 217.6, 217.5), null);


    (lib.Path_6 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f(gColor).s().p("An+S5Qjrhki2i2Qi1i1hkjsQhnjzAAkLQAAkKBnj0QBkjrC1i2QC2i1DrhkQD0hnEKAAQELAADzBnQDsBkC1C1QC2C2BkDrQBnD0AAEKQAAELhnDzQhkDsi2C1Qi1C2jsBkQjzBnkLAAQkKAAj0hng");
        this.shape_6.setTransform(211.2, 131.2);

        this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(80, 0, 262.4, 262.4), null);


    (lib.Path_7 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f(gColor).s().p("AmUGVQioioAAjtQAAjtCoinQCnioDtAAQDtAACoCoQCoCnAADtQAADtioCoQioCojtAAQjtAAiniog");
        this.shape_7.setTransform(57.3, 57.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0, 0, 114.7, 114.6), null);


    (lib.Path_8 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f(gColor).s().p("ArgbQQlTiPkHkGQkGkGiQlUQiUlgAAmBQAAmBCUlfQCQlUEGkGQEHkGFTiPQFgiVGAgBQGBABFgCVQFUCPEGEGQEGEGCQFUQCUFfAAGBQAAGBiUFgQiQFUkGEGQkGEGlUCPQlgCVmBABQmAgBlgiVg");
        this.shape_8.setTransform(-110.6, 189.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(-300, 0, 378.7, 378.7), null);


    (lib.Path_9 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f(gColor).s().p("Aspd9Ql1iekgkgQkgkgiel1QijmDAAmnQAAmmCjmCQCel2EgkgQEgkgF1idQGDikGmAAQGnAAGDCkQF1CdEgEgQEgEgCeF2QCjGBAAGnQAAGnijGDQieF1kgEgQkgEgl1CeQmDCjmnAAQmmAAmDijg");
        this.shape_9.setTransform(208, 208);

        this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0, 0, 416.1, 416), null);


    (lib.Path_10 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f(gColor).s().p("AoBTBQjthki3i3Qi3i3hkjtQhoj1AAkNQAAkLBoj2QBkjtC3i3QC3i3DthkQD1hoEMAAQEMAAD2BoQDtBkC3C3QC3C3BkDtQBoD2AAELQAAENhoD1QhkDti3C3Qi3C3jtBkQj1BokNAAQkMAAj1hog");
        this.shape_10.setTransform(132.1, 132.1);

        this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0, 0, 264.2, 264.2), null);


    (lib.Path_11 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f(gColor).s().p("AneHfQjHjGAAkZQAAkYDHjGQDGjGEYgBQEZABDGDGQDHDGAAEYQAAEZjHDGQjGDHkZAAQkYAAjGjHg");
        this.shape_11.setTransform(67.8, 67.8);

        this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0, 0, 135.6, 135.5), null);


    (lib.Path_12 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f(gColor).s().p("An6SxQjrhjizi0Qi1i0hjjrQhnjyAAkJQAAkIBnjzQBjjpC1i1QCzi0DrhjQDyhnEIAAQEJAADyBnQDrBjC0C0QC0C1BjDpQBmDzABEIQgBEJhmDyQhjDri0C0Qi0C0jrBjQjyBmkJABQkIgBjyhmg");
        this.shape_12.setTransform(230.4, 130.4);

        this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(100, 0, 260.7, 260.7), null);


    (lib.Path_13 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f(gColor).s().p("EgRgApdQoFjbmOmOQmOmPjboFQjioXAApJQAApJDioXQDboEGOmPQGOmOIFjbQIXjiJJAAQJJAAIXDiQIFDbGPGOQGOGPDbIEQDiIXAAJJQAAJJjiIXQjbIFmOGPQmPGOoFDbQoXDipJAAQpJAAoXjig");
        this.shape_13.setTransform(287.9, 287.9);

        this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0, 0, 575.9, 575.8), null);


    (lib.Path_14 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f(gColor).s().p("EgPaAkfQnGjAlflfQlflfjAnHQjHnXAAoDQAAoCDHnXQDAnHFflfQFflfHGjBQHXjHIDAAQIDAAHXDHQHHDBFfFfQFfFeDAHIQDHHXAAICQAAIDjHHXQjAHHlfFfQlfFfnHDAQnXDIoDgBQoDABnXjIg");
        this.shape_14.setTransform(253.4, 253.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

    }).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0, 0, 506.9, 506.9), null);


    (lib._4thcross = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgKBCIAAg3Ig5AAIAAgVIA5AAIAAg3IAUAAIAAA3IA6AAIAAAVIg6AAIAAA3g");
        this.shape.setTransform(6.8, 6.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib._4thcross, new cjs.Rectangle(0, 0, 13.6, 13.2), null);


    (lib._3dcross = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgHAsIAAglIgmAAIAAgNIAmAAIAAglIAOAAIAAAlIAmAAIAAANIgmAAIAAAlg");
        this.shape.setTransform(4.6, 4.4);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib._3dcross, new cjs.Rectangle(0, 0, 9.1, 8.9), null);


    (lib._2ndcross = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgGArIAAgkIglAAIAAgNIAlAAIAAgkIAMAAIAAAkIAmAAIAAANIgmAAIAAAkg");
        this.shape.setTransform(4.4, 4.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib._2ndcross, new cjs.Rectangle(0, 0, 8.8, 8.6), null);


    (lib.zimtimijloc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path();
        this.instance.parent = this;
        this.instance.setTransform(99.4, 99.2, 1, 1, 0, 0, 0, 99.2, 99.2);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AAABFIgDiJIAEAAIADCJg");
        this.shape.setTransform(101.8, 191.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f(gColor).s().p("Aglg5IAEgDIBHB2IgEADg");
        this.shape_1.setTransform(147.7, 178);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f(gColor).s().p("AhFAAICKgDIABAEIiLADg");
        this.shape_2.setTransform(7, 101.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f(gColor).s().p("Ag8AiIB2hIIADAFIh2BHg");
        this.shape_3.setTransform(20.6, 147.5);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f(gColor).s().p("AgiA8IBBh5IAFACIhCB5g");
        this.shape_4.setTransform(55.3, 180.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f(gColor).s().p("Ag9geIACgEIB5BBIgCAEg");
        this.shape_5.setTransform(18.1, 55);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f(gColor).s().p("Ag9geIACgEIB5BBIgCAEg");
        this.shape_6.setTransform(180.6, 143.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f(gColor).s().p("AgVhAIAFgCIAmCEIgFABg");
        this.shape_7.setTransform(125.6, 187.8);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f(gColor).s().p("AgzgtIADgEIBkBfIgEADg");
        this.shape_8.setTransform(32.3, 35.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f(gColor).s().p("AgzgtIAEgDIBjBeIgDAEg");
        this.shape_9.setTransform(166.5, 162.8);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f(gColor).s().p("AhCASICEgnIABAFIiEAmg");
        this.shape_10.setTransform(10.7, 125.4);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f(gColor).s().p("AgxAwIBfhjIAEAEIhfBjg");
        this.shape_11.setTransform(35.7, 166.2);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f(gColor).s().p("AgSBDIAgiGIAFABIggCGg");
        this.shape_12.setTransform(77.8, 189.1);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f(gColor).s().p("AhDgNIABgFICGAgIgBAFg");
        this.shape_13.setTransform(9.5, 77.6);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f(gColor).s().p("AhDgNIABgFICGAgIgBAFg");
        this.shape_14.setTransform(189.3, 120.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f(gColor).s().p("AABBFIgGiJIAFAAIAGCJg");
        this.shape_15.setTransform(104.2, 191.5);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f(gColor).s().p("Agng4IAEgDIBLBzIgEADg");
        this.shape_16.setTransform(149.7, 176.7);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f(gColor).s().p("AhEABICJgGIAAAFIiJAGg");
        this.shape_17.setTransform(7, 104);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f(gColor).s().p("Ag7AjIB0hKIADAFIh0BKg");
        this.shape_18.setTransform(21.8, 149.5);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f(gColor).s().p("AghA8IA+h6IAFACIg+B7g");
        this.shape_19.setTransform(57.4, 181.6);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f(gColor).s().p("Ag+gcIACgFIB7A+IgDAFg");
        this.shape_20.setTransform(17, 57.2);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f(gColor).s().p("Ag+gcIADgFIB6A+IgCAFg");
        this.shape_21.setTransform(181.8, 141.1);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f(gColor).s().p("AgXhAIAFgCIAqCDIgFACg");
        this.shape_22.setTransform(127.9, 187.1);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f(gColor).s().p("Ag0grIADgEIBmBcIgDADg");
        this.shape_23.setTransform(30.7, 37.3);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f(gColor).s().p("Ag0gsIADgDIBmBbIgDAEg");
        this.shape_24.setTransform(168.1, 161);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f(gColor).s().p("AhCATICDgqIACAFIiDAqg");
        this.shape_25.setTransform(11.4, 127.7);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f(gColor).s().p("AgwAyIBchmIAFADIhcBmg");
        this.shape_26.setTransform(37.5, 167.9);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f(gColor).s().p("AgQBDIAciGIAFABIgcCGg");
        this.shape_27.setTransform(80.2, 189.6);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f(gColor).s().p("AhDgLIABgFICGAcIgBAFg");
        this.shape_28.setTransform(8.9, 79.9);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f(gColor).s().p("AhEgLIACgFICGAcIgBAFg");
        this.shape_29.setTransform(189.8, 118.4);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f(gColor).s().p("AgHhEIAFAAIAKCJIgFAAg");
        this.shape_30.setTransform(106.6, 191.3);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f(gColor).s().p("Agog2IAEgEIBNByIgEACg");
        this.shape_31.setTransform(151.7, 175.4);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f(gColor).s().p("AhFADICKgKIABAFIiKAKg");
        this.shape_32.setTransform(7.2, 106.4);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f(gColor).s().p("Ag6AlIByhNIADAEIhyBNg");
        this.shape_33.setTransform(23.2, 151.5);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f(gColor).s().p("AgfA9IA6h8IAFACIg7B8g");
        this.shape_34.setTransform(59.6, 182.6);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f(gColor).s().p("Ag/gaIACgFIB9A7IgDAEg");
        this.shape_35.setTransform(15.9, 59.4);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f(gColor).s().p("Ag/gbIACgEIB9A6IgDAFg");
        this.shape_36.setTransform(182.8, 139);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f(gColor).s().p("AgZhAIAFgBIAuCBIgGACg");
        this.shape_37.setTransform(130.3, 186.3);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f(gColor).s().p("Ag1gqIADgEIBpBZIgEAEg");
        this.shape_38.setTransform(29.1, 39.1);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f(gColor).s().p("Ag1gqIADgEIBoBZIgDAEg");
        this.shape_39.setTransform(169.7, 159.2);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f(gColor).s().p("AhBAVICBguIACAGIiCAtg");
        this.shape_40.setTransform(12.2, 130);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f(gColor).s().p("AguAzIBZhpIAEAEIhZBog");
        this.shape_41.setTransform(39.3, 169.5);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f(gColor).s().p("AgOBEIAYiIIAFABIgYCIg");
        this.shape_42.setTransform(82.5, 190.1);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f(gColor).s().p("AhEgJIABgFICHAYIAAAFg");
        this.shape_43.setTransform(8.5, 82.3);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f(gColor).s().p("AhEgJIABgFICIAYIgBAFg");
        this.shape_44.setTransform(190.3, 116);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f(gColor).s().p("AgJhEIAFAAIAOCIIgFABg");
        this.shape_45.setTransform(109, 191.1);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f(gColor).s().p("Agqg2IAEgCIBRBuIgEAEg");
        this.shape_46.setTransform(153.7, 174);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f(gColor).s().p("AhEAFICJgOIAAAFIiJAOg");
        this.shape_47.setTransform(7.4, 108.8);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f(gColor).s().p("Ag5AmIBwhQIADAFIhwBQg");
        this.shape_48.setTransform(24.6, 153.5);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f(gColor).s().p("AgdA+IA3h9IAEACIg3B9g");
        this.shape_49.setTransform(61.8, 183.6);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f(gColor).s().p("AhAgZIACgEIB/A3IgDAFg");
        this.shape_50.setTransform(14.9, 61.6);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f(gColor).s().p("Ag/gZIACgFIB9A4IgCAEg");
        this.shape_51.setTransform(183.8, 136.8);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f(gColor).s().p("Agag/IAFgCIAwCBIgEACg");
        this.shape_52.setTransform(132.5, 185.5);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f(gColor).s().p("Ag3gpIAEgEIBrBXIgEAEg");
        this.shape_53.setTransform(27.5, 41);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f(gColor).s().p("Ag2gpIADgDIBqBVIgCAFg");
        this.shape_54.setTransform(171.2, 157.4);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f(gColor).s().p("AhAAXICAgxIABAFIiAAwg");
        this.shape_55.setTransform(13.1, 132.3);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f(gColor).s().p("AgtA0IBXhrIAEAEIhXBrg");
        this.shape_56.setTransform(41.2, 171);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f(gColor).s().p("AgMBEIAUiIIAGABIgWCIg");
        this.shape_57.setTransform(84.9, 190.5);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f(gColor).s().p("AhEgHIABgFICIAUIgBAFg");
        this.shape_58.setTransform(8.1, 84.7);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f(gColor).s().p("AhEgHIABgFICIAUIgBAFg");
        this.shape_59.setTransform(190.7, 113.6);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f(gColor).s().p("AgKhDIAEgBIARCIIgEABg");
        this.shape_60.setTransform(111.5, 190.8);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f(gColor).s().p("Agrg1IAEgCIBTBsIgEADg");
        this.shape_61.setTransform(155.7, 172.5);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f(gColor).s().p("AhEAGICJgRIAAAFIiIASg");
        this.shape_62.setTransform(7.7, 111.2);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f(gColor).s().p("Ag4AoIBuhTIACAEIhsBTg");
        this.shape_63.setTransform(26, 155.4);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f(gColor).s().p("AgcBAIA0iAIAFACIg1B/g");
        this.shape_64.setTransform(64, 184.6);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f(gColor).s().p("AhAgXIACgFIB/A0IgCAFg");
        this.shape_65.setTransform(14, 63.8);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f(gColor).s().p("AhAgXIACgFIB/A0IgCAFg");
        this.shape_66.setTransform(184.8, 134.5);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f(gColor).s().p("Agcg+IAFgCIA0CAIgFABg");
        this.shape_67.setTransform(134.8, 184.6);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f(gColor).s().p("Ag4gnIAEgEIBsBTIgCAEg");
        this.shape_68.setTransform(26, 42.9);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f(gColor).s().p("Ag4gnIADgEIBuBTIgEAEg");
        this.shape_69.setTransform(172.7, 155.4);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f(gColor).s().p("AhAAYIB/g0IACAFIh/A0g");
        this.shape_70.setTransform(14, 134.5);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f(gColor).s().p("AgrA1IBThsIAEACIhTBtg");
        this.shape_71.setTransform(43.1, 172.5);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f(gColor).s().p("AgKBEIARiIIAEABIgRCIg");
        this.shape_72.setTransform(87.3, 190.8);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f(gColor).s().p("AhEgGIABgEICIARIAAAEg");
        this.shape_73.setTransform(7.7, 87.1);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f(gColor).s().p("AhEgGIAAgFICJARIgBAGg");
        this.shape_74.setTransform(191.1, 111.2);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f(gColor).s().p("AgMhDIAFgBIAUCIIgFABg");
        this.shape_75.setTransform(113.8, 190.5);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f(gColor).s().p("AgtgzIAFgEIBVBrIgEAEg");
        this.shape_76.setTransform(157.6, 171);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f(gColor).s().p("AhEAIICIgUIABAFIiIAUg");
        this.shape_77.setTransform(8.1, 113.6);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f(gColor).s().p("Ag3AqIBrhXIAEAEIhrBXg");
        this.shape_78.setTransform(27.5, 157.3);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f(gColor).s().p("AgaBAIAxiBIAEACIgwCBg");
        this.shape_79.setTransform(66.2, 185.5);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f(gColor).s().p("AhAgWIABgEICAAwIgBAFg");
        this.shape_80.setTransform(13.1, 66);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f(gColor).s().p("AhBgVIACgFICBAxIgCAEg");
        this.shape_81.setTransform(185.7, 132.3);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f(gColor).s().p("Ageg9IAFgCIA4B9IgFACg");
        this.shape_82.setTransform(137, 183.6);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f(gColor).s().p("Ag5glIADgFIBwBRIgDAEg");
        this.shape_83.setTransform(24.6, 44.8);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f(gColor).s().p("Ag5glIADgFIBwBQIgDAFg");
        this.shape_84.setTransform(174.2, 153.5);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f(gColor).s().p("AhAAaIB+g4IADAFIh/A3g");
        this.shape_85.setTransform(14.9, 136.8);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f(gColor).s().p("AgqA2IBRhuIAEACIhRBwg");
        this.shape_86.setTransform(45, 174);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f(gColor).s().p("AgJBEIAOiIIAFAAIgOCJg");
        this.shape_87.setTransform(89.7, 191.1);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f(gColor).s().p("AhEgEIAAgFICJAOIAAAFg");
        this.shape_88.setTransform(7.4, 89.5);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f(gColor).s().p("AhEgEIAAgFICJAOIAAAFg");
        this.shape_89.setTransform(191.3, 108.8);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f(gColor).s().p("AgOhDIAFgBIAYCIIgFABg");
        this.shape_90.setTransform(116.2, 190.1);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f(gColor).s().p("AgugyIAEgEIBZBpIgEADg");
        this.shape_91.setTransform(159.4, 169.5);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f(gColor).s().p("AhEAKICIgYIAAAFIiHAYg");
        this.shape_92.setTransform(8.5, 116);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f(gColor).s().p("Ag1ArIBohZIAEAEIhpBZg");
        this.shape_93.setTransform(29.1, 159.2);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f(gColor).s().p("AgZBAIAuiBIAFABIgtCCg");
        this.shape_94.setTransform(68.5, 186.3);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f(gColor).s().p("AhBgUIABgFICCAuIgCAEg");
        this.shape_95.setTransform(12.2, 68.3);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f(gColor).s().p("AhBgTIABgGICCAuIgCAFg");
        this.shape_96.setTransform(186.5, 130);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f(gColor).s().p("Agfg9IAEgCIA7B8IgEACg");
        this.shape_97.setTransform(139.2, 182.6);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f(gColor).s().p("Ag6gkIADgEIByBNIgDAEg");
        this.shape_98.setTransform(23.2, 46.8);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f(gColor).s().p("Ag5gkIACgEIByBNIgDAEg");
        this.shape_99.setTransform(175.6, 151.5);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f(gColor).s().p("Ag/AbIB8g6IADAEIh9A7g");
        this.shape_100.setTransform(15.9, 139);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f(gColor).s().p("AgpA4IBOhyIAFAEIhOBwg");
        this.shape_101.setTransform(47, 175.4);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f(gColor).s().p("AgHBFIAKiJIAFAAIgKCJg");
        this.shape_102.setTransform(92.1, 191.3);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f(gColor).s().p("AhFgCIABgFICKAKIgBAFg");
        this.shape_103.setTransform(7.2, 91.9);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f(gColor).s().p("AhEgCIAAgFICJAKIAAAFg");
        this.shape_104.setTransform(191.5, 106.4);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f(gColor).s().p("AgQhCIAFgBIAcCGIgFABg");
        this.shape_105.setTransform(118.6, 189.6);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f(gColor).s().p("AgvgxIAEgDIBbBmIgDADg");
        this.shape_106.setTransform(161.2, 167.9);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f(gColor).s().p("AhDAMICGgcIABAFIiGAcg");
        this.shape_107.setTransform(8.9, 118.4);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f(gColor).s().p("Ag0AsIBmhbIADADIhmBcg");
        this.shape_108.setTransform(30.7, 161);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f(gColor).s().p("AgXBBIAqiDIAFACIgqCDg");
        this.shape_109.setTransform(70.8, 187.1);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f(gColor).s().p("AhCgSIACgFICDAqIgCAFg");
        this.shape_110.setTransform(11.4, 70.6);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f(gColor).s().p("AhBgSIABgFICCAqIgBAFg");
        this.shape_111.setTransform(187.3, 127.7);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f(gColor).s().p("Aghg8IAFgCIA+B6IgFADg");
        this.shape_112.setTransform(141.3, 181.6);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f(gColor).s().p("Ag7giIADgFIB0BLIgDAEg");
        this.shape_113.setTransform(21.8, 48.8);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f(gColor).s().p("Ag6giIACgFIB0BKIgDAFg");
        this.shape_114.setTransform(176.9, 149.5);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f(gColor).s().p("Ag+AdIB6g+IADAFIh7A+g");
        this.shape_115.setTransform(17, 141.1);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f(gColor).s().p("AgnA4IBLhzIAEADIhLBzg");
        this.shape_116.setTransform(49, 176.7);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f(gColor).s().p("AgFBFIAGiJIAFAAIgGCJg");
        this.shape_117.setTransform(94.5, 191.5);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f(gColor).s().p("AhEAAIAAgFICJAGIAAAFg");
        this.shape_118.setTransform(7, 94.3);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f(gColor).s().p("AhFAAIABgFICKAGIgBAFg");
        this.shape_119.setTransform(191.7, 104);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f(gColor).s().p("AgRhCIAEgBIAgCGIgGABg");
        this.shape_120.setTransform(121, 189.1);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f(gColor).s().p("AgxgvIAEgEIBeBjIgDAEg");
        this.shape_121.setTransform(163, 166.2);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f(gColor).s().p("AhDAOICGggIABAFIiGAgg");
        this.shape_122.setTransform(9.5, 120.7);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f(gColor).s().p("AgzAuIBjheIAEADIhkBfg");
        this.shape_123.setTransform(32.3, 162.8);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f(gColor).s().p("AgVBCIAniEIAEACIgmCDg");
        this.shape_124.setTransform(73.1, 187.8);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f(gColor).s().p("AhCgRIABgEICEAmIgBAFg");
        this.shape_125.setTransform(10.7, 72.9);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f(gColor).s().p("AhCgQIABgFICEAnIgBAEg");
        this.shape_126.setTransform(188, 125.4);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f(gColor).s().p("Agig7IAEgCIBBB5IgEACg");
        this.shape_127.setTransform(143.5, 180.4);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f(gColor).s().p("Ag8ghIADgFIB2BIIgDAFg");
        this.shape_128.setTransform(20.6, 50.9);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f(gColor).s().p("Ag8ghIADgFIB2BIIgDAEg");
        this.shape_129.setTransform(178.2, 147.5);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f(gColor).s().p("Ag9AfIB5hBIACAEIh5BBg");
        this.shape_130.setTransform(18.1, 143.3);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f(gColor).s().p("AglA6IBHh2IAEADIhHB2g");
        this.shape_131.setTransform(51.1, 178);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f(gColor).s().p("AgDBFIADiJIAFAAIgFCJg");
        this.shape_132.setTransform(97, 191.6);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f(gColor).s().p("AhFABIAAgEICLADIgBAEg");
        this.shape_133.setTransform(7, 96.7);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f(gColor).s().p("AhFABIAAgEICLADIgBAEg");
        this.shape_134.setTransform(191.8, 101.6);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f(gColor).s().p("AgThBIAEgBIAjCFIgEABg");
        this.shape_135.setTransform(123.3, 188.5);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f(gColor).s().p("AgyguIAEgEIBhBhIgEAEg");
        this.shape_136.setTransform(34, 33.8);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f(gColor).s().p("AgyguIADgEIBiBhIgEAEg");
        this.shape_137.setTransform(164.8, 164.5);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f(gColor).s().p("AhCAQICFgjIABAFIiFAig");
        this.shape_138.setTransform(10.1, 123.1);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f(gColor).s().p("AgyAvIBhhhIAEAEIhhBhg");
        this.shape_139.setTransform(34, 164.5);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f(gColor).s().p("AgTBDIAjiFIAEABIgjCFg");
        this.shape_140.setTransform(75.5, 188.5);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f(gColor).s().p("AhCgPIABgEICFAiIgBAFg");
        this.shape_141.setTransform(10.1, 75.2);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f(gColor).s().p("AhDgOIACgFICFAjIgCAEg");
        this.shape_142.setTransform(188.7, 123.1);

        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f(gColor).s().p("Agkg6IAEgCIBFB3IgFACg");
        this.shape_143.setTransform(145.6, 179.2);

        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f(gColor).s().p("Ag9gfIADgFIB3BEIgCAFg");
        this.shape_144.setTransform(19.3, 52.9);

        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f(gColor).s().p("Ag8gfIACgFIB3BFIgCAEg");
        this.shape_145.setTransform(179.4, 145.4);

        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f(gColor).s().p("Ag9AhIB4hFIACAFIh3BEg");
        this.shape_146.setTransform(19.3, 145.4);

        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f(gColor).s().p("AgkA7IBEh3IAFACIhEB3g");
        this.shape_147.setTransform(53.2, 179.2);

        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f(gColor).s().p("AgCBFIAAiJIAFAAIAACJg");
        this.shape_148.setTransform(99.4, 191.6);

        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f(gColor).s().p("AhEACIAAgDICJAAIAAADg");
        this.shape_149.setTransform(6.9, 99.2);

        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f(gColor).s().p("AhEACIAAgDICJAAIAAADg");
        this.shape_150.setTransform(191.8, 99.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_150 }, { t: this.shape_149 }, { t: this.shape_148 }, { t: this.shape_147 }, { t: this.shape_146 }, { t: this.shape_145 }, { t: this.shape_144 }, { t: this.shape_143 }, { t: this.shape_142 }, { t: this.shape_141 }, { t: this.shape_140 }, { t: this.shape_139 }, { t: this.shape_138 }, { t: this.shape_137 }, { t: this.shape_136 }, { t: this.shape_135 }, { t: this.shape_134 }, { t: this.shape_133 }, { t: this.shape_132 }, { t: this.shape_131 }, { t: this.shape_130 }, { t: this.shape_129 }, { t: this.shape_128 }, { t: this.shape_127 }, { t: this.shape_126 }, { t: this.shape_125 }, { t: this.shape_124 }, { t: this.shape_123 }, { t: this.shape_122 }, { t: this.shape_121 }, { t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.zimtimijloc, new cjs.Rectangle(0, 0, 198.8, 198.6), null);


    (lib.smallestlines = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_7();
        this.instance.parent = this;
        this.instance.setTransform(57.6, 57.3, 1, 1, 0, 0, 0, 57.3, 57.3);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AAAAoIgBhPIABAAIACBPg");
        this.shape.setTransform(59, 110.8);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f(gColor).s().p("AgVggIACgCIApBEIgCABg");
        this.shape_1.setTransform(85.6, 103);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f(gColor).s().p("AgnAAIBPgCIAAACIhPADg");
        this.shape_2.setTransform(4.1, 58.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f(gColor).s().p("AgiAUIBEgpIABACIhEApg");
        this.shape_3.setTransform(11.9, 85.3);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f(gColor).s().p("AgTAjIAlhGIACABIglBGg");
        this.shape_4.setTransform(32, 104.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f(gColor).s().p("AgjgRIABgCIBGAlIgBACg");
        this.shape_5.setTransform(104.6, 82.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f(gColor).s().p("AgMglIADgBIAWBMIgDABg");
        this.shape_6.setTransform(72.8, 108.6);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f(gColor).s().p("AgdgZIACgDIA5A3IgBACg");
        this.shape_7.setTransform(96.4, 94.2);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f(gColor).s().p("AgmAKIBMgVIABACIhMAVg");
        this.shape_8.setTransform(6.2, 72.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f(gColor).s().p("AgcAcIA3g5IABACIg2A5g");
        this.shape_9.setTransform(20.7, 96.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f(gColor).s().p("AgKAnIAShNIADAAIgSBNg");
        this.shape_10.setTransform(45.1, 109.4);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f(gColor).s().p("AgmgHIAAgCIBNARIAAACg");
        this.shape_11.setTransform(109.6, 69.8);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f(gColor).s().p("AgCgnIACAAIADBPIgCAAg");
        this.shape_12.setTransform(60.4, 110.8);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f(gColor).s().p("AgWggIACgCIArBDIgCACg");
        this.shape_13.setTransform(86.7, 102.2);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f(gColor).s().p("AgnABIBPgDIAAACIhPAEg");
        this.shape_14.setTransform(4.1, 60.1);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f(gColor).s().p("AghAVIBCgrIABADIhCAqg");
        this.shape_15.setTransform(12.7, 86.5);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f(gColor).s().p("AgSAkIAjhHIADABIgkBGg");
        this.shape_16.setTransform(33.3, 105);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f(gColor).s().p("AgjgQIABgCIBGAjIgBACg");
        this.shape_17.setTransform(105.3, 81.6);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f(gColor).s().p("AgNglIADgBIAXBMIgBABg");
        this.shape_18.setTransform(74.1, 108.2);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f(gColor).s().p("AgegZIACgCIA7A1IgCACg");
        this.shape_19.setTransform(97.4, 93.1);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f(gColor).s().p("AglALIBLgYIAAADIhLAXg");
        this.shape_20.setTransform(6.7, 73.9);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f(gColor).s().p("AgbAdIA1g7IACACIg1A7g");
        this.shape_21.setTransform(21.8, 97.1);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f(gColor).s().p("AgJAnIAQhOIACABIgPBOg");
        this.shape_22.setTransform(46.5, 109.7);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f(gColor).s().p("AgmgGIAAgDIBNAQIAAADg");
        this.shape_23.setTransform(110, 68.4);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f(gColor).s().p("AgDgnIACAAIAFBPIgCAAg");
        this.shape_24.setTransform(61.8, 110.7);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f(gColor).s().p("AgXgfIACgCIAtBBIgCACg");
        this.shape_25.setTransform(87.9, 101.4);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f(gColor).s().p("AgnACIBPgGIAAADIhPAFg");
        this.shape_26.setTransform(4.2, 61.5);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f(gColor).s().p("AghAWIBBgtIACACIhCAtg");
        this.shape_27.setTransform(13.5, 87.6);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f(gColor).s().p("AgRAkIAhhIIACABIghBIg");
        this.shape_28.setTransform(34.5, 105.6);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f(gColor).s().p("AgkgPIABgDIBIAiIgBACg");
        this.shape_29.setTransform(105.9, 80.4);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f(gColor).s().p("AgNgkIABgBIAaBKIgCABg");
        this.shape_30.setTransform(75.5, 107.8);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f(gColor).s().p("AgegYIABgCIA8AzIgBACg");
        this.shape_31.setTransform(98.3, 92.1);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f(gColor).s().p("AglAMIBKgaIABADIhLAag");
        this.shape_32.setTransform(7.1, 75.2);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f(gColor).s().p("AgaAeIAzg8IACABIgzA8g");
        this.shape_33.setTransform(22.8, 98);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f(gColor).s().p("AgIAnIAOhOIACABIgNBOg");
        this.shape_34.setTransform(47.8, 109.9);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f(gColor).s().p("AgngFIABgDIBOAOIgBACg");
        this.shape_35.setTransform(110.2, 67.1);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f(gColor).s().p("AADAoIgIhPIADAAIAIBPg");
        this.shape_36.setTransform(63.2, 110.6);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f(gColor).s().p("AgYgfIADgBIAuBAIgCABg");
        this.shape_37.setTransform(89, 100.6);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f(gColor).s().p("AgnADIBPgHIAAACIhPAIg");
        this.shape_38.setTransform(4.3, 62.9);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f(gColor).s().p("AggAXIBAgvIABACIhAAvg");
        this.shape_39.setTransform(14.3, 88.8);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f(gColor).s().p("AgRAkIAghIIADABIghBIg");
        this.shape_40.setTransform(35.8, 106.2);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f(gColor).s().p("AgkgOIABgDIBIAgIgBACg");
        this.shape_41.setTransform(106.5, 79.1);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f(gColor).s().p("AgPgkIADgBIAcBKIgCABg");
        this.shape_42.setTransform(76.8, 107.3);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f(gColor).s().p("AgfgXIABgCIA+AxIgCACg");
        this.shape_43.setTransform(99.2, 91);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f(gColor).s().p("AglANIBKgbIABACIhKAbg");
        this.shape_44.setTransform(7.6, 76.5);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f(gColor).s().p("AgZAfIAxg+IACACIgxA9g");
        this.shape_45.setTransform(23.9, 98.9);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f(gColor).s().p("AgHAoIAMhPIADABIgMBOg");
        this.shape_46.setTransform(49.2, 110.2);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f(gColor).s().p("AgngEIAAgDIBPAMIAAADg");
        this.shape_47.setTransform(110.5, 65.7);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f(gColor).s().p("AgFgnIACAAIAJBOIgCABg");
        this.shape_48.setTransform(64.6, 110.4);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f(gColor).s().p("AgZgeIACgCIAxA/IgCACg");
        this.shape_49.setTransform(90.2, 99.8);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f(gColor).s().p("AgnAEIBPgKIAAADIhPAKg");
        this.shape_50.setTransform(4.5, 64.3);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f(gColor).s().p("AggAYIA/gxIACADIg/Avg");
        this.shape_51.setTransform(15.1, 89.9);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f(gColor).s().p("AgPAlIAdhKIACABIgdBKg");
        this.shape_52.setTransform(37.1, 106.8);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f(gColor).s().p("AglgOIABgCIBKAeIgBADg");
        this.shape_53.setTransform(107, 77.8);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f(gColor).s().p("AgPgkIACgBIAdBKIgCABg");
        this.shape_54.setTransform(78.1, 106.8);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f(gColor).s().p("AgggWIACgDIA/AxIgCABg");
        this.shape_55.setTransform(100.1, 89.9);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f(gColor).s().p("AglAOIBJgeIABACIhJAfg");
        this.shape_56.setTransform(8.1, 77.8);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f(gColor).s().p("AgYAfIAvg/IACACIgvA/g");
        this.shape_57.setTransform(25, 99.8);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f(gColor).s().p("AgFAnIAJhOIACAAIgJBPg");
        this.shape_58.setTransform(50.6, 110.4);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f(gColor).s().p("AgngDIAAgDIBPAKIgBADg");
        this.shape_59.setTransform(110.7, 64.3);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f(gColor).s().p("AAFAoIgMhOIADgBIAMBPg");
        this.shape_60.setTransform(66, 110.2);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f(gColor).s().p("AgZgdIACgCIAxA+IgCABg");
        this.shape_61.setTransform(91.3, 98.9);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f(gColor).s().p("AgnAFIBPgMIAAADIhOAMg");
        this.shape_62.setTransform(4.7, 65.7);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f(gColor).s().p("AgfAYIA+gxIABACIg+Axg");
        this.shape_63.setTransform(16, 91);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f(gColor).s().p("AgPAlIAchKIADABIgcBKg");
        this.shape_64.setTransform(38.4, 107.3);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f(gColor).s().p("AglgMIABgCIBKAbIgBACg");
        this.shape_65.setTransform(107.6, 76.5);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f(gColor).s().p("AgRgjIADgBIAgBIIgDABg");
        this.shape_66.setTransform(79.4, 106.2);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f(gColor).s().p("AgggWIABgCIBAAvIgBACg");
        this.shape_67.setTransform(100.9, 88.8);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f(gColor).s().p("AgkAPIBIggIABADIhIAfg");
        this.shape_68.setTransform(8.7, 79.1);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f(gColor).s().p("AgXAgIAuhAIACABIguBAg");
        this.shape_69.setTransform(26.1, 100.6);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f(gColor).s().p("AgEAoIAHhPIACAAIgHBPg");
        this.shape_70.setTransform(52, 110.6);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f(gColor).s().p("AgngCIAAgCIBPAHIAAADg");
        this.shape_71.setTransform(110.8, 62.9);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f(gColor).s().p("AgIgmIADgBIAOBOIgDABg");
        this.shape_72.setTransform(67.3, 109.9);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f(gColor).s().p("AgagdIACgBIAzA8IgCABg");
        this.shape_73.setTransform(92.4, 98);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f(gColor).s().p("AgnAGIBOgOIABADIhOANg");
        this.shape_74.setTransform(4.9, 67.1);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f(gColor).s().p("AgfAZIA9gzIACACIg9Azg");
        this.shape_75.setTransform(16.9, 92.1);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f(gColor).s().p("AgNAlIAZhKIACABIgZBKg");
        this.shape_76.setTransform(39.7, 107.8);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f(gColor).s().p("AglgLIABgDIBKAaIAAADg");
        this.shape_77.setTransform(108, 75.2);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f(gColor).s().p("AgRgjIACgBIAiBIIgCABg");
        this.shape_78.setTransform(80.6, 105.6);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f(gColor).s().p("AghgVIACgCIBBAtIgBACg");
        this.shape_79.setTransform(101.7, 87.6);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f(gColor).s().p("AgkAQIBIgiIABADIhHAhg");
        this.shape_80.setTransform(9.2, 80.4);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f(gColor).s().p("AgXAgIAthBIACACIgtBBg");
        this.shape_81.setTransform(27.2, 101.4);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f(gColor).s().p("AgDAoIAFhPIADAAIgFBPg");
        this.shape_82.setTransform(53.4, 110.7);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f(gColor).s().p("AgngBIAAgDIBPAGIAAACg");
        this.shape_83.setTransform(111, 61.5);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f(gColor).s().p("AgIgmIACgBIAQBOIgDABg");
        this.shape_84.setTransform(68.7, 109.7);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f(gColor).s().p("AgbgcIACgCIA1A7IgCACg");
        this.shape_85.setTransform(93.4, 97.1);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f(gColor).s().p("AgmAHIBNgQIAAADIhNAQg");
        this.shape_86.setTransform(5.2, 68.4);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f(gColor).s().p("AgeAaIA7g1IACACIg7A1g");
        this.shape_87.setTransform(17.8, 93.1);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f(gColor).s().p("AgNAmIAYhMIADABIgYBMg");
        this.shape_88.setTransform(41, 108.2);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f(gColor).s().p("AglgKIAAgDIBLAYIAAACg");
        this.shape_89.setTransform(108.5, 73.9);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f(gColor).s().p("AgSgiIACgBIAjBHIgCAAg");
        this.shape_90.setTransform(81.9, 105);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f(gColor).s().p("AghgTIABgDIBCArIgBACg");
        this.shape_91.setTransform(102.5, 86.5);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f(gColor).s().p("AgjARIBGgjIABACIhGAjg");
        this.shape_92.setTransform(9.9, 81.6);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f(gColor).s().p("AgWAhIArhDIACACIgqBDg");
        this.shape_93.setTransform(28.4, 102.2);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f(gColor).s().p("AgCAoIADhPIACAAIgDBPg");
        this.shape_94.setTransform(54.8, 110.8);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f(gColor).s().p("AgnAAIAAgCIBPADIAAADg");
        this.shape_95.setTransform(111, 60.1);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f(gColor).s().p("AgKgmIADAAIASBNIgDAAg");
        this.shape_96.setTransform(70.1, 109.4);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f(gColor).s().p("AgcgbIACgCIA3A5IgCACg");
        this.shape_97.setTransform(94.4, 96.2);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f(gColor).s().p("AgnAIIBOgRIABACIhOARg");
        this.shape_98.setTransform(5.5, 69.8);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f(gColor).s().p("AgdAbIA5g3IACADIg6A2g");
        this.shape_99.setTransform(18.8, 94.2);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f(gColor).s().p("AgMAmIAWhMIADABIgWBMg");
        this.shape_100.setTransform(42.4, 108.6);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f(gColor).s().p("AgmgJIABgCIBMAVIgBACg");
        this.shape_101.setTransform(108.9, 72.5);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f(gColor).s().p("AgTgiIACgBIAlBGIgCABg");
        this.shape_102.setTransform(83.1, 104.4);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f(gColor).s().p("AgigTIABgCIBEApIgBACg");
        this.shape_103.setTransform(103.2, 85.3);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f(gColor).s().p("AgjASIBGglIABACIhGAlg");
        this.shape_104.setTransform(10.5, 82.9);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f(gColor).s().p("AgVAiIAphEIACACIgpBDg");
        this.shape_105.setTransform(29.6, 103);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f(gColor).s().p("AgBAoIABhPIACAAIgCBPg");
        this.shape_106.setTransform(56.2, 110.8);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f(gColor).s().p("AgnAAIAAgCIBPACIAAADg");
        this.shape_107.setTransform(111.1, 58.7);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f(gColor).s().p("AgLgmIADAAIAUBMIgDABg");
        this.shape_108.setTransform(71.4, 109);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f(gColor).s().p("AgcgbIACgBIA3A3IgBACg");
        this.shape_109.setTransform(95.4, 95.2);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f(gColor).s().p("AgmAKIBNgUIAAACIhMATg");
        this.shape_110.setTransform(5.9, 71.2);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f(gColor).s().p("AgcAbIA3g3IACABIg4A4g");
        this.shape_111.setTransform(19.7, 95.2);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f(gColor).s().p("AgKAmIAUhMIABAAIgTBNg");
        this.shape_112.setTransform(43.7, 109);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f(gColor).s().p("AgmgIIABgCIBMAUIAAABg");
        this.shape_113.setTransform(109.3, 71.2);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f(gColor).s().p("AgUghIACgBIAnBEIgCABg");
        this.shape_114.setTransform(84.3, 103.7);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f(gColor).s().p("AgjgSIABgCIBFAnIgBACg");
        this.shape_115.setTransform(104, 84.1);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f(gColor).s().p("AgiATIBEgnIACACIhFAng");
        this.shape_116.setTransform(11.2, 84.1);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f(gColor).s().p("AgUAiIAnhEIACABIgnBEg");
        this.shape_117.setTransform(30.8, 103.7);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f(gColor).s().p("AAAAoIAAhPIABAAIAABPg");
        this.shape_118.setTransform(57.6, 110.8);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f(gColor).s().p("AgnABIAAgBIBPAAIAAABg");
        this.shape_119.setTransform(4, 57.3);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f(gColor).s().p("AgnABIAAgBIBPAAIAAABg");
        this.shape_120.setTransform(111.1, 57.3);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.smallestlines, new cjs.Rectangle(0, 0, 115.1, 114.9), null);


    (lib.smallline = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_2();
        this.instance.parent = this;
        this.instance.setTransform(68.4, 68.6, 1, 1, 0, 0, 0, 68.4, 68.4);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AlVFVQAAkaDJjHQDHjJEbAAIAAALQkXgBjEDGQjFDEAAEWg");
        this.shape.setTransform(34.5, 34.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.smallline, new cjs.Rectangle(0, 0, 136.7, 136.9), null);


    (lib.smallbold = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_1();
        this.instance.parent = this;
        this.instance.setTransform(35.6, 35.7, 1, 1, 0, 0, 0, 35.6, 35.7);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgfCIQgbhBAAhHQAAhGAbhBQAahBAygyIAOAOQgvAwgYA9QgaA9AABCQAABDAaA9QAYA9AvAwIgOAOQgygzgahAg");
        this.shape.setTransform(6.1, 35.7);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.smallbold, new cjs.Rectangle(0, 0, 71.4, 71.4), null);


    (lib.secondwheel = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_14();
        this.instance.parent = this;
        this.instance.setTransform(253.4, 253.5, 1, 1, 0, 0, 0, 253.4, 253.5);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AhXgGICvgFIAAASIivAFg");
        this.shape.setTransform(12.4, 259.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f(gColor).s().p("AhYgEICwgJIAAASIivAJg");
        this.shape_1.setTransform(12.6, 266);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f(gColor).s().p("AhYgCICvgNIACASIivANg");
        this.shape_2.setTransform(13, 272.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f(gColor).s().p("AhYAAICvgSIABASIitATg");
        this.shape_3.setTransform(13.6, 278.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f(gColor).s().p("AhXACICtgWIACATIitAWg");
        this.shape_4.setTransform(14.4, 284.8);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f(gColor).s().p("AhXAEICsgaIADATIitAag");
        this.shape_5.setTransform(15.3, 291.1);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f(gColor).s().p("AhXAHICsggIADAUIisAfg");
        this.shape_6.setTransform(16.3, 297.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f(gColor).s().p("AhXAJICrgkIAEATIirAkg");
        this.shape_7.setTransform(17.6, 303.5);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f(gColor).s().p("AhXALICqgoIAFATIirAog");
        this.shape_8.setTransform(19, 309.6);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f(gColor).s().p("AhXANICpgsIAGASIipAtg");
        this.shape_9.setTransform(20.5, 315.7);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f(gColor).s().p("AhWAQICogxIAFASIinAxg");
        this.shape_10.setTransform(22.2, 321.8);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f(gColor).s().p("AhWASICng2IAGATIinA1g");
        this.shape_11.setTransform(24.1, 327.8);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f(gColor).s().p("AhVAUIClg6IAGATIilA6g");
        this.shape_12.setTransform(26.1, 333.8);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f(gColor).s().p("AhVAXICkg/IAHATIikA+g");
        this.shape_13.setTransform(28.3, 339.7);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f(gColor).s().p("AhUAZICihDIAHASIihBDg");
        this.shape_14.setTransform(30.6, 345.5);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f(gColor).s().p("AhTAbICfhHIAIASIigBHg");
        this.shape_15.setTransform(33.1, 351.3);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f(gColor).s().p("AhTAdICehLIAJASIieBLg");
        this.shape_16.setTransform(35.7, 357.1);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f(gColor).s().p("AhSAfICchPIAJARIicBQg");
        this.shape_17.setTransform(38.5, 362.7);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f(gColor).s().p("AhRAiICahTIAJAQIiZBUg");
        this.shape_18.setTransform(41.5, 368.3);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f(gColor).s().p("AhQAjICXhXIAKARIiYBXg");
        this.shape_19.setTransform(44.6, 373.8);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f(gColor).s().p("AhPAmICVhcIAKARIiVBbg");
        this.shape_20.setTransform(47.8, 379.2);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f(gColor).s().p("AhOAoICThfIAKAQIiTBfg");
        this.shape_21.setTransform(51.1, 384.5);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f(gColor).s().p("AhNAqICQhjIALAQIiQBjg");
        this.shape_22.setTransform(54.6, 389.8);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f(gColor).s().p("AhMAsICOhnIALAQIiOBng");
        this.shape_23.setTransform(58.3, 394.9);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f(gColor).s().p("AhLAuICLhqIAMAPIiLBqg");
        this.shape_24.setTransform(62, 400);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f(gColor).s().p("AhJAwICHhuIAMAPIiIBug");
        this.shape_25.setTransform(66, 404.9);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f(gColor).s().p("AhIAyICFhyIAMAPIiFByg");
        this.shape_26.setTransform(70, 409.8);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f(gColor).s().p("AhHA0ICCh1IANAOIiCB1g");
        this.shape_27.setTransform(74.1, 414.5);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f(gColor).s().p("AhGA2ICAh5IAMAPIh+B4g");
        this.shape_28.setTransform(78.4, 419.1);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f(gColor).s().p("AhEA3IB7h7IAOANIh7B8g");
        this.shape_29.setTransform(82.8, 423.7);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f(gColor).s().p("AhGg1IAOgOIB+B5IgMAOg");
        this.shape_30.setTransform(78.4, 87.7);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f(gColor).s().p("AhDA5IB5h/IAOAOIh5B/g");
        this.shape_31.setTransform(87.3, 428.1);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f(gColor).s().p("AhHgyIANgPICCB0IgNAPg");
        this.shape_32.setTransform(74.1, 92.3);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f(gColor).s().p("AhBA7IB1iCIAOANIh1CCg");
        this.shape_33.setTransform(92, 432.3);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f(gColor).s().p("AhIgxIAMgPICFByIgMAOg");
        this.shape_34.setTransform(70, 97.1);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f(gColor).s().p("AhAA9IBxiFIAQAMIhyCFg");
        this.shape_35.setTransform(96.7, 436.5);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f(gColor).s().p("AhJgvIALgPICIBuIgMAPg");
        this.shape_36.setTransform(66, 101.9);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f(gColor).s().p("Ag+A+IBuiIIAPANIhuCIg");
        this.shape_37.setTransform(101.6, 440.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f(gColor).s().p("AhLgtIAMgPICLBqIgMAPg");
        this.shape_38.setTransform(62, 106.8);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f(gColor).s().p("Ag8BAIBqiLIAPAMIhqCLg");
        this.shape_39.setTransform(106.5, 444.4);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f(gColor).s().p("AhMgrIALgQICOBnIgLAQg");
        this.shape_40.setTransform(58.3, 111.9);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f(gColor).s().p("Ag7BBIBniNIAQAMIhnCNg");
        this.shape_41.setTransform(111.5, 448.2);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f(gColor).s().p("AhNgpIALgQICQBjIgLAQg");
        this.shape_42.setTransform(54.6, 117);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f(gColor).s().p("Ag5BDIBjiQIAQALIhjCQg");
        this.shape_43.setTransform(116.7, 451.8);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f(gColor).s().p("AhOgnIAKgQICTBfIgKAQg");
        this.shape_44.setTransform(51.1, 122.3);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f(gColor).s().p("Ag3BFIBfiTIAQAKIhfCTg");
        this.shape_45.setTransform(121.9, 455.3);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f(gColor).s().p("AhPglIAKgQICVBbIgKAQg");
        this.shape_46.setTransform(47.8, 127.6);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f(gColor).s().p("Ag2BGIBbiVIARAKIhaCVg");
        this.shape_47.setTransform(127.3, 458.7);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f(gColor).s().p("AhQgjIAJgQICYBXIgKAQg");
        this.shape_48.setTransform(44.6, 133);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f(gColor).s().p("Ag0BHIBYiXIARAJIhYCYg");
        this.shape_49.setTransform(132.7, 461.9);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f(gColor).s().p("AhRghIAKgRICZBTIgJASg");
        this.shape_50.setTransform(41.5, 138.5);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f(gColor).s().p("AgxBJIBTiaIARAJIhUCag");
        this.shape_51.setTransform(138.2, 465);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f(gColor).s().p("AhSgeIAJgRICcBPIgJAQg");
        this.shape_52.setTransform(38.5, 144.1);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f(gColor).s().p("AgwBKIBQicIARAJIhPCcg");
        this.shape_53.setTransform(143.8, 467.9);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f(gColor).s().p("AhTgcIAJgRICeBKIgJARg");
        this.shape_54.setTransform(35.7, 149.8);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f(gColor).s().p("AguBLIBLieIARAJIhKCeg");
        this.shape_55.setTransform(149.4, 470.7);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f(gColor).s().p("AhTgaIAHgSICgBHIgIASg");
        this.shape_56.setTransform(33.1, 155.5);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f(gColor).s().p("AgsBNIBHihIASAJIhHCgg");
        this.shape_57.setTransform(155.1, 473.4);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f(gColor).s().p("AhUgYIAIgSIChBDIgHASg");
        this.shape_58.setTransform(30.6, 161.3);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f(gColor).s().p("AgqBOIBDiiIASAHIhDCig");
        this.shape_59.setTransform(160.9, 475.9);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f(gColor).s().p("AhVgWIAHgSICkA+IgHATg");
        this.shape_60.setTransform(28.3, 167.1);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f(gColor).s().p("AgoBPIA+ikIATAHIg/Ckg");
        this.shape_61.setTransform(166.8, 478.2);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f(gColor).s().p("AhVgUIAGgSIClA6IgGASg");
        this.shape_62.setTransform(26.1, 173.1);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f(gColor).s().p("AglBQIA5ilIASAGIg5Clg");
        this.shape_63.setTransform(172.7, 480.4);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f(gColor).s().p("AhWgRIAGgSICnA1IgGATg");
        this.shape_64.setTransform(24.1, 179);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f(gColor).s().p("AgkBRIA2inIASAGIg1Cng");
        this.shape_65.setTransform(178.7, 482.4);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f(gColor).s().p("AhWgPIAGgSICnAxIgFASg");
        this.shape_66.setTransform(22.2, 185);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f(gColor).s().p("AghBSIAxioIASAFIgxCog");
        this.shape_67.setTransform(184.7, 484.3);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f(gColor).s().p("AhXgMIAGgTICpAtIgGASg");
        this.shape_68.setTransform(20.5, 191.1);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f(gColor).s().p("AgfBSIAtipIASAFIgsCqg");
        this.shape_69.setTransform(190.7, 486);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f(gColor).s().p("AhXgKIAEgTICrAoIgFATg");
        this.shape_70.setTransform(19, 197.2);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f(gColor).s().p("AgdBUIAoirIATAFIgoCqg");
        this.shape_71.setTransform(196.9, 487.5);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f(gColor).s().p("AhXgIIAEgTICrAkIgEATg");
        this.shape_72.setTransform(17.6, 203.4);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f(gColor).s().p("AgbBUIAkirIATAEIgkCrg");
        this.shape_73.setTransform(203, 488.9);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f(gColor).s().p("AhXgFIADgUICsAgIgDATg");
        this.shape_74.setTransform(16.3, 209.5);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f(gColor).s().p("AgZBUIAfisIAUAEIggCtg");
        this.shape_75.setTransform(209.2, 490.2);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f(gColor).s().p("AhXgDIACgTICtAaIgDAUg");
        this.shape_76.setTransform(15.3, 215.8);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f(gColor).s().p("AgWBVIAaisIATACIgaCug");
        this.shape_77.setTransform(215.4, 491.2);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f(gColor).s().p("AhXgBIACgTICtAWIgCATg");
        this.shape_78.setTransform(14.4, 222);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f(gColor).s().p("AgUBWIAWitIATACIgWCug");
        this.shape_79.setTransform(221.6, 492.1);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f(gColor).s().p("AhYABIADgTICtASIgBATg");
        this.shape_80.setTransform(13.6, 228.2);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f(gColor).s().p("AgSBXIASivIATACIgSCvg");
        this.shape_81.setTransform(227.9, 492.9);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f(gColor).s().p("AhYADIACgSICvANIgCASg");
        this.shape_82.setTransform(13, 234.5);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f(gColor).s().p("AgQBXIAPivIASACIgOCvg");
        this.shape_83.setTransform(234.2, 493.4);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f(gColor).s().p("AhYAFIABgSICvAJIAAASg");
        this.shape_84.setTransform(12.6, 240.8);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f(gColor).s().p("AgOBYIAKiwIASABIgJCwg");
        this.shape_85.setTransform(240.5, 493.9);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f(gColor).s().p("AhXAHIAAgSICvAFIAAASg");
        this.shape_86.setTransform(12.4, 247.1);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f(gColor).s().p("AgLBYIAEivIATAAIgECvg");
        this.shape_87.setTransform(246.8, 494.1);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f(gColor).s().p("AhXAKIAAgTICvAAIAAATg");
        this.shape_88.setTransform(12.3, 253.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.secondwheel, new cjs.Rectangle(0, 0, 506.9, 506.9), null);


    (lib.secondline = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_9();
        this.instance.parent = this;
        this.instance.setTransform(208, 208, 1, 1, 0, 0, 0, 208, 208);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AwEQFQAAmdCcl4QCbl2EkkkQEjkjF3ibQF3icGdAAIAAAUQmeAAl7CgQlsCbkbEaQkaEbibFsQigF7AAGeg");
        this.shape.setTransform(104.3, 104.4);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.secondline, new cjs.Rectangle(0, 0, 416.1, 416), null);


    (lib.biggestline = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_13();
        this.instance.parent = this;
        this.instance.setTransform(287.9, 287.9, 1, 1, 0, 0, 0, 287.9, 287.9);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AjeRHQjZoKAAo9QAAo8DZoLQDYoKGVmWIApApQmOGOjSIAQjVH/AAIxQAAIxDVIAQDSIAGOGNIgpAqQmVmWjYoLg");
        this.shape.setTransform(45.3, 288.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.biggestline, new cjs.Rectangle(0, 0, 575.9, 575.8), null);


    (lib._7thstroke = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_11();
        this.instance.parent = this;
        this.instance.setTransform(67.8, 67.8, 1, 1, 0, 0, 0, 67.8, 67.8);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AkCA+Qh7gzhghfIAcgcQBaBbB0AvQB1AwB+AAQCAAAB0gwQB0gvBahbIAcAcQhgBfh7AzQh8AziHAAQiHAAh7gzg");
        this.shape.setTransform(67.5, 124);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib._7thstroke, new cjs.Rectangle(0, 0, 135.6, 135.5), null);


    (lib._6tstroke = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_10();
        this.instance.parent = this;
        this.instance.setTransform(132.1, 132.1, 1, 1, 0, 0, 0, 132.1, 132.1);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AHbg+Qjkhdj3AAQj3AAjjBdQjtBei1C2IgpgqQC+i8D2hkQDwhhEBAAQECAADwBhQD3BkC9C8IgpAqQi1i2jtheg");
        this.shape.setTransform(131.8, 21.5);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib._6tstroke, new cjs.Rectangle(0, 0, 264.2, 264.2), null);


    (lib._5tline = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_3();
        this.instance.parent = this;
        this.instance.setTransform(149.7, 150.5, 1, 1, 0, 0, 0, 149.7, 149.7);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AIzhYQkNhwkmAAQkmAAkMBwQkNBujRDRIgVgVQDVjUEShyQEShyEsAAQEtAAESByQESByDVDUIgWAVQjQjRkNhug");
        this.shape.setTransform(149.1, 23.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib._5tline, new cjs.Rectangle(0, 0, 299.4, 300.1), null);


    (lib._5line = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_5();
        this.instance.parent = this;
        this.instance.setTransform(108.8, 108.8, 1, 1, 0, 0, 0, 108.8, 108.8);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AB/HMQjFhSiaiaQiZiZhTjFQhRjGAAjZIAUAAQAADXBUDHQBQC9CUCUQCTCTC+BRQDGBUDYAAIAAAUQjZAAjGhSg");
        this.shape.setTransform(54.7, 162.9);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib._5line, new cjs.Rectangle(0, 0, 217.6, 217.5), null);


    (lib._4tline = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_12();
        this.instance.parent = this;
        this.instance.setTransform(30.6, 130.3, 1, 1, 0, 0, 0, 130.3, 130.3);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("ACRIkQjphii0i1Qi0i0hjjoQhnjyAAkJIAUAAQAAEFBlDuQBhDlCyCyQCxCxDlBiQDuBlEFAAIAAATQkJAAjxhng");
        this.shape.setTransform(65.1, 194.8);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib._4tline, new cjs.Rectangle(0, 0, 261, 260.7), null);


    (lib._3dzimti = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_8();
        this.instance.parent = this;
        this.instance.setTransform(489.3, 189.4, 1, 1, 0, 0, 0, 189.3, 189.3);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AhCByIB9joIAJAGIh+Dng");
        this.shape.setTransform(272.9, 34.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f(gColor).s().p("AhCByIB9jnIAIAEIh9Dng");
        this.shape_1.setTransform(104.8, 344.2);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f(gColor).s().p("AhdBdIC0i/IAIAHIi1C+g");
        this.shape_2.setTransform(310.1, 61.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f(gColor).s().p("AheBdIC2i/IAGAGIi1C/g");
        this.shape_3.setTransform(67.6, 317.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f(gColor).s().p("AgiB/IA9kAIAJADIg9EAg");
        this.shape_4.setTransform(230, 18.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f(gColor).s().p("AgjCAIA9kBIAKADIg9D/g");
        this.shape_5.setTransform(147.7, 360.7);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f(gColor).s().p("Ag/BzIB3jqIAIAFIh3Dqg");
        this.shape_6.setTransform(268.8, 32.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f(gColor).s().p("Ag/B0IB3jrIAIAFIh3Dqg");
        this.shape_7.setTransform(108.9, 346.3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f(gColor).s().p("AhbBfICwjDIAHAGIiwDDg");
        this.shape_8.setTransform(306.7, 58.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f(gColor).s().p("AhbBfICwjEIAHAHIivDEg");
        this.shape_9.setTransform(71, 320.3);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f(gColor).s().p("AgfCAIA2kBIAJACIg2EBg");
        this.shape_10.setTransform(225.5, 17.1);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f(gColor).s().p("AgfCAIA2kBIAJACIg2EBg");
        this.shape_11.setTransform(152.2, 361.7);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f(gColor).s().p("Ag8B1IBxjtIAIAEIhwDtg");
        this.shape_12.setTransform(264.7, 30.4);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f(gColor).s().p("Ag8B1IBwjtIAJAEIhxDtg");
        this.shape_13.setTransform(113, 348.4);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f(gColor).s().p("AhZBhICrjIIAHAHIiqDIg");
        this.shape_14.setTransform(303.3, 55.4);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f(gColor).s().p("AhZBhICrjIIAHAHIiqDIg");
        this.shape_15.setTransform(74.5, 323.3);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f(gColor).s().p("AgcCBIAvkDIAKACIgvEDg");
        this.shape_16.setTransform(221, 16.2);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f(gColor).s().p("AgcCBIAvkDIAKACIgvEDg");
        this.shape_17.setTransform(156.7, 362.6);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f(gColor).s().p("Ag5B3IBrjxIAIAEIhqDwg");
        this.shape_18.setTransform(260.5, 28.5);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f(gColor).s().p("Ag5B3IBrjxIAIAFIhqDvg");
        this.shape_19.setTransform(117.2, 350.3);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f(gColor).s().p("AhWBkICmjNIAHAGIimDNg");
        this.shape_20.setTransform(299.7, 52.5);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f(gColor).s().p("AhWBkICljNIAIAGIilDNg");
        this.shape_21.setTransform(78, 326.3);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f(gColor).s().p("AgZCCIApkEIAJABIgoEEg");
        this.shape_22.setTransform(216.4, 15.4);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f(gColor).s().p("AgZCCIApkEIAKABIgpEEg");
        this.shape_23.setTransform(161.3, 363.4);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f(gColor).s().p("Ag2B4IBkjzIAJAEIhkDzg");
        this.shape_24.setTransform(256.3, 26.6);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f(gColor).s().p("Ag2B4IBkjzIAJAEIhkDzg");
        this.shape_25.setTransform(121.5, 352.1);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f(gColor).s().p("AhTBmICgjRIAHAGIifDRg");
        this.shape_26.setTransform(296.1, 49.6);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f(gColor).s().p("AhTBmICfjRIAIAGIigDRg");
        this.shape_27.setTransform(81.6, 329.1);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f(gColor).s().p("AgVCCIAhkFIAKACIgiEFg");
        this.shape_28.setTransform(211.9, 14.7);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f(gColor).s().p("AgVCCIAikFIAJACIgiEFg");
        this.shape_29.setTransform(165.9, 364);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f(gColor).s().p("AgzB6IBej2IAJAEIheD1g");
        this.shape_30.setTransform(252, 24.9);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f(gColor).s().p("AgzB6IBej2IAJADIheD2g");
        this.shape_31.setTransform(125.7, 353.8);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f(gColor).s().p("AhQBoICajVIAIAGIibDVg");
        this.shape_32.setTransform(292.4, 46.9);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f(gColor).s().p("AhQBoICajVIAIAGIibDVg");
        this.shape_33.setTransform(85.3, 331.9);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f(gColor).s().p("AgRCDIAakGIAKABIgbEGg");
        this.shape_34.setTransform(207.3, 14.2);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f(gColor).s().p("AgSCDIAbkGIAKACIgbEFg");
        this.shape_35.setTransform(170.4, 364.6);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f(gColor).s().p("AgwB7IBYj4IAJADIhYD4g");
        this.shape_36.setTransform(247.7, 23.3);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f(gColor).s().p("AgwB7IBXj4IAJADIhXD4g");
        this.shape_37.setTransform(130.1, 355.4);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f(gColor).s().p("AhOBqICVjZIAIAGIiVDYg");
        this.shape_38.setTransform(288.6, 44.2);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f(gColor).s().p("AhOBqICVjZIAIAGIiVDYg");
        this.shape_39.setTransform(89.1, 334.6);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f(gColor).s().p("AgOCDIATkGIAKABIgUEGg");
        this.shape_40.setTransform(202.7, 13.8);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f(gColor).s().p("AgOCDIAUkGIAJABIgUEGg");
        this.shape_41.setTransform(175, 365);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f(gColor).s().p("AgsB8IBQj6IAJADIhQD6g");
        this.shape_42.setTransform(243.3, 21.8);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f(gColor).s().p("AgtB8IBRj6IAJADIhQD6g");
        this.shape_43.setTransform(134.4, 356.9);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f(gColor).s().p("AhLBsICPjcIAIAEIiPDdg");
        this.shape_44.setTransform(284.8, 41.7);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f(gColor).s().p("AhLBsICPjcIAIAFIiPDdg");
        this.shape_45.setTransform(92.9, 337.1);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f(gColor).s().p("AgLCEIANkHIAKAAIgNEHg");
        this.shape_46.setTransform(198.1, 13.5);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f(gColor).s().p("AgLCEIANkHIAKAAIgNEHg");
        this.shape_47.setTransform(179.6, 365.3);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f(gColor).s().p("AgpB+IBKj9IAJADIhKD8g");
        this.shape_48.setTransform(238.9, 20.5);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f(gColor).s().p("AgpB9IBKj8IAJADIhKD8g");
        this.shape_49.setTransform(138.8, 358.3);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f(gColor).s().p("AhIBuICJjgIAIAFIiJDgg");
        this.shape_50.setTransform(280.9, 39.2);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f(gColor).s().p("AhIBuICJjgIAIAFIiJDgg");
        this.shape_51.setTransform(96.8, 339.6);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f(gColor).s().p("AgHCEIAGkHIAJAAIgHEHg");
        this.shape_52.setTransform(193.5, 13.3);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f(gColor).s().p("AgHCEIAHkHIAIAAIgHEHg");
        this.shape_53.setTransform(184.2, 365.5);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f(gColor).s().p("AhgBaIC6i6IAHAHIi6C6g");
        this.shape_54.setTransform(313.4, 64.8);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f(gColor).s().p("AhgBaIC6i6IAHAHIi6C6g");
        this.shape_55.setTransform(64.3, 313.9);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f(gColor).s().p("AgmB+IBDj+IAKADIhDD+g");
        this.shape_56.setTransform(234.5, 19.2);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f(gColor).s().p("AgmB+IBEj+IAJADIhED+g");
        this.shape_57.setTransform(143.3, 359.5);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f(gColor).s().p("AhFBwICDjkIAIAFIiDDkg");
        this.shape_58.setTransform(276.9, 36.8);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f(gColor).s().p("AhFBwICDjkIAIAFIiDDkg");
        this.shape_59.setTransform(100.8, 341.9);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f(gColor).s().p("AgECEIAAkHIAJAAIAAEHg");
        this.shape_60.setTransform(188.9, 13.2);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f(gColor).s().p("AgECEIAAkHIAJAAIAAEHg");
        this.shape_61.setTransform(188.9, 365.5);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f(gColor).s().p("AiDAAIEHgHIAAAJIkHAGg");
        this.shape_62.setTransform(365, 184.7);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f(gColor).s().p("AhyBBIDgiJIAFAIIjgCJg");
        this.shape_63.setTransform(339.1, 97.3);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f(gColor).s().p("AAACEIgHkHIAIAAIAHEHg");
        this.shape_64.setTransform(193.5, 365.5);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f(gColor).s().p("AhIhtIAIgFICJDgIgIAFg");
        this.shape_65.setTransform(280.9, 339.6);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f(gColor).s().p("Ah1g6IAEgIIDnB9IgEAIg");
        this.shape_66.setTransform(343.7, 273.4);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f(gColor).s().p("AhCByIB9joIAJAGIh+Dng");
        this.shape_67.setTransform(104.8, 344.2);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f(gColor).s().p("AhCBxIB9jnIAIAFIh9Dog");
        this.shape_68.setTransform(272.9, 34.6);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f(gColor).s().p("Ah/AhID9hKIACAJIj8BKg");
        this.shape_69.setTransform(357.8, 139.3);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f(gColor).s().p("AheBdIC2i/IAGAHIi1C+g");
        this.shape_70.setTransform(67.6, 317.1);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f(gColor).s().p("AhdBcIC0i+IAIAGIi1C/g");
        this.shape_71.setTransform(310.1, 61.6);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f(gColor).s().p("Agph8IAJgDIBKD8IgJADg");
        this.shape_72.setTransform(238.9, 358.3);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f(gColor).s().p("AhihXIAHgHIC+C1IgGAHg");
        this.shape_73.setTransform(316.6, 310.6);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f(gColor).s().p("AiBgZIACgKIEBA9IgCAKg");
        this.shape_74.setTransform(360.2, 230.5);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f(gColor).s().p("AgiCAIA8kBIAJADIg8D/g");
        this.shape_75.setTransform(147.8, 360.7);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f(gColor).s().p("AgjB/IA9j/IAKACIg9EAg");
        this.shape_76.setTransform(230, 18.1);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f(gColor).s().p("AiDACIEHgNIAAAKIkHANg");
        this.shape_77.setTransform(364.8, 180.1);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f(gColor).s().p("AhxBEIDdiPIAFAIIjcCPg");
        this.shape_78.setTransform(336.6, 93.4);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f(gColor).s().p("AgLiDIAKAAIANEHIgKAAg");
        this.shape_79.setTransform(198.1, 365.3);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f(gColor).s().p("AhLhrIAIgFICPDcIgIAGg");
        this.shape_80.setTransform(284.8, 337.1);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f(gColor).s().p("Ah3g3IAEgIIDrB3IgEAIg");
        this.shape_81.setTransform(345.8, 269.3);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f(gColor).s().p("Ag/BzIB3jqIAIAFIh3Dqg");
        this.shape_82.setTransform(108.9, 346.3);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f(gColor).s().p("Ag/BzIB3jqIAIAFIh3Dqg");
        this.shape_83.setTransform(268.8, 32.4);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f(gColor).s().p("Ah+AkID6hQIADAJIj6BQg");
        this.shape_84.setTransform(356.4, 134.9);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f(gColor).s().p("AhbBfICvjDIAIAGIiwDDg");
        this.shape_85.setTransform(71, 320.3);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f(gColor).s().p("AhbBfICwjDIAHAGIiwDDg");
        this.shape_86.setTransform(306.8, 58.5);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f(gColor).s().p("Agth7IAJgDIBRD6IgJADg");
        this.shape_87.setTransform(243.3, 356.9);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f(gColor).s().p("AhkhUIAGgHIDDCwIgGAHg");
        this.shape_88.setTransform(319.8, 307.3);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f(gColor).s().p("AiBgWIACgJIEBA2IgCAJg");
        this.shape_89.setTransform(361.2, 226);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f(gColor).s().p("AgfCAIA2kBIAJACIg2EBg");
        this.shape_90.setTransform(152.2, 361.7);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f(gColor).s().p("AgfCAIA2kBIAJACIg2EBg");
        this.shape_91.setTransform(225.5, 17);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f(gColor).s().p("AiDAGIEGgUIABAKIkGATg");
        this.shape_92.setTransform(364.5, 175.5);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f(gColor).s().p("AhvBHIDZiVIAGAIIjZCVg");
        this.shape_93.setTransform(334, 89.6);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f(gColor).s().p("AgOiCIAJgBIAUEGIgJABg");
        this.shape_94.setTransform(202.7, 365);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f(gColor).s().p("AhOhpIAIgGICVDZIgIAGg");
        this.shape_95.setTransform(288.6, 334.5);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f(gColor).s().p("Ah5gzIAFgJIDtBxIgEAIg");
        this.shape_96.setTransform(347.9, 265.2);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f(gColor).s().p("Ag8B1IBwjtIAJAEIhxDug");
        this.shape_97.setTransform(113, 348.4);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f(gColor).s().p("Ag8B1IBxjuIAIAFIhwDtg");
        this.shape_98.setTransform(264.7, 30.4);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f(gColor).s().p("Ah9AoID4hXIADAJIj4BXg");
        this.shape_99.setTransform(354.9, 130.6);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f(gColor).s().p("AhZBiICrjJIAHAGIiqDIg");
        this.shape_100.setTransform(74.5, 323.3);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f(gColor).s().p("AhZBhICrjHIAHAFIiqDJg");
        this.shape_101.setTransform(303.3, 55.4);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f(gColor).s().p("Agwh6IAJgDIBYD4IgKADg");
        this.shape_102.setTransform(247.7, 355.4);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f(gColor).s().p("AhnhRIAHgHIDHCqIgGAIg");
        this.shape_103.setTransform(322.8, 303.8);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f(gColor).s().p("AiCgSIACgKIEDAvIgCAKg");
        this.shape_104.setTransform(362.1, 221.5);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f(gColor).s().p("AgcCBIAwkDIAJACIgwEDg");
        this.shape_105.setTransform(156.8, 362.6);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f(gColor).s().p("AgcCBIAvkDIAKACIgvEDg");
        this.shape_106.setTransform(221, 16.1);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f(gColor).s().p("AiDAJIEGgbIABAKIkGAag");
        this.shape_107.setTransform(364.1, 171);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f(gColor).s().p("AhtBKIDViaIAGAIIjVCZg");
        this.shape_108.setTransform(331.4, 85.8);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f(gColor).s().p("AgSiCIAKgBIAbEGIgKABg");
        this.shape_109.setTransform(207.3, 364.6);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f(gColor).s().p("AhQhnIAHgGICbDVIgIAGg");
        this.shape_110.setTransform(292.4, 331.9);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f(gColor).s().p("Ah6gxIAEgIIDxBqIgEAJg");
        this.shape_111.setTransform(349.8, 261);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f(gColor).s().p("Ag5B3IBrjxIAIAEIhqDxg");
        this.shape_112.setTransform(117.2, 350.3);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f(gColor).s().p("Ag5B3IBrjxIAIAEIhqDxg");
        this.shape_113.setTransform(260.5, 28.4);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f(gColor).s().p("Ah8ArID2heIADAJIj1Beg");
        this.shape_114.setTransform(353.3, 126.2);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f(gColor).s().p("AhWBjICljMIAIAGIilDNg");
        this.shape_115.setTransform(78, 326.3);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f(gColor).s().p("AhWBjICljMIAIAGIilDNg");
        this.shape_116.setTransform(299.7, 52.5);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f(gColor).s().p("Agzh5IAJgDIBeD1IgJAEg");
        this.shape_117.setTransform(252, 353.8);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f(gColor).s().p("AhphOIAGgIIDNCmIgHAHg");
        this.shape_118.setTransform(325.8, 300.2);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f(gColor).s().p("AiCgPIABgJIEEAoIgBAJg");
        this.shape_119.setTransform(362.8, 216.9);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f(gColor).s().p("AgZCCIApkEIAKABIgpEEg");
        this.shape_120.setTransform(161.3, 363.3);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f(gColor).s().p("AgZCCIApkEIAJABIgnEEg");
        this.shape_121.setTransform(216.4, 15.4);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f(gColor).s().p("AiDAMIEFghIABAKIkFAhg");
        this.shape_122.setTransform(363.5, 166.4);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f(gColor).s().p("AhrBMIDRifIAGAHIjRCgg");
        this.shape_123.setTransform(328.6, 82.1);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f(gColor).s().p("AgViBIAJgCIAiEGIgKABg");
        this.shape_124.setTransform(211.9, 364);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f(gColor).s().p("AhThlIAIgGICfDRIgHAGg");
        this.shape_125.setTransform(296.1, 329.1);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f(gColor).s().p("Ah7gtIAEgJIDzBlIgDAIg");
        this.shape_126.setTransform(351.6, 256.8);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f(gColor).s().p("Ag2B4IBkjzIAJAEIhkDzg");
        this.shape_127.setTransform(121.5, 352.1);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f(gColor).s().p("Ag2B5IBkj0IAJAEIhkDzg");
        this.shape_128.setTransform(256.3, 26.6);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f(gColor).s().p("Ah7AuID0hkIADAJIjzBkg");
        this.shape_129.setTransform(351.6, 122);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f(gColor).s().p("AhTBmICgjRIAHAGIigDRg");
        this.shape_130.setTransform(81.6, 329.1);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f(gColor).s().p("AhTBmICgjRIAHAGIifDRg");
        this.shape_131.setTransform(296.1, 49.6);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f(gColor).s().p("Ag2h3IAJgEIBkDzIgJAEg");
        this.shape_132.setTransform(256.3, 352.1);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f(gColor).s().p("AhrhLIAGgIIDRCgIgGAHg");
        this.shape_133.setTransform(328.6, 296.6);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f(gColor).s().p("AiDgLIABgKIEFAhIgBAKg");
        this.shape_134.setTransform(363.5, 212.4);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f(gColor).s().p("AgVCDIAikGIAJACIgiEFg");
        this.shape_135.setTransform(165.9, 364);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f(gColor).s().p("AgVCCIAhkFIAKABIgiEGg");
        this.shape_136.setTransform(211.9, 14.7);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f(gColor).s().p("AiCAQIEEgoIABAJIkEAog");
        this.shape_137.setTransform(362.8, 161.8);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f(gColor).s().p("AhpBQIDMimIAHAIIjNClg");
        this.shape_138.setTransform(325.8, 78.5);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f(gColor).s().p("AgZiBIALgBIAnEEIgJABg");
        this.shape_139.setTransform(216.4, 363.3);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f(gColor).s().p("AhWhjIAIgGIClDMIgHAHg");
        this.shape_140.setTransform(299.7, 326.3);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f(gColor).s().p("Ah8gqIAEgJID1BeIgDAJg");
        this.shape_141.setTransform(353.3, 252.5);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f(gColor).s().p("AgzB5IBej1IAJADIheD2g");
        this.shape_142.setTransform(125.7, 353.8);

        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f(gColor).s().p("AgzB6IBej2IAJAEIheD1g");
        this.shape_143.setTransform(252, 24.9);

        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f(gColor).s().p("Ah6AyIDxhrIAEAJIjxBqg");
        this.shape_144.setTransform(349.8, 117.7);

        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f(gColor).s().p("AhQBoICajVIAIAGIibDVg");
        this.shape_145.setTransform(85.3, 331.9);

        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f(gColor).s().p("AhQBoICajVIAIAGIibDVg");
        this.shape_146.setTransform(292.4, 46.8);

        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f(gColor).s().p("Ag5h2IAJgEIBqDxIgIAEg");
        this.shape_147.setTransform(260.5, 350.3);

        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f(gColor).s().p("AhthJIAGgIIDVCaIgGAIg");
        this.shape_148.setTransform(331.4, 292.9);

        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f(gColor).s().p("AiDgIIABgKIEGAbIgBAKg");
        this.shape_149.setTransform(364.1, 207.8);

        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f(gColor).s().p("AgRCDIAakGIAKABIgbEGg");
        this.shape_150.setTransform(170.5, 364.6);

        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f(gColor).s().p("AgSCDIAbkGIAKABIgbEGg");
        this.shape_151.setTransform(207.3, 14.2);

        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f(gColor).s().p("AiCAUIEDgwIACAKIkDAvg");
        this.shape_152.setTransform(362.1, 157.3);

        this.shape_153 = new cjs.Shape();
        this.shape_153.graphics.f(gColor).s().p("AhnBSIDIirIAGAIIjHCqg");
        this.shape_153.setTransform(322.8, 75);

        this.shape_154 = new cjs.Shape();
        this.shape_154.graphics.f(gColor).s().p("AgciAIAKgCIAvEDIgKACg");
        this.shape_154.setTransform(221, 362.6);

        this.shape_155 = new cjs.Shape();
        this.shape_155.graphics.f(gColor).s().p("AhZhhIAIgGICqDJIgHAFg");
        this.shape_155.setTransform(303.3, 323.3);

        this.shape_156 = new cjs.Shape();
        this.shape_156.graphics.f(gColor).s().p("Ah9gnIADgJID4BXIgDAKg");
        this.shape_156.setTransform(354.9, 248.2);

        this.shape_157 = new cjs.Shape();
        this.shape_157.graphics.f(gColor).s().p("AgwB7IBXj4IAJADIhXD4g");
        this.shape_157.setTransform(130.1, 355.4);

        this.shape_158 = new cjs.Shape();
        this.shape_158.graphics.f(gColor).s().p("AgwB7IBYj4IAJADIhYD4g");
        this.shape_158.setTransform(247.7, 23.3);

        this.shape_159 = new cjs.Shape();
        this.shape_159.graphics.f(gColor).s().p("Ah5A0IDuhwIAEAIIjtBxg");
        this.shape_159.setTransform(347.9, 113.5);

        this.shape_160 = new cjs.Shape();
        this.shape_160.graphics.f(gColor).s().p("AhOBqICVjZIAIAGIiVDZg");
        this.shape_160.setTransform(89.1, 334.5);

        this.shape_161 = new cjs.Shape();
        this.shape_161.graphics.f(gColor).s().p("AhOBqICVjZIAIAGIiVDZg");
        this.shape_161.setTransform(288.6, 44.2);

        this.shape_162 = new cjs.Shape();
        this.shape_162.graphics.f(gColor).s().p("Ag8h0IAJgEIBwDtIgIAFg");
        this.shape_162.setTransform(264.7, 348.4);

        this.shape_163 = new cjs.Shape();
        this.shape_163.graphics.f(gColor).s().p("AhvhGIAGgIIDZCVIgGAIg");
        this.shape_163.setTransform(334, 289.1);

        this.shape_164 = new cjs.Shape();
        this.shape_164.graphics.f(gColor).s().p("AiDgFIABgJIEGAUIgBAJg");
        this.shape_164.setTransform(364.5, 203.2);

        this.shape_165 = new cjs.Shape();
        this.shape_165.graphics.f(gColor).s().p("AgOCDIAUkGIAJABIgTEGg");
        this.shape_165.setTransform(175, 365);

        this.shape_166 = new cjs.Shape();
        this.shape_166.graphics.f(gColor).s().p("AgOCDIAUkGIAJABIgTEGg");
        this.shape_166.setTransform(202.7, 13.8);

        this.shape_167 = new cjs.Shape();
        this.shape_167.graphics.f(gColor).s().p("AiBAXIEBg2IACAJIkBA2g");
        this.shape_167.setTransform(361.2, 152.7);

        this.shape_168 = new cjs.Shape();
        this.shape_168.graphics.f(gColor).s().p("AhlBUIDEivIAHAHIjECwg");
        this.shape_168.setTransform(319.8, 71.5);

        this.shape_169 = new cjs.Shape();
        this.shape_169.graphics.f(gColor).s().p("Agfh/IAJgCIA2EBIgJACg");
        this.shape_169.setTransform(225.5, 361.7);

        this.shape_170 = new cjs.Shape();
        this.shape_170.graphics.f(gColor).s().p("AhbheIAHgGICwDDIgHAGg");
        this.shape_170.setTransform(306.8, 320.3);

        this.shape_171 = new cjs.Shape();
        this.shape_171.graphics.f(gColor).s().p("Ah+gkIADgJID6BRIgDAKg");
        this.shape_171.setTransform(356.4, 243.8);

        this.shape_172 = new cjs.Shape();
        this.shape_172.graphics.f(gColor).s().p("AgsB8IBQj6IAJADIhQD6g");
        this.shape_172.setTransform(134.4, 356.9);

        this.shape_173 = new cjs.Shape();
        this.shape_173.graphics.f(gColor).s().p("AgtB8IBRj6IAJADIhRD6g");
        this.shape_173.setTransform(243.3, 21.8);

        this.shape_174 = new cjs.Shape();
        this.shape_174.graphics.f(gColor).s().p("Ah3A4IDrh3IAEAIIjrB3g");
        this.shape_174.setTransform(345.8, 109.4);

        this.shape_175 = new cjs.Shape();
        this.shape_175.graphics.f(gColor).s().p("AhLBsICPjcIAIAFIiODdg");
        this.shape_175.setTransform(92.9, 337.1);

        this.shape_176 = new cjs.Shape();
        this.shape_176.graphics.f(gColor).s().p("AhLBtICPjeIAIAGIiPDcg");
        this.shape_176.setTransform(284.8, 41.6);

        this.shape_177 = new cjs.Shape();
        this.shape_177.graphics.f(gColor).s().p("Ag/hyIAIgFIB3DqIgIAFg");
        this.shape_177.setTransform(268.8, 346.3);

        this.shape_178 = new cjs.Shape();
        this.shape_178.graphics.f(gColor).s().p("AhxhDIAGgIIDcCPIgFAIg");
        this.shape_178.setTransform(336.6, 285.3);

        this.shape_179 = new cjs.Shape();
        this.shape_179.graphics.f(gColor).s().p("AiDgBIAAgKIEHANIAAAKg");
        this.shape_179.setTransform(364.8, 198.6);

        this.shape_180 = new cjs.Shape();
        this.shape_180.graphics.f(gColor).s().p("AgLCEIANkHIAKAAIgNEHg");
        this.shape_180.setTransform(179.6, 365.3);

        this.shape_181 = new cjs.Shape();
        this.shape_181.graphics.f(gColor).s().p("AgLCEIANkHIAKAAIgNEHg");
        this.shape_181.setTransform(198.1, 13.4);

        this.shape_182 = new cjs.Shape();
        this.shape_182.graphics.f(gColor).s().p("AiBAaIEBg9IACAKIkBA9g");
        this.shape_182.setTransform(360.2, 148.2);

        this.shape_183 = new cjs.Shape();
        this.shape_183.graphics.f(gColor).s().p("AhiBXIC/i0IAGAHIi+C1g");
        this.shape_183.setTransform(316.6, 68.1);

        this.shape_184 = new cjs.Shape();
        this.shape_184.graphics.f(gColor).s().p("Agjh+IAKgDIA9EBIgKABg");
        this.shape_184.setTransform(230, 360.7);

        this.shape_185 = new cjs.Shape();
        this.shape_185.graphics.f(gColor).s().p("AhdhbIAHgHIC1C/IgIAGg");
        this.shape_185.setTransform(310.1, 317.1);

        this.shape_186 = new cjs.Shape();
        this.shape_186.graphics.f(gColor).s().p("Ah/ggIADgJID8BKIgCAJg");
        this.shape_186.setTransform(357.8, 239.4);

        this.shape_187 = new cjs.Shape();
        this.shape_187.graphics.f(gColor).s().p("AgpB9IBKj8IAJADIhKD8g");
        this.shape_187.setTransform(138.8, 358.3);

        this.shape_188 = new cjs.Shape();
        this.shape_188.graphics.f(gColor).s().p("AgpB+IBKj9IAJADIhKD8g");
        this.shape_188.setTransform(238.9, 20.5);

        this.shape_189 = new cjs.Shape();
        this.shape_189.graphics.f(gColor).s().p("Ah1A7IDnh+IAEAJIjnB9g");
        this.shape_189.setTransform(343.7, 105.3);

        this.shape_190 = new cjs.Shape();
        this.shape_190.graphics.f(gColor).s().p("AhIBuICJjgIAIAFIiJDgg");
        this.shape_190.setTransform(96.8, 339.6);

        this.shape_191 = new cjs.Shape();
        this.shape_191.graphics.f(gColor).s().p("AhIBuICJjgIAIAFIiJDgg");
        this.shape_191.setTransform(280.9, 39.2);

        this.shape_192 = new cjs.Shape();
        this.shape_192.graphics.f(gColor).s().p("AhChxIAIgEIB9DnIgIAEg");
        this.shape_192.setTransform(272.9, 344.2);

        this.shape_193 = new cjs.Shape();
        this.shape_193.graphics.f(gColor).s().p("AhyhAIAFgIIDgCJIgFAIg");
        this.shape_193.setTransform(339.1, 281.4);

        this.shape_194 = new cjs.Shape();
        this.shape_194.graphics.f(gColor).s().p("AiDABIAAgIIEHAHIAAAIg");
        this.shape_194.setTransform(365, 194);

        this.shape_195 = new cjs.Shape();
        this.shape_195.graphics.f(gColor).s().p("AgICEIAIkHIAJAAIgIEHg");
        this.shape_195.setTransform(184.3, 365.5);

        this.shape_196 = new cjs.Shape();
        this.shape_196.graphics.f(gColor).s().p("AgHCEIAHkHIAIAAIgHEHg");
        this.shape_196.setTransform(193.5, 13.3);

        this.shape_197 = new cjs.Shape();
        this.shape_197.graphics.f(gColor).s().p("AiAAdID/hDIACAKIj+BDg");
        this.shape_197.setTransform(359, 143.8);

        this.shape_198 = new cjs.Shape();
        this.shape_198.graphics.f(gColor).s().p("AhgBaIC6i6IAHAHIi6C6g");
        this.shape_198.setTransform(64.3, 313.9);

        this.shape_199 = new cjs.Shape();
        this.shape_199.graphics.f(gColor).s().p("AhgBaIC6i6IAHAHIi6C6g");
        this.shape_199.setTransform(313.4, 64.8);

        this.shape_200 = new cjs.Shape();
        this.shape_200.graphics.f(gColor).s().p("Agmh9IAKgDIBDD+IgKADg");
        this.shape_200.setTransform(234.5, 359.5);

        this.shape_201 = new cjs.Shape();
        this.shape_201.graphics.f(gColor).s().p("AhghZIAHgHIC6C6IgHAHg");
        this.shape_201.setTransform(313.4, 313.9);

        this.shape_202 = new cjs.Shape();
        this.shape_202.graphics.f(gColor).s().p("AiAgcIADgKID+BDIgCAKg");
        this.shape_202.setTransform(359, 235);

        this.shape_203 = new cjs.Shape();
        this.shape_203.graphics.f(gColor).s().p("AgmB+IBDj+IAKADIhED+g");
        this.shape_203.setTransform(143.3, 359.5);

        this.shape_204 = new cjs.Shape();
        this.shape_204.graphics.f(gColor).s().p("AgmB+IBDj+IAKADIhDD+g");
        this.shape_204.setTransform(234.5, 19.2);

        this.shape_205 = new cjs.Shape();
        this.shape_205.graphics.f(gColor).s().p("Ah0A+IDkiDIAFAIIjkCDg");
        this.shape_205.setTransform(341.4, 101.3);

        this.shape_206 = new cjs.Shape();
        this.shape_206.graphics.f(gColor).s().p("AhFBwICDjkIAIAFIiDDkg");
        this.shape_206.setTransform(100.8, 341.9);

        this.shape_207 = new cjs.Shape();
        this.shape_207.graphics.f(gColor).s().p("AhFBwICDjkIAIAFIiDDkg");
        this.shape_207.setTransform(276.9, 36.8);

        this.shape_208 = new cjs.Shape();
        this.shape_208.graphics.f(gColor).s().p("AhFhvIAIgFICDDkIgIAFg");
        this.shape_208.setTransform(276.9, 341.9);

        this.shape_209 = new cjs.Shape();
        this.shape_209.graphics.f(gColor).s().p("Ah0g9IAFgIIDkCDIgFAIg");
        this.shape_209.setTransform(341.4, 277.4);

        this.shape_210 = new cjs.Shape();
        this.shape_210.graphics.f(gColor).s().p("AiDAFIAAgJIEHAAIAAAJg");
        this.shape_210.setTransform(365, 189.4);

        this.shape_211 = new cjs.Shape();
        this.shape_211.graphics.f(gColor).s().p("AgECEIAAkHIAJAAIAAEHg");
        this.shape_211.setTransform(188.9, 365.5);

        this.shape_212 = new cjs.Shape();
        this.shape_212.graphics.f(gColor).s().p("AgECEIAAkHIAJAAIAAEHg");
        this.shape_212.setTransform(188.9, 13.2);

        this.shape_213 = new cjs.Shape();
        this.shape_213.graphics.f(gColor).s().p("AiDAAIEHgHIAAAJIkHAGg");
        this.shape_213.setTransform(365, 184.7);

        this.shape_214 = new cjs.Shape();
        this.shape_214.graphics.f(gColor).s().p("AhyBBIDgiJIAFAIIjgCJg");
        this.shape_214.setTransform(339.1, 97.3);

        this.shape_215 = new cjs.Shape();
        this.shape_215.graphics.f(gColor).s().p("AgBCEIgGkHIAIAAIAHEHg");
        this.shape_215.setTransform(193.5, 365.5);

        this.shape_216 = new cjs.Shape();
        this.shape_216.graphics.f(gColor).s().p("AhIhtIAIgFICJDgIgIAFg");
        this.shape_216.setTransform(280.9, 339.6);

        this.shape_217 = new cjs.Shape();
        this.shape_217.graphics.f(gColor).s().p("Ah1g6IAFgIIDmB9IgEAIg");
        this.shape_217.setTransform(343.7, 273.4);

        this.shape_218 = new cjs.Shape();
        this.shape_218.graphics.f(gColor).s().p("AhCByIB9joIAJAGIh+Dng");
        this.shape_218.setTransform(104.8, 344.2);

        this.shape_219 = new cjs.Shape();
        this.shape_219.graphics.f(gColor).s().p("AhCBxIB9jnIAIAFIh9Dog");
        this.shape_219.setTransform(272.9, 34.6);

        this.shape_220 = new cjs.Shape();
        this.shape_220.graphics.f(gColor).s().p("Ah/AhID9hKIACAJIj8BKg");
        this.shape_220.setTransform(357.8, 139.3);

        this.shape_221 = new cjs.Shape();
        this.shape_221.graphics.f(gColor).s().p("AheBdIC2i/IAGAHIi1C+g");
        this.shape_221.setTransform(67.6, 317.1);

        this.shape_222 = new cjs.Shape();
        this.shape_222.graphics.f(gColor).s().p("AhdBcIC0i+IAIAGIi1C/g");
        this.shape_222.setTransform(310.1, 61.6);

        this.shape_223 = new cjs.Shape();
        this.shape_223.graphics.f(gColor).s().p("Agph8IAJgDIBKD8IgJADg");
        this.shape_223.setTransform(238.9, 358.3);

        this.shape_224 = new cjs.Shape();
        this.shape_224.graphics.f(gColor).s().p("AhihXIAHgHIC+C1IgGAHg");
        this.shape_224.setTransform(316.6, 310.6);

        this.shape_225 = new cjs.Shape();
        this.shape_225.graphics.f(gColor).s().p("AiBgZIACgKIEBA9IgDAKg");
        this.shape_225.setTransform(360.2, 230.5);

        this.shape_226 = new cjs.Shape();
        this.shape_226.graphics.f(gColor).s().p("AgjCAIA9kBIAKADIg9D/g");
        this.shape_226.setTransform(147.7, 360.7);

        this.shape_227 = new cjs.Shape();
        this.shape_227.graphics.f(gColor).s().p("AgjB/IA9j/IAKACIg9EAg");
        this.shape_227.setTransform(230, 18.1);

        this.shape_228 = new cjs.Shape();
        this.shape_228.graphics.f(gColor).s().p("AiDACIEHgNIAAAKIkHANg");
        this.shape_228.setTransform(364.8, 180.1);

        this.shape_229 = new cjs.Shape();
        this.shape_229.graphics.f(gColor).s().p("AhxBEIDdiPIAFAIIjcCPg");
        this.shape_229.setTransform(336.6, 93.4);

        this.shape_230 = new cjs.Shape();
        this.shape_230.graphics.f(gColor).s().p("AgLiDIAKAAIANEHIgKAAg");
        this.shape_230.setTransform(198.1, 365.3);

        this.shape_231 = new cjs.Shape();
        this.shape_231.graphics.f(gColor).s().p("AhLhrIAIgFICPDcIgIAGg");
        this.shape_231.setTransform(284.8, 337.1);

        this.shape_232 = new cjs.Shape();
        this.shape_232.graphics.f(gColor).s().p("Ah3g3IAEgIIDrB3IgEAIg");
        this.shape_232.setTransform(345.8, 269.3);

        this.shape_233 = new cjs.Shape();
        this.shape_233.graphics.f(gColor).s().p("Ag/BzIB3jqIAIAFIh3Dqg");
        this.shape_233.setTransform(108.9, 346.3);

        this.shape_234 = new cjs.Shape();
        this.shape_234.graphics.f(gColor).s().p("Ag/BzIB3jqIAIAFIh3Dqg");
        this.shape_234.setTransform(268.8, 32.4);

        this.shape_235 = new cjs.Shape();
        this.shape_235.graphics.f(gColor).s().p("Ah+AkID6hQIADAJIj6BQg");
        this.shape_235.setTransform(356.4, 134.9);

        this.shape_236 = new cjs.Shape();
        this.shape_236.graphics.f(gColor).s().p("AhbBfICvjDIAIAGIiwDDg");
        this.shape_236.setTransform(71, 320.3);

        this.shape_237 = new cjs.Shape();
        this.shape_237.graphics.f(gColor).s().p("AhbBfICwjDIAHAGIiwDDg");
        this.shape_237.setTransform(306.7, 58.5);

        this.shape_238 = new cjs.Shape();
        this.shape_238.graphics.f(gColor).s().p("Agth7IAJgDIBRD6IgJADg");
        this.shape_238.setTransform(243.3, 356.9);

        this.shape_239 = new cjs.Shape();
        this.shape_239.graphics.f(gColor).s().p("AhlhUIAHgHIDECwIgHAHg");
        this.shape_239.setTransform(319.8, 307.3);

        this.shape_240 = new cjs.Shape();
        this.shape_240.graphics.f(gColor).s().p("AiBgWIACgJIEBA2IgCAJg");
        this.shape_240.setTransform(361.2, 226);

        this.shape_241 = new cjs.Shape();
        this.shape_241.graphics.f(gColor).s().p("AgfCAIA2kBIAJACIg2EBg");
        this.shape_241.setTransform(152.2, 361.7);

        this.shape_242 = new cjs.Shape();
        this.shape_242.graphics.f(gColor).s().p("AgfCAIA2kBIAJACIg2EBg");
        this.shape_242.setTransform(225.5, 17);

        this.shape_243 = new cjs.Shape();
        this.shape_243.graphics.f(gColor).s().p("AiDAGIEHgUIAAAKIkGATg");
        this.shape_243.setTransform(364.5, 175.5);

        this.shape_244 = new cjs.Shape();
        this.shape_244.graphics.f(gColor).s().p("AhvBHIDZiVIAGAIIjZCVg");
        this.shape_244.setTransform(334, 89.6);

        this.shape_245 = new cjs.Shape();
        this.shape_245.graphics.f(gColor).s().p("AgOiCIAJgBIAUEGIgJABg");
        this.shape_245.setTransform(202.7, 365);

        this.shape_246 = new cjs.Shape();
        this.shape_246.graphics.f(gColor).s().p("AhOhpIAIgGICVDZIgIAGg");
        this.shape_246.setTransform(288.6, 334.5);

        this.shape_247 = new cjs.Shape();
        this.shape_247.graphics.f(gColor).s().p("Ah5gzIAFgJIDtBxIgEAIg");
        this.shape_247.setTransform(347.9, 265.2);

        this.shape_248 = new cjs.Shape();
        this.shape_248.graphics.f(gColor).s().p("Ag8B1IBwjtIAJAEIhxDug");
        this.shape_248.setTransform(113, 348.4);

        this.shape_249 = new cjs.Shape();
        this.shape_249.graphics.f(gColor).s().p("Ag8B1IBxjuIAIAFIhwDtg");
        this.shape_249.setTransform(264.7, 30.4);

        this.shape_250 = new cjs.Shape();
        this.shape_250.graphics.f(gColor).s().p("Ah9AoID4hXIADAJIj4BXg");
        this.shape_250.setTransform(354.9, 130.6);

        this.shape_251 = new cjs.Shape();
        this.shape_251.graphics.f(gColor).s().p("AhZBiICrjJIAHAGIiqDIg");
        this.shape_251.setTransform(74.5, 323.3);

        this.shape_252 = new cjs.Shape();
        this.shape_252.graphics.f(gColor).s().p("AhZBhICrjHIAHAFIiqDJg");
        this.shape_252.setTransform(303.3, 55.4);

        this.shape_253 = new cjs.Shape();
        this.shape_253.graphics.f(gColor).s().p("Agwh6IAJgDIBYD4IgJADg");
        this.shape_253.setTransform(247.7, 355.4);

        this.shape_254 = new cjs.Shape();
        this.shape_254.graphics.f(gColor).s().p("AhnhRIAHgHIDHCqIgGAIg");
        this.shape_254.setTransform(322.8, 303.8);

        this.shape_255 = new cjs.Shape();
        this.shape_255.graphics.f(gColor).s().p("AiCgSIACgKIEDAvIgCAKg");
        this.shape_255.setTransform(362.1, 221.5);

        this.shape_256 = new cjs.Shape();
        this.shape_256.graphics.f(gColor).s().p("AgcCBIAwkDIAJACIgwEDg");
        this.shape_256.setTransform(156.8, 362.6);

        this.shape_257 = new cjs.Shape();
        this.shape_257.graphics.f(gColor).s().p("AgcCBIAvkDIAKACIgvEDg");
        this.shape_257.setTransform(221, 16.1);

        this.shape_258 = new cjs.Shape();
        this.shape_258.graphics.f(gColor).s().p("AiDAJIEGgbIABAKIkGAag");
        this.shape_258.setTransform(364.1, 171);

        this.shape_259 = new cjs.Shape();
        this.shape_259.graphics.f(gColor).s().p("AhtBKIDViaIAGAIIjVCZg");
        this.shape_259.setTransform(331.4, 85.8);

        this.shape_260 = new cjs.Shape();
        this.shape_260.graphics.f(gColor).s().p("AgSiCIAKgBIAbEGIgKABg");
        this.shape_260.setTransform(207.3, 364.6);

        this.shape_261 = new cjs.Shape();
        this.shape_261.graphics.f(gColor).s().p("AhQhnIAHgGICbDVIgIAGg");
        this.shape_261.setTransform(292.4, 331.9);

        this.shape_262 = new cjs.Shape();
        this.shape_262.graphics.f(gColor).s().p("Ah6gxIAEgIIDxBqIgEAJg");
        this.shape_262.setTransform(349.8, 261);

        this.shape_263 = new cjs.Shape();
        this.shape_263.graphics.f(gColor).s().p("Ag5B3IBrjxIAIAEIhqDxg");
        this.shape_263.setTransform(117.2, 350.3);

        this.shape_264 = new cjs.Shape();
        this.shape_264.graphics.f(gColor).s().p("Ag5B3IBrjxIAIAEIhqDxg");
        this.shape_264.setTransform(260.5, 28.4);

        this.shape_265 = new cjs.Shape();
        this.shape_265.graphics.f(gColor).s().p("Ah8ArID2heIADAJIj1Beg");
        this.shape_265.setTransform(353.3, 126.2);

        this.shape_266 = new cjs.Shape();
        this.shape_266.graphics.f(gColor).s().p("AhWBjICljMIAIAGIilDNg");
        this.shape_266.setTransform(78, 326.3);

        this.shape_267 = new cjs.Shape();
        this.shape_267.graphics.f(gColor).s().p("AhWBjICmjMIAHAGIimDNg");
        this.shape_267.setTransform(299.7, 52.5);

        this.shape_268 = new cjs.Shape();
        this.shape_268.graphics.f(gColor).s().p("Agzh5IAJgDIBeD1IgJAEg");
        this.shape_268.setTransform(252, 353.8);

        this.shape_269 = new cjs.Shape();
        this.shape_269.graphics.f(gColor).s().p("AhohOIAFgIIDNCmIgHAHg");
        this.shape_269.setTransform(325.8, 300.2);

        this.shape_270 = new cjs.Shape();
        this.shape_270.graphics.f(gColor).s().p("AiCgPIABgJIEEAoIgBAJg");
        this.shape_270.setTransform(362.8, 216.9);

        this.shape_271 = new cjs.Shape();
        this.shape_271.graphics.f(gColor).s().p("AgZCCIApkEIAKABIgpEEg");
        this.shape_271.setTransform(161.3, 363.3);

        this.shape_272 = new cjs.Shape();
        this.shape_272.graphics.f(gColor).s().p("AgZCCIApkEIAJABIgoEEg");
        this.shape_272.setTransform(216.4, 15.4);

        this.shape_273 = new cjs.Shape();
        this.shape_273.graphics.f(gColor).s().p("AiDAMIEFghIABAKIkFAhg");
        this.shape_273.setTransform(363.5, 166.4);

        this.shape_274 = new cjs.Shape();
        this.shape_274.graphics.f(gColor).s().p("AhrBMIDRifIAGAHIjRCgg");
        this.shape_274.setTransform(328.6, 82.1);

        this.shape_275 = new cjs.Shape();
        this.shape_275.graphics.f(gColor).s().p("AgViBIAJgCIAiEGIgKABg");
        this.shape_275.setTransform(211.9, 364);

        this.shape_276 = new cjs.Shape();
        this.shape_276.graphics.f(gColor).s().p("AhThlIAIgGICfDRIgHAGg");
        this.shape_276.setTransform(296.1, 329.1);

        this.shape_277 = new cjs.Shape();
        this.shape_277.graphics.f(gColor).s().p("Ah7gtIAEgJIDzBlIgEAIg");
        this.shape_277.setTransform(351.6, 256.8);

        this.shape_278 = new cjs.Shape();
        this.shape_278.graphics.f(gColor).s().p("Ag2B4IBkjzIAJAEIhkDzg");
        this.shape_278.setTransform(121.5, 352.1);

        this.shape_279 = new cjs.Shape();
        this.shape_279.graphics.f(gColor).s().p("Ag2B5IBkj0IAJAEIhkDzg");
        this.shape_279.setTransform(256.3, 26.6);

        this.shape_280 = new cjs.Shape();
        this.shape_280.graphics.f(gColor).s().p("Ah7AuIDzhkIAEAJIjzBkg");
        this.shape_280.setTransform(351.6, 122);

        this.shape_281 = new cjs.Shape();
        this.shape_281.graphics.f(gColor).s().p("AhTBmICfjRIAIAGIigDRg");
        this.shape_281.setTransform(81.6, 329.1);

        this.shape_282 = new cjs.Shape();
        this.shape_282.graphics.f(gColor).s().p("AhTBmICgjRIAHAGIifDRg");
        this.shape_282.setTransform(296.1, 49.6);

        this.shape_283 = new cjs.Shape();
        this.shape_283.graphics.f(gColor).s().p("Ag2h3IAJgEIBkDzIgJAEg");
        this.shape_283.setTransform(256.3, 352.1);

        this.shape_284 = new cjs.Shape();
        this.shape_284.graphics.f(gColor).s().p("AhrhLIAGgIIDRCgIgGAHg");
        this.shape_284.setTransform(328.6, 296.6);

        this.shape_285 = new cjs.Shape();
        this.shape_285.graphics.f(gColor).s().p("AiDgLIABgKIEFAhIgBAKg");
        this.shape_285.setTransform(363.5, 212.4);

        this.shape_286 = new cjs.Shape();
        this.shape_286.graphics.f(gColor).s().p("AgVCDIAikGIAJACIgiEFg");
        this.shape_286.setTransform(165.9, 364);

        this.shape_287 = new cjs.Shape();
        this.shape_287.graphics.f(gColor).s().p("AgVCCIAhkFIAKABIgiEGg");
        this.shape_287.setTransform(211.9, 14.7);

        this.shape_288 = new cjs.Shape();
        this.shape_288.graphics.f(gColor).s().p("AiCAQIEEgoIABAJIkEAog");
        this.shape_288.setTransform(362.8, 161.8);

        this.shape_289 = new cjs.Shape();
        this.shape_289.graphics.f(gColor).s().p("AhoBQIDLimIAHAIIjNClg");
        this.shape_289.setTransform(325.8, 78.5);

        this.shape_290 = new cjs.Shape();
        this.shape_290.graphics.f(gColor).s().p("AgZiBIAKgBIAoEEIgJABg");
        this.shape_290.setTransform(216.4, 363.3);

        this.shape_291 = new cjs.Shape();
        this.shape_291.graphics.f(gColor).s().p("AhWhjIAHgGICmDMIgHAHg");
        this.shape_291.setTransform(299.7, 326.3);

        this.shape_292 = new cjs.Shape();
        this.shape_292.graphics.f(gColor).s().p("Ah8gqIAEgJID1BeIgDAJg");
        this.shape_292.setTransform(353.3, 252.5);

        this.shape_293 = new cjs.Shape();
        this.shape_293.graphics.f(gColor).s().p("AgzB5IBej1IAJADIheD2g");
        this.shape_293.setTransform(125.7, 353.8);

        this.shape_294 = new cjs.Shape();
        this.shape_294.graphics.f(gColor).s().p("AgzB6IBej2IAJAEIheD1g");
        this.shape_294.setTransform(252, 24.9);

        this.shape_295 = new cjs.Shape();
        this.shape_295.graphics.f(gColor).s().p("Ah6AyIDxhrIAEAJIjxBqg");
        this.shape_295.setTransform(349.8, 117.7);

        this.shape_296 = new cjs.Shape();
        this.shape_296.graphics.f(gColor).s().p("AhQBoICajVIAIAGIibDVg");
        this.shape_296.setTransform(85.3, 331.9);

        this.shape_297 = new cjs.Shape();
        this.shape_297.graphics.f(gColor).s().p("AhQBoICajVIAIAGIibDVg");
        this.shape_297.setTransform(292.4, 46.8);

        this.shape_298 = new cjs.Shape();
        this.shape_298.graphics.f(gColor).s().p("Ag5h2IAJgEIBqDxIgIAEg");
        this.shape_298.setTransform(260.5, 350.3);

        this.shape_299 = new cjs.Shape();
        this.shape_299.graphics.f(gColor).s().p("AhthJIAGgIIDVCaIgGAIg");
        this.shape_299.setTransform(331.4, 292.9);

        this.shape_300 = new cjs.Shape();
        this.shape_300.graphics.f(gColor).s().p("AiDgIIABgKIEGAbIgBAKg");
        this.shape_300.setTransform(364.1, 207.8);

        this.shape_301 = new cjs.Shape();
        this.shape_301.graphics.f(gColor).s().p("AgSCDIAbkGIAKABIgbEGg");
        this.shape_301.setTransform(170.4, 364.6);

        this.shape_302 = new cjs.Shape();
        this.shape_302.graphics.f(gColor).s().p("AgSCDIAbkGIAKABIgbEGg");
        this.shape_302.setTransform(207.3, 14.2);

        this.shape_303 = new cjs.Shape();
        this.shape_303.graphics.f(gColor).s().p("AiCAUIEDgwIACAKIkDAvg");
        this.shape_303.setTransform(362.1, 157.3);

        this.shape_304 = new cjs.Shape();
        this.shape_304.graphics.f(gColor).s().p("AhnBSIDIirIAGAIIjHCqg");
        this.shape_304.setTransform(322.8, 75);

        this.shape_305 = new cjs.Shape();
        this.shape_305.graphics.f(gColor).s().p("AgciAIAKgCIAvEDIgKACg");
        this.shape_305.setTransform(221, 362.6);

        this.shape_306 = new cjs.Shape();
        this.shape_306.graphics.f(gColor).s().p("AhZhhIAIgGICqDJIgHAFg");
        this.shape_306.setTransform(303.3, 323.3);

        this.shape_307 = new cjs.Shape();
        this.shape_307.graphics.f(gColor).s().p("Ah9gnIADgJID4BXIgDAKg");
        this.shape_307.setTransform(354.9, 248.2);

        this.shape_308 = new cjs.Shape();
        this.shape_308.graphics.f(gColor).s().p("AgwB7IBXj4IAJADIhXD4g");
        this.shape_308.setTransform(130.1, 355.4);

        this.shape_309 = new cjs.Shape();
        this.shape_309.graphics.f(gColor).s().p("AgwB7IBYj4IAJADIhYD4g");
        this.shape_309.setTransform(247.7, 23.3);

        this.shape_310 = new cjs.Shape();
        this.shape_310.graphics.f(gColor).s().p("Ah5A0IDuhwIAEAIIjtBxg");
        this.shape_310.setTransform(347.9, 113.5);

        this.shape_311 = new cjs.Shape();
        this.shape_311.graphics.f(gColor).s().p("AhOBqICVjZIAIAGIiVDZg");
        this.shape_311.setTransform(89.1, 334.5);

        this.shape_312 = new cjs.Shape();
        this.shape_312.graphics.f(gColor).s().p("AhOBqICVjZIAIAGIiVDZg");
        this.shape_312.setTransform(288.6, 44.2);

        this.shape_313 = new cjs.Shape();
        this.shape_313.graphics.f(gColor).s().p("Ag8h0IAJgEIBwDtIgIAFg");
        this.shape_313.setTransform(264.7, 348.4);

        this.shape_314 = new cjs.Shape();
        this.shape_314.graphics.f(gColor).s().p("AhvhGIAGgIIDZCVIgGAIg");
        this.shape_314.setTransform(334, 289.1);

        this.shape_315 = new cjs.Shape();
        this.shape_315.graphics.f(gColor).s().p("AiDgFIABgJIEGAUIAAAJg");
        this.shape_315.setTransform(364.5, 203.2);

        this.shape_316 = new cjs.Shape();
        this.shape_316.graphics.f(gColor).s().p("AgOCDIAUkGIAJABIgTEGg");
        this.shape_316.setTransform(175, 365);

        this.shape_317 = new cjs.Shape();
        this.shape_317.graphics.f(gColor).s().p("AgOCDIATkGIAKABIgUEGg");
        this.shape_317.setTransform(202.7, 13.8);

        this.shape_318 = new cjs.Shape();
        this.shape_318.graphics.f(gColor).s().p("AiBAXIEBg2IACAJIkBA2g");
        this.shape_318.setTransform(361.2, 152.7);

        this.shape_319 = new cjs.Shape();
        this.shape_319.graphics.f(gColor).s().p("AhlBUIDEivIAHAHIjECwg");
        this.shape_319.setTransform(319.8, 71.5);

        this.shape_320 = new cjs.Shape();
        this.shape_320.graphics.f(gColor).s().p("Agfh/IAJgCIA2EBIgJACg");
        this.shape_320.setTransform(225.5, 361.7);

        this.shape_321 = new cjs.Shape();
        this.shape_321.graphics.f(gColor).s().p("AhbheIAHgGICwDDIgHAGg");
        this.shape_321.setTransform(306.7, 320.3);

        this.shape_322 = new cjs.Shape();
        this.shape_322.graphics.f(gColor).s().p("Ah+gkIADgJID6BRIgDAKg");
        this.shape_322.setTransform(356.4, 243.8);

        this.shape_323 = new cjs.Shape();
        this.shape_323.graphics.f(gColor).s().p("AgtB8IBRj6IAJADIhQD6g");
        this.shape_323.setTransform(134.4, 356.9);

        this.shape_324 = new cjs.Shape();
        this.shape_324.graphics.f(gColor).s().p("AgtB8IBRj6IAJADIhRD6g");
        this.shape_324.setTransform(243.3, 21.8);

        this.shape_325 = new cjs.Shape();
        this.shape_325.graphics.f(gColor).s().p("Ah3A4IDrh3IAEAIIjrB3g");
        this.shape_325.setTransform(345.8, 109.4);

        this.shape_326 = new cjs.Shape();
        this.shape_326.graphics.f(gColor).s().p("AhLBsICPjcIAIAFIiPDdg");
        this.shape_326.setTransform(92.9, 337.1);

        this.shape_327 = new cjs.Shape();
        this.shape_327.graphics.f(gColor).s().p("AhLBtICPjeIAIAGIiPDcg");
        this.shape_327.setTransform(284.8, 41.6);

        this.shape_328 = new cjs.Shape();
        this.shape_328.graphics.f(gColor).s().p("Ag/hyIAIgFIB3DqIgIAFg");
        this.shape_328.setTransform(268.8, 346.3);

        this.shape_329 = new cjs.Shape();
        this.shape_329.graphics.f(gColor).s().p("AhxhDIAGgIIDcCPIgFAIg");
        this.shape_329.setTransform(336.6, 285.3);

        this.shape_330 = new cjs.Shape();
        this.shape_330.graphics.f(gColor).s().p("AiDgBIAAgKIEHANIAAAKg");
        this.shape_330.setTransform(364.8, 198.6);

        this.shape_331 = new cjs.Shape();
        this.shape_331.graphics.f(gColor).s().p("AgLCEIANkHIAKAAIgNEHg");
        this.shape_331.setTransform(179.6, 365.3);

        this.shape_332 = new cjs.Shape();
        this.shape_332.graphics.f(gColor).s().p("AgLCEIANkHIAKAAIgNEHg");
        this.shape_332.setTransform(198.1, 13.4);

        this.shape_333 = new cjs.Shape();
        this.shape_333.graphics.f(gColor).s().p("AiBAaIEAg9IADAKIkBA9g");
        this.shape_333.setTransform(360.2, 148.2);

        this.shape_334 = new cjs.Shape();
        this.shape_334.graphics.f(gColor).s().p("AhiBXIC/i0IAGAHIi+C1g");
        this.shape_334.setTransform(316.6, 68.1);

        this.shape_335 = new cjs.Shape();
        this.shape_335.graphics.f(gColor).s().p("Agjh+IAKgDIA9EBIgKABg");
        this.shape_335.setTransform(230, 360.7);

        this.shape_336 = new cjs.Shape();
        this.shape_336.graphics.f(gColor).s().p("AhdhbIAHgHIC1C/IgIAGg");
        this.shape_336.setTransform(310.1, 317.1);

        this.shape_337 = new cjs.Shape();
        this.shape_337.graphics.f(gColor).s().p("Ah/ggIADgJID8BKIgCAJg");
        this.shape_337.setTransform(357.8, 239.4);

        this.shape_338 = new cjs.Shape();
        this.shape_338.graphics.f(gColor).s().p("AgpB9IBKj8IAJADIhKD8g");
        this.shape_338.setTransform(138.8, 358.3);

        this.shape_339 = new cjs.Shape();
        this.shape_339.graphics.f(gColor).s().p("AgpB+IBKj9IAJADIhKD8g");
        this.shape_339.setTransform(238.9, 20.5);

        this.shape_340 = new cjs.Shape();
        this.shape_340.graphics.f(gColor).s().p("Ah1A7IDnh+IAEAJIjmB9g");
        this.shape_340.setTransform(343.7, 105.3);

        this.shape_341 = new cjs.Shape();
        this.shape_341.graphics.f(gColor).s().p("AhIBuICJjgIAIAFIiJDgg");
        this.shape_341.setTransform(96.8, 339.6);

        this.shape_342 = new cjs.Shape();
        this.shape_342.graphics.f(gColor).s().p("AhIBuICJjgIAIAFIiJDgg");
        this.shape_342.setTransform(280.9, 39.2);

        this.shape_343 = new cjs.Shape();
        this.shape_343.graphics.f(gColor).s().p("AhChxIAIgEIB9DnIgIAEg");
        this.shape_343.setTransform(272.9, 344.2);

        this.shape_344 = new cjs.Shape();
        this.shape_344.graphics.f(gColor).s().p("AhyhAIAFgIIDgCJIgFAIg");
        this.shape_344.setTransform(339.1, 281.4);

        this.shape_345 = new cjs.Shape();
        this.shape_345.graphics.f(gColor).s().p("AiDABIAAgIIEHAHIAAAIg");
        this.shape_345.setTransform(365, 194);

        this.shape_346 = new cjs.Shape();
        this.shape_346.graphics.f(gColor).s().p("AgHCEIAHkHIAIAAIgGEHg");
        this.shape_346.setTransform(184.2, 365.5);

        this.shape_347 = new cjs.Shape();
        this.shape_347.graphics.f(gColor).s().p("AgHCEIAGkHIAJAAIgHEHg");
        this.shape_347.setTransform(193.5, 13.3);

        this.shape_348 = new cjs.Shape();
        this.shape_348.graphics.f(gColor).s().p("AiAAdID/hDIACAKIj+BDg");
        this.shape_348.setTransform(359, 143.8);

        this.shape_349 = new cjs.Shape();
        this.shape_349.graphics.f(gColor).s().p("AhgBaIC6i6IAHAHIi6C6g");
        this.shape_349.setTransform(64.3, 313.9);

        this.shape_350 = new cjs.Shape();
        this.shape_350.graphics.f(gColor).s().p("AhgBaIC6i6IAHAHIi6C6g");
        this.shape_350.setTransform(313.4, 64.8);

        this.shape_351 = new cjs.Shape();
        this.shape_351.graphics.f(gColor).s().p("Agmh9IAKgDIBDD+IgKADg");
        this.shape_351.setTransform(234.5, 359.5);

        this.shape_352 = new cjs.Shape();
        this.shape_352.graphics.f(gColor).s().p("AhghZIAHgHIC6C6IgHAHg");
        this.shape_352.setTransform(313.4, 313.9);

        this.shape_353 = new cjs.Shape();
        this.shape_353.graphics.f(gColor).s().p("AiAgcIADgKID+BDIgCAKg");
        this.shape_353.setTransform(359, 235);

        this.shape_354 = new cjs.Shape();
        this.shape_354.graphics.f(gColor).s().p("AgmB+IBEj+IAJADIhED+g");
        this.shape_354.setTransform(143.3, 359.5);

        this.shape_355 = new cjs.Shape();
        this.shape_355.graphics.f(gColor).s().p("AgmB+IBDj+IAKADIhDD+g");
        this.shape_355.setTransform(234.5, 19.2);

        this.shape_356 = new cjs.Shape();
        this.shape_356.graphics.f(gColor).s().p("Ah0A+IDkiDIAFAIIjkCDg");
        this.shape_356.setTransform(341.4, 101.3);

        this.shape_357 = new cjs.Shape();
        this.shape_357.graphics.f(gColor).s().p("AhFBwICDjkIAIAFIiDDkg");
        this.shape_357.setTransform(100.8, 341.9);

        this.shape_358 = new cjs.Shape();
        this.shape_358.graphics.f(gColor).s().p("AhFBwICDjkIAIAFIiDDkg");
        this.shape_358.setTransform(276.9, 36.8);

        this.shape_359 = new cjs.Shape();
        this.shape_359.graphics.f(gColor).s().p("AhFhvIAIgFICDDkIgIAFg");
        this.shape_359.setTransform(276.9, 341.9);

        this.shape_360 = new cjs.Shape();
        this.shape_360.graphics.f(gColor).s().p("Ah0g9IAFgIIDkCDIgFAIg");
        this.shape_360.setTransform(341.4, 277.4);

        this.shape_361 = new cjs.Shape();
        this.shape_361.graphics.f(gColor).s().p("AiDAFIAAgJIEHAAIAAAJg");
        this.shape_361.setTransform(365, 189.4);

        this.shape_362 = new cjs.Shape();
        this.shape_362.graphics.f(gColor).s().p("AgECEIAAkHIAJAAIAAEHg");
        this.shape_362.setTransform(188.9, 365.5);

        this.shape_363 = new cjs.Shape();
        this.shape_363.graphics.f(gColor).s().p("AgECEIAAkHIAJAAIAAEHg");
        this.shape_363.setTransform(188.9, 13.2);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_363 }, { t: this.shape_362 }, { t: this.shape_361 }, { t: this.shape_360 }, { t: this.shape_359 }, { t: this.shape_358 }, { t: this.shape_357 }, { t: this.shape_356 }, { t: this.shape_355 }, { t: this.shape_354 }, { t: this.shape_353 }, { t: this.shape_352 }, { t: this.shape_351 }, { t: this.shape_350 }, { t: this.shape_349 }, { t: this.shape_348 }, { t: this.shape_347 }, { t: this.shape_346 }, { t: this.shape_345 }, { t: this.shape_344 }, { t: this.shape_343 }, { t: this.shape_342 }, { t: this.shape_341 }, { t: this.shape_340 }, { t: this.shape_339 }, { t: this.shape_338 }, { t: this.shape_337 }, { t: this.shape_336 }, { t: this.shape_335 }, { t: this.shape_334 }, { t: this.shape_333 }, { t: this.shape_332 }, { t: this.shape_331 }, { t: this.shape_330 }, { t: this.shape_329 }, { t: this.shape_328 }, { t: this.shape_327 }, { t: this.shape_326 }, { t: this.shape_325 }, { t: this.shape_324 }, { t: this.shape_323 }, { t: this.shape_322 }, { t: this.shape_321 }, { t: this.shape_320 }, { t: this.shape_319 }, { t: this.shape_318 }, { t: this.shape_317 }, { t: this.shape_316 }, { t: this.shape_315 }, { t: this.shape_314 }, { t: this.shape_313 }, { t: this.shape_312 }, { t: this.shape_311 }, { t: this.shape_310 }, { t: this.shape_309 }, { t: this.shape_308 }, { t: this.shape_307 }, { t: this.shape_306 }, { t: this.shape_305 }, { t: this.shape_304 }, { t: this.shape_303 }, { t: this.shape_302 }, { t: this.shape_301 }, { t: this.shape_300 }, { t: this.shape_299 }, { t: this.shape_298 }, { t: this.shape_297 }, { t: this.shape_296 }, { t: this.shape_295 }, { t: this.shape_294 }, { t: this.shape_293 }, { t: this.shape_292 }, { t: this.shape_291 }, { t: this.shape_290 }, { t: this.shape_289 }, { t: this.shape_288 }, { t: this.shape_287 }, { t: this.shape_286 }, { t: this.shape_285 }, { t: this.shape_284 }, { t: this.shape_283 }, { t: this.shape_282 }, { t: this.shape_281 }, { t: this.shape_280 }, { t: this.shape_279 }, { t: this.shape_278 }, { t: this.shape_277 }, { t: this.shape_276 }, { t: this.shape_275 }, { t: this.shape_274 }, { t: this.shape_273 }, { t: this.shape_272 }, { t: this.shape_271 }, { t: this.shape_270 }, { t: this.shape_269 }, { t: this.shape_268 }, { t: this.shape_267 }, { t: this.shape_266 }, { t: this.shape_265 }, { t: this.shape_264 }, { t: this.shape_263 }, { t: this.shape_262 }, { t: this.shape_261 }, { t: this.shape_260 }, { t: this.shape_259 }, { t: this.shape_258 }, { t: this.shape_257 }, { t: this.shape_256 }, { t: this.shape_255 }, { t: this.shape_254 }, { t: this.shape_253 }, { t: this.shape_252 }, { t: this.shape_251 }, { t: this.shape_250 }, { t: this.shape_249 }, { t: this.shape_248 }, { t: this.shape_247 }, { t: this.shape_246 }, { t: this.shape_245 }, { t: this.shape_244 }, { t: this.shape_243 }, { t: this.shape_242 }, { t: this.shape_241 }, { t: this.shape_240 }, { t: this.shape_239 }, { t: this.shape_238 }, { t: this.shape_237 }, { t: this.shape_236 }, { t: this.shape_235 }, { t: this.shape_234 }, { t: this.shape_233 }, { t: this.shape_232 }, { t: this.shape_231 }, { t: this.shape_230 }, { t: this.shape_229 }, { t: this.shape_228 }, { t: this.shape_227 }, { t: this.shape_226 }, { t: this.shape_225 }, { t: this.shape_224 }, { t: this.shape_223 }, { t: this.shape_222 }, { t: this.shape_221 }, { t: this.shape_220 }, { t: this.shape_219 }, { t: this.shape_218 }, { t: this.shape_217 }, { t: this.shape_216 }, { t: this.shape_215 }, { t: this.shape_214 }, { t: this.shape_213 }, { t: this.shape_212 }, { t: this.shape_211 }, { t: this.shape_210 }, { t: this.shape_209 }, { t: this.shape_208 }, { t: this.shape_207 }, { t: this.shape_206 }, { t: this.shape_205 }, { t: this.shape_204 }, { t: this.shape_203 }, { t: this.shape_202 }, { t: this.shape_201 }, { t: this.shape_200 }, { t: this.shape_199 }, { t: this.shape_198 }, { t: this.shape_197 }, { t: this.shape_196 }, { t: this.shape_195 }, { t: this.shape_194 }, { t: this.shape_193 }, { t: this.shape_192 }, { t: this.shape_191 }, { t: this.shape_190 }, { t: this.shape_189 }, { t: this.shape_188 }, { t: this.shape_187 }, { t: this.shape_186 }, { t: this.shape_185 }, { t: this.shape_184 }, { t: this.shape_183 }, { t: this.shape_182 }, { t: this.shape_181 }, { t: this.shape_180 }, { t: this.shape_179 }, { t: this.shape_178 }, { t: this.shape_177 }, { t: this.shape_176 }, { t: this.shape_175 }, { t: this.shape_174 }, { t: this.shape_173 }, { t: this.shape_172 }, { t: this.shape_171 }, { t: this.shape_170 }, { t: this.shape_169 }, { t: this.shape_168 }, { t: this.shape_167 }, { t: this.shape_166 }, { t: this.shape_165 }, { t: this.shape_164 }, { t: this.shape_163 }, { t: this.shape_162 }, { t: this.shape_161 }, { t: this.shape_160 }, { t: this.shape_159 }, { t: this.shape_158 }, { t: this.shape_157 }, { t: this.shape_156 }, { t: this.shape_155 }, { t: this.shape_154 }, { t: this.shape_153 }, { t: this.shape_152 }, { t: this.shape_151 }, { t: this.shape_150 }, { t: this.shape_149 }, { t: this.shape_148 }, { t: this.shape_147 }, { t: this.shape_146 }, { t: this.shape_145 }, { t: this.shape_144 }, { t: this.shape_143 }, { t: this.shape_142 }, { t: this.shape_141 }, { t: this.shape_140 }, { t: this.shape_139 }, { t: this.shape_138 }, { t: this.shape_137 }, { t: this.shape_136 }, { t: this.shape_135 }, { t: this.shape_134 }, { t: this.shape_133 }, { t: this.shape_132 }, { t: this.shape_131 }, { t: this.shape_130 }, { t: this.shape_129 }, { t: this.shape_128 }, { t: this.shape_127 }, { t: this.shape_126 }, { t: this.shape_125 }, { t: this.shape_124 }, { t: this.shape_123 }, { t: this.shape_122 }, { t: this.shape_121 }, { t: this.shape_120 }, { t: this.shape_119 }, { t: this.shape_118 }, { t: this.shape_117 }, { t: this.shape_116 }, { t: this.shape_115 }, { t: this.shape_114 }, { t: this.shape_113 }, { t: this.shape_112 }, { t: this.shape_111 }, { t: this.shape_110 }, { t: this.shape_109 }, { t: this.shape_108 }, { t: this.shape_107 }, { t: this.shape_106 }, { t: this.shape_105 }, { t: this.shape_104 }, { t: this.shape_103 }, { t: this.shape_102 }, { t: this.shape_101 }, { t: this.shape_100 }, { t: this.shape_99 }, { t: this.shape_98 }, { t: this.shape_97 }, { t: this.shape_96 }, { t: this.shape_95 }, { t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib._3dzimti, new cjs.Rectangle(0, 0, 378.7, 378.8), null);


    (lib._3dlines = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_6();
        this.instance.parent = this;
        this.instance.setTransform(51.2, 131.2, 1, 1, 0, 0, 0, 131.2, 131.2);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("AgugDIBcgCIABAJIhcACg");
        this.shape.setTransform(4.9, 134.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f(gColor).s().p("AgFgtIAJAAIACBbIgJAAg");
        this.shape_1.setTransform(127.9, 4.7);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f(gColor).s().p("AgtgCIBbgFIAAAKIhbAEg");
        this.shape_2.setTransform(5, 137.7);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f(gColor).s().p("AgGgtIAJAAIAEBbIgJABg");
        this.shape_3.setTransform(124.6, 4.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f(gColor).s().p("AguAAIBbgIIABAJIhbAIg");
        this.shape_4.setTransform(5.2, 141);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f(gColor).s().p("AgHgsIAJgBIAHBbIgJAAg");
        this.shape_5.setTransform(121.3, 5.1);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f(gColor).s().p("AguAAIBcgJIABAJIhbAKg");
        this.shape_6.setTransform(5.5, 144.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f(gColor).s().p("AgJgtIAJgBIAKBbIgKABg");
        this.shape_7.setTransform(118, 5.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f(gColor).s().p("AgtABIBagLIABAKIhaALg");
        this.shape_8.setTransform(5.9, 147.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f(gColor).s().p("AgKgsIAKgBIALBaIgKACg");
        this.shape_9.setTransform(114.7, 5.8);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f(gColor).s().p("AgtACIBagNIABAKIhaANg");
        this.shape_10.setTransform(6.4, 150.8);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f(gColor).s().p("AgLgsIAKgBIAOBaIgLABg");
        this.shape_11.setTransform(111.4, 6.2);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f(gColor).s().p("AgtAEIBZgRIACAKIhaAQg");
        this.shape_12.setTransform(6.9, 154.1);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f(gColor).s().p("AgMgrIAKgCIAQBaIgKABg");
        this.shape_13.setTransform(108.2, 6.8);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f(gColor).s().p("AgtAEIBZgSIACAKIhZASg");
        this.shape_14.setTransform(7.6, 157.3);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f(gColor).s().p("AgOgrIALgCIASBZIgKACg");
        this.shape_15.setTransform(104.9, 7.4);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f(gColor).s().p("AgtAGIBZgVIACAKIhZAVg");
        this.shape_16.setTransform(8.3, 160.5);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f(gColor).s().p("AgPgqIAKgDIAVBZIgKACg");
        this.shape_17.setTransform(101.7, 8.2);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f(gColor).s().p("AgtAHIBYgXIADAKIhYAXg");
        this.shape_18.setTransform(9.1, 163.8);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f(gColor).s().p("AgQgqIAKgDIAXBYIgKADg");
        this.shape_19.setTransform(98.5, 9);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f(gColor).s().p("AgtAIIBYgZIADAKIhYAZg");
        this.shape_20.setTransform(10, 166.9);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f(gColor).s().p("AgRgqIAJgDIAaBYIgKADg");
        this.shape_21.setTransform(95.3, 9.9);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f(gColor).s().p("AgsAKIBWgcIAEAKIhYAbg");
        this.shape_22.setTransform(11, 170.1);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f(gColor).s().p("AgSgpIAJgEIAcBXIgKADg");
        this.shape_23.setTransform(92.1, 10.9);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f(gColor).s().p("AgtALIBXgeIADAJIhWAeg");
        this.shape_24.setTransform(12.1, 173.2);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f(gColor).s().p("AgTgpIAJgDIAeBWIgJADg");
        this.shape_25.setTransform(89, 11.9);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f(gColor).s().p("AgsAMIBWggIADAJIhVAgg");
        this.shape_26.setTransform(13.2, 176.3);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f(gColor).s().p("AgUgoIAJgEIAgBVIgJAEg");
        this.shape_27.setTransform(85.9, 13.1);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f(gColor).s().p("AgsANIBVgiIAEAJIhVAjg");
        this.shape_28.setTransform(14.4, 179.4);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f(gColor).s().p("AgWgoIAKgEIAiBVIgJAEg");
        this.shape_29.setTransform(82.8, 14.3);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f(gColor).s().p("AgrAOIBTglIAEAJIhTAmg");
        this.shape_30.setTransform(15.7, 182.5);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f(gColor).s().p("AgXgnIAKgEIAkBTIgJAEg");
        this.shape_31.setTransform(79.8, 15.6);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f(gColor).s().p("AgrAPIBTgmIAEAJIhTAmg");
        this.shape_32.setTransform(17.1, 185.5);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f(gColor).s().p("AgXgnIAJgEIAmBTIgJAEg");
        this.shape_33.setTransform(76.8, 17);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f(gColor).s().p("AgqAQIBRgpIAEAJIhRApg");
        this.shape_34.setTransform(18.6, 188.4);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f(gColor).s().p("AgYgmIAJgFIAoBSIgJAFg");
        this.shape_35.setTransform(73.8, 18.5);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f(gColor).s().p("AgqASIBQgrIAFAIIhQAsg");
        this.shape_36.setTransform(20.1, 191.4);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f(gColor).s().p("AgaglIAJgFIAsBQIgJAFg");
        this.shape_37.setTransform(70.9, 20);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f(gColor).s().p("AgqATIBQgtIAFAJIhPAtg");
        this.shape_38.setTransform(21.7, 194.2);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f(gColor).s().p("AgbgkIAJgGIAtBPIgJAGg");
        this.shape_39.setTransform(68, 21.6);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f(gColor).s().p("AgpAUIBOgwIAFAJIhOAvg");
        this.shape_40.setTransform(23.4, 197.1);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f(gColor).s().p("AgcgkIAJgFIAwBOIgJAFg");
        this.shape_41.setTransform(65.2, 23.3);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f(gColor).s().p("AgoAVIBMgyIAFAJIhMAyg");
        this.shape_42.setTransform(25.2, 199.9);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f(gColor).s().p("AgdgjIAJgFIAyBMIgJAGg");
        this.shape_43.setTransform(62.4, 25.1);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f(gColor).s().p("AgoAWIBLgzIAGAIIhLAzg");
        this.shape_44.setTransform(27, 202.6);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f(gColor).s().p("AgegiIAJgGIAzBLIgIAGg");
        this.shape_45.setTransform(59.6, 26.9);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f(gColor).s().p("AgnAXIBKg1IAGAIIhLA1g");
        this.shape_46.setTransform(29, 205.3);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f(gColor).s().p("AgegiIAIgGIA1BLIgIAFg");
        this.shape_47.setTransform(56.9, 28.8);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f(gColor).s().p("AgnAYIBIg3IAHAIIhJA3g");
        this.shape_48.setTransform(30.9, 208);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f(gColor).s().p("AgfggIAIgHIA3BJIgIAGg");
        this.shape_49.setTransform(54.2, 30.8);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f(gColor).s().p("AgmAZIBHg5IAGAIIhHA5g");
        this.shape_50.setTransform(33, 210.6);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f(gColor).s().p("AggggIAIgGIA5BHIgIAGg");
        this.shape_51.setTransform(51.7, 32.8);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f(gColor).s().p("AglAaIBFg7IAGAIIhFA7g");
        this.shape_52.setTransform(35.1, 213.1);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f(gColor).s().p("AghgfIAIgGIA7BFIgIAGg");
        this.shape_53.setTransform(49.1, 35);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f(gColor).s().p("AglAbIBEg9IAHAIIhEA9g");
        this.shape_54.setTransform(37.3, 215.6);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f(gColor).s().p("AgigeIAIgHIA9BEIgIAHg");
        this.shape_55.setTransform(46.6, 37.1);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f(gColor).s().p("AgkAcIBCg/IAHAIIhCA+g");
        this.shape_56.setTransform(39.5, 218);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f(gColor).s().p("AgigdIAGgHIBABCIgIAHg");
        this.shape_57.setTransform(44.2, 39.4);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f(gColor).s().p("AgjgcIAHgHIBABAIgHAHg");
        this.shape_58.setTransform(41.8, 41.7);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f(gColor).s().p("AgkgbIAHgIIBCA/IgHAHg");
        this.shape_59.setTransform(39.5, 44.1);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f(gColor).s().p("AglgaIAHgIIBEA9IgHAIg");
        this.shape_60.setTransform(37.3, 46.5);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f(gColor).s().p("AglgZIAGgIIBFA7IgGAIg");
        this.shape_61.setTransform(35.1, 49);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f(gColor).s().p("AgmgYIAGgIIBHA5IgGAIg");
        this.shape_62.setTransform(33, 51.5);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f(gColor).s().p("AgngXIAGgIIBJA3IgHAIg");
        this.shape_63.setTransform(30.9, 54.1);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f(gColor).s().p("AgngWIAFgIIBLA1IgGAIg");
        this.shape_64.setTransform(29, 56.8);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f(gColor).s().p("AgogVIAFgJIBMA0IgGAJg");
        this.shape_65.setTransform(27.1, 59.5);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f(gColor).s().p("AgogUIAFgIIBMAxIgFAIg");
        this.shape_66.setTransform(25.2, 62.2);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f(gColor).s().p("AgpgSIAFgJIBOAvIgFAIg");
        this.shape_67.setTransform(23.4, 65);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f(gColor).s().p("AgqgRIAGgJIBPAtIgFAJg");
        this.shape_68.setTransform(21.7, 67.9);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f(gColor).s().p("AgqgRIAFgJIBQAsIgFAJg");
        this.shape_69.setTransform(20.1, 70.8);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f(gColor).s().p("AgqgQIAEgJIBRAqIgEAJg");
        this.shape_70.setTransform(18.6, 73.7);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f(gColor).s().p("AgrgOIAEgJIBTAmIgEAJg");
        this.shape_71.setTransform(17.1, 76.7);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f(gColor).s().p("AgrgOIAEgJIBTAlIgEAJg");
        this.shape_72.setTransform(15.7, 79.7);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f(gColor).s().p("AgsgMIAEgJIBVAiIgEAJg");
        this.shape_73.setTransform(14.4, 82.7);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f(gColor).s().p("AgsgLIAEgKIBVAhIgDAJg");
        this.shape_74.setTransform(13.2, 85.8);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f(gColor).s().p("AgtgKIAEgJIBWAdIgDAKg");
        this.shape_75.setTransform(12.1, 88.9);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f(gColor).s().p("AgsgIIACgKIBYAcIgEAJg");
        this.shape_76.setTransform(11, 92);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f(gColor).s().p("AgtgIIADgJIBYAZIgDAKg");
        this.shape_77.setTransform(10, 95.2);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f(gColor).s().p("AgtgGIADgKIBYAXIgDAKg");
        this.shape_78.setTransform(9.1, 98.3);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f(gColor).s().p("AgtgFIACgKIBZAVIgCAKg");
        this.shape_79.setTransform(8.3, 101.5);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f(gColor).s().p("AgtgEIACgKIBZATIgCAJg");
        this.shape_80.setTransform(7.6, 104.8);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f(gColor).s().p("AgtgDIABgKIBaAQIgCAKg");
        this.shape_81.setTransform(6.9, 108);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f(gColor).s().p("AgtgBIABgKIBaANIgBAKg");
        this.shape_82.setTransform(6.4, 111.3);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f(gColor).s().p("AgtAAIABgKIBaALIgBAKg");
        this.shape_83.setTransform(5.9, 114.6);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f(gColor).s().p("AguAAIACgJIBbAJIgBAKg");
        this.shape_84.setTransform(5.5, 117.8);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f(gColor).s().p("AguABIABgJIBbAIIgBAJg");
        this.shape_85.setTransform(5.2, 121.1);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f(gColor).s().p("AgtADIAAgKIBbAGIAAAJg");
        this.shape_86.setTransform(5, 124.4);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f(gColor).s().p("AguAEIABgJIBcACIgBAJg");
        this.shape_87.setTransform(4.9, 127.7);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f(gColor).s().p("AgtAFIAAgJIBbAAIAAAJg");
        this.shape_88.setTransform(4.8, 131.1);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib._3dlines, new cjs.Rectangle(0, 0, 262.4, 262.4), null);


    (lib._3dline = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.Path_4();
        this.instance.parent = this;
        this.instance.setTransform(164.5, 184.5, 1, 1, 0, 0, 0, 164.5, 164.5);
        this.instance.alpha = 0;

        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("Ap1CAQksh9jqjoIAWgWQDlDlEnB5QEnB6FCAAQFDAAEnh6QEnh5DljlIAVAWQjpDoksB9QksB8lKAAQlJAAksh8g");
        this.shape.setTransform(163.6, 303.8);

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }, { t: this.instance }] }).wait(1));

    }).prototype = getMCSymbolPrototype(lib._3dline, new cjs.Rectangle(0, 0, 329, 329), null);


    (lib.mixx = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib._2ndcross();
        this.instance.parent = this;
        this.instance.setTransform(-44.9, 40.2, 1, 1, 0, 0, 0, 4.4, 4.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({ rotation: 180, y: 40.1 }, 179).wait(1));

        // Layer 4
        this.instance_1 = new lib.cross1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(32.6, 92.8, 1, 1, 0, 0, 0, 10.7, 10.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ rotation: 180, x: 32.5, y: 92.7 }, 179).wait(1));

        // cross
        this.instance_2 = new lib.cross();
        this.instance_2.parent = this;
        this.instance_2.setTransform(325.1, 29.5, 1, 1, 0, 0, 0, 4.4, 4.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ rotation: -135, y: 29.4 }, 179).wait(1));

        // big cross
        this.instance_3 = new lib.bigcross();
        this.instance_3.parent = this;
        this.instance_3.setTransform(290.9, 127, 1, 1, 0, 0, 0, 10.7, 10.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({ rotation: 180, x: 290.8, y: 126.9 }, 179).wait(1));

        // mdeium cross
        this.instance_4 = new lib.mediumcross();
        this.instance_4.parent = this;
        this.instance_4.setTransform(213.5, 199.4, 1, 1, 0, 0, 0, 4.4, 4.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({ rotation: 180 }, 179).wait(1));

        // Layer 8
        this.instance_5 = new lib._3dcross();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-15.1, 135.7, 1, 1, 0, 0, 0, 4.5, 4.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({ rotation: 180, x: -15 }, 179).wait(1));

        // Layer 9
        this.instance_6 = new lib._4thcross();
        this.instance_6.parent = this;
        this.instance_6.setTransform(32.6, 156.6, 1, 1, 0, 0, 0, 6.8, 6.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({ rotation: 180, x: 32.5, y: 156.7 }, 179).wait(1));

        // cross stanga
        this.instance_7 = new lib.crosstanga();
        this.instance_7.parent = this;
        this.instance_7.setTransform(583.5, 63.7, 1, 1, 0, 0, 0, 4.4, 4.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({ rotation: 90, x: 583.4, y: 63.6 }, 179).wait(1));

        // Layer 44 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhNBPQghghAAguQAAgtAhghQAgggAtAAQAuAAAgAgQAhAhAAAtQAAAughAhQggAgguAAQgtAAggggg");
        mask.setTransform(530.9, 273.8);

        // sageata jos
        this.instance_8 = new lib.sageatajos();
        this.instance_8.parent = this;
        this.instance_8.setTransform(518.4, 286.2, 1, 1, 0, 0, 0, 5, 5);

        var maskedShapeInstanceList = [this.instance_8];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({ x: 543.3, y: 261.3 }, 179).wait(1));

        // cerc jos
        this.instance_9 = new lib.cercjos();
        this.instance_9.parent = this;
        this.instance_9.setTransform(530.9, 273.8, 1, 1, 0, 0, 0, 12, 12);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(180));

        // Layer 12
        this.shape = new cjs.Shape();
        this.shape.graphics.f(gColor).s().p("Ah0B1QgxgxABhEQgBhEAxgwQAwgxBEABQBEgBAxAxQAwAwABBEQgBBEgwAxQgxAwhEABQhEgBgwgwgAhbhbQgmAnAAA0QAAA2AmAmQAnAmA0AAQA2AAAmgmQAmgmAAg2QAAg0gmgnQgmgmg2AAQg0AAgnAmg");
        this.shape.setTransform(316.9, 85.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

        // Layer 45 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AV8HMQgrgsAAg+QAAg+ArgsQAsgrA+AAQA+AAArArQAsAsAAA+QAAA+gsAsQgrArg+AAQg+AAgsgrg");
        mask_1.setTransform(165.9, 50.3);

        // Layer 13
        this.instance_10 = new lib.sageata2();
        this.instance_10.parent = this;
        this.instance_10.setTransform(296.5, 106.1, 1, 1, 0, 0, 0, 7, 7);

        var maskedShapeInstanceList = [this.instance_10];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance_10).to({ x: 334.9, y: 67.7 }, 179).wait(1));

        // Layer 46 (mask)
        var mask_2 = new cjs.Shape();
        mask_2._off = true;
        mask_2.graphics.p("AkZNCQhRgbgRjxQgem3B1n+QA7kABCipQADgCBegJQBygLBcgEQElgMgyBDQg0BEg/DBIhdE6QghBwgQD6QgPDpAGgDQhvDch0CEQhXBhg7AAQgLAAgKgDg");
        mask_2.setTransform(176.5, 105.3);

        // sageata laterala
        this.instance_11 = new lib.Tween6("synched", 0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(129.8, 129.8);
        this.instance_11._off = true;

        this.instance_12 = new lib.Tween7("synched", 0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(206.1, 66.4);

        var maskedShapeInstanceList = [this.instance_11, this.instance_12];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
        }

        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_11 }] }, 35).to({ state: [{ t: this.instance_12 }] }, 144).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35).to({ _off: false }, 0).to({ _off: true, x: 206.1, y: 66.4 }, 144).wait(1));

        // Layer 15
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f(gColor).s().p("AhSAzIBZhYIhIAAIAtgtIBmAAIAABnIgrAsIAAhHIhZBZg");
        this.shape_1.setTransform(1.6, 236.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).to({ _off: true }, 1).wait(179));

        // masca second weel (mask)
        var mask_3 = new cjs.Shape();
        mask_3._off = true;
        mask_3.graphics.p("Ag2ODQACAAkf8KIJrCSIA8XPIlmCuIgkgFg");
        mask_3.setTransform(239.2, 168.3);

        // second wheel
        this.instance_13 = new lib.secondwheel();
        this.instance_13.parent = this;
        this.instance_13.setTransform(471.8, 144.5, 1, 1, 0, 0, 0, 253.4, 253.5);

        var maskedShapeInstanceList = [this.instance_13];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance_13).to({ regY: 253.4, rotation: -12, y: 144.4 }, 179).wait(1));

        // biggest line
        this.instance_14 = new lib.biggestline();
        this.instance_14.parent = this;
        this.instance_14.setTransform(471.8, 144.5, 1, 1, 0, 0, 0, 287.9, 287.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({ rotation: -0.1 }, 0).wait(1).to({ rotation: -0.2 }, 0).wait(1).to({ rotation: -0.3, x: 471.7, y: 144.6 }, 0).wait(1).to({ rotation: -0.4, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: -0.6, y: 144.6 }, 0).wait(1).to({ rotation: -0.9, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -1.2, x: 471.8 }, 0).wait(1).to({ rotation: -1.5, x: 471.7, y: 144.6 }, 0).wait(1).to({ rotation: -1.9 }, 0).wait(1).to({ rotation: -2.3, y: 144.5 }, 0).wait(1).to({ rotation: -2.8 }, 0).wait(1).to({ rotation: -3.3 }, 0).wait(1).to({ rotation: -3.9, x: 471.8, y: 144.6 }, 0).wait(1).to({ rotation: -4.5, y: 144.5 }, 0).wait(1).to({ rotation: -5.2, x: 471.7, y: 144.6 }, 0).wait(1).to({ rotation: -6, y: 144.5 }, 0).wait(1).to({ rotation: -6.8, y: 144.6 }, 0).wait(1).to({ rotation: -7.7 }, 0).wait(1).to({ rotation: -8.6, x: 471.8 }, 0).wait(1).to({ rotation: -9.7, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -10.7, x: 471.8 }, 0).wait(1).to({ rotation: -11.9, x: 471.7, y: 144.6 }, 0).wait(1).to({ rotation: -13.1 }, 0).wait(1).to({ rotation: -14.4, x: 471.8 }, 0).wait(1).to({ rotation: -15.8 }, 0).wait(1).to({ rotation: -17.2 }, 0).wait(1).to({ rotation: -18.7 }, 0).wait(1).to({ rotation: -20.3, y: 144.5 }, 0).wait(1).to({ rotation: -22, y: 144.6 }, 0).wait(1).to({ rotation: -23.7 }, 0).wait(1).to({ rotation: -25.5, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -27.4 }, 0).wait(1).to({ rotation: -29.3 }, 0).wait(1).to({ rotation: -31.2, x: 471.8 }, 0).wait(1).to({ rotation: -33.3 }, 0).wait(1).to({ rotation: -35.3, x: 471.7 }, 0).wait(1).to({ rotation: -37.4, x: 471.8 }, 0).wait(1).to({ rotation: -39.5 }, 0).wait(1).to({ rotation: -41.6 }, 0).wait(1).to({ rotation: -43.7 }, 0).wait(1).to({ rotation: -45.8 }, 0).wait(1).to({ rotation: -47.9, x: 471.7 }, 0).wait(1).to({ rotation: -49.9, x: 471.8 }, 0).wait(1).to({ rotation: -52, x: 471.7 }, 0).wait(1).to({ rotation: -54, x: 471.8 }, 0).wait(1).to({ rotation: -55.9 }, 0).wait(1).to({ rotation: -57.8, y: 144.4 }, 0).wait(1).to({ rotation: -59.7, y: 144.5 }, 0).wait(1).to({ rotation: -61.5 }, 0).wait(1).to({ rotation: -63.2 }, 0).wait(1).to({ rotation: -64.9 }, 0).wait(1).to({ rotation: -66.5 }, 0).wait(1).to({ rotation: -68 }, 0).wait(1).to({ rotation: -69.5, y: 144.4 }, 0).wait(1).to({ rotation: -70.9, y: 144.5 }, 0).wait(1).to({ rotation: -72.3 }, 0).wait(1).to({ rotation: -73.6 }, 0).wait(1).to({ rotation: -74.8 }, 0).wait(1).to({ rotation: -76 }, 0).wait(1).to({ rotation: -77.1, y: 144.4 }, 0).wait(1).to({ rotation: -78.2, y: 144.5 }, 0).wait(1).to({ rotation: -79.2 }, 0).wait(1).to({ rotation: -80.1 }, 0).wait(1).to({ rotation: -81, y: 144.4 }, 0).wait(1).to({ rotation: -81.8, y: 144.5 }, 0).wait(1).to({ rotation: -82.6 }, 0).wait(1).to({ rotation: -83.3, y: 144.4 }, 0).wait(1).to({ rotation: -84 }, 0).wait(1).to({ rotation: -84.7, y: 144.5 }, 0).wait(1).to({ rotation: -85.3 }, 0).wait(1).to({ rotation: -85.8 }, 0).wait(1).to({ rotation: -86.4 }, 0).wait(1).to({ rotation: -86.8 }, 0).wait(1).to({ rotation: -87.3 }, 0).wait(1).to({ rotation: -87.7, y: 144.4 }, 0).wait(1).to({ rotation: -88 }, 0).wait(1).to({ rotation: -88.4, y: 144.5 }, 0).wait(1).to({ rotation: -88.7 }, 0).wait(1).to({ rotation: -88.9, y: 144.4 }, 0).wait(1).to({ rotation: -89.2, y: 144.5 }, 0).wait(1).to({ rotation: -89.4, y: 144.4 }, 0).wait(1).to({ rotation: -89.5 }, 0).wait(1).to({ rotation: -89.7, y: 144.5 }, 0).wait(1).to({ rotation: -89.8, y: 144.4 }, 0).wait(1).to({ rotation: -89.9 }, 0).wait(1).to({ rotation: -90, y: 144.5 }, 0).wait(1).to({ y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ rotation: -89.9, y: 144.4 }, 0).wait(1).to({ rotation: -89.8 }, 0).wait(1).to({ rotation: -89.7 }, 0).wait(1).to({ rotation: -89.5, y: 144.5 }, 0).wait(1).to({ rotation: -89.4, y: 144.4 }, 0).wait(1).to({ rotation: -89.2, y: 144.5 }, 0).wait(1).to({ rotation: -88.9, y: 144.4 }, 0).wait(1).to({ rotation: -88.6 }, 0).wait(1).to({ rotation: -88.3 }, 0).wait(1).to({ rotation: -88, y: 144.5 }, 0).wait(1).to({ rotation: -87.6, y: 144.4 }, 0).wait(1).to({ rotation: -87.2 }, 0).wait(1).to({ rotation: -86.7, y: 144.5 }, 0).wait(1).to({ rotation: -86.2 }, 0).wait(1).to({ rotation: -85.7, y: 144.4 }, 0).wait(1).to({ rotation: -85.1, y: 144.5 }, 0).wait(1).to({ rotation: -84.4, y: 144.4 }, 0).wait(1).to({ rotation: -83.7, y: 144.5 }, 0).wait(1).to({ rotation: -83, y: 144.4 }, 0).wait(1).to({ rotation: -82.2 }, 0).wait(1).to({ rotation: -81.3, y: 144.5 }, 0).wait(1).to({ rotation: -80.4 }, 0).wait(1).to({ rotation: -79.4 }, 0).wait(1).to({ rotation: -78.4 }, 0).wait(1).to({ rotation: -77.3, y: 144.4 }, 0).wait(1).to({ rotation: -76.1, y: 144.5 }, 0).wait(1).to({ rotation: -74.8, y: 144.4 }, 0).wait(1).to({ rotation: -73.5 }, 0).wait(1).to({ rotation: -72.1, y: 144.5 }, 0).wait(1).to({ rotation: -70.6, y: 144.4 }, 0).wait(1).to({ rotation: -69.1, y: 144.5 }, 0).wait(1).to({ rotation: -67.4 }, 0).wait(1).to({ rotation: -65.7 }, 0).wait(1).to({ rotation: -63.9 }, 0).wait(1).to({ rotation: -62, y: 144.4 }, 0).wait(1).to({ rotation: -60.1, y: 144.5 }, 0).wait(1).to({ rotation: -58.1 }, 0).wait(1).to({ rotation: -56 }, 0).wait(1).to({ rotation: -53.9 }, 0).wait(1).to({ rotation: -51.7 }, 0).wait(1).to({ rotation: -49.5 }, 0).wait(1).to({ rotation: -47.2 }, 0).wait(1).to({ rotation: -45, x: 471.7 }, 0).wait(1).to({ rotation: -42.8, x: 471.8 }, 0).wait(1).to({ rotation: -40.5 }, 0).wait(1).to({ rotation: -38.3 }, 0).wait(1).to({ rotation: -36.1 }, 0).wait(1).to({ rotation: -34 }, 0).wait(1).to({ rotation: -31.9 }, 0).wait(1).to({ rotation: -29.9 }, 0).wait(1).to({ rotation: -28 }, 0).wait(1).to({ rotation: -26.1, x: 471.7 }, 0).wait(1).to({ rotation: -24.3, x: 471.8 }, 0).wait(1).to({ rotation: -22.6 }, 0).wait(1).to({ rotation: -20.9 }, 0).wait(1).to({ rotation: -19.4, y: 144.6 }, 0).wait(1).to({ rotation: -17.9, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -16.5, y: 144.6 }, 0).wait(1).to({ rotation: -15.2, x: 471.8 }, 0).wait(1).to({ rotation: -13.9, y: 144.5 }, 0).wait(1).to({ rotation: -12.7, y: 144.6 }, 0).wait(1).to({ rotation: -11.6, y: 144.5 }, 0).wait(1).to({ rotation: -10.6, x: 471.7 }, 0).wait(1).to({ rotation: -9.6, x: 471.8, y: 144.6 }, 0).wait(1).to({ rotation: -8.7, y: 144.5 }, 0).wait(1).to({ rotation: -7.8, y: 144.6 }, 0).wait(1).to({ rotation: -7, x: 471.7 }, 0).wait(1).to({ rotation: -6.3, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: -5.6, y: 144.6 }, 0).wait(1).to({ rotation: -4.9, y: 144.5 }, 0).wait(1).to({ rotation: -4.3, y: 144.6 }, 0).wait(1).to({ rotation: -3.8, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -3.3, x: 471.8 }, 0).wait(1).to({ rotation: -2.8, x: 471.7, y: 144.6 }, 0).wait(1).to({ rotation: -2.4 }, 0).wait(1).to({ rotation: -2, y: 144.5 }, 0).wait(1).to({ rotation: -1.7, x: 471.8, y: 144.6 }, 0).wait(1).to({ rotation: -1.4, x: 471.7 }, 0).wait(1).to({ rotation: -1.1 }, 0).wait(1).to({ rotation: -0.8, y: 144.5 }, 0).wait(1).to({ rotation: -0.6, x: 471.8, y: 144.6 }, 0).wait(1).to({ rotation: -0.5, y: 144.5 }, 0).wait(1).to({ rotation: -0.3, y: 144.6 }, 0).wait(1).to({ rotation: -0.2, x: 471.7 }, 0).wait(1).to({ rotation: -0.1 }, 0).wait(1).to({ rotation: 0, x: 471.8, y: 144.5 }, 0).wait(1).to({ x: 471.7, y: 144.6 }, 0).wait(1).to({ x: 471.8, y: 144.5 }, 0).wait(1));

        // 4t line
        this.instance_15 = new lib._4tline();
        this.instance_15.parent = this;
        this.instance_15.setTransform(470.3, 144.4, 1, 1, 0, 0, 0, 130.5, 130.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({ x: 470.2 }, 0).wait(1).to({ x: 470.3 }, 0).wait(1).to({ x: 470.2 }, 0).wait(1).to({ rotation: -0.1 }, 0).wait(1).to({ x: 470.3 }, 0).wait(1).to({ x: 470.2 }, 0).wait(1).to({ rotation: -0.2 }, 0).wait(1).to({ x: 470.3 }, 0).wait(1).to({ rotation: -0.3, x: 470.2 }, 0).wait(1).to({ x: 470.3 }, 0).wait(1).to({ rotation: -0.4 }, 0).wait(1).to({ rotation: -0.5 }, 0).wait(1).to({ rotation: -0.6 }, 0).wait(1).to({ rotation: -0.7 }, 0).wait(1).to({ rotation: -0.8 }, 0).wait(1).to({ rotation: -1 }, 0).wait(1).to({ rotation: -1.1 }, 0).wait(1).to({ rotation: -1.3 }, 0).wait(1).to({ rotation: -1.5 }, 0).wait(1).to({ rotation: -1.7 }, 0).wait(1).to({ rotation: -1.9, x: 470.4 }, 0).wait(1).to({ rotation: -2.1, x: 470.3 }, 0).wait(1).to({ rotation: -2.4, x: 470.4 }, 0).wait(1).to({ rotation: -2.6, x: 470.3 }, 0).wait(1).to({ rotation: -2.9, x: 470.4 }, 0).wait(1).to({ rotation: -3.3 }, 0).wait(1).to({ rotation: -3.6 }, 0).wait(1).to({ rotation: -4 }, 0).wait(1).to({ rotation: -4.4 }, 0).wait(1).to({ rotation: -4.9, x: 470.5 }, 0).wait(1).to({ rotation: -5.4, x: 470.4 }, 0).wait(1).to({ rotation: -5.9, x: 470.5 }, 0).wait(1).to({ rotation: -6.5 }, 0).wait(1).to({ rotation: -7.2 }, 0).wait(1).to({ rotation: -7.9 }, 0).wait(1).to({ rotation: -8.7, x: 470.6 }, 0).wait(1).to({ rotation: -9.5 }, 0).wait(1).to({ rotation: -10.5, x: 470.7 }, 0).wait(1).to({ rotation: -11.5 }, 0).wait(1).to({ rotation: -12.6 }, 0).wait(1).to({ rotation: -13.8, x: 470.8 }, 0).wait(1).to({ rotation: -15, x: 470.9 }, 0).wait(1).to({ rotation: -16.3 }, 0).wait(1).to({ rotation: -17.5, x: 471 }, 0).wait(1).to({ rotation: -18.8 }, 0).wait(1).to({ rotation: -19.9 }, 0).wait(1).to({ rotation: -21.1, x: 471.1 }, 0).wait(1).to({ rotation: -22.1 }, 0).wait(1).to({ rotation: -23, x: 471.2 }, 0).wait(1).to({ rotation: -23.9 }, 0).wait(1).to({ rotation: -24.7 }, 0).wait(1).to({ rotation: -25.4 }, 0).wait(1).to({ rotation: -26.1, x: 471.3 }, 0).wait(1).to({ rotation: -26.7 }, 0).wait(1).to({ rotation: -27.3 }, 0).wait(1).to({ rotation: -27.8 }, 0).wait(1).to({ rotation: -28.3, x: 471.4 }, 0).wait(1).to({ rotation: -28.7, x: 471.3 }, 0).wait(1).to({ rotation: -29.1 }, 0).wait(1).to({ rotation: -29.5, x: 471.4 }, 0).wait(1).to({ rotation: -29.8 }, 0).wait(1).to({ rotation: -30.1 }, 0).wait(1).to({ rotation: -30.4 }, 0).wait(1).to({ rotation: -30.7 }, 0).wait(1).to({ rotation: -30.9 }, 0).wait(1).to({ rotation: -31.2, x: 471.5 }, 0).wait(1).to({ rotation: -31.4 }, 0).wait(1).to({ rotation: -31.6 }, 0).wait(1).to({ rotation: -31.8 }, 0).wait(1).to({ rotation: -31.9 }, 0).wait(1).to({ rotation: -32.1 }, 0).wait(1).to({ rotation: -32.2 }, 0).wait(1).to({ rotation: -32.4 }, 0).wait(1).to({ rotation: -32.5, x: 471.6 }, 0).wait(1).to({ rotation: -32.6, x: 471.5 }, 0).wait(1).to({ rotation: -32.7 }, 0).wait(1).to({ rotation: -32.8 }, 0).wait(1).to({ rotation: -32.9 }, 0).wait(1).to({ x: 471.6 }, 0).wait(1).to({ rotation: -33, x: 471.5 }, 0).wait(1).to({ x: 471.6 }, 0).wait(1).to({ rotation: -33.1 }, 0).wait(1).to({ x: 471.5 }, 0).wait(1).to({ rotation: -33.2, x: 471.6 }, 0).wait(2).to({ x: 471.5 }, 0).wait(3).to({ regX: 130.4, y: 144.5 }, 0).wait(1).to({ regX: 130.5, x: 471.6, y: 144.4 }, 0).wait(5).to({ rotation: -33.1 }, 0).wait(3).to({ rotation: -33 }, 0).wait(2).to({ rotation: -32.9 }, 0).wait(1).to({ rotation: -32.8 }, 0).wait(2).to({ rotation: -32.7 }, 0).wait(1).to({ rotation: -32.6 }, 0).wait(1).to({ rotation: -32.5 }, 0).wait(1).to({ rotation: -32.4 }, 0).wait(1).to({ rotation: -32.3 }, 0).wait(1).to({ rotation: -32.1 }, 0).wait(1).to({ rotation: -32 }, 0).wait(1).to({ rotation: -31.8 }, 0).wait(1).to({ rotation: -31.7, x: 471.5 }, 0).wait(1).to({ rotation: -31.5 }, 0).wait(1).to({ rotation: -31.3, y: 144.5 }, 0).wait(1).to({ rotation: -31, y: 144.4 }, 0).wait(1).to({ rotation: -30.8 }, 0).wait(1).to({ rotation: -30.5 }, 0).wait(1).to({ rotation: -30.3 }, 0).wait(1).to({ rotation: -29.9 }, 0).wait(1).to({ rotation: -29.6 }, 0).wait(1).to({ rotation: -29.2, x: 471.4 }, 0).wait(1).to({ rotation: -28.8 }, 0).wait(1).to({ rotation: -28.4, x: 471.5 }, 0).wait(1).to({ rotation: -27.9, x: 471.4 }, 0).wait(1).to({ rotation: -27.4 }, 0).wait(1).to({ rotation: -26.8 }, 0).wait(1).to({ rotation: -26.1 }, 0).wait(1).to({ rotation: -25.4, x: 471.3 }, 0).wait(1).to({ rotation: -24.5 }, 0).wait(1).to({ rotation: -23.6, x: 471.2, y: 144.5 }, 0).wait(1).to({ rotation: -22.5, y: 144.4 }, 0).wait(1).to({ rotation: -21.2, x: 471.1 }, 0).wait(1).to({ rotation: -19.8, x: 471 }, 0).wait(1).to({ rotation: -18.3 }, 0).wait(1).to({ rotation: -16.6, x: 470.9 }, 0).wait(1).to({ rotation: -15 }, 0).wait(1).to({ rotation: -13.4 }, 0).wait(1).to({ rotation: -12, x: 470.8 }, 0).wait(1).to({ rotation: -10.8, x: 470.7 }, 0).wait(1).to({ rotation: -9.7 }, 0).wait(1).to({ rotation: -8.7, y: 144.5 }, 0).wait(1).to({ rotation: -7.9, x: 470.6, y: 144.4 }, 0).wait(1).to({ rotation: -7.1 }, 0).wait(1).to({ rotation: -6.5, x: 470.5 }, 0).wait(1).to({ rotation: -5.9 }, 0).wait(1).to({ rotation: -5.3, y: 144.5 }, 0).wait(1).to({ rotation: -4.8 }, 0).wait(1).to({ rotation: -4.4, x: 470.4, y: 144.4 }, 0).wait(1).to({ rotation: -4, x: 470.5 }, 0).wait(1).to({ rotation: -3.6 }, 0).wait(1).to({ rotation: -3.3, x: 470.4 }, 0).wait(1).to({ rotation: -3 }, 0).wait(1).to({ rotation: -2.7 }, 0).wait(1).to({ rotation: -2.4, y: 144.5 }, 0).wait(1).to({ rotation: -2.2, y: 144.4 }, 0).wait(1).to({ rotation: -2 }, 0).wait(1).to({ rotation: -1.8 }, 0).wait(1).to({ rotation: -1.6, y: 144.5 }, 0).wait(1).to({ rotation: -1.4, x: 470.3 }, 0).wait(1).to({ rotation: -1.3, y: 144.4 }, 0).wait(1).to({ rotation: -1.1 }, 0).wait(1).to({ rotation: -1, y: 144.5 }, 0).wait(1).to({ rotation: -0.9, x: 470.4 }, 0).wait(1).to({ rotation: -0.7 }, 0).wait(1).to({ rotation: -0.6, x: 470.3 }, 0).wait(1).to({ rotation: -0.5 }, 0).wait(2).to({ rotation: -0.4, y: 144.4 }, 0).wait(1).to({ rotation: -0.3 }, 0).wait(2).to({ rotation: -0.2, y: 144.5 }, 0).wait(2).to({ rotation: -0.1, y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ y: 144.4 }, 0).wait(1).to({ rotation: 0 }, 0).wait(2).to({ y: 144.5 }, 0).wait(2).to({ y: 144.4 }, 0).wait(1));

        // 7th stroke
        this.instance_16 = new lib._7thstroke();
        this.instance_16.parent = this;
        this.instance_16.setTransform(471.8, 144.5, 1, 1, 0, 0, 0, 67.8, 67.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({ rotation: -0.1 }, 0).wait(1).to({ rotation: -0.2 }, 0).wait(2).to({ rotation: -0.4 }, 0).wait(1).to({ rotation: -0.5 }, 0).wait(1).to({ rotation: -0.6 }, 0).wait(1).to({ rotation: -0.8 }, 0).wait(1).to({ rotation: -1 }, 0).wait(1).to({ rotation: -1.2 }, 0).wait(1).to({ rotation: -1.5 }, 0).wait(1).to({ rotation: -1.8 }, 0).wait(1).to({ rotation: -2.1 }, 0).wait(1).to({ rotation: -2.4 }, 0).wait(1).to({ rotation: -2.8 }, 0).wait(1).to({ rotation: -3.2 }, 0).wait(1).to({ rotation: -3.6 }, 0).wait(1).to({ rotation: -4 }, 0).wait(1).to({ rotation: -4.5 }, 0).wait(1).to({ rotation: -5 }, 0).wait(1).to({ rotation: -5.5 }, 0).wait(1).to({ rotation: -6.1 }, 0).wait(1).to({ rotation: -6.7 }, 0).wait(1).to({ rotation: -7.4 }, 0).wait(1).to({ rotation: -8.1 }, 0).wait(1).to({ rotation: -8.8 }, 0).wait(1).to({ rotation: -9.5 }, 0).wait(1).to({ rotation: -10.3 }, 0).wait(1).to({ rotation: -11.1, x: 471.9 }, 0).wait(1).to({ rotation: -12, x: 471.8 }, 0).wait(1).to({ rotation: -12.9 }, 0).wait(1).to({ rotation: -13.8 }, 0).wait(1).to({ rotation: -14.8 }, 0).wait(1).to({ rotation: -15.8 }, 0).wait(1).to({ rotation: -16.8 }, 0).wait(1).to({ rotation: -17.9 }, 0).wait(1).to({ rotation: -19 }, 0).wait(1).to({ rotation: -20.2 }, 0).wait(1).to({ rotation: -21.3 }, 0).wait(1).to({ rotation: -22.5 }, 0).wait(1).to({ rotation: -23.8, x: 471.9 }, 0).wait(1).to({ rotation: -25, x: 471.8 }, 0).wait(1).to({ rotation: -26.3 }, 0).wait(1).to({ rotation: -27.6, x: 471.9 }, 0).wait(1).to({ rotation: -28.9, x: 471.8, y: 144.4 }, 0).wait(1).to({ rotation: -30.2, x: 471.9, y: 144.5 }, 0).wait(1).to({ rotation: -31.5, x: 471.8 }, 0).wait(1).to({ rotation: -32.8 }, 0).wait(1).to({ rotation: -34.1, x: 471.9 }, 0).wait(1).to({ rotation: -35.4, y: 144.4 }, 0).wait(1).to({ rotation: -36.7, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: -38, x: 471.9 }, 0).wait(1).to({ rotation: -39.2 }, 0).wait(1).to({ rotation: -40.4 }, 0).wait(1).to({ rotation: -41.6, x: 471.8 }, 0).wait(1).to({ rotation: -42.8, x: 471.9 }, 0).wait(1).to({ rotation: -44 }, 0).wait(1).to({ rotation: -45.1 }, 0).wait(1).to({ rotation: -46.1 }, 0).wait(1).to({ rotation: -47.2 }, 0).wait(1).to({ rotation: -48.1 }, 0).wait(1).to({ rotation: -49.1 }, 0).wait(1).to({ rotation: -50 }, 0).wait(1).to({ rotation: -50.9, y: 144.4 }, 0).wait(1).to({ rotation: -51.7, y: 144.5 }, 0).wait(1).to({ rotation: -52.4, y: 144.4 }, 0).wait(1).to({ rotation: -53.2, y: 144.5 }, 0).wait(1).to({ rotation: -53.9, x: 471.8 }, 0).wait(1).to({ rotation: -54.5, x: 471.9 }, 0).wait(1).to({ rotation: -55.1, y: 144.4 }, 0).wait(1).to({ rotation: -55.7, y: 144.5 }, 0).wait(1).to({ rotation: -56.2 }, 0).wait(1).to({ rotation: -56.7, y: 144.4 }, 0).wait(1).to({ rotation: -57.2, y: 144.5 }, 0).wait(1).to({ rotation: -57.6 }, 0).wait(1).to({ rotation: -58, x: 471.8 }, 0).wait(1).to({ rotation: -58.3, x: 471.9, y: 144.4 }, 0).wait(1).to({ rotation: -58.6 }, 0).wait(1).to({ rotation: -58.9, y: 144.5 }, 0).wait(1).to({ rotation: -59.1 }, 0).wait(1).to({ rotation: -59.3, x: 471.8 }, 0).wait(1).to({ rotation: -59.5, x: 471.9 }, 0).wait(1).to({ rotation: -59.7 }, 0).wait(1).to({ rotation: -59.8, y: 144.4 }, 0).wait(1).to({ rotation: -59.9 }, 0).wait(2).to({ rotation: -60, y: 144.5 }, 0).wait(1).to({ x: 471.8 }, 0).wait(3).to({ rotation: -59.9 }, 0).wait(1).to({ rotation: -59.8 }, 0).wait(1).to({ rotation: -59.7 }, 0).wait(1).to({ rotation: -59.6 }, 0).wait(1).to({ rotation: -59.4, y: 144.4 }, 0).wait(1).to({ rotation: -59.3, y: 144.5 }, 0).wait(1).to({ rotation: -59.1 }, 0).wait(1).to({ rotation: -58.8 }, 0).wait(1).to({ rotation: -58.6 }, 0).wait(1).to({ rotation: -58.3 }, 0).wait(1).to({ rotation: -58 }, 0).wait(1).to({ rotation: -57.6 }, 0).wait(1).to({ rotation: -57.3, y: 144.4 }, 0).wait(1).to({ rotation: -56.9, y: 144.5 }, 0).wait(1).to({ rotation: -56.4 }, 0).wait(1).to({ rotation: -56 }, 0).wait(1).to({ rotation: -55.5 }, 0).wait(1).to({ rotation: -54.9 }, 0).wait(1).to({ rotation: -54.4 }, 0).wait(1).to({ rotation: -53.8 }, 0).wait(1).to({ rotation: -53.1 }, 0).wait(1).to({ rotation: -52.5 }, 0).wait(1).to({ rotation: -51.8 }, 0).wait(1).to({ rotation: -51.1, y: 144.4 }, 0).wait(1).to({ rotation: -50.3, y: 144.5 }, 0).wait(1).to({ rotation: -49.5 }, 0).wait(1).to({ rotation: -48.7 }, 0).wait(1).to({ rotation: -47.8 }, 0).wait(1).to({ rotation: -46.9 }, 0).wait(1).to({ rotation: -46 }, 0).wait(1).to({ rotation: -45 }, 0).wait(1).to({ rotation: -44 }, 0).wait(1).to({ rotation: -43 }, 0).wait(1).to({ rotation: -41.9, y: 144.4 }, 0).wait(1).to({ rotation: -40.8, y: 144.5 }, 0).wait(1).to({ rotation: -39.7 }, 0).wait(1).to({ rotation: -38.6 }, 0).wait(1).to({ rotation: -37.4 }, 0).wait(1).to({ rotation: -36.2 }, 0).wait(1).to({ rotation: -35, y: 144.4 }, 0).wait(1).to({ rotation: -33.8, y: 144.5 }, 0).wait(1).to({ rotation: -32.6 }, 0).wait(1).to({ rotation: -31.4 }, 0).wait(1).to({ rotation: -30.1 }, 0).wait(1).to({ rotation: -28.9, y: 144.4 }, 0).wait(1).to({ rotation: -27.7, y: 144.5 }, 0).wait(1).to({ rotation: -26.4, y: 144.4 }, 0).wait(1).to({ rotation: -25.2, y: 144.5 }, 0).wait(1).to({ rotation: -24 }, 0).wait(1).to({ rotation: -22.8 }, 0).wait(1).to({ rotation: -21.6 }, 0).wait(1).to({ rotation: -20.4 }, 0).wait(1).to({ rotation: -19.3 }, 0).wait(1).to({ rotation: -18.2, y: 144.4 }, 0).wait(1).to({ rotation: -17.1, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -16 }, 0).wait(1).to({ rotation: -15, x: 471.8, y: 144.4 }, 0).wait(1).to({ rotation: -14, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -13 }, 0).wait(1).to({ rotation: -12.1 }, 0).wait(1).to({ rotation: -11.2 }, 0).wait(1).to({ rotation: -10.3 }, 0).wait(1).to({ rotation: -9.5, x: 471.8 }, 0).wait(1).to({ rotation: -8.7 }, 0).wait(1).to({ rotation: -7.9, y: 144.4 }, 0).wait(1).to({ rotation: -7.2 }, 0).wait(1).to({ rotation: -6.5 }, 0).wait(1).to({ rotation: -5.9, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -5.3, y: 144.4 }, 0).wait(1).to({ rotation: -4.7 }, 0).wait(1).to({ rotation: -4.1 }, 0).wait(1).to({ rotation: -3.6 }, 0).wait(1).to({ rotation: -3.2, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: -2.7, x: 471.7, y: 144.4 }, 0).wait(1).to({ rotation: -2.3, x: 471.8 }, 0).wait(1).to({ rotation: -2, x: 471.7 }, 0).wait(1).to({ rotation: -1.7 }, 0).wait(1).to({ rotation: -1.4, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: -1.1 }, 0).wait(1).to({ rotation: -0.9, x: 471.7 }, 0).wait(1).to({ rotation: -0.6 }, 0).wait(1).to({ rotation: -0.5 }, 0).wait(1).to({ rotation: -0.3, x: 471.8, y: 144.4 }, 0).wait(1).to({ rotation: -0.2 }, 0).wait(1).to({ rotation: -0.1 }, 0).wait(1).to({ x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: 0 }, 0).wait(1).to({ x: 471.8 }, 0).wait(1));

        // Layer 20
        this.instance_17 = new lib._6tstroke();
        this.instance_17.parent = this;
        this.instance_17.setTransform(471.8, 144.5, 1, 1, 0, 0, 0, 132.1, 132.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(2).to({ rotation: 0.1, y: 144.4 }, 0).wait(1).to({ rotation: 0.2 }, 0).wait(1).to({ rotation: 0.3, y: 144.5 }, 0).wait(1).to({ rotation: 0.4, y: 144.4 }, 0).wait(1).to({ rotation: 0.6 }, 0).wait(1).to({ rotation: 0.9, y: 144.5 }, 0).wait(1).to({ rotation: 1.1, y: 144.4 }, 0).wait(1).to({ rotation: 1.5, y: 144.5 }, 0).wait(1).to({ rotation: 1.8, y: 144.4 }, 0).wait(1).to({ rotation: 2.2 }, 0).wait(1).to({ rotation: 2.7 }, 0).wait(1).to({ rotation: 3.2, y: 144.5 }, 0).wait(1).to({ rotation: 3.7, y: 144.4 }, 0).wait(1).to({ rotation: 4.3 }, 0).wait(1).to({ rotation: 5, y: 144.5 }, 0).wait(1).to({ rotation: 5.7 }, 0).wait(1).to({ rotation: 6.4 }, 0).wait(1).to({ rotation: 7.3 }, 0).wait(1).to({ rotation: 8.1 }, 0).wait(1).to({ rotation: 9.1 }, 0).wait(1).to({ rotation: 10, y: 144.6 }, 0).wait(1).to({ rotation: 11.1, y: 144.5 }, 0).wait(1).to({ rotation: 12.2 }, 0).wait(1).to({ rotation: 13.4 }, 0).wait(1).to({ rotation: 14.6 }, 0).wait(1).to({ rotation: 16 }, 0).wait(1).to({ rotation: 17.4 }, 0).wait(1).to({ rotation: 18.8 }, 0).wait(1).to({ rotation: 20.4 }, 0).wait(1).to({ rotation: 22 }, 0).wait(1).to({ rotation: 23.7 }, 0).wait(1).to({ rotation: 25.4 }, 0).wait(1).to({ rotation: 27.3 }, 0).wait(1).to({ rotation: 29.2 }, 0).wait(1).to({ rotation: 31.2 }, 0).wait(1).to({ rotation: 33.3 }, 0).wait(1).to({ rotation: 35.4 }, 0).wait(1).to({ rotation: 37.6 }, 0).wait(1).to({ rotation: 39.9, y: 144.6 }, 0).wait(1).to({ rotation: 42.3, y: 144.5 }, 0).wait(1).to({ rotation: 44.7 }, 0).wait(1).to({ rotation: 47.2, y: 144.6 }, 0).wait(1).to({ rotation: 49.8, y: 144.5 }, 0).wait(1).to({ rotation: 52.3, y: 144.6 }, 0).wait(1).to({ rotation: 55 }, 0).wait(1).to({ rotation: 57.6 }, 0).wait(1).to({ rotation: 60.3 }, 0).wait(1).to({ rotation: 63 }, 0).wait(1).to({ rotation: 65.7 }, 0).wait(1).to({ rotation: 68.5, y: 144.5 }, 0).wait(1).to({ rotation: 71.1, y: 144.6 }, 0).wait(1).to({ rotation: 73.8 }, 0).wait(1).to({ rotation: 76.4 }, 0).wait(1).to({ rotation: 79 }, 0).wait(1).to({ rotation: 81.6 }, 0).wait(1).to({ rotation: 84 }, 0).wait(1).to({ rotation: 86.5, y: 144.5 }, 0).wait(1).to({ rotation: 88.8 }, 0).wait(1).to({ rotation: 91.1 }, 0).wait(1).to({ rotation: 93.2, y: 144.6 }, 0).wait(1).to({ rotation: 95.3 }, 0).wait(1).to({ rotation: 97.3, y: 144.5 }, 0).wait(1).to({ rotation: 99.2, y: 144.6 }, 0).wait(1).to({ rotation: 101.1, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: 102.8, x: 471.8 }, 0).wait(1).to({ rotation: 104.4, y: 144.6 }, 0).wait(1).to({ rotation: 105.9, y: 144.5 }, 0).wait(1).to({ rotation: 107.4 }, 0).wait(1).to({ rotation: 108.8, y: 144.6 }, 0).wait(1).to({ rotation: 110 }, 0).wait(1).to({ rotation: 111.2 }, 0).wait(1).to({ rotation: 112.3, y: 144.5 }, 0).wait(1).to({ rotation: 113.3 }, 0).wait(1).to({ rotation: 114.2, x: 471.7 }, 0).wait(1).to({ rotation: 115.1, y: 144.6 }, 0).wait(1).to({ rotation: 115.9, y: 144.5 }, 0).wait(1).to({ rotation: 116.6 }, 0).wait(1).to({ rotation: 117.2, x: 471.8, y: 144.6 }, 0).wait(1).to({ rotation: 117.8 }, 0).wait(1).to({ rotation: 118.2 }, 0).wait(1).to({ rotation: 118.7, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: 119, x: 471.8, y: 144.6 }, 0).wait(1).to({ rotation: 119.3 }, 0).wait(1).to({ rotation: 119.6, x: 471.7 }, 0).wait(1).to({ rotation: 119.8, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: 119.9 }, 0).wait(1).to({ rotation: 120, x: 471.7, y: 144.6 }, 0).wait(1).to({ x: 471.8 }, 0).wait(1).to({ x: 471.7 }, 0).wait(1).to({ rotation: 119.9, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: 119.8, y: 144.6 }, 0).wait(1).to({ rotation: 119.6 }, 0).wait(1).to({ rotation: 119.4, y: 144.5 }, 0).wait(1).to({ rotation: 119.1 }, 0).wait(1).to({ rotation: 118.8, y: 144.6 }, 0).wait(1).to({ rotation: 118.4 }, 0).wait(1).to({ rotation: 117.9, y: 144.5 }, 0).wait(1).to({ rotation: 117.4, y: 144.6 }, 0).wait(1).to({ rotation: 116.8, y: 144.5 }, 0).wait(1).to({ rotation: 116.2 }, 0).wait(1).to({ rotation: 115.5 }, 0).wait(1).to({ rotation: 114.8, y: 144.6 }, 0).wait(1).to({ rotation: 113.9, x: 471.7 }, 0).wait(1).to({ rotation: 113, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: 112.1, y: 144.6 }, 0).wait(1).to({ rotation: 111.1, x: 471.7 }, 0).wait(1).to({ rotation: 110, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: 108.8 }, 0).wait(1).to({ rotation: 107.5, x: 471.7 }, 0).wait(1).to({ rotation: 106.2 }, 0).wait(1).to({ rotation: 104.8, y: 144.6 }, 0).wait(1).to({ rotation: 103.4, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: 101.9, x: 471.7, y: 144.6 }, 0).wait(1).to({ rotation: 100.2, x: 471.8 }, 0).wait(1).to({ rotation: 98.6, y: 144.5 }, 0).wait(1).to({ rotation: 96.8 }, 0).wait(1).to({ rotation: 95, y: 144.6 }, 0).wait(1).to({ rotation: 93.1 }, 0).wait(1).to({ rotation: 91.2, y: 144.5 }, 0).wait(1).to({ rotation: 89.1, x: 471.7 }, 0).wait(1).to({ rotation: 87, x: 471.8 }, 0).wait(1).to({ rotation: 84.9 }, 0).wait(1).to({ rotation: 82.7, y: 144.6 }, 0).wait(1).to({ rotation: 80.4 }, 0).wait(1).to({ rotation: 78.1, y: 144.5 }, 0).wait(1).to({ rotation: 75.8, y: 144.6 }, 0).wait(1).to({ rotation: 73.4 }, 0).wait(1).to({ rotation: 71 }, 0).wait(1).to({ rotation: 68.5 }, 0).wait(1).to({ rotation: 66.1 }, 0).wait(1).to({ rotation: 63.6 }, 0).wait(1).to({ rotation: 61.1 }, 0).wait(1).to({ rotation: 58.6 }, 0).wait(1).to({ rotation: 56.2, y: 144.5 }, 0).wait(1).to({ rotation: 53.7 }, 0).wait(1).to({ rotation: 51.2, y: 144.6 }, 0).wait(1).to({ rotation: 48.8 }, 0).wait(1).to({ rotation: 46.4 }, 0).wait(1).to({ rotation: 44.1 }, 0).wait(1).to({ rotation: 41.8, y: 144.5 }, 0).wait(1).to({ rotation: 39.5 }, 0).wait(1).to({ rotation: 37.3, y: 144.6 }, 0).wait(1).to({ rotation: 35.1 }, 0).wait(1).to({ rotation: 33, y: 144.5 }, 0).wait(1).to({ rotation: 30.9 }, 0).wait(1).to({ rotation: 28.9, y: 144.6 }, 0).wait(1).to({ rotation: 27, y: 144.5 }, 0).wait(1).to({ rotation: 25.2 }, 0).wait(1).to({ rotation: 23.4 }, 0).wait(1).to({ rotation: 21.7 }, 0).wait(1).to({ rotation: 20 }, 0).wait(1).to({ rotation: 18.4 }, 0).wait(1).to({ rotation: 16.9 }, 0).wait(1).to({ rotation: 15.5 }, 0).wait(1).to({ rotation: 14.1 }, 0).wait(1).to({ rotation: 12.8 }, 0).wait(1).to({ rotation: 11.6 }, 0).wait(1).to({ rotation: 10.4 }, 0).wait(1).to({ rotation: 9.4 }, 0).wait(1).to({ rotation: 8.3 }, 0).wait(1).to({ rotation: 7.4 }, 0).wait(1).to({ rotation: 6.5 }, 0).wait(1).to({ rotation: 5.6 }, 0).wait(1).to({ rotation: 4.9, y: 144.4 }, 0).wait(1).to({ rotation: 4.2 }, 0).wait(1).to({ rotation: 3.5, y: 144.5 }, 0).wait(1).to({ rotation: 2.9, y: 144.4 }, 0).wait(1).to({ rotation: 2.4, y: 144.5 }, 0).wait(1).to({ rotation: 1.9, y: 144.4 }, 0).wait(1).to({ rotation: 1.5, y: 144.5 }, 0).wait(1).to({ rotation: 1.2, y: 144.4 }, 0).wait(1).to({ rotation: 0.8, y: 144.5 }, 0).wait(1).to({ rotation: 0.6 }, 0).wait(1).to({ rotation: 0.4 }, 0).wait(1).to({ rotation: 0.2, y: 144.4 }, 0).wait(1).to({ rotation: 0.1 }, 0).wait(1).to({ rotation: 0 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1));

        // second line
        this.instance_18 = new lib.secondline();
        this.instance_18.parent = this;
        this.instance_18.setTransform(471.8, 144.5, 1, 1, 0, 0, 0, 208, 208);

        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({ x: 471.7 }, 0).wait(1).to({ rotation: -0.1, x: 471.8 }, 0).wait(1).to({ rotation: -0.2, x: 471.7 }, 0).wait(1).to({ rotation: -0.3 }, 0).wait(1).to({ rotation: -0.4, x: 471.8 }, 0).wait(1).to({ rotation: -0.6 }, 0).wait(1).to({ rotation: -0.8 }, 0).wait(1).to({ rotation: -1, x: 471.7 }, 0).wait(1).to({ rotation: -1.2 }, 0).wait(1).to({ rotation: -1.5, x: 471.8 }, 0).wait(1).to({ rotation: -1.8 }, 0).wait(1).to({ rotation: -2.1, x: 471.7 }, 0).wait(1).to({ rotation: -2.5 }, 0).wait(1).to({ rotation: -2.8, x: 471.8 }, 0).wait(1).to({ rotation: -3.2, x: 471.7 }, 0).wait(1).to({ rotation: -3.7 }, 0).wait(1).to({ rotation: -4.1 }, 0).wait(1).to({ rotation: -4.6 }, 0).wait(1).to({ rotation: -5.1 }, 0).wait(1).to({ rotation: -5.7, x: 471.8 }, 0).wait(1).to({ rotation: -6.2, x: 471.7 }, 0).wait(1).to({ rotation: -6.8, x: 471.8 }, 0).wait(1).to({ rotation: -7.4, x: 471.7 }, 0).wait(1).to({ rotation: -8.1 }, 0).wait(1).to({ rotation: -8.7, x: 471.8 }, 0).wait(1).to({ rotation: -9.4 }, 0).wait(1).to({ rotation: -10.1 }, 0).wait(1).to({ rotation: -10.9 }, 0).wait(1).to({ rotation: -11.6, x: 471.7 }, 0).wait(1).to({ rotation: -12.4, x: 471.8 }, 0).wait(1).to({ rotation: -13.2 }, 0).wait(1).to({ rotation: -14.1 }, 0).wait(1).to({ rotation: -14.9, x: 471.7 }, 0).wait(1).to({ rotation: -15.7, x: 471.8 }, 0).wait(1).to({ rotation: -16.6, y: 144.4 }, 0).wait(1).to({ rotation: -17.5, x: 471.7 }, 0).wait(1).to({ rotation: -18.4, y: 144.5 }, 0).wait(1).to({ rotation: -19.3, x: 471.8, y: 144.4 }, 0).wait(1).to({ rotation: -20.2 }, 0).wait(1).to({ rotation: -21.2 }, 0).wait(1).to({ rotation: -22.1 }, 0).wait(1).to({ rotation: -23 }, 0).wait(1).to({ rotation: -24, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -24.9, x: 471.8 }, 0).wait(1).to({ rotation: -25.9, y: 144.4 }, 0).wait(1).to({ rotation: -26.8 }, 0).wait(1).to({ rotation: -27.7, y: 144.5 }, 0).wait(1).to({ rotation: -28.7 }, 0).wait(1).to({ rotation: -29.6, x: 471.7 }, 0).wait(1).to({ rotation: -30.5, x: 471.8 }, 0).wait(1).to({ rotation: -31.4, x: 471.7 }, 0).wait(1).to({ rotation: -32.3 }, 0).wait(1).to({ rotation: -33.2, y: 144.4 }, 0).wait(1).to({ rotation: -34.1, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: -34.9 }, 0).wait(1).to({ rotation: -35.7 }, 0).wait(1).to({ rotation: -36.5, y: 144.4 }, 0).wait(1).to({ rotation: -37.3, y: 144.5 }, 0).wait(1).to({ rotation: -38.1 }, 0).wait(1).to({ rotation: -38.8 }, 0).wait(1).to({ rotation: -39.6, x: 471.7 }, 0).wait(1).to({ rotation: -40.3, x: 471.8 }, 0).wait(1).to({ rotation: -41 }, 0).wait(1).to({ rotation: -41.6, x: 471.7, y: 144.4 }, 0).wait(1).to({ rotation: -42.2, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: -42.8 }, 0).wait(1).to({ rotation: -43.4, y: 144.4 }, 0).wait(1).to({ rotation: -44, y: 144.5 }, 0).wait(1).to({ rotation: -44.5, x: 471.7 }, 0).wait(1).to({ rotation: -45, x: 471.8, y: 144.4 }, 0).wait(1).to({ rotation: -45.4 }, 0).wait(1).to({ rotation: -45.9, x: 471.7 }, 0).wait(1).to({ rotation: -46.3, x: 471.8 }, 0).wait(1).to({ rotation: -46.7, y: 144.5 }, 0).wait(1).to({ rotation: -47, x: 471.7 }, 0).wait(1).to({ rotation: -47.3, x: 471.8 }, 0).wait(1).to({ rotation: -47.6 }, 0).wait(1).to({ rotation: -47.9, x: 471.7 }, 0).wait(1).to({ rotation: -48.2, x: 471.8 }, 0).wait(1).to({ rotation: -48.4 }, 0).wait(1).to({ rotation: -48.6, x: 471.7, y: 144.4 }, 0).wait(1).to({ rotation: -48.7 }, 0).wait(1).to({ rotation: -48.9, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: -49 }, 0).wait(1).to({ rotation: -49.1 }, 0).wait(1).to({ x: 471.7, y: 144.4 }, 0).wait(1).to({ rotation: -49.2 }, 0).wait(1).to({ x: 471.8, y: 144.5 }, 0).wait(2).to({ rotation: -49.1 }, 0).wait(2).to({ rotation: -49, y: 144.4 }, 0).wait(1).to({ rotation: -48.9, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -48.7 }, 0).wait(1).to({ rotation: -48.6 }, 0).wait(1).to({ rotation: -48.4, x: 471.8 }, 0).wait(1).to({ rotation: -48.1 }, 0).wait(1).to({ rotation: -47.9 }, 0).wait(1).to({ rotation: -47.6, y: 144.4 }, 0).wait(1).to({ rotation: -47.3, y: 144.5 }, 0).wait(1).to({ rotation: -47 }, 0).wait(1).to({ rotation: -46.7, y: 144.4 }, 0).wait(1).to({ rotation: -46.3, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -45.9, x: 471.8 }, 0).wait(1).to({ rotation: -45.5, y: 144.4 }, 0).wait(1).to({ rotation: -45.1, y: 144.5 }, 0).wait(1).to({ rotation: -44.6, x: 471.7 }, 0).wait(1).to({ rotation: -44.1 }, 0).wait(1).to({ rotation: -43.6, x: 471.8 }, 0).wait(1).to({ rotation: -43.1 }, 0).wait(1).to({ rotation: -42.5, y: 144.4 }, 0).wait(1).to({ rotation: -42, y: 144.5 }, 0).wait(1).to({ rotation: -41.4 }, 0).wait(1).to({ rotation: -40.8 }, 0).wait(1).to({ rotation: -40.1 }, 0).wait(1).to({ rotation: -39.5 }, 0).wait(1).to({ rotation: -38.8 }, 0).wait(1).to({ rotation: -38.1 }, 0).wait(1).to({ rotation: -37.4, y: 144.4 }, 0).wait(1).to({ rotation: -36.7, y: 144.5 }, 0).wait(1).to({ rotation: -36, y: 144.4 }, 0).wait(1).to({ rotation: -35.2, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -34.4, x: 471.8 }, 0).wait(1).to({ rotation: -33.7, x: 471.7, y: 144.4 }, 0).wait(1).to({ rotation: -32.9, x: 471.8 }, 0).wait(1).to({ rotation: -32.1, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -31.3, y: 144.4 }, 0).wait(1).to({ rotation: -30.4, x: 471.8 }, 0).wait(1).to({ rotation: -29.6, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -28.8, x: 471.8 }, 0).wait(1).to({ rotation: -27.9, y: 144.4 }, 0).wait(1).to({ rotation: -27.1, y: 144.5 }, 0).wait(1).to({ rotation: -26.2 }, 0).wait(1).to({ rotation: -25.3, y: 144.4 }, 0).wait(1).to({ rotation: -24.5, y: 144.5 }, 0).wait(1).to({ rotation: -23.6, x: 471.7 }, 0).wait(1).to({ rotation: -22.7 }, 0).wait(1).to({ rotation: -21.9, x: 471.8 }, 0).wait(1).to({ rotation: -21 }, 0).wait(1).to({ rotation: -20.1 }, 0).wait(1).to({ rotation: -19.3, x: 471.7 }, 0).wait(1).to({ rotation: -18.4, x: 471.8 }, 0).wait(1).to({ rotation: -17.6 }, 0).wait(1).to({ rotation: -16.7 }, 0).wait(1).to({ rotation: -15.9 }, 0).wait(1).to({ rotation: -15.1, x: 471.7 }, 0).wait(1).to({ rotation: -14.3 }, 0).wait(1).to({ rotation: -13.5 }, 0).wait(1).to({ rotation: -12.7, x: 471.8 }, 0).wait(1).to({ rotation: -11.9, x: 471.7 }, 0).wait(1).to({ rotation: -11.2 }, 0).wait(1).to({ rotation: -10.4, x: 471.8 }, 0).wait(1).to({ rotation: -9.7, x: 471.7 }, 0).wait(1).to({ rotation: -9, x: 471.8 }, 0).wait(1).to({ rotation: -8.3, x: 471.7 }, 0).wait(1).to({ rotation: -7.7, x: 471.8 }, 0).wait(1).to({ rotation: -7 }, 0).wait(1).to({ rotation: -6.4, x: 471.7 }, 0).wait(1).to({ rotation: -5.8 }, 0).wait(1).to({ rotation: -5.3 }, 0).wait(1).to({ rotation: -4.7, x: 471.8 }, 0).wait(1).to({ rotation: -4.2 }, 0).wait(1).to({ rotation: -3.7, x: 471.7 }, 0).wait(1).to({ rotation: -3.2, x: 471.8 }, 0).wait(1).to({ rotation: -2.8, x: 471.7 }, 0).wait(1).to({ rotation: -2.4, x: 471.8 }, 0).wait(1).to({ rotation: -2, x: 471.7 }, 0).wait(1).to({ rotation: -1.7 }, 0).wait(1).to({ rotation: -1.4 }, 0).wait(1).to({ rotation: -1.1 }, 0).wait(1).to({ rotation: -0.8, x: 471.8 }, 0).wait(1).to({ rotation: -0.6 }, 0).wait(1).to({ rotation: -0.4 }, 0).wait(1).to({ rotation: -0.3 }, 0).wait(1).to({ rotation: -0.2, x: 471.7 }, 0).wait(1).to({ rotation: -0.1 }, 0).wait(1).to({ rotation: 0 }, 0).wait(1).to({ x: 471.8 }, 0).wait(1));

        // Layer 22
        this.instance_19 = new lib.bigwheel();
        this.instance_19.parent = this;
        this.instance_19.setTransform(471.6, 144.5, 1, 1, 0, 0, 0, 387.4, 387.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_19).to({ rotation: 6 }, 179).wait(1));

        // Layer 38 (mask)
        var mask_4 = new cjs.Shape();
        mask_4._off = true;
        mask_4.graphics.p("AwDlAQgBkuABAAQHVjfABgCQABgBKeDNQKeDNABgCQAAgCB6IcQB6IcgBABIqHDRIAAAAQgDAA19yQg");
        mask_4.setTransform(573.3, 15.4);

        // second zimtiii
        this.instance_20 = new lib._3dzimti();
        this.instance_20.parent = this;
        this.instance_20.setTransform(471.7, 144.4, 1, 1, 0, 0, 0, 189.3, 189.3);

        var maskedShapeInstanceList = [this.instance_20];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance_20).to({ rotation: -9.2 }, 179).wait(1));

        // Layer 47 (mask)
        var mask_5 = new cjs.Shape();
        mask_5._off = true;
        mask_5.graphics.p("AiMEVIihj1IgJlEICTAAIHbHuIAABbg");
        mask_5.setTransform(440.8, 173.4);

        // smallest liness
        this.instance_21 = new lib.smallestlines();
        this.instance_21.parent = this;
        this.instance_21.setTransform(471.8, 144.6, 1, 1, 0, 0, 0, 57.6, 57.4);

        var maskedShapeInstanceList = [this.instance_21];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance_21).to({ rotation: 10.5, x: 471.9 }, 179).wait(1));

        // Layer 48 (mask)
        var mask_6 = new cjs.Shape();
        mask_6._off = true;
        mask_6.graphics.p("AkCg3IGhp2IBkBSIi3TVIh/A0g");
        mask_6.setTransform(353.8, 128.3);

        // 3d lines left
        this.instance_22 = new lib._3dlines();
        this.instance_22.parent = this;
        this.instance_22.setTransform(471.8, 144.5, 1, 1, 0, 0, 0, 131.2, 131.2);

        var maskedShapeInstanceList = [this.instance_22];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance_22).to({ rotation: 22.5 }, 179).wait(1));

        // Layer 26
        this.instance_23 = new lib._5line();
        this.instance_23.parent = this;
        this.instance_23.setTransform(471.9, 144.5, 1, 1, -45, 0, 0, 108.8, 108.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({ y: 144.4 }, 0).wait(1).to({ x: 471.8, y: 144.5 }, 0).wait(1).to({ y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ rotation: -44.9, y: 144.4 }, 0).wait(3).to({ rotation: -44.8 }, 0).wait(1).to({ x: 471.9, y: 144.5 }, 0).wait(1).to({ rotation: -44.7, x: 471.8 }, 0).wait(2).to({ rotation: -44.6, x: 471.9, y: 144.4 }, 0).wait(1).to({ rotation: -44.5, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: -44.4 }, 0).wait(1).to({ rotation: -44.3, y: 144.4 }, 0).wait(1).to({ rotation: -44.2 }, 0).wait(1).to({ rotation: -44.1 }, 0).wait(1).to({ rotation: -44 }, 0).wait(1).to({ rotation: -43.9 }, 0).wait(1).to({ rotation: -43.7, y: 144.5 }, 0).wait(1).to({ rotation: -43.6 }, 0).wait(1).to({ rotation: -43.4, y: 144.4 }, 0).wait(1).to({ rotation: -43.3, y: 144.5 }, 0).wait(1).to({ rotation: -43.1 }, 0).wait(1).to({ rotation: -42.9, y: 144.4 }, 0).wait(1).to({ rotation: -42.7, y: 144.5 }, 0).wait(1).to({ rotation: -42.5 }, 0).wait(1).to({ rotation: -42.2, y: 144.4 }, 0).wait(1).to({ rotation: -42 }, 0).wait(1).to({ rotation: -41.7, y: 144.5 }, 0).wait(1).to({ rotation: -41.5, y: 144.4 }, 0).wait(1).to({ rotation: -41.2, y: 144.5 }, 0).wait(1).to({ rotation: -40.9 }, 0).wait(1).to({ rotation: -40.5 }, 0).wait(1).to({ rotation: -40.2 }, 0).wait(1).to({ rotation: -39.8, y: 144.4 }, 0).wait(1).to({ rotation: -39.5 }, 0).wait(1).to({ rotation: -39.1, y: 144.5 }, 0).wait(1).to({ rotation: -38.6 }, 0).wait(1).to({ rotation: -38.2, y: 144.4 }, 0).wait(1).to({ rotation: -37.7, y: 144.5 }, 0).wait(1).to({ rotation: -37.3 }, 0).wait(1).to({ rotation: -36.8 }, 0).wait(1).to({ rotation: -36.3 }, 0).wait(1).to({ rotation: -35.7 }, 0).wait(1).to({ rotation: -35.2 }, 0).wait(1).to({ rotation: -34.6, y: 144.4 }, 0).wait(1).to({ rotation: -34.1 }, 0).wait(1).to({ rotation: -33.5, y: 144.5 }, 0).wait(1).to({ rotation: -32.9 }, 0).wait(1).to({ rotation: -32.3 }, 0).wait(1).to({ rotation: -31.7, y: 144.4 }, 0).wait(1).to({ rotation: -31.2, y: 144.5 }, 0).wait(1).to({ rotation: -30.6 }, 0).wait(1).to({ rotation: -30 }, 0).wait(1).to({ rotation: -29.5 }, 0).wait(1).to({ rotation: -29 }, 0).wait(1).to({ rotation: -28.4 }, 0).wait(1).to({ rotation: -28 }, 0).wait(1).to({ rotation: -27.5 }, 0).wait(1).to({ rotation: -27 }, 0).wait(1).to({ rotation: -26.6, y: 144.4 }, 0).wait(1).to({ rotation: -26.2, y: 144.5 }, 0).wait(1).to({ rotation: -25.8, y: 144.4 }, 0).wait(1).to({ rotation: -25.5 }, 0).wait(1).to({ rotation: -25.2, y: 144.5 }, 0).wait(1).to({ rotation: -24.9, y: 144.4 }, 0).wait(1).to({ rotation: -24.6, y: 144.5 }, 0).wait(1).to({ rotation: -24.3 }, 0).wait(1).to({ rotation: -24.1 }, 0).wait(1).to({ rotation: -23.8, y: 144.4 }, 0).wait(1).to({ rotation: -23.6, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -23.4, x: 471.8, y: 144.4 }, 0).wait(1).to({ rotation: -23.3, y: 144.5 }, 0).wait(1).to({ rotation: -23.1 }, 0).wait(1).to({ rotation: -23 }, 0).wait(1).to({ rotation: -22.8 }, 0).wait(1).to({ rotation: -22.7 }, 0).wait(1).to({ rotation: -22.6, x: 471.7 }, 0).wait(1).to({ rotation: -22.5, x: 471.8 }, 0).wait(2).to({ rotation: -22.4 }, 0).wait(1).to({ y: 144.4 }, 0).wait(1).to({ rotation: -22.3, y: 144.5 }, 0).wait(1).to({ y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ rotation: -22.2 }, 0).wait(3).to({ rotation: -22.3 }, 0).wait(3).to({ y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ rotation: -22.4, y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(2).to({ rotation: -22.5, y: 144.4 }, 0).wait(1).to({ rotation: -22.6, y: 144.5 }, 0).wait(2).to({ rotation: -22.7 }, 0).wait(1).to({ rotation: -22.8 }, 0).wait(1).to({ rotation: -22.9 }, 0).wait(1).to({ rotation: -23 }, 0).wait(1).to({ rotation: -23.1 }, 0).wait(1).to({ rotation: -23.2 }, 0).wait(1).to({ rotation: -23.3 }, 0).wait(1).to({ rotation: -23.4 }, 0).wait(1).to({ rotation: -23.6 }, 0).wait(1).to({ rotation: -23.7, y: 144.4 }, 0).wait(1).to({ rotation: -23.9, y: 144.5 }, 0).wait(1).to({ rotation: -24, y: 144.4 }, 0).wait(1).to({ rotation: -24.2, y: 144.5 }, 0).wait(1).to({ rotation: -24.4 }, 0).wait(1).to({ rotation: -24.6 }, 0).wait(1).to({ rotation: -24.9 }, 0).wait(1).to({ rotation: -25.1, y: 144.4 }, 0).wait(1).to({ rotation: -25.4, y: 144.5 }, 0).wait(1).to({ rotation: -25.7 }, 0).wait(1).to({ rotation: -26 }, 0).wait(1).to({ rotation: -26.3, y: 144.4 }, 0).wait(1).to({ rotation: -26.6, y: 144.5 }, 0).wait(1).to({ rotation: -27 }, 0).wait(1).to({ rotation: -27.3 }, 0).wait(1).to({ rotation: -27.7 }, 0).wait(1).to({ rotation: -28.2 }, 0).wait(1).to({ rotation: -28.6, y: 144.4 }, 0).wait(1).to({ rotation: -29.1, y: 144.5 }, 0).wait(1).to({ rotation: -29.6 }, 0).wait(1).to({ rotation: -30.1 }, 0).wait(1).to({ rotation: -30.6, y: 144.4 }, 0).wait(1).to({ rotation: -31.2 }, 0).wait(1).to({ rotation: -31.8, y: 144.5 }, 0).wait(1).to({ rotation: -32.4 }, 0).wait(1).to({ rotation: -33 }, 0).wait(1).to({ rotation: -33.6 }, 0).wait(1).to({ rotation: -34.3 }, 0).wait(1).to({ rotation: -34.9 }, 0).wait(1).to({ rotation: -35.5, y: 144.4 }, 0).wait(1).to({ rotation: -36.1, y: 144.5 }, 0).wait(1).to({ rotation: -36.7, y: 144.4 }, 0).wait(1).to({ rotation: -37.3, y: 144.5 }, 0).wait(1).to({ rotation: -37.8, y: 144.4 }, 0).wait(1).to({ rotation: -38.4 }, 0).wait(1).to({ rotation: -38.9 }, 0).wait(1).to({ rotation: -39.4, y: 144.5 }, 0).wait(1).to({ rotation: -39.8 }, 0).wait(1).to({ rotation: -40.2 }, 0).wait(1).to({ rotation: -40.6, y: 144.4 }, 0).wait(1).to({ rotation: -41 }, 0).wait(1).to({ rotation: -41.4 }, 0).wait(1).to({ rotation: -41.7, y: 144.5 }, 0).wait(1).to({ rotation: -42, y: 144.4 }, 0).wait(1).to({ rotation: -42.3 }, 0).wait(1).to({ rotation: -42.5 }, 0).wait(1).to({ rotation: -42.8, y: 144.5 }, 0).wait(1).to({ rotation: -43 }, 0).wait(1).to({ rotation: -43.2 }, 0).wait(1).to({ rotation: -43.4, y: 144.4 }, 0).wait(1).to({ rotation: -43.6 }, 0).wait(1).to({ rotation: -43.8 }, 0).wait(1).to({ rotation: -43.9, y: 144.5 }, 0).wait(1).to({ rotation: -44.1 }, 0).wait(1).to({ rotation: -44.2, y: 144.4 }, 0).wait(1).to({ rotation: -44.3 }, 0).wait(1).to({ rotation: -44.4 }, 0).wait(1).to({ rotation: -44.5, y: 144.5 }, 0).wait(1).to({ rotation: -44.6, x: 471.9 }, 0).wait(1).to({ rotation: -44.7 }, 0).wait(1).to({ x: 471.8 }, 0).wait(1).to({ rotation: -44.8, y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ rotation: -44.9, x: 471.9, y: 144.4 }, 0).wait(2).to({ rotation: -45, x: 471.8, y: 144.5 }, 0).wait(1).to({ y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ x: 471.9, y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1));

        // 3d line
        this.instance_24 = new lib._3dline();
        this.instance_24.parent = this;
        this.instance_24.setTransform(471.8, 144.5, 1, 1, 0, 0, 0, 164.5, 164.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(3).to({ rotation: 0.1 }, 0).wait(2).to({ rotation: 0.2 }, 0).wait(1).to({ rotation: 0.3 }, 0).wait(1).to({ rotation: 0.5 }, 0).wait(1).to({ rotation: 0.6 }, 0).wait(1).to({ rotation: 0.8 }, 0).wait(1).to({ rotation: 0.9 }, 0).wait(1).to({ rotation: 1.2 }, 0).wait(1).to({ rotation: 1.4 }, 0).wait(1).to({ rotation: 1.6 }, 0).wait(1).to({ rotation: 1.9 }, 0).wait(1).to({ rotation: 2.2 }, 0).wait(1).to({ rotation: 2.5 }, 0).wait(1).to({ rotation: 2.9 }, 0).wait(1).to({ rotation: 3.3 }, 0).wait(1).to({ rotation: 3.7 }, 0).wait(1).to({ rotation: 4.1 }, 0).wait(1).to({ rotation: 4.6 }, 0).wait(1).to({ rotation: 5.1 }, 0).wait(1).to({ rotation: 5.6 }, 0).wait(1).to({ rotation: 6.1 }, 0).wait(1).to({ rotation: 6.7 }, 0).wait(1).to({ rotation: 7.3, x: 471.7 }, 0).wait(1).to({ rotation: 7.9, x: 471.8 }, 0).wait(1).to({ rotation: 8.6 }, 0).wait(1).to({ rotation: 9.2 }, 0).wait(1).to({ rotation: 10 }, 0).wait(1).to({ rotation: 10.7 }, 0).wait(1).to({ rotation: 11.5 }, 0).wait(1).to({ rotation: 12.3 }, 0).wait(1).to({ rotation: 13.1 }, 0).wait(1).to({ rotation: 13.9 }, 0).wait(1).to({ rotation: 14.8 }, 0).wait(1).to({ rotation: 15.7 }, 0).wait(1).to({ rotation: 16.6 }, 0).wait(1).to({ rotation: 17.5 }, 0).wait(1).to({ rotation: 18.5 }, 0).wait(1).to({ rotation: 19.4 }, 0).wait(1).to({ rotation: 20.4 }, 0).wait(1).to({ rotation: 21.4 }, 0).wait(1).to({ rotation: 22.4 }, 0).wait(1).to({ rotation: 23.3 }, 0).wait(1).to({ rotation: 24.3 }, 0).wait(1).to({ rotation: 25.3 }, 0).wait(1).to({ rotation: 26.3 }, 0).wait(1).to({ rotation: 27.3 }, 0).wait(1).to({ rotation: 28.3 }, 0).wait(1).to({ rotation: 29.2 }, 0).wait(1).to({ rotation: 30.2 }, 0).wait(1).to({ rotation: 31.1 }, 0).wait(1).to({ rotation: 32 }, 0).wait(1).to({ rotation: 32.9 }, 0).wait(1).to({ rotation: 33.8 }, 0).wait(1).to({ rotation: 34.6 }, 0).wait(1).to({ rotation: 35.4 }, 0).wait(1).to({ rotation: 36.2, x: 471.7 }, 0).wait(1).to({ rotation: 37 }, 0).wait(1).to({ rotation: 37.7, x: 471.8 }, 0).wait(1).to({ rotation: 38.4 }, 0).wait(1).to({ rotation: 39.1 }, 0).wait(1).to({ rotation: 39.7 }, 0).wait(1).to({ rotation: 40.3 }, 0).wait(1).to({ rotation: 40.9, x: 471.7 }, 0).wait(1).to({ rotation: 41.5, x: 471.8 }, 0).wait(1).to({ rotation: 42 }, 0).wait(1).to({ rotation: 42.5 }, 0).wait(1).to({ rotation: 42.9 }, 0).wait(1).to({ rotation: 43.4 }, 0).wait(1).to({ rotation: 43.8, x: 471.7 }, 0).wait(1).to({ rotation: 44.1, x: 471.8 }, 0).wait(1).to({ rotation: 44.5, x: 471.7 }, 0).wait(1).to({ rotation: 44.8, x: 471.8 }, 0).wait(1).to({ rotation: 45.1 }, 0).wait(1).to({ rotation: 45.4, x: 471.7 }, 0).wait(1).to({ rotation: 45.6 }, 0).wait(1).to({ rotation: 45.8, x: 471.8 }, 0).wait(1).to({ rotation: 46 }, 0).wait(1).to({ rotation: 46.2, x: 471.7 }, 0).wait(1).to({ rotation: 46.3 }, 0).wait(1).to({ rotation: 46.4 }, 0).wait(1).to({ rotation: 46.5, x: 471.8 }, 0).wait(1).to({ rotation: 46.6 }, 0).wait(2).to({ rotation: 46.7, x: 471.7 }, 0).wait(1).to({ regX: 164.4, y: 144.4 }, 0).wait(1).to({ regX: 164.5, x: 471.8, y: 144.5 }, 0).wait(1).to({ rotation: 46.6 }, 0).wait(2).to({ rotation: 46.5 }, 0).wait(1).to({ rotation: 46.4 }, 0).wait(1).to({ rotation: 46.3 }, 0).wait(1).to({ rotation: 46.2, y: 144.6 }, 0).wait(1).to({ rotation: 46, y: 144.5 }, 0).wait(1).to({ rotation: 45.9 }, 0).wait(1).to({ rotation: 45.7 }, 0).wait(1).to({ rotation: 45.4 }, 0).wait(1).to({ rotation: 45.2 }, 0).wait(1).to({ rotation: 44.9 }, 0).wait(1).to({ rotation: 44.6 }, 0).wait(1).to({ rotation: 44.3 }, 0).wait(1).to({ rotation: 44 }, 0).wait(1).to({ rotation: 43.6 }, 0).wait(1).to({ rotation: 43.2 }, 0).wait(1).to({ rotation: 42.8, y: 144.6 }, 0).wait(1).to({ rotation: 42.3 }, 0).wait(1).to({ rotation: 41.9, y: 144.5 }, 0).wait(1).to({ rotation: 41.3 }, 0).wait(1).to({ rotation: 40.8 }, 0).wait(1).to({ rotation: 40.3 }, 0).wait(1).to({ rotation: 39.7, y: 144.6 }, 0).wait(1).to({ rotation: 39 }, 0).wait(1).to({ rotation: 38.4, y: 144.5 }, 0).wait(1).to({ rotation: 37.7 }, 0).wait(1).to({ rotation: 37 }, 0).wait(1).to({ rotation: 36.3 }, 0).wait(1).to({ rotation: 35.6 }, 0).wait(1).to({ rotation: 34.8 }, 0).wait(1).to({ rotation: 34 }, 0).wait(1).to({ rotation: 33.2 }, 0).wait(1).to({ rotation: 32.3 }, 0).wait(1).to({ rotation: 31.5 }, 0).wait(1).to({ rotation: 30.6 }, 0).wait(1).to({ rotation: 29.7 }, 0).wait(1).to({ rotation: 28.8, y: 144.6 }, 0).wait(1).to({ rotation: 27.9, y: 144.5 }, 0).wait(1).to({ rotation: 26.9, x: 471.9 }, 0).wait(1).to({ rotation: 26, x: 471.8 }, 0).wait(1).to({ rotation: 25 }, 0).wait(1).to({ rotation: 24.1, x: 471.9 }, 0).wait(1).to({ rotation: 23.1 }, 0).wait(1).to({ rotation: 22.2, x: 471.8 }, 0).wait(1).to({ rotation: 21.2, x: 471.9 }, 0).wait(1).to({ rotation: 20.3, x: 471.8 }, 0).wait(1).to({ rotation: 19.4 }, 0).wait(1).to({ rotation: 18.4 }, 0).wait(1).to({ rotation: 17.5 }, 0).wait(1).to({ rotation: 16.6 }, 0).wait(1).to({ rotation: 15.8 }, 0).wait(1).to({ rotation: 14.9 }, 0).wait(1).to({ rotation: 14.1 }, 0).wait(1).to({ rotation: 13.2 }, 0).wait(1).to({ rotation: 12.4, x: 471.9 }, 0).wait(1).to({ rotation: 11.7, x: 471.8 }, 0).wait(1).to({ rotation: 10.9 }, 0).wait(1).to({ rotation: 10.2 }, 0).wait(1).to({ rotation: 9.5, x: 471.9 }, 0).wait(1).to({ rotation: 8.8, x: 471.8 }, 0).wait(1).to({ rotation: 8.2 }, 0).wait(1).to({ rotation: 7.6 }, 0).wait(1).to({ rotation: 7, x: 471.9 }, 0).wait(1).to({ rotation: 6.4, x: 471.8 }, 0).wait(1).to({ rotation: 5.9 }, 0).wait(1).to({ rotation: 5.3, x: 471.9 }, 0).wait(1).to({ rotation: 4.9, x: 471.8 }, 0).wait(1).to({ rotation: 4.4 }, 0).wait(1).to({ rotation: 4 }, 0).wait(1).to({ rotation: 3.5, x: 471.9 }, 0).wait(1).to({ rotation: 3.2, x: 471.8 }, 0).wait(1).to({ rotation: 2.8, x: 471.9 }, 0).wait(1).to({ rotation: 2.5, x: 471.8 }, 0).wait(1).to({ rotation: 2.1, x: 471.9 }, 0).wait(1).to({ rotation: 1.8, x: 471.8 }, 0).wait(1).to({ rotation: 1.6, x: 471.9 }, 0).wait(1).to({ rotation: 1.3, x: 471.8 }, 0).wait(1).to({ rotation: 1.1 }, 0).wait(1).to({ rotation: 0.9, x: 471.9 }, 0).wait(1).to({ rotation: 0.7 }, 0).wait(1).to({ rotation: 0.6 }, 0).wait(1).to({ rotation: 0.4 }, 0).wait(1).to({ rotation: 0.3 }, 0).wait(1).to({ rotation: 0.2, x: 471.8 }, 0).wait(1).to({ rotation: 0.1, x: 471.9 }, 0).wait(2).to({ rotation: 0, x: 471.8 }, 0).wait(1).to({ x: 471.9 }, 0).wait(1).to({ x: 471.8 }, 0).wait(1));

        // 5t line
        this.instance_25 = new lib._5tline();
        this.instance_25.parent = this;
        this.instance_25.setTransform(471.8, 144.1, 1, 1, 0, 0, 0, 149.7, 150);

        this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(4).to({ rotation: 0.1 }, 0).wait(2).to({ rotation: 0.2 }, 0).wait(2).to({ rotation: 0.3 }, 0).wait(1).to({ rotation: 0.4 }, 0).wait(1).to({ rotation: 0.5 }, 0).wait(1).to({ rotation: 0.6 }, 0).wait(1).to({ rotation: 0.7 }, 0).wait(1).to({ rotation: 0.8 }, 0).wait(1).to({ rotation: 1 }, 0).wait(1).to({ rotation: 1.1 }, 0).wait(1).to({ rotation: 1.3 }, 0).wait(1).to({ rotation: 1.5 }, 0).wait(1).to({ rotation: 1.7 }, 0).wait(1).to({ rotation: 1.9 }, 0).wait(1).to({ rotation: 2.2 }, 0).wait(1).to({ rotation: 2.4 }, 0).wait(1).to({ rotation: 2.7 }, 0).wait(1).to({ rotation: 3 }, 0).wait(1).to({ rotation: 3.3 }, 0).wait(1).to({ rotation: 3.6 }, 0).wait(1).to({ rotation: 3.9 }, 0).wait(1).to({ rotation: 4.3 }, 0).wait(1).to({ rotation: 4.7 }, 0).wait(1).to({ rotation: 5.1 }, 0).wait(1).to({ rotation: 5.5 }, 0).wait(1).to({ rotation: 5.9 }, 0).wait(1).to({ rotation: 6.4 }, 0).wait(1).to({ rotation: 6.9 }, 0).wait(1).to({ rotation: 7.4 }, 0).wait(1).to({ rotation: 7.9 }, 0).wait(1).to({ rotation: 8.4 }, 0).wait(1).to({ rotation: 9 }, 0).wait(1).to({ rotation: 9.6 }, 0).wait(1).to({ rotation: 10.2 }, 0).wait(1).to({ rotation: 10.8 }, 0).wait(1).to({ rotation: 11.4 }, 0).wait(1).to({ rotation: 12 }, 0).wait(1).to({ rotation: 12.7 }, 0).wait(1).to({ rotation: 13.3 }, 0).wait(1).to({ rotation: 14 }, 0).wait(1).to({ rotation: 14.6 }, 0).wait(1).to({ rotation: 15.2 }, 0).wait(1).to({ rotation: 15.9 }, 0).wait(1).to({ rotation: 16.5 }, 0).wait(1).to({ rotation: 17.1 }, 0).wait(1).to({ rotation: 17.7 }, 0).wait(1).to({ rotation: 18.3 }, 0).wait(1).to({ rotation: 18.9 }, 0).wait(1).to({ rotation: 19.5 }, 0).wait(1).to({ rotation: 20 }, 0).wait(1).to({ rotation: 20.5 }, 0).wait(1).to({ rotation: 21 }, 0).wait(1).to({ rotation: 21.5 }, 0).wait(1).to({ rotation: 22 }, 0).wait(1).to({ rotation: 22.4 }, 0).wait(1).to({ rotation: 22.8 }, 0).wait(1).to({ rotation: 23.2 }, 0).wait(1).to({ rotation: 23.6, y: 144.2 }, 0).wait(1).to({ rotation: 23.9, y: 144.1 }, 0).wait(1).to({ rotation: 24.3 }, 0).wait(1).to({ rotation: 24.6 }, 0).wait(1).to({ rotation: 24.9 }, 0).wait(1).to({ rotation: 25.1 }, 0).wait(1).to({ rotation: 25.4 }, 0).wait(1).to({ rotation: 25.6 }, 0).wait(1).to({ rotation: 25.9 }, 0).wait(1).to({ rotation: 26.1 }, 0).wait(1).to({ rotation: 26.3 }, 0).wait(1).to({ rotation: 26.4 }, 0).wait(1).to({ rotation: 26.6 }, 0).wait(1).to({ rotation: 26.7 }, 0).wait(1).to({ rotation: 26.9 }, 0).wait(1).to({ rotation: 27 }, 0).wait(1).to({ rotation: 27.1 }, 0).wait(1).to({ rotation: 27.2 }, 0).wait(2).to({ rotation: 27.3 }, 0).wait(1).to({ rotation: 27.4 }, 0).wait(3).to({ rotation: 27.5 }, 0).wait(6).to({ rotation: 27.4, y: 144.2 }, 0).wait(1).to({ y: 144.1 }, 0).wait(2).to({ rotation: 27.3 }, 0).wait(2).to({ rotation: 27.2 }, 0).wait(1).to({ rotation: 27.1 }, 0).wait(1).to({ rotation: 27 }, 0).wait(2).to({ rotation: 26.8 }, 0).wait(1).to({ rotation: 26.7 }, 0).wait(1).to({ rotation: 26.6 }, 0).wait(1).to({ rotation: 26.5 }, 0).wait(1).to({ rotation: 26.3 }, 0).wait(1).to({ rotation: 26.2 }, 0).wait(1).to({ rotation: 26 }, 0).wait(1).to({ rotation: 25.8 }, 0).wait(1).to({ rotation: 25.6 }, 0).wait(1).to({ rotation: 25.4 }, 0).wait(1).to({ rotation: 25.2, y: 144.2 }, 0).wait(1).to({ rotation: 25, y: 144.1 }, 0).wait(1).to({ rotation: 24.7 }, 0).wait(1).to({ rotation: 24.4 }, 0).wait(1).to({ rotation: 24.1 }, 0).wait(1).to({ rotation: 23.8 }, 0).wait(1).to({ rotation: 23.5 }, 0).wait(1).to({ rotation: 23.2 }, 0).wait(1).to({ rotation: 22.8 }, 0).wait(1).to({ rotation: 22.4 }, 0).wait(1).to({ rotation: 22 }, 0).wait(1).to({ rotation: 21.6 }, 0).wait(1).to({ rotation: 21.1 }, 0).wait(1).to({ rotation: 20.7 }, 0).wait(1).to({ rotation: 20.2 }, 0).wait(1).to({ rotation: 19.7 }, 0).wait(1).to({ rotation: 19.1 }, 0).wait(1).to({ rotation: 18.6 }, 0).wait(1).to({ rotation: 18 }, 0).wait(1).to({ rotation: 17.4 }, 0).wait(1).to({ rotation: 16.8 }, 0).wait(1).to({ rotation: 16.1 }, 0).wait(1).to({ rotation: 15.5 }, 0).wait(1).to({ rotation: 14.8 }, 0).wait(1).to({ rotation: 14.2 }, 0).wait(1).to({ rotation: 13.5 }, 0).wait(1).to({ rotation: 12.8 }, 0).wait(1).to({ rotation: 12.2 }, 0).wait(1).to({ rotation: 11.5 }, 0).wait(1).to({ rotation: 10.8, x: 471.9 }, 0).wait(1).to({ rotation: 10.2, x: 471.8 }, 0).wait(1).to({ rotation: 9.6 }, 0).wait(1).to({ rotation: 9 }, 0).wait(1).to({ rotation: 8.4 }, 0).wait(1).to({ rotation: 7.8 }, 0).wait(1).to({ rotation: 7.2 }, 0).wait(1).to({ rotation: 6.7 }, 0).wait(1).to({ rotation: 6.2 }, 0).wait(1).to({ rotation: 5.7 }, 0).wait(1).to({ rotation: 5.3 }, 0).wait(1).to({ rotation: 4.8 }, 0).wait(1).to({ rotation: 4.4 }, 0).wait(1).to({ rotation: 4 }, 0).wait(1).to({ rotation: 3.7 }, 0).wait(1).to({ rotation: 3.3 }, 0).wait(1).to({ rotation: 3 }, 0).wait(1).to({ rotation: 2.7 }, 0).wait(1).to({ rotation: 2.4 }, 0).wait(1).to({ rotation: 2.2 }, 0).wait(1).to({ rotation: 1.9 }, 0).wait(1).to({ rotation: 1.7 }, 0).wait(1).to({ rotation: 1.5 }, 0).wait(1).to({ rotation: 1.3 }, 0).wait(1).to({ rotation: 1.1 }, 0).wait(1).to({ rotation: 1 }, 0).wait(1).to({ rotation: 0.8 }, 0).wait(1).to({ rotation: 0.7 }, 0).wait(1).to({ rotation: 0.6 }, 0).wait(1).to({ rotation: 0.5 }, 0).wait(1).to({ rotation: 0.4 }, 0).wait(1).to({ rotation: 0.3 }, 0).wait(1).to({ rotation: 0.2 }, 0).wait(2).to({ rotation: 0.1 }, 0).wait(2).to({ rotation: 0 }, 0).wait(4));

        // small line
        this.instance_26 = new lib.smallline();
        this.instance_26.parent = this;
        this.instance_26.setTransform(471.8, 144.4, 1, 1, 0, 0, 0, 68.4, 68.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_26).to({ rotation: -45, y: 144.3 }, 88).to({ rotation: 0, y: 144.4 }, 91).wait(1));

        // small bold 
        this.instance_27 = new lib.smallbold();
        this.instance_27.parent = this;
        this.instance_27.setTransform(471.7, 144.5, 1, 1, 0, 0, 0, 35.6, 35.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({ regX: 35.7, x: 471.8 }, 0).wait(2).to({ rotation: -0.1, y: 144.4 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ rotation: -0.2 }, 0).wait(1).to({ rotation: -0.3 }, 0).wait(2).to({ rotation: -0.5, y: 144.4 }, 0).wait(1).to({ rotation: -0.6, y: 144.5 }, 0).wait(1).to({ rotation: -0.7 }, 0).wait(1).to({ rotation: -0.9 }, 0).wait(1).to({ rotation: -1.1 }, 0).wait(1).to({ rotation: -1.3 }, 0).wait(1).to({ rotation: -1.5 }, 0).wait(1).to({ rotation: -1.7 }, 0).wait(1).to({ rotation: -2 }, 0).wait(1).to({ rotation: -2.3, y: 144.4 }, 0).wait(1).to({ rotation: -2.6, y: 144.5 }, 0).wait(1).to({ rotation: -2.9, y: 144.4 }, 0).wait(1).to({ rotation: -3.3, y: 144.5 }, 0).wait(1).to({ rotation: -3.7 }, 0).wait(1).to({ rotation: -4.1, y: 144.4 }, 0).wait(1).to({ rotation: -4.5, y: 144.5 }, 0).wait(1).to({ rotation: -5, y: 144.4 }, 0).wait(1).to({ rotation: -5.5, y: 144.5 }, 0).wait(1).to({ rotation: -6 }, 0).wait(1).to({ rotation: -6.5, y: 144.4 }, 0).wait(1).to({ rotation: -7.1, y: 144.5 }, 0).wait(1).to({ rotation: -7.7 }, 0).wait(1).to({ rotation: -8.4, y: 144.4 }, 0).wait(1).to({ rotation: -9 }, 0).wait(1).to({ rotation: -9.7 }, 0).wait(1).to({ rotation: -10.5 }, 0).wait(1).to({ rotation: -11.2 }, 0).wait(1).to({ rotation: -12 }, 0).wait(1).to({ rotation: -12.9 }, 0).wait(1).to({ rotation: -13.7, y: 144.5 }, 0).wait(1).to({ rotation: -14.6 }, 0).wait(1).to({ rotation: -15.5 }, 0).wait(1).to({ rotation: -16.5 }, 0).wait(1).to({ rotation: -17.4, y: 144.4 }, 0).wait(1).to({ rotation: -18.4 }, 0).wait(1).to({ rotation: -19.4 }, 0).wait(1).to({ rotation: -20.5 }, 0).wait(1).to({ rotation: -21.5 }, 0).wait(1).to({ rotation: -22.5 }, 0).wait(1).to({ rotation: -23.6 }, 0).wait(1).to({ rotation: -24.6 }, 0).wait(1).to({ rotation: -25.7, y: 144.5 }, 0).wait(1).to({ rotation: -26.7, y: 144.4 }, 0).wait(1).to({ rotation: -27.7 }, 0).wait(1).to({ rotation: -28.7 }, 0).wait(1).to({ rotation: -29.7 }, 0).wait(1).to({ rotation: -30.7 }, 0).wait(1).to({ rotation: -31.6 }, 0).wait(1).to({ rotation: -32.5 }, 0).wait(1).to({ rotation: -33.4 }, 0).wait(1).to({ rotation: -34.2 }, 0).wait(1).to({ rotation: -35 }, 0).wait(1).to({ rotation: -35.8 }, 0).wait(1).to({ rotation: -36.5, y: 144.5 }, 0).wait(1).to({ rotation: -37.2, y: 144.4 }, 0).wait(1).to({ rotation: -37.9 }, 0).wait(1).to({ rotation: -38.5 }, 0).wait(1).to({ rotation: -39.1 }, 0).wait(1).to({ rotation: -39.7 }, 0).wait(1).to({ rotation: -40.2 }, 0).wait(1).to({ rotation: -40.7 }, 0).wait(1).to({ rotation: -41.2 }, 0).wait(1).to({ rotation: -41.6, y: 144.5 }, 0).wait(1).to({ rotation: -42, y: 144.4 }, 0).wait(1).to({ rotation: -42.4, x: 471.7 }, 0).wait(1).to({ rotation: -42.7, x: 471.8 }, 0).wait(1).to({ rotation: -43.1, y: 144.5 }, 0).wait(1).to({ rotation: -43.3, y: 144.4 }, 0).wait(1).to({ rotation: -43.6, y: 144.5 }, 0).wait(1).to({ rotation: -43.8, y: 144.4 }, 0).wait(1).to({ rotation: -44.1, x: 471.7, y: 144.5 }, 0).wait(1).to({ rotation: -44.2, y: 144.4 }, 0).wait(1).to({ rotation: -44.4, x: 471.8 }, 0).wait(1).to({ rotation: -44.6 }, 0).wait(1).to({ rotation: -44.7, y: 144.5 }, 0).wait(1).to({ rotation: -44.8, y: 144.4 }, 0).wait(1).to({ rotation: -44.9 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ rotation: -45, y: 144.4 }, 0).wait(2).to({ regX: 35.6, regY: 35.8, x: 471.7, y: 144.6 }, 0).wait(1).to({ regX: 35.7, regY: 35.7, x: 471.8, y: 144.4 }, 0).wait(2).to({ rotation: -44.9, x: 471.7 }, 0).wait(1).to({ x: 471.8 }, 0).wait(1).to({ rotation: -44.8 }, 0).wait(1).to({ rotation: -44.7, x: 471.7 }, 0).wait(1).to({ rotation: -44.6 }, 0).wait(1).to({ rotation: -44.5 }, 0).wait(1).to({ rotation: -44.3, x: 471.8 }, 0).wait(1).to({ rotation: -44.2, x: 471.7 }, 0).wait(1).to({ rotation: -44, x: 471.8 }, 0).wait(1).to({ rotation: -43.8 }, 0).wait(1).to({ rotation: -43.6, x: 471.7 }, 0).wait(1).to({ rotation: -43.3, x: 471.8 }, 0).wait(1).to({ rotation: -43, x: 471.7 }, 0).wait(1).to({ rotation: -42.7 }, 0).wait(1).to({ rotation: -42.4, x: 471.8 }, 0).wait(1).to({ rotation: -42.1 }, 0).wait(1).to({ rotation: -41.7, x: 471.7 }, 0).wait(1).to({ rotation: -41.3 }, 0).wait(1).to({ rotation: -40.9, x: 471.8 }, 0).wait(1).to({ rotation: -40.5, x: 471.7 }, 0).wait(1).to({ rotation: -40, x: 471.8 }, 0).wait(1).to({ rotation: -39.5, x: 471.7 }, 0).wait(1).to({ rotation: -39 }, 0).wait(1).to({ rotation: -38.4 }, 0).wait(1).to({ rotation: -37.8, x: 471.8 }, 0).wait(1).to({ rotation: -37.2 }, 0).wait(1).to({ rotation: -36.6 }, 0).wait(1).to({ rotation: -35.9, x: 471.7 }, 0).wait(1).to({ rotation: -35.2 }, 0).wait(1).to({ rotation: -34.5 }, 0).wait(1).to({ rotation: -33.7, x: 471.8 }, 0).wait(1).to({ rotation: -33 }, 0).wait(1).to({ rotation: -32.2, x: 471.7 }, 0).wait(1).to({ rotation: -31.3 }, 0).wait(1).to({ rotation: -30.5 }, 0).wait(1).to({ rotation: -29.6, x: 471.8 }, 0).wait(1).to({ rotation: -28.7 }, 0).wait(1).to({ rotation: -27.8 }, 0).wait(1).to({ rotation: -26.9 }, 0).wait(1).to({ rotation: -25.9 }, 0).wait(1).to({ rotation: -25, x: 471.7 }, 0).wait(1).to({ rotation: -24, x: 471.8 }, 0).wait(1).to({ rotation: -23 }, 0).wait(1).to({ rotation: -22.1 }, 0).wait(1).to({ rotation: -21.1 }, 0).wait(1).to({ rotation: -20.2 }, 0).wait(1).to({ rotation: -19.2 }, 0).wait(1).to({ rotation: -18.3 }, 0).wait(1).to({ rotation: -17.3 }, 0).wait(1).to({ rotation: -16.4 }, 0).wait(1).to({ rotation: -15.5 }, 0).wait(1).to({ rotation: -14.6 }, 0).wait(1).to({ rotation: -13.8 }, 0).wait(1).to({ rotation: -12.9 }, 0).wait(1).to({ rotation: -12.1 }, 0).wait(1).to({ rotation: -11.3 }, 0).wait(1).to({ rotation: -10.6 }, 0).wait(1).to({ rotation: -9.9 }, 0).wait(1).to({ rotation: -9.2 }, 0).wait(1).to({ rotation: -8.5 }, 0).wait(1).to({ rotation: -7.8 }, 0).wait(1).to({ rotation: -7.2 }, 0).wait(1).to({ rotation: -6.6 }, 0).wait(1).to({ rotation: -6.1 }, 0).wait(1).to({ rotation: -5.5 }, 0).wait(1).to({ rotation: -5 }, 0).wait(1).to({ rotation: -4.6 }, 0).wait(1).to({ rotation: -4.1 }, 0).wait(1).to({ rotation: -3.7 }, 0).wait(1).to({ rotation: -3.3 }, 0).wait(1).to({ rotation: -2.9 }, 0).wait(1).to({ rotation: -2.6 }, 0).wait(1).to({ rotation: -2.3 }, 0).wait(1).to({ rotation: -2 }, 0).wait(1).to({ rotation: -1.7 }, 0).wait(1).to({ rotation: -1.5 }, 0).wait(1).to({ rotation: -1.2 }, 0).wait(1).to({ rotation: -1 }, 0).wait(1).to({ rotation: -0.8 }, 0).wait(1).to({ rotation: -0.7 }, 0).wait(1).to({ rotation: -0.5 }, 0).wait(1).to({ rotation: -0.4 }, 0).wait(1).to({ rotation: -0.3 }, 0).wait(1).to({ rotation: -0.2 }, 0).wait(1).to({ rotation: -0.1 }, 0).wait(2).to({ rotation: 0 }, 0).wait(2).to({ regX: 35.6, x: 471.7, y: 144.5 }, 0).wait(1));

        // Layer 49 (mask)
        var mask_7 = new cjs.Shape();
        mask_7._off = true;
        mask_7.graphics.p("AwtDZQgBAAhImNICbhDIAkgXIYrk6IC3AAIALgFQFCIDgBABIzBKXIAAAAQgCAAvhl1g");
        mask_7.setTransform(492.5, 202.6);

        // zimti mijloc
        this.instance_28 = new lib.zimtimijloc();
        this.instance_28.parent = this;
        this.instance_28.setTransform(471.8, 144.6, 1, 1, 0, 0, 0, 99.4, 99.3);

        var maskedShapeInstanceList = [this.instance_28];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(4).to({ rotation: -0.1 }, 0).wait(2).to({ rotation: -0.2 }, 0).wait(2).to({ rotation: -0.3 }, 0).wait(1).to({ rotation: -0.4 }, 0).wait(1).to({ rotation: -0.5 }, 0).wait(1).to({ rotation: -0.6 }, 0).wait(1).to({ rotation: -0.7 }, 0).wait(1).to({ rotation: -0.8 }, 0).wait(1).to({ rotation: -1 }, 0).wait(1).to({ rotation: -1.1 }, 0).wait(1).to({ rotation: -1.3 }, 0).wait(1).to({ rotation: -1.5 }, 0).wait(1).to({ rotation: -1.7 }, 0).wait(1).to({ rotation: -1.9 }, 0).wait(1).to({ rotation: -2.1 }, 0).wait(1).to({ rotation: -2.3 }, 0).wait(1).to({ rotation: -2.6 }, 0).wait(1).to({ rotation: -2.9 }, 0).wait(1).to({ rotation: -3.2 }, 0).wait(1).to({ rotation: -3.5 }, 0).wait(1).to({ rotation: -3.8 }, 0).wait(1).to({ rotation: -4.2 }, 0).wait(1).to({ rotation: -4.6 }, 0).wait(1).to({ rotation: -5 }, 0).wait(1).to({ rotation: -5.4 }, 0).wait(1).to({ rotation: -5.8 }, 0).wait(1).to({ rotation: -6.3 }, 0).wait(1).to({ rotation: -6.8 }, 0).wait(1).to({ rotation: -7.3 }, 0).wait(1).to({ rotation: -7.8 }, 0).wait(1).to({ rotation: -8.3 }, 0).wait(1).to({ rotation: -8.9 }, 0).wait(1).to({ rotation: -9.5 }, 0).wait(1).to({ rotation: -10.1 }, 0).wait(1).to({ rotation: -10.8 }, 0).wait(1).to({ rotation: -11.4 }, 0).wait(1).to({ rotation: -12.1 }, 0).wait(1).to({ rotation: -12.8 }, 0).wait(1).to({ rotation: -13.5 }, 0).wait(1).to({ rotation: -14.2 }, 0).wait(1).to({ rotation: -14.9 }, 0).wait(1).to({ rotation: -15.6, x: 471.9 }, 0).wait(1).to({ rotation: -16.3 }, 0).wait(1).to({ rotation: -17, x: 471.8 }, 0).wait(1).to({ rotation: -17.8 }, 0).wait(1).to({ rotation: -18.5 }, 0).wait(1).to({ rotation: -19.1 }, 0).wait(1).to({ rotation: -19.8, y: 144.5 }, 0).wait(1).to({ rotation: -20.5, y: 144.6 }, 0).wait(1).to({ rotation: -21.1 }, 0).wait(1).to({ rotation: -21.7 }, 0).wait(1).to({ rotation: -22.3, y: 144.5 }, 0).wait(1).to({ rotation: -22.9, y: 144.6 }, 0).wait(1).to({ rotation: -23.4, y: 144.5 }, 0).wait(1).to({ rotation: -24, y: 144.6 }, 0).wait(1).to({ rotation: -24.4 }, 0).wait(1).to({ rotation: -24.9, y: 144.5 }, 0).wait(1).to({ rotation: -25.4, y: 144.6 }, 0).wait(1).to({ rotation: -25.8, y: 144.5 }, 0).wait(1).to({ rotation: -26.2, y: 144.6 }, 0).wait(1).to({ rotation: -26.6, y: 144.5 }, 0).wait(1).to({ rotation: -26.9, x: 471.9 }, 0).wait(1).to({ rotation: -27.2 }, 0).wait(1).to({ rotation: -27.5, x: 471.8, y: 144.6 }, 0).wait(1).to({ rotation: -27.8, y: 144.5 }, 0).wait(1).to({ rotation: -28.1 }, 0).wait(1).to({ rotation: -28.3 }, 0).wait(1).to({ rotation: -28.5, y: 144.6 }, 0).wait(1).to({ rotation: -28.7 }, 0).wait(1).to({ rotation: -28.9, y: 144.5 }, 0).wait(1).to({ rotation: -29.1 }, 0).wait(1).to({ rotation: -29.3 }, 0).wait(1).to({ rotation: -29.4 }, 0).wait(1).to({ rotation: -29.5, y: 144.6 }, 0).wait(1).to({ rotation: -29.6, y: 144.5 }, 0).wait(1).to({ rotation: -29.7, y: 144.6 }, 0).wait(1).to({ rotation: -29.8, y: 144.5 }, 0).wait(1).to({ rotation: -29.9 }, 0).wait(2).to({ y: 144.6 }, 0).wait(1).to({ rotation: -30, y: 144.5 }, 0).wait(1).to({ x: 471.9 }, 0).wait(1).to({ y: 144.6 }, 0).wait(1).to({ y: 144.5 }, 0).wait(1).to({ x: 471.8, y: 144.6 }, 0).wait(2).to({ rotation: -29.9 }, 0).wait(2).to({ y: 144.5 }, 0).wait(1).to({ rotation: -29.8 }, 0).wait(1).to({ rotation: -29.7 }, 0).wait(1).to({ y: 144.6 }, 0).wait(1).to({ rotation: -29.6 }, 0).wait(1).to({ rotation: -29.5 }, 0).wait(1).to({ rotation: -29.4, y: 144.5 }, 0).wait(1).to({ rotation: -29.3 }, 0).wait(1).to({ rotation: -29.1 }, 0).wait(1).to({ rotation: -29, y: 144.6 }, 0).wait(1).to({ rotation: -28.9, y: 144.5 }, 0).wait(1).to({ rotation: -28.7, x: 471.9 }, 0).wait(1).to({ rotation: -28.5, x: 471.8, y: 144.6 }, 0).wait(1).to({ rotation: -28.3, x: 471.9, y: 144.5 }, 0).wait(1).to({ rotation: -28.1, x: 471.8 }, 0).wait(1).to({ rotation: -27.9, x: 471.9 }, 0).wait(1).to({ rotation: -27.7, x: 471.8 }, 0).wait(1).to({ rotation: -27.4, y: 144.6 }, 0).wait(1).to({ rotation: -27.2, x: 471.9, y: 144.5 }, 0).wait(1).to({ rotation: -26.9, x: 471.8 }, 0).wait(1).to({ rotation: -26.6 }, 0).wait(1).to({ rotation: -26.3, y: 144.6 }, 0).wait(1).to({ rotation: -25.9, x: 471.9, y: 144.5 }, 0).wait(1).to({ rotation: -25.6, x: 471.8, y: 144.6 }, 0).wait(1).to({ rotation: -25.2 }, 0).wait(1).to({ rotation: -24.8 }, 0).wait(1).to({ rotation: -24.4 }, 0).wait(1).to({ rotation: -24 }, 0).wait(1).to({ rotation: -23.5 }, 0).wait(1).to({ rotation: -23 }, 0).wait(1).to({ rotation: -22.5, y: 144.5 }, 0).wait(1).to({ rotation: -22, y: 144.6 }, 0).wait(1).to({ rotation: -21.5, y: 144.5 }, 0).wait(1).to({ rotation: -20.9, y: 144.6 }, 0).wait(1).to({ rotation: -20.3 }, 0).wait(1).to({ rotation: -19.7 }, 0).wait(1).to({ rotation: -19.1, x: 471.9 }, 0).wait(1).to({ rotation: -18.4, x: 471.8 }, 0).wait(1).to({ rotation: -17.8 }, 0).wait(1).to({ rotation: -17.1 }, 0).wait(1).to({ rotation: -16.4 }, 0).wait(1).to({ rotation: -15.7 }, 0).wait(1).to({ rotation: -15 }, 0).wait(1).to({ rotation: -14.3 }, 0).wait(1).to({ rotation: -13.6 }, 0).wait(1).to({ rotation: -12.9 }, 0).wait(1).to({ rotation: -12.2 }, 0).wait(1).to({ rotation: -11.5 }, 0).wait(1).to({ rotation: -10.9 }, 0).wait(1).to({ rotation: -10.2 }, 0).wait(1).to({ rotation: -9.5, y: 144.5 }, 0).wait(1).to({ rotation: -8.9, y: 144.6 }, 0).wait(1).to({ rotation: -8.3 }, 0).wait(1).to({ rotation: -7.7 }, 0).wait(1).to({ rotation: -7.2 }, 0).wait(1).to({ rotation: -6.6 }, 0).wait(1).to({ rotation: -6.1 }, 0).wait(1).to({ rotation: -5.6 }, 0).wait(1).to({ rotation: -5.2 }, 0).wait(1).to({ rotation: -4.7 }, 0).wait(1).to({ rotation: -4.3 }, 0).wait(1).to({ rotation: -3.9 }, 0).wait(1).to({ rotation: -3.5 }, 0).wait(1).to({ rotation: -3.2 }, 0).wait(1).to({ rotation: -2.9, y: 144.5 }, 0).wait(1).to({ rotation: -2.6, y: 144.6 }, 0).wait(1).to({ rotation: -2.3 }, 0).wait(1).to({ rotation: -2 }, 0).wait(1).to({ rotation: -1.8 }, 0).wait(1).to({ rotation: -1.6 }, 0).wait(1).to({ rotation: -1.3 }, 0).wait(1).to({ rotation: -1.2 }, 0).wait(1).to({ rotation: -1 }, 0).wait(1).to({ rotation: -0.8 }, 0).wait(1).to({ rotation: -0.7 }, 0).wait(1).to({ rotation: -0.6 }, 0).wait(1).to({ rotation: -0.4 }, 0).wait(1).to({ rotation: -0.3 }, 0).wait(2).to({ rotation: -0.2 }, 0).wait(1).to({ rotation: -0.1 }, 0).wait(2).to({ rotation: 0 }, 0).wait(4));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-49.3, -242.9, 908.4, 774.8);


    // stage content:
    (lib.technics = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 45
        this.instance = new lib.mixx();
        this.instance.parent = this;
        this.instance.setTransform(-924.2, -276.5, 4.93, 4.93, 0, 0, 0, 13.5, 17.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(179));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-273.7, -1021.9, 4477.9, 3819.3);
    // library properties:
    lib.properties = {
        id: '82139CFF3191064A81B781B549AED9EF',
        width: 1594,
        height: 500,
        fps: 30,
        color: gColor,
        opacity: 1.00,
        webfonts: {},
        manifest: [],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['82139CFF3191064A81B781B549AED9EF'] = {
        getStage: function() { return exportRoot.getStage(); },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;