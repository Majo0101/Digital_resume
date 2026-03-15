export const carouselSizing= {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      responsive: [
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
