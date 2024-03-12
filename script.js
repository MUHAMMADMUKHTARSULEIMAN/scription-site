// (function() {
  "use strict";
  // Smooth Scroll
  $('nav > ul > li > a').smoothScroll(
    {
        offset: -110
    }
  );
  $('.logo').click(function() {
  $('html, body').animate({scrollTop: 0}, 'normal');
  })


  // Flexslider
  $(window).on('load', function() {
    $('.flexslider').flexslider(
        {
            slideshow: true,
            animation: 'slide',
            slideshowSpeed: 3000,
            pauseOnHover: true
        }
    );
  });


  // Tabs
  $('#tabs > ul > li > a').click(function() {
    $('#tabs > ul > li > a').css({backgroundColor: '#C8D6AF'});
    $(this).css({backgroundColor: '#F7FFEA'});
    const openTab = $(this).attr('href');
    $('#tabs > div:visible').fadeOut(200, function() {
        $(openTab).fadeIn(200);
    });
  });

  // const link = document.querySelectorAll('#tabs > ul > li > a');
  //         for (let i = 0; i < link.length; i++) {
  //             link[i].addEventListener('click', function(e) {
  //             e.preventDefault;
  //             for(let i = 0; i < link.length; i++) {
  //                 link[i].style.backgroundColor = '#C8D6AF';
  //             }
  //             this.style.backgroundColor = '#F7FFEA';
  //             const div = document.querySelectorAll('#tabs > div')
  //             for (i = 0; i < div.length; i++) {
  //                 div[i].style.display = 'none';
  //             }
  //             const openLink = this.getAttribute('href');
  //             const openTab = document.querySelector(openLink);
  //             openTab.style.display = 'block';
  //           });
  //         };

  // Content Rotator
  let i = 1;
  function contentRotator() {
    $('#rotator blockquote:nth-child(' + i + ')').fadeIn(1000, function() {
      if($(this).is($('#rotator blockquote:last-child'))) {
        setTimeout(function() {
          $('#rotator blockquote:nth-child(' + i + ')').fadeOut(1000, function() {
            i = 1;
          contentRotator();
          });
        }, 4000);
      }
      else {
        setTimeout(function() {
          $('#rotator blockquote:nth-child(' + i + ')').fadeOut(1000, function() {
            i++;
          contentRotator();
          });
        }, 4000);
      }
    });
  }
  contentRotator();


  let downloadFeatureCount = 0;
  const featuresRotator = () => {
    const featureArray = document.querySelectorAll(".feature-item")
    const featureCount = featureArray.length
    const featureItem = document.querySelector(".feature-item")
    const featureStyle = window.getComputedStyle(featureItem)
    const featureHeightinPX = featureStyle.getPropertyValue("height")
    const featureHeight = featureHeightinPX.replace("px", "")
    const featureHeightInNumber = parseInt(featureHeight)
    const featureContainer = document.querySelector("#features")
    // const features = document.querySelector(".eachfeature")


    setTimeout(() => {
      for(let i = 0; i < featureCount; i++) {
        featureArray[i].style.setProperty("color", "#061923")
      }
      featureArray[downloadFeatureCount].style.setProperty("color", "#FF5964")
      featureContainer.style.setProperty("top", `-${featureHeightInNumber * downloadFeatureCount}px`);
      if(downloadFeatureCount === featureCount - 1) {
        downloadFeatureCount = 0;
        featuresRotator()
      }
      else {
        downloadFeatureCount++;
        featuresRotator()
      }
      
    }, 1500)
  }

  featuresRotator()


  // Features Rotator
  // $(document).on('scroll', function() {
  //   if($(this).scrollTop() >= $('#download').position().top - 110 && $(this).scrollTop() <= $('#pricing').position().top - 110) {

  //   }
  // });

  // function featuresRotator() {
  //   const featureCount = $('.eachfeature > li').length;
  //   const featureHeight = $('.eachfeature > li').first().height();
  //   // const totalHeight = (featureCount * featureHeight) + 'px';
      
  //   let i = 1;
  //   let topPosition = 0;

  //   // $(document).on('scroll', function() {
  //   if($(this).scrollTop() >= $('#download').position().top - 110 && $(this).scrollTop() <= $('#pricing').position().top - 110) {
  //     if(i === featureCount.length) {
  //       $('#features').css({top: `-${featureHeight * i}px`})
  //       $(`.eachfeature li:nth-child(${i})`).animate({color: '#FF5964'}, '500', 'easeInQuad')
  //       setTimeout(() => {
  //         i = 1
  //       }, 2000)
  //     }
  //     else {
  //       $('#features').css({top: `-${featureHeight * i}px`})
  //       $(`.eachfeature li:nth-child(${i})`).animate({color: '#FF5964'}, '500', 'easeInQuad')
  //       setInterval(() => {
  //         i++
  //       }, 2000)
  //     }

  //       // $('#features ul').clone().appendTo('#features');
  //       // $('#features ul').last().css({top: totalHeight + "px"});

  //       // $('#features').animate({top: topPosition}, "500", "linear");
  //       // topPosition = -(i * featureHeight) + 'px';
  //       // i++;
  //       // $('#features li:nth-child(' + i + ')').animate({color: '#FF5964'}, '500', 'easeInQuad');
  //   }
  // // });
  // }

  // featuresRotator();


  // function() {
  //   setTimeout(function() {
  //     $('.eachfeature > li').css({color: '#061923'}, function() {

  //     })
  //   }, 2000);
  // }
// }());