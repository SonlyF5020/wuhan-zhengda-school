// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


(function($) {
  $.extend($.easing, {
    easeInBack: function(x, t, b, c, d, s) {
      if (s === void 0) {
        s = 1.70158;
      }
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
      if (s === void 0) {
        s = 1.70158;
      }
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
  });
})(jQuery);

$(document).ready(function(){
  var menuBarOffset = document.getElementById("menu").offsetTop;
  var cartoonTriggered = false;

  var runOnScroll = function(evt) {
    var menuBar = document.getElementById("menu")
    var windowScrollTop = window.scrollY;
    $("#menu").toggleClass('float-menu', windowScrollTop > menuBarOffset);

    if(!cartoonTriggered && windowScrollTop > menuBarOffset) {
      cartoonRun();
      cartoonTriggered = true;
    }
  }

  var cartoonRun = function () {
      $('img.drop-move').fadeIn(1000).animate({top: '500px'}, 2000, 'easeOutBack').delay(1000).animate({left: '-1000px'}, 2000, 'easeInBack');
  }

  window.addEventListener("scroll", runOnScroll);

  var cartoonImg = document.createElement('img');
  // var tmp = 'http://7aro2k.com1.z0.glb.clouddn.com/moving-xiaohuangren.jpg'
  cartoonImg.src = 'http://7aro2k.com1.z0.glb.clouddn.com/xiaohuangren_two.png';
  cartoonImg.className = 'drop-move';
  document.getElementsByTagName('body')[0].appendChild(cartoonImg);
});
