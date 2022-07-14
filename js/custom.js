/**
 * @file
 * Custom functions.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.custom = {
    attach: function (context, settings) {

      /* Custom code goes here. */

      /* Set the search box placeholder text. */
      $('#edit-search-api-fulltext').attr('placeholder', 'Search ARC...');

    }
  };

  /* Enhancements to the bootstrap tabs in the slide-out menu. */
  Drupal.behaviors.tabs = {
    attach: function (context, settings) {
      $('.tab-pane').css('display', 'none');
      $('#menu-tabs-1').css('display', 'block');
      $(".nav-tabs a").click(function () {
        var target = $(this).attr('data-bs-target');
        $('.tab-pane').css('display', 'none');
        $(target).css('display', 'block');
      });
      $('.quicklinks__button').click(function () {
        $('.tab-pane').css('display', 'none');
        $('#menu-tabs-3').css('display', 'block');
        $('#menu-tabs-3').css('opacity', '1');
        $('.nav-link').removeClass('active');
        $('#menu-tab-3').addClass('active');
      });
      $('.search__button').click(function () {
        $('.tab-pane').css('display', 'none');
        $('#menu-tabs-2').css('display', 'block');
        $('#menu-tabs-2').css('opacity', '1');
        $('.nav-link').removeClass('active');
        $('#menu-tab-2').addClass('active');
      });
    }
  };

  /* Slick landing page slideshows. */
  Drupal.behaviors.slick_slider = {
    attach: function (context, settings) {
      $('body').once('.slider').each(function () {
        $('.view-id-slider .view-content.row').slick({
          dots: true,
          arrows: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToScroll: 1,
          arrows: false,
          fade: false,
          cssEase: 'linear'
        });

        $('.slider-controls .control-play').hide();

        $('.slider-controls .play').click(function (e) {
          e.preventDefault();
          $('.view-id-slider .view-content.row').slick('slickPlay');
          $('.slider-controls .control-pause').show();
          $('.slider-controls .control-play').hide();
        });

        $('.slider-controls .pause').click(function (e) {
          e.preventDefault();
          $('.view-id-slider .view-content.row').slick('slickPause');
          $('.slider-controls .control-play').show();
          $('.slider-controls .control-pause').hide();
        });

        $('.slider-controls .previous').click(function (e) {
          e.preventDefault();
          $('.view-id-slider .view-content.row').slick('slickPrev');
        });

        $('.slider-controls .next').click(function (e) {
          e.preventDefault();
          $('.view-id-slider .view-content.row').slick('slickNext');
        });

      });

    }
  };

  /* Slick views pager slider. */
  Drupal.behaviors.slick_views = {
    attach: function (context, settings) {

      // Explore ARC.
      $('#block-views-block-explore-arc-block-1 .view-content').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        rows: 1,
        adaptiveHeight: true,
        accessibility: true,
        initialSlide: 3,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              dots: true,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });

      // Key Dates & Events.
      $('#block-views-block-events-block-1 .view-content').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        rows: 2,
        adaptiveHeight: true,
        accessibility: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });

      // News.
      $('#block-views-block-news-block-1 .view-content').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        rows: 1,
        adaptiveHeight: true,
        accessibility: true,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              dots: true,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    }
  };
})(jQuery, Drupal);
