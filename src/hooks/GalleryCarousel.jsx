export const carouselSizing = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      variableWidth: false,
      swipeToSlide: true,
      rows: 1,
      responsive: [
            {
                  breakpoint: 1920,
                  settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                  },
            },
            {
                  breakpoint: 1200,
                  settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                  },
            },
            {
                  breakpoint: 576,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false,
                  },
            },
      ],
};