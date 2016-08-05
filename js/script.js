$(document).ready(function(){
    // update last modified string
    var last = new Date(document.lastModified);
    var format = last.getFullYear() + "/" + (last.getMonth()+1) + "/" + last.getDate();
    $("#lastModified").text("Last modified: "+format);
    
    // hide all classes (in classes page)
    $(".class").hide();

    $(".class_btn").click(function() {
      var class_id = $(this).attr("data-class");
      $("#" + class_id).fadeToggle();
    });

    $(".more").hide();
    $(".moreall").hide();

    $(".moreall").click(function() {
      $(".more").hide();
      $(".moreinfo").fadeIn();
      $(".less").show();
      $(".lessall").show();
      $(".moreall").hide();
    });
    $(".lessall").click(function() {
      $(".more").show();
      $(".moreinfo").fadeOut();
      $(".less").hide();
      $(".moreall").show();
      $(".lessall").hide();
    });

    $(".more").click(function() {
      project  = $(this).closest(".project");
      moreinfo = $(project).children(".moreinfo");
      more     = $(project).find(".more");
      less     = $(project).find(".less");
      console.log(project)

      $(more).hide();
      $(less).show();
      $(moreinfo).fadeIn();
    });
    $(".less").click(function() {
      project  = $(this).closest(".project");
      moreinfo = $(project).children(".moreinfo");
      more     = $(project).find(".more");
      less     = $(project).find(".less");

      $(less).hide();
      $(more).show();
      $(moreinfo).fadeOut();
    });
});

function AnimateRotate(d){
    var elem = $("body");

    $({deg: 0}).animate({deg: d}, {
        duration: 1000,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ) {
    $(document).unbind('keydown',arguments.callee);
    // do something funny
    AnimateRotate(360);
  }
});


/* Konami Code For jQuery Plugin http://8BIT.io */
// (function(e) {
//     "use strict";
//     e.fn.konami = function(t) {
//         var n, r, i, s, o, u, a, n = e.extend({}, e.fn.konami.defaults, t);
//         return this.each(function() {
//             r = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
//             i = [];
//             e(window).keyup(function(e) {
//                 s = e.keyCode ? e.keyCode : e.which;
//                 i.push(s);
//                 if (10 === i.length) {
//                     o = !0;
//                     for (u = 0, a = r.length; u < a; u++) r[u] !== i[u] && (o = !1);
//                     o && n.cheat();
//                     i = []
//                 }
//             })
//         })
//     };
//     e.fn.konami.defaults = {
//         cheat: null
//     }
// })(jQuery);

// $(window).konami({
//     cheat: function() {
//         AnimateRotate(360);
//     }
// });