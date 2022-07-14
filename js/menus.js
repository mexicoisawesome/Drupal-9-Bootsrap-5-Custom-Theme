(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.menus = {
    attach: function (context, settings) {

      /* The Scrolly header thing in mobile. */

      // Only do it for mobile.
      if ($(window).width() < 768) {
        var scrollState = 0;
        var navClasses = document.getElementById('header').classList;
        var scrollTop = function () {
          return window.scrollY;
        };
        // Detect current scroll state/position.
        var scrollDetect = function (home, down, up) {
          var currentScroll = scrollTop();
          if (scrollTop() === 0) {
            home();
          }
          else if (currentScroll > scrollState) {
            down();
          }
          else {
            up();
          }
          scrollState = scrollTop()
        };
        // Apply show/hide effects on scroll.
        function homeAction() {
          navClasses.add('home');
        }

        function downAction() {
          navClasses.remove('open');
          navClasses.add('collapse');
        }

        function upAction() {
          navClasses.remove('collapse');
          navClasses.add('open');
        }
        window.addEventListener('scroll', function () {
          scrollDetect(homeAction, downAction, upAction);
        })
      }

      var timesClicked = 0;

      /* Expand the mobile menu dropdown for the current page. */
      $('.mobile__menu .active').next('ul').addClass('show');

      /* Hover effects for the desktop main menu. */
      $('.region-primary-menu .dropdown-item a').not('.active').on('mouseover', function (e) {
        $(this).closest('li').addClass('menu-hover');
      });
      $('.region-primary-menu .dropdown-item a').not('.active').on('mouseout', function (e) {
        $(this).closest('li').removeClass('menu-hover');
      });

      /* Go to the URL if the top level menu link clicked more than once. */
      $('.region-primary-menu .navbar-nav .nav-link, .region-header-form .navbar-nav .nav-link').on('click', function (e) {
        if ($(this).hasClass('show')) {
          window.location.href = this.href;
        } else {
          $('.active').next('ul').removeClass('show');
          $('.navbar-form').scrollTop('-24px');
        }
      });

      /* Remove the menu toggle from the footer top/sidebar top level links and go straight to the URL. */
      $('.region-footer-top .navbar-nav .nav-link, .sidebar_first .navbar-nav .nav-link').on('mousedown click', function (e) {
        $(this).removeAttr('data-bs-toggle');
        window.location.href = this.href;
      });

      /* First click menu expands, 2nd click go to URL function. Get the last clicked URL and store it. If clicked again go to the URL. */
      $('.region-primary-menu .dropdown-item a.dropdown-toggle, .region-header-form .dropdown-item a.dropdown-toggle').on('click', function (e) {
        timesClicked += 1;
        var lastClicked = localStorage.getItem('lastClicked');
        var link = this.href.split('?');
        var link = link[0];
        if (lastClicked == '') {
          localStorage.setItem('lastClicked', link);
        }
        if ((timesClicked > 1) && (lastClicked == link)) {
          $(this).removeAttr('data-bs-toggle');
          localStorage.setItem('lastClicked', '');
          window.location.href = link;
        }
        else {
          e.stopPropagation();
          e.preventDefault();
          localStorage.setItem('lastClicked', link);
        }
      })

      /* Fade in/out the menu tabs on scroll in the sidebar slide-out. */
      var lastScrollTop = 0;

      $('.navbar-form').scroll(function (event) {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > lastScrollTop) {
          $('.nav-tabs').fadeOut();
          $('.offcanvas-header').addClass('bottom__shadow');
        } else {
          $('.nav-tabs').fadeIn();
          $('.offcanvas-header').removeClass('bottom__shadow');
        }
        lastScrollTop = scrollTop;
      });
    }
  }

  /* Enhancements to the bootstrap slide-out menu. */
  Drupal.behaviors.side_menu = {
    attach: function (context, settings) {
      $('body').once('.menu-item--expanded').each(function () {
        $('a.toggle-sub').click(function (e) {
          var menuItem = $(e.currentTarget);
          $(this).toggleClass('active');
          $(this).parent().toggleClass('active-menu');
          $(this).parent().next('ul').toggleClass('menu-open');
          $(this).parent().next('ul').slideToggle();
          $(this).attr('aria-expanded', menuItem.attr('aria-expanded') === 'true' ? false : true);
        });

        if ($('.ddown-item.active').length) {
          $('.ddown-item.active').parent().siblings('.menu-item-container').find('a.toggle-sub').click();
        }

        $('.mobile-toggle').once().click(function () {
          $(this).toggleClass('mobile-open');
          $('.sidebar-nav').slideToggle();
        });
      });
    }
  };
})(jQuery, Drupal)
