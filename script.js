$('.carrosel').slick({

  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $("#setae"),
  nextArrow: $("#setad"),
  responsive: [
    
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,

      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 735,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});











