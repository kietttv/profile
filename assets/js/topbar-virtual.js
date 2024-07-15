const categories = [
  {
    id: '1',
    datafilter: '*',
    name: 'All'
  },
  {
    id: '2',
    datafilter: '.apps',
    name: 'Apps'
  },
  {
    id: '3',
    datafilter: '.template',
    name: 'Template'
  },
  {
    id: '4',
    datafilter: '.ios',
    name: 'IOS'
  },
  {
    id: '5',
    datafilter: '.graphic',
    name: 'Graphic'
  },
];
// id="category-list"
const categoryList = $('.filterable-button');
categories.forEach(category => {
  var item = `<button class="btn btn-theme-outline" data-filter="${category.datafilter}">${category.name}</button>`;
  if (category.name == "All") {
    var item = `<button class="btn btn-theme-outline selected" data-filter="${category.datafilter}">${category.name}</button>`;
  }
  categoryList.append(item);
});

const projects = [
  {
    id: '1',
    name: 'KTK Shop',
    category: 'apps',
    date: 'May 2022 - July 2022',
    course: 'Project Web',
    image: 'Picture2.png',
    teamSize: '4',
    position: 'Back-end developer, Data-base Designer, Tester',
    techUsed: 'ASP .Net Web API, SQL Server, Angular',
    des: 'KTK Shop is an online smartphone shopping website built using Symfony, HTML5, and CSS. As a Tester, I use Postman to test data information and test API. I also created Test plans and Test logs to ensure all system features functionality. As a Database Designer, I designed the ERD and created the DB on MySQL. As a backend developer, I implement Web application functions as assigned by the Team leader.'
  },
  {
    id: '2',
    name: 'ATN Toys Store',
    category: 'apps',
    date: 'July 2022 - October 2022',
    course: 'Cloud Computing',
    image: 'Picture3.png',
    teamSize: '1',
    position: "Fullstack Developer",
    techUsed: 'PHP, Heroku cloud, PostgreSQL, Bootstrap',
    des: 'ATN Toys Store is a web project developed in PHP and deployed on the Heroku cloud platform. This website specializes in providing toys for teenagers, providing rich functions for both users and administrators. As a Fullstack Developer, I did all the work to develop the website including database design, coding, testing, and deploying the website to Heroku cloud.'
  },
  {
    id: '3',
    name: 'FPT Book Store ',
    category: 'apps',
    date: 'January 2023 - March 2023',
    course: 'Application Development',
    image: 'Picture4.jpg',
    teamSize: '4',
    position: 'Back-end developer, Data-base Designer, Tester',
    techUsed: 'ASP .Net Core MVC, SQL Server, Bootstrap',
    des: 'FPTBook is a web project developed using ASP .Net Core MVC, designed to support both customers and bookstore owners in managing the buying and selling of books. As a Tester, I test all functions of the web application. In addition, I also create Test plans and Test logs to ensure the functionality of all system features. As a Database Designer, I designed the ERD and created the DB on SQL Server. As a backend developer, I implement Web application functions as assigned by the Team leader.'
  },
  {
    id: '4',
    name: 'M-HIKE',
    category: 'apps',
    date: 'August 2023 - November 2023',
    course: 'Mobile Application Design and Development',
    image: 'Picture5.png',
    teamSize: '3',
    position: 'Tester, Back-end Develper',
    techUsed: 'Java, SQLite',
    des: 'M-Hike is a Mobile application developed on Android Studio in Java for hikers. This app helps users plan hiking trips and records details of the usertrip then uploads them to the server so they can be shared with others. As a Tester, I test the apps functionality on different devices. In addition, I also create Test plans and Test logs to ensure the functionality of all system features. As a backend developer, I implement Mobile App functions as assigned by the Team leader.'
  },
  {
    id: '6',
    name: 'Annual University Magazine',
    category: 'apps',
    date: 'Feb 2024 - Apr 2024',
    course: 'Enterprise Web Software Development',
    image: 'Picture1.png',
    teamSize: '5',
    position: 'Tester, Back-end Develper',
    techUsed: 'ASP .Net Web API, SQL Server, Angular',
    des: 'Developed a backend system for a university magazine, enabling students to submit articles and images, with faculty speci coordinators managing contributions. Implemented user authentication, submission deadlines, email notifications, and statistical analysis and ensured mobile-friendly interface andadministrative controls facilitated the marketing managers oversight with | real contribution downloads and guest access for viewing selected works.'
  },
  {
    id: '7',
    name: 'A tumor diagnosis system through mri images using deep learning',
    category: 'apps',
    date: 'August 2023 - May 2024',
    course: 'Final Year Project',
    image: 'Picture6.png',
    teamSize: '1',
    position: 'Fullstack Developer',
    techUsed: 'Coding in Google Colab, Python, Tensorflow',
    des: 'Description: Data Processing: Filter data, classify data, and transform data for input into deep learning networks. Modeling: Build deep learning models like CNNs, including VGG16, VGG19, Inception V3, and ResNet 50. Training Model: Train the deep learning models using the processed data. Testing: Perform automated testing on the test dataset. Results: The model achieved a maximum accuracy of 90%.'
  },
];

const projectList = $('#project-list');

projects.reverse().forEach(project => {
  const projectItem = `
        <div class="grid-item ${project.category} wow zoomIn">
          <div class="img-place" data-src="#project-${project.id}" data-fancybox data-modal="false">
            <img class="work_thumb" src="../assets/img/work/${project.image}" alt="${project.name}">
            <img class="work_bg" src="../assets/img/work/work-bg.png" alt="${project.name}">
            <div class="img-caption">
              <h5 class="fg-theme">${project.name}</h5>
              <p>${project.date}</p>
            </div>
          </div>
        </div>
        <!-- detail -->
        <div id="project-${project.id}" class="project-details"">
          <h4>${project.name}</h4>
          <h5>${project.date}</h5>
          <img src="../assets/img/work/${project.image}" alt="${project.name}">
          <p><b>Final course project:</b> ${project.course}</p>
          <p><b>Team size:</b> ${project.teamSize}</p>
          <p><b>Position in project:</b> ${project.position}</p>
          <p><b>Technologies used:</b> ${project.techUsed}</p>
          <p><b>Description:</b> ${project.des}</p>
        </div>
      `;
  projectList.append(projectItem);
});

$(function () {
  // filter items on button click
  var $grid = $('.gridder').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
  });

  $('.filterable-button').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    console.log(filterValue);
    $grid.isotope({ filter: filterValue });
  });

  $('.testi-carousel').owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
  });

  // Nice select
  $('.vg-select').niceSelect();

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Page animation initialize
  new WOW().init();

  // Back to top
  var backTop = $(".btn-back_to_top");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if ($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });

  backTop.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  $.fn.toggleSelected = function (options) {
    var defaults = $.extend({
      classes: 'selected',
      itemSelector: this.children(),
    });

    return this.each(function () {
      var o = defaults;
      var sel = o.itemSelector;

      sel.click(function () {
        var self = $(this);
        self.addClass(o.classes);
        self.siblings().removeClass(o.classes);
      });
    });
  };

  $('[data-toggle="selected"]').toggleSelected();
});

$(document).ready(function () {

  /* Sticky nvigation */

  var sticky = {
    $sticky: $('.sticky'),
    offsets: [],
    targets: [],
    stickyTop: null,

    set: function () {
      var self = this;

      var windowTop = Math.floor($(window).scrollTop());

      self.offsets = [];
      self.targets = [];

      // Get current top position of sticky element
      self.stickyTop = self.$sticky.data('offset') ? self.$sticky.css('position', 'absolute').data('offset') : self.$sticky.css('position', 'absolute').offset().top;

      // Cache all targets and their top positions
      self.$sticky.find('a').map(function () {
        var $el = $(this),
          href = $el.data('target') || $el.attr('href'),
          $href = /^#./.test(href) && $(href);

        return $href && $href.length && $href.is(':visible') ? [[$href[0].getBoundingClientRect().top + windowTop, href]] : null;
      })
        .sort(function (a, b) { return a[0] - b[0] })
        .each(function () {
          self.offsets.push(this[0]);
          self.targets.push(this[1]);
        });
    },

    update: function () {
      var self = this;

      var windowTop = Math.floor($(window).scrollTop());
      var $stickyLinks = self.$sticky.find('.navbar-nav .nav-item').removeClass('active');
      var stickyPosition = 'fixed';
      var currentIndex = 0;

      // Toggle fixed position depending on visibility
      if ($(window).width() < 800 || $(window).height() < 500 || self.stickyTop > windowTop) {
        stickyPosition = 'absolute';
        self.$sticky.removeClass('floating');

      } else {

        for (var i = self.offsets.length; i--;) {
          if (windowTop >= self.offsets[i] - 2 && (self.offsets[i + 1] === undefined || windowTop <= self.offsets[i + 1] + 2)) {
            currentIndex = i;

            break;
          }
        }

      }

      self.$sticky.css({ 'position': stickyPosition });

      if (stickyPosition == 'absolute') {
        self.$sticky.removeClass('floating');
      }
      else {
        self.$sticky.addClass('floating');
      }

      $stickyLinks.eq(currentIndex).addClass('active');
    },

    init: function () {
      var self = this;

      $(window).on('resize', function () {
        self.set();

        self.update();
      });

      $(window).on('scroll', function () {
        self.update();
      });

      $(window).trigger('resize');
    }
  }

  if ($('.navbar').hasClass('sticky')) {
    sticky.init();
  }

});

// $(document).ready(function () {
//   $('#sideel').click(function () {
//     $(this).parents('.config').toggleClass('active');
//   });

//   $('body').data('bodyClassList', '');

//   $('.color-item').click(function () {
//     var cls = $(this).data('class');

//     $('body').attr('class', $('body').data('bodyClassList'));
//     $('body').addClass(cls);
//   });

//   $('#change-page').on('change', function () {
//     var url = $(this).val() + '.html';

//     if ($(this).val()) {
//       window.location.assign(url);
//     }
//   });

//   $('[data-animate="scrolling"]').each(function () {
//     var self = $(this);
//     var target = $(this).data('target') ? $(this).data('target') : $(this).attr('href');

//     self.click(function (e) {
//       $('body, html').animate({ scrollTop: $(target).offset().top }, 1000);
//       return false;
//     });
//   });
// });


/*
 *  Counter
 *
 *  Require(" jquery.animateNumber.min.js ", " jquery.waypoints.min.js ")
 */
// $(document).ready(function () {
//   var counterInit = function () {
//     if ($('.section-counter').length > 0) {
//       $('.section-counter').waypoint(function (direction) {

//         if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

//           var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
//           $('.number').each(function () {
//             var $this = $(this),
//               num = $this.data('number');
//             $this.animateNumber(
//               {
//                 number: num,
//                 numberStep: comma_separator_number_step
//               }, 5000
//             );
//           });

//         }

//       }, { offset: '95%' });
//     }

//   }
//   counterInit();
// });

$(document).ready(function () {
  $("#downloadBtn").click(function () {
    cvPath = '../assets/CV/CV-TruongVanTuanKiet-WebDeveloper.pdf'
    var element = document.createElement('a');
    element.setAttribute('href', cvPath);
    element.setAttribute('download', 'CV-TruongVanTuanKiet-WebDeveloper.pdf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  })
});

$(document).ready(function () {
  $('.vg-contact-form').submit(function (event) {
    event.preventDefault();

    var name = $("input[name='Name']").val();
    var email = $("input[name='Email']").val();
    var subject = $("input[name='Subject']").val();
    var message = $("textarea[name='Message']").val();

    const data = {
      name: name,
      email: email,
      subject: subject,
      mess: message
    };

    postGoogleFrom(data);
  });

  async function postGoogleFrom(data) {
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfbI15LJ2Ob2WJC79XeN9d3NStEa1LAluDAqcUSgCpGiUUAJQ/formResponse';

    const postName = 'entry.1733320680';
    const postEmail = 'entry.1026382773';
    const postSubject = 'entry.1513842462';
    const postMessage = 'entry.1080665914';

    const formData = new FormData();
    formData.append(postName, data.name)
    formData.append(postEmail, data.email)
    formData.append(postSubject, data.email)
    formData.append(postMessage, data.mess)

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formData
      });
    } catch (e) {
      console.log(e)
    }
  }
});