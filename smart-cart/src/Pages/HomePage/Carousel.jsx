import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "ENGWE T14 Folding Electric Bicycle",
      text: "Waveshare 2.8inch Capacitive Touch Display for Raspberry Pi, 480x640,",
      image:
        "https://img.freepik.com/premium-psd/sport-shoes-sale-social-media-post-facebook-banner-web-banner-template_70055-844.jpg?w=2000",
    },
    {
      image:
        "https://i.pinimg.com/originals/76/3b/d7/763bd70325329ca7c38a99f661734c7f.jpg",
    },
    {
      image:
        "https://www.gloo.com.my/image/catalog/02landingpage/JOI%20Gaming%20PC-GlooWeb%20Banner_1090x450.jpg",
    },
    {
      image:
        "https://i.pinimg.com/originals/d6/2d/75/d62d75ea0931297c5b3c1ee6a3eb555f.jpg",
    },
    {
      image:
        "http://qtrtimesportswear.com.au/wp-content/uploads/2021/05/banner-custom-made-sports-uniforms.jpg",
    },
  ];

  return (
    <Box
      mx={"20"}
      my={"5"}
      fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
    >
      <Box
        position={"relative"}
        height={"400px"}
        overflow={"hidden"}
        borderRadius={"5"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={1}
          onClick={() => slider?.slickPrev()}
        >
          <ArrowCircleLeftIcon size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={1}
          onClick={() => slider?.slickNext()}
        >
          <ArrowCircleRightIcon size="40px" />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"md"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            ></Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
