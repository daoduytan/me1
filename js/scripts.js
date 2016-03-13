(function ($, root, undefined) {

	$(function () {

		'use strict';

		// DOM ready, take it away

		var $body =  $('html, body'),
			$btnNav = $('.btn-nav'),
			$this = $(this),
			$gridItem = $('.work');


	function skill() {
		var $skill = $('.skill-bar');
		$skill.each(function() {
			var $number = $(this).data('skill');
			$(this).append("<span class='number'/>");
			$(this).append('<div class="bar"/>');
			$(this).find('.number').text($number).css('left', $number);
			$(this).children('.bar').css('width', $number);
		});
	}

	function articleTada(){
	  var randNum = Math.floor(Math.random() * $('.article-thumb').length);
	  $('.article-thumb').eq(randNum).addClass('is-animate')
	    .siblings().removeClass('is-animate');
	}

	function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {

		    var target = $( $(this).attr('href') );

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, duration);
		    }
		});
	}

	function work() {
		var workHeight = $('.works').offset().top;
		$gridItem.each(function() {
			var spinner = "<div class='loader'></div>";
			$(this).on('click' , function(event) {
				event.preventDefault();
				/* Act on the event */
				var nameWork = $(this).attr('href');
				// console.log(nameWork);
				$('.detail-work')
					// .css('display', 'block')
					.css('height', 'inherit')
					.children('.inner-detail-work')
						.addClass('visible')
						// .html(spinner)
						.load('works/'+ nameWork +'.html');
				// $(this).parents('.works').prepend('<div class="detail-work"/>');



				$('html, body').animate({
	          scrollTop: workHeight
	      }, 1000);

	      $('.gray').css('display', 'block');

			});
		});
	}

	function close_work() {
		$('.gray, .close-work').click(function() {
			$('.gray')
				.css('display', 'none');

			$('.detail-work')
				// .hide();
				.css('height', 0)
				.children('.inner-detail-work')
					.removeClass('visible');
		});
	}

	function clickBtn() {
		var element, circle, d, x, y;
		$(".btn span").hover(function(e){
			element = $(this);

			if(element.find(".circle").length === 0)
				element.prepend("<span class='circle'></span>");

			circle = element.find(".circle");
			circle.removeClass("animate");

		if(!circle.height() && !circle.width())
		  {
				d = Math.max(element.outerWidth(), element.outerHeight());
				circle.css({height: d, width: d});
			}

			x = e.pageX - element.offset().left - circle.width()/2;
			y = e.pageY - element.offset().top - circle.height()/2;

			circle.css({top: y+'px', left: x+'px'}).addClass("animate");
		},
		function() {
			circle.removeClass("animate");
		});
	}

	setInterval(function() {
			articleTada();
		}, 4000);

		skill();
		smoothScroll(300);
		// $body.niceScroll();
		work();
		clickBtn();
		close_work();

		$btnNav.click(function() {
			$('.main-nav').toggle();
		});

	});


	$(window).scroll(function() {
	  startArticles();
	});

	function startArticles(){
	  var wScroll = $(window).scrollTop();

	  if($('#blog').offset().top - 200< wScroll) {
	    $('.article-thumb').each(function(i){
	      setTimeout(function(){
	        $('.article-thumb').eq(i).addClass('is-visible');
	      }, 100 * i);
	    });
	  }
	}

})(jQuery, this);
