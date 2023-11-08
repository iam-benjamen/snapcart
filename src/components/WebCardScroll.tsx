import { Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

import image1 from "../../public/web/Group 1.svg";
import image2 from "../../public/web/Group 2.svg";
import image3 from "../../public/web/Group 3.svg";
import image4 from "../../public/web/Group 4.svg";
import image5 from "../../public/web/Group 5.svg";
import image6 from "../../public/web/Group 6.svg";

const images: StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

const WebCardScroll = () => {
  return (
    <Marquee autoFill pauseOnHover speed={50}>
      <Box
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        width={"100%"}
        my={{ base: "3rem", md: "4rem" }}
        pl={"2rem"}
      >
        {images.map((logo, index) => (
          <Box
            key={index}
            w={{ base: "17rem", md: "23rem" }}
            ml={{
              base: index === 0 ? "0rem" : "1.67rem",
              md: index === 0 ? "0rem" : "2.2rem",
            }}
          >
            <Image src={logo} alt={`Company Logo ${index}`} />
          </Box>
        ))}
      </Box>
    </Marquee>
  );
};

export default WebCardScroll;
