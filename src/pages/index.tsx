import Head from "next/head";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import twitter from "../../public/bx_bxl-twitter.svg";
import instagram from "../../public/bx_bxl-instagram-alt.svg";
import google_play from "../../public/Black-play.svg";
import app_store from "../../public/Black.svg";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import WebCardScroll from "@/components/WebCardScroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Snapcart</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Snapcart enables SMBs support customers and manage orders with an AI assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Snapcart: AI powered co-pilot for your business"/>
        <meta property="og:description" content="Manage orders, messages and customers in one place."/>
        <meta name="facebook-domain-verification" content="7fdgovrx02wawwt20abifrn28em3os"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="snapcart.store"/>
        <meta property="twitter:url" content="https://snapcart.store/"/>
        <meta name="twitter:title" content="Snapcart: AI powered co-pilot for your business"/>
        <meta name="twitter:description" content="Manage orders, messages and customers in one place."/>
        <meta name="twitter:image"/>
        <link rel="icon" href="/Logo.svg" />
      </Head>

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
            justifyContent={"space-between"}
            display={"flex"}
            px={{ base: "1rem", md: "2rem", lg: "3.75rem" }}
            py={"1.3rem"}
            height={"6rem"}
            width={"100%"}
          >
            <Box display={"flex"} alignItems={"center"} gap={"0.82rem"}>
              <Image src={logo} alt="snapcart logo" />
              <Text
                letterSpacing={"-0.04569rem"}
                className={inter.className}
                fontWeight={600}
                fontSize={"1.4rem"}
                color={"white"}
              >
                Snapcart
              </Text>
            </Box>

            <Box
              display={"flex"}
              alignItems={"center"}
              gap={{ base: "1.2rem", md: "2.4rem" }}
            >
              <Box cursor={"pointer"}>
                <Image src={twitter} alt="twitter logo" />
              </Box>
              <Box w={"2rem"} cursor={"pointer"}>
                <Image src={instagram} alt="instagram logo" />
              </Box>
              <Text
                letterSpacing={"-0.04013rem"}
                className={inter.className}
                fontSize={"1.28rem"}
                fontWeight={600}
                color={"white"}
                cursor={"pointer"}
                display={{ base: "none", md: "block" }}
              >
                Contact us
              </Text>
            </Box>
          </Box>

          <VStack gap={"1.12rem"} px={"1.2rem"}>
            <Box
              width={"max-content"}
              borderRadius={"0.825rem"}
              padding={".5rem 1rem"}
              background={"#222"}
              fontWeight={500}
              color={"white"}
              letterSpacing={"0.02375rem"}
              fontSize={{ base: "0.65rem", md: "0.875rem" }}
              className={inter.className}
              mt={"1rem"}
            >
              We just launched public beta on mobile! 🎉{" "}
              <span style={{ fontWeight: 600 }}>→</span>
            </Box>

            <Text
              width={{ md: "50rem" }}
              fontSize={{ base: "2.6rem", md: "3.5rem", lg: "4.375rem" }}
              fontWeight={700}
              letterSpacing={{ base: "-0.06206rem", md: "-0.10281rem" }}
              lineHeight={{ base: "2.79231rem", md: "4.625rem" }}
              textAlign={"center"}
              background={
                "linear-gradient(119deg, #75FFEE 0%, #A771FF 31.25%, #FC5CFF 57.81%, rgba(255, 71, 71, 0.60) 100%)"
              }
              backgroundClip={"text"}
              fontFamily={"Poppins"}
            >
              AI-powered copilot for your shop
            </Text>

            <Text
              color={"white"}
              fontSize={{ base: "1rem", md: "1.25rem" }}
              fontWeight={400}
              className={inter.className}
              lineHeight={{ base: "1.5rem", md: "1.875rem" }}
              textAlign={"center"}
              width={{ base: "19rem", md: "34rem" }}
              letterSpacing={"-0.03125rem"}
            >
              Snapcart enables SMBs support customers and manage orders with an
              AI assistant
            </Text>
          </VStack>

          <Box
            display={"flex"}
            mt={{ base: "1rem", md: "2.5rem" }}
            gap={"1.25rem"}
          >
            <Box cursor={"pointer"} width={{ base: "7.5rem", md: "11rem" }}>
              <Image src={google_play} alt="google play" />
            </Box>
            <Box cursor={"pointer"} width={{ base: "7.5rem", md: "11rem" }}>
              <Image src={app_store} alt="Apple Store" />
            </Box>
          </Box>

          <WebCardScroll />
        </Box>
      </main>
    </>
  );
}
