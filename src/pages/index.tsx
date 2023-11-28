
import Image from "next/image";
import logo from "../../public/Logo.svg";
import twitter from "../../public/bx_bxl-twitter.svg";
import instagram from "../../public/bx_bxl-instagram-alt.svg";
import google_play from "../../public/Black-play.svg";
import app_store from "../../public/Black.svg";
import WebCardScroll from "@/components/WebCardScroll";
import MetaTags from "@/components/MetaTags";
import Link from "next/link";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MetaTags />
      <main
        style={{ width: "100vw", minHeight: "100vh", background: "#131313" }}
      >
        <Box
          w={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box
            px={{ base: "1rem", md: "2rem", lg: "3.75rem" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            display={"flex"}
            py={"1.3rem"}
            height={"6rem"}
            width={"100%"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={{ base: "0.5rem", md: "0.82rem" }}
              as={Link}
              href={"/"}
            >
              <Image src={logo} alt="snapcart logo" />
              <Text
                letterSpacing={"-0.04569rem"}
                className={inter.className}
                fontWeight={600}
                fontSize={{ base: "1rem", md: "1.4rem" }}
                color={"white"}
              >
                Snapcart
              </Text>
            </Box>

            <Box display={{ base: "none", md: "flex" }} gap={"5.5rem"}>
              <Text
                as={Link}
                href={"/privacy_policy"}
                color={"#F8F8F8"}
                fontSize={"1rem"}
                className={inter.className}
              >
                Privacy Policy
              </Text>
              <Text
                as={Link}
                href={
                  "https://sulky-punch-280.notion.site/FAQ-f4426a9ad43f483e8715af6f2180766d?pvs=4"
                }
                color={"#F8F8F8"}
                fontSize={"1rem"}
                className={inter.className}
              >
                FAQ
              </Text>
              <Text
                as={Link}
                href={"/terms_of_service"}
                color={"#F8F8F8"}
                fontSize={"1rem"}
                className={inter.className}
              >
                Terms of Service
              </Text>
            </Box>

            <Box
              display={"flex"}
              alignItems={"center"}
              gap={{ base: "1.2rem", md: "2.4rem" }}
            >
              <Box
                as={Link}
                href={"https://twitter.com/snapcarthq"}
                target="_blank"
                cursor={"pointer"}
                w={{ base: "1.5rem", md: "2rem" }}
              >
                <Image src={twitter} alt="twitter logo" />
              </Box>

              <Box
                display={{ base: "none", md: "block" }}
                cursor={"pointer"}
                as={Link}
                href={
                  "https://www.instagram.com/snapcarthq?igshid=MWZjMTM2ODFkZg%3D%3D"
                }
                target="_blank"
                w={"2rem"}
              >
                <Image src={instagram} alt="instagram logo" />
              </Box>
            </Box>
          </Box>

          <VStack gap={"1.12rem"} px={"1.2rem"}>
            <Box
              fontSize={{ base: "0.65rem", md: "0.875rem" }}
              as={Link}
              href={
                "https://medium.com/@snapcarthq/introducing-snapcart-simplifying-online-commerce-with-automation-8372a9d05a98"
              }
              target="_blank"
              letterSpacing={"0.02375rem"}
              className={inter.className}
              borderRadius={"0.825rem"}
              padding={".5rem 1rem"}
              width={"max-content"}
              background={"#222"}
              fontWeight={500}
              color={"white"}
              mt={{ base: "1.5rem", md: "2rem" }}
            >
              We just launched public beta on mobile! 🎉{" "}
              <span style={{ fontWeight: 600 }}>→</span>
            </Box>

            <Text
              fontSize={{ base: "2.6rem", md: "3.5rem", lg: "4.375rem" }}
              letterSpacing={{ base: "-0.06206rem", md: "-0.10281rem" }}
              lineHeight={{ base: "2.79231rem", md: "4.625rem" }}
              width={{ md: "50rem" }}
              textAlign={"center"}
              fontWeight={700}
              background={
                "linear-gradient(119deg, #75FFEE 0%, #A771FF 31.25%, #FC5CFF 57.81%, rgba(255, 71, 71, 0.60) 100%)"
              }
              backgroundClip={"text"}
              fontFamily={"Poppins"}
            >
              Organize Orders from everywhere.
            </Text>

            <Text
              lineHeight={{ base: "1.5rem", md: "1.875rem" }}
              fontSize={{ base: "1rem", md: "1.25rem" }}
              width={{ base: "19rem", md: "34rem" }}
              letterSpacing={"-0.03125rem"}
              className={inter.className}
              textAlign={"center"}
              fontWeight={400}
              color={"white"}
            >
              The only solution that combines a free order store, inventory
              management and messaging.
            </Text>
          </VStack>

          <Box
            display={"flex"}
            mt={{ base: "1rem", md: "2.5rem" }}
            gap={"1.25rem"}
          >
            <Box
              as={Link}
              href={
                "https://play.google.com/store/apps/details?id=com.cube.messaging"
              }
              target="_blank"
              cursor={"pointer"}
              width={{ base: "7.5rem", md: "11rem" }}
            >
              <Image src={google_play} alt="google play" />
            </Box>

            <Box
              as={Link}
              target="_blank"
              href={
                "https://apps.apple.com/ng/app/snapcart-your-shop-assistant/id6467751729"
              }
              cursor={"pointer"}
              width={{ base: "7.5rem", md: "11rem" }}
            >
              <Image src={app_store} alt="Apple Store" />
            </Box>
          </Box>

          <WebCardScroll />
        </Box>
      </main>
    </>
  );
}
