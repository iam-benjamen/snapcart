import Image from "next/image";
import logo from "../../public/Logo.svg";
import twitter from "../../public/bx_bxl-twitter.svg";
import instagram from "../../public/bx_bxl-instagram-alt.svg";
import google_play from "../../public/Black-play.svg";
import app_store from "../../public/Black.svg";
import WebCardScroll from "@/components/WebCardScroll";
import MetaTags from "@/components/MetaTags";
import Link from "next/link";
import snapcarticon from "../../public/web/Frame 11.svg";
import hero1 from "../../public/web/GroupHero1.svg";
import hero2 from "../../public/web/GroupHero2.svg";
import hero3 from "../../public/web/GroupHero3.svg";
import hero4 from "../../public/web/GroupHero4.svg";

import heroicon1 from "../../public/web/Messages.svg";
import heroicon2 from "../../public/web/Orders.svg";
import heroicon3 from "../../public/web/Products.svg";
import heroicon4 from "../../public/web/office-building.svg";

import brand1 from "../../public/web/brands/facebook.svg";
import brand2 from "../../public/web/brands/twitter.svg";
import brand3 from "../../public/web/brands/whatsapp.svg";
import brand4 from "../../public/web/brands/instagram.svg";

import brand5 from "../../public/web/brands/stripe.svg";
import brand6 from "../../public/web/brands/visa-logo.svg";
import brand7 from "../../public/web/brands/Mastercard.svg";
import brand8 from "../../public/web/brands/meta.svg";

import storefront from "../../public/web/house.png";
import review from "../../public/web/review.svg";
import mobilereview from "../../public/web/mobileReview.svg"
import logoipsum from "../../public/web/LogoIpsum.svg";

import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
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
          pb={"8rem"}
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
              Powering shops everywhere
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
              A suite of tools for shops to manage inventory, orders and
              messaging.
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

        <Box
          pt={{ base: "0rem", md: "9rem" }}
          color={"white"}
          w={"100%"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          pb={"10rem"}
        >
          <Text
            pb={"0.75rem"}
            fontFamily={"poppins"}
            fontSize={"1.25rem"}
            fontWeight={500}
          >
            Meet your AI assistant
          </Text>
          <Text
            fontSize={{ base: "2rem", md: "3rem" }}
            fontWeight={600}
            textAlign={"center"}
            letterSpacing={"-0.10281rem"}
            w={{ base: "95%", md: "max-content" }}
            fontFamily={"poppins"}
            lineHeight={{ base: "2.8rem", md: "4.525rem" }}
          >
            Business owners derserve the <br /> best and we have created
          </Text>
          <HStack
            fontSize={{ base: "2rem", md: "3rem" }}
            fontWeight={600}
            textAlign={"center"}
            letterSpacing={"-0.10281rem"}
            fontFamily={"poppins"}
            lineHeight={{ base: "2.8rem", md: "4.525rem" }}
            gap={".3rem"}
            pt={".2rem"}
          >
            <Text>Snapcart</Text>
            <Box w={{ base: "2rem", md: "3rem" }}>
              <Image src={snapcarticon} alt="snapcaticon" />
            </Box>
          </HStack>
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"5rem"}
        >
          <VStack
            alignItems={"flex-start"}
            pl={{ base: "1.5rem", md: "4rem" }}
            pr={{ base: "1.5rem", md: "0rem" }}
          >
            <Box w={{ base: "1.5rem", md: "3.5rem" }}>
              <Image src={heroicon1} alt="messages icon" />
            </Box>
            <VStack alignItems={"flex-start"}>
              <Text
                color={"white"}
                fontFamily={"poppins"}
                letterSpacing={{ base: "-0.02", md: "-0.10281rem" }}
                fontSize={{ base: "1.2rem", md: "2.75rem" }}
                fontWeight={700}
              >
                Manage messaging in one place
              </Text>
              <Text fontSize={"1.25rem"} lineHeight={"2.25rem"} color={"white"}>
                You can reply all your customers in one place thereby making
                your communication less stressful and faster
              </Text>
            </VStack>
          </VStack>
          <Box>
            <Image src={hero1} alt="hero one image" />
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          w={"100%"}
          alignItems={"center"}
          mb={"5rem"}
        >
          <VStack
            alignItems={"flex-start"}
            pl={{ base: "1.5rem", md: "4rem" }}
            pr={{ base: "1.5rem", md: "0rem" }}
          >
            <Box w={{ base: "1.5rem", md: "3.5rem" }}>
              <Image src={heroicon2} alt="messages icon" />
            </Box>
            <VStack alignItems={"flex-start"}>
              <Text
                color={"white"}
                fontFamily={"poppins"}
                letterSpacing={{ base: "-0.02", md: "-0.10281rem" }}
                fontSize={{ base: "1.2rem", md: "2.75rem" }}
                fontWeight={700}
              >
                Manage product inventory
              </Text>
              <Text fontSize={"1.25rem"} lineHeight={"2.25rem"} color={"white"}>
                You can reply all your customers in one place thereby making
                your communication less stressful and faster
              </Text>
            </VStack>
          </VStack>
          <Box>
            <Image src={hero2} alt="hero one image" />
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"5rem"}
        >
          <VStack
            alignItems={"flex-start"}
            pl={{ base: "1.5rem", md: "4rem" }}
            pr={{ base: "1.5rem", md: "0rem" }}
          >
            <Box w={{ base: "1.5rem", md: "3.5rem" }}>
              <Image src={heroicon3} alt="messages icon" />
            </Box>
            <VStack alignItems={"flex-start"}>
              <Text
                color={"white"}
                fontFamily={"poppins"}
                letterSpacing={{ base: "-0.02", md: "-0.10281rem" }}
                fontSize={{ base: "1.2rem", md: "2.75rem" }}
                fontWeight={700}
              >
                Efficiently manage orders
              </Text>
              <Text fontSize={"1.25rem"} lineHeight={"2.25rem"} color={"white"}>
                You can reply all your customers in one place thereby making
                your communication less stressful and faster
              </Text>
            </VStack>
          </VStack>
          <Box>
            <Image src={hero3} alt="hero one image" />
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"5rem"}
        >
          <VStack
            alignItems={"flex-start"}
            pl={{ base: "1.5rem", md: "4rem" }}
            pr={{ base: "1.5rem", md: "0rem" }}
          >
            <Box w={{ base: "1.5rem", md: "3.5rem" }}>
              <Image src={heroicon4} alt="messages icon" />
            </Box>
            <VStack alignItems={"flex-start"}>
              <Text
                color={"white"}
                fontFamily={"poppins"}
                letterSpacing={{ base: "-0.02", md: "-0.10281rem" }}
                fontSize={{ base: "1.2rem", md: "2.75rem" }}
                fontWeight={700}
              >
                Manage messaging in one place
              </Text>
              <Text fontSize={"1.25rem"} lineHeight={"2.25rem"} color={"white"}>
                You can reply all your customers in one place thereby making
                your communication less stressful and faster
              </Text>
            </VStack>
          </VStack>
          <Box pr={"2rem"}>
            <Image src={hero4} alt="hero one image" />
          </Box>
        </Box>

        <Box
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={{ base: "flex-start", md: "center" }}
          display={"flex"}
          pt={{ base: "3rem", md: "7rem" }}
          w={"100%"}
          pb={"5rem"}
          pl={{ base: "1rem", md: "4rem" }}
          pr={{ base: "1rem", md: "3rem" }}
          gap={{ base: "2rem", md: "0rem" }}
        >
          <Text
            fontWeight={700}
            fontSize={{ base: "2rem", md: "3.25rem" }}
            color={"#F1F1F1"}
            fontFamily={"poppins"}
            lineHeight={{ base: "2.5rem", md: "4.43rem" }}
          >
            Optimize your <br />
            operations.
          </Text>
          <Text
            w={{ base: "100%", md: "40%" }}
            color={"#E1E1E1"}
            fontSize={"1.25rem"}
            lineHeight={"1.875rem"}
            fontFamily={"poppins"}
          >
            Manage and streamline operations across multiple locations,sales
            channels and employees to improve efficiency and your bottom line.
          </Text>
        </Box>

        <Box
          display={"flex"}
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          border={"1px solid #1A1A1A"}
          alignItems={{ base: "flex-start", md: "center" }}
          bg={"#121212"}
          w={"92%"}
          px={{ base: "1.2rem", md: "2rem" }}
          py={"3.25rem"}
          margin={"auto"}
          borderRadius={"1.5rem"}
          height={"max-content"}
          gap={{ base: "2rem", md: "" }}
        >
          <Text
            color={"#E1E1E1"}
            fontSize={{ base: "0.85rem", md: "1.5rem" }}
            fontWeight={400}
            fontFamily={"poppins"}
            letterSpacing={"0.25rem"}
          >
            YOUR BUSINESS GOAL
          </Text>
          <Text
            color={"#E1E1E1"}
            fontSize={{ base: "0.85rem", md: "1.5rem" }}
            fontWeight={400}
            fontFamily={"poppins"}
            letterSpacing={"0.25rem"}
          >
            HOW TO SOLVE IT WITH SNAPCART
          </Text>
        </Box>

        <Box
          alignItems={"flex-start"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          display={"flex"}
          pt={{ base: "3rem", md: "7rem" }}
          w={"100%"}
          pl={{ base: "1rem", md: "5rem" }}
          pb={{ base: "3rem", md: "5rem" }}
          pr={{ base: "1rem", md: "3rem" }}
        >
          <Text
            fontWeight={500}
            fontSize={{ base: "1.5rem", md: "2.25rem" }}
            color={"#F1F1F1"}
            fontFamily={"poppins"}
            lineHeight={"4.43rem"}
            letterSpacing={"-0.10281rem"}
          >
            1. Diversify Revenue
          </Text>
          <VStack w={{ base: "100%", md: "40%" }} gap={"3rem"}>
            <Text
              color={"#E1E1E1"}
              fontSize={"1.25rem"}
              lineHeight={"1.875rem"}
              fontFamily={"poppins"}
            >
              You can reply all your customers in one place thereby making your
              communication less stressful and faster
            </Text>
            <Text
              color={"#E1E1E1"}
              fontSize={"1.25rem"}
              lineHeight={"1.875rem"}
              fontFamily={"poppins"}
            >
              You can reply all your customers in one place thereby making your
              communication less stressful and faster
            </Text>
            <Text
              color={"#E1E1E1"}
              fontSize={"1.25rem"}
              lineHeight={"1.875rem"}
              fontFamily={"poppins"}
            >
              You can reply all your customers in one place thereby making your
              communication less stressful and faster
            </Text>
          </VStack>
        </Box>

        <Box
          alignItems={"flex-start"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          display={"flex"}
          pt={{ base: "1rem", md: "7rem" }}
          w={"100%"}
          pl={{ base: "1rem", md: "5rem" }}
          pb={{ base: "3rem", md: "5rem" }}
          pr={{ base: "1rem", md: "3rem" }}
        >
          <Text
            fontWeight={500}
            fontSize={{ base: "1.5rem", md: "2.25rem" }}
            color={"#F1F1F1"}
            fontFamily={"poppins"}
            lineHeight={"4.43rem"}
            letterSpacing={"-0.10281rem"}
          >
            1. Diversify Revenue
          </Text>
          <VStack w={{ base: "100%", md: "40%" }} gap={"3rem"}>
            <Text
              color={"#E1E1E1"}
              fontSize={"1.25rem"}
              lineHeight={"1.875rem"}
              fontFamily={"poppins"}
            >
              You can reply all your customers in one place thereby making your
              communication less stressful and faster
            </Text>
            <Text
              color={"#E1E1E1"}
              fontSize={"1.25rem"}
              lineHeight={"1.875rem"}
              fontFamily={"poppins"}
            >
              You can reply all your customers in one place thereby making your
              communication less stressful and faster
            </Text>
            <Text
              color={"#E1E1E1"}
              fontSize={"1.25rem"}
              lineHeight={"1.875rem"}
              fontFamily={"poppins"}
            >
              You can reply all your customers in one place thereby making your
              communication less stressful and faster
            </Text>
          </VStack>
        </Box>

        <Box
          alignItems={"flex-start"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          display={"flex"}
          pt={{ base: "1rem", md: "7rem" }}
          w={"100%"}
          pl={{ base: "1rem", md: "5rem" }}
          pb={{ base: "3rem", md: "5rem" }}
          pr={{ base: "1rem", md: "3rem" }}
        >
          <Text
            fontWeight={500}
            fontSize={{ base: "1.5rem", md: "2.25rem" }}
            color={"#F1F1F1"}
            fontFamily={"poppins"}
            lineHeight={"4.43rem"}
            letterSpacing={"-0.10281rem"}
          >
            1. Diversify Revenue
          </Text>
          <VStack w={{ base: "100%", md: "40%" }} gap={"3rem"}>
            <Text
              color={"#E1E1E1"}
              fontSize={"1.25rem"}
              lineHeight={"1.875rem"}
              fontFamily={"poppins"}
            >
              You can reply all your customers in one place thereby making your
              communication less stressful and faster
            </Text>
            <Text
              color={"#E1E1E1"}
              fontSize={"1.25rem"}
              lineHeight={"1.875rem"}
              fontFamily={"poppins"}
            >
              You can reply all your customers in one place thereby making your
              communication less stressful and faster
            </Text>
            <Text
              color={"#E1E1E1"}
              fontSize={"1.25rem"}
              lineHeight={"1.875rem"}
              fontFamily={"poppins"}
            >
              You can reply all your customers in one place thereby making your
              communication less stressful and faster
            </Text>
          </VStack>
        </Box>

        <VStack
          margin={"auto"}
          w={{ base: "90%", md: "max-content" }}
          mt={{ base: "10vh", md: "40vh" }}
        >
          <Text
            color={"#F1F1F1"}
            w={{ base: "100%", md: "max-content" }}
            textAlign={"center"}
            lineHeight={{ base: "2.18rem", md: "3.5rem" }}
            fontSize={{ base: "2rem", md: "3rem" }}
            fontWeight={600}
          >
            Snapcart is scaling globally <br />
            with top partners.
          </Text>

          <Text
            textAlign={"center"}
            pt={"1.25rem"}
            color={"#E1E1E1"}
            fontSize={"1.1rem"}
          >
            Snapcart enables SMBs support customers and manage orders <br />{" "}
            with an AI assistant
          </Text>
        </VStack>

        <VStack
          mt={{ base: "5rem", md: "7rem" }}
          pb={{ base: "20vh", md: "40vh" }}
          gap={"2.75rem"}
        >
          <HStack
            gap={{ base: "0rem", md: "3.81rem" }}
            w={{ base: "80%", md: "max-content" }}
            justifyContent={"space-between"}
          >
            <Box w={{ base: "3rem", md: "5rem" }}>
              <Image src={brand1} alt="" />
            </Box>
            <Box w={{ base: "3rem", md: "5rem" }}>
              <Image src={brand2} alt="" />
            </Box>
            <Box w={{ base: "3rem", md: "5rem" }}>
              <Image src={brand3} alt="" />
            </Box>
            <Box w={{ base: "3rem", md: "5rem" }}>
              <Image src={brand4} alt="" />
            </Box>
          </HStack>
          <HStack
            w={{ base: "90%", md: "max-content" }}
            justifyContent={"space-between"}
            gap={{ base: "0rem", md: "3rem" }}
          >
            <Box w={{ base: "3.75rem", md: "10rem" }}>
              <Image src={brand5} alt="" />
            </Box>
            <Box w={{ base: "3.75rem", md: "10rem" }}>
              <Image src={brand6} alt="" />
            </Box>
            <Box w={{ base: "3.75rem", md: "10rem" }}>
              <Image src={brand7} alt="" />
            </Box>
            <Box w={{ base: "3.75rem", md: "10rem" }}>
              <Image src={brand8} alt="" />
            </Box>
          </HStack>
        </VStack>

        <VStack pb={"25vh"}>
          <Text
            fontWeight={700}
            color={"#F1F1F1"}
            fontSize={{base:"2rem",md:"2.5rem"}}
            pb={{ base: "5rem", md: "8rem" }}
            textAlign={{ base: "center", md: "left" }}
            lineHeight={"2.9rem"}
            // width={}
          >
            Hear from Snapcart customers
          </Text>

          <Box
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            border={"1px solid #1A1A1A"}
            borderRadius={"2.437rem"}
            height={"max-content"}
            background={"#121212"}
            margin={"auto"}
            w={"92%"}
          >
            <Box
              justifyContent={"space-between"}
              display={"flex"}
              flexDir={"column"}
              height={"100%"}
              pl={"2rem"}
              pr={"2rem"}
              gap={"3rem"}
              width={{base:"100%",md:"50%"}}
              py={"3rem"}
            >
              <Image src={logoipsum} alt="logo ipsum" />

              <Box
                display={"flex"}
                flexDir={{base:"column", md:"row"}}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                gap={{base:"1rem",md:"0rem"}}
              >
                <Box>
                  <Text
                    color={"#F1F1F1"}
                    fontSize={{base:"2rem",md:"3rem"}}
                    fontWeight={600}
                    fontFamily={"poppins"}
                  >
                    57%
                  </Text>
                  <Text
                    color={"white"}
                    fontFamily={"poppins"}
                    fontSize={"1.25rem"}
                    fontWeight={500}
                  >
                    Revenue increase year over year
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontFamily={"poppins"}
                    color={"#F1F1F1"}
                    fontSize={{base:"2rem",md:"3rem"}}
                    fontWeight={700}
                  >
                    3,000
                  </Text>
                  <Text
                    fontFamily={"poppins"}
                    color={"white"}
                    fontSize={"1.25rem"}
                    fontWeight={500}
                  >
                    Orders per month
                  </Text>
                </Box>
              </Box>

              <Text
                fontSize={{base:"1.5rem",md:"2rem"}}
                fontWeight={600}
                lineHeight={{base:"2.4rem",md:"3.59375rem"}}
                letterSpacing={"-0.10281rem"}
                color={"#F1F1F1"}
                w={"98%"}
                fontFamily={"poppins"}
              >
                “What stood out to me the most in the order management was its
                user experience. We have literally been praying for this tool
                since we started”
              </Text>
            </Box>
            <Box w={"41rem"} display={{ base: "none", md: "block" }}>
              <Image src={review} alt="review" />
            </Box>
            <Box w={"100%"} display={{ base: "block", md: "none" }}>
              <Image style={{width:"100%"}} src={mobilereview} alt="review" />
            </Box>
          </Box>
        </VStack>

        <VStack mb={{ base: "15vh", md: "30vh" }}>
          <Text
            fontSize={"2.75rem"}
            fontFamily={"poppins"}
            color={"white"}
            fontWeight={600}
            pb={"4rem"}
          >
            FAQs
          </Text>

          <VStack
            border={"1px solid #1A1A1A"}
            alignItems={"flex-start"}
            borderRadius={"1.5rem"}
            background={"#121212"}
            w={"92%"}
            px={"2rem"}
            py={"3.25rem"}
            mb={"2rem"}
          >
            <Text
              color={"white"}
              fontWeight={700}
              fontSize={"2rem"}
            >
              Why Snapcart?
            </Text>
            <Text fontFamily={"poppins"} fontSize={"1.25rem"} color={"white"}>
              The only solution that combines a free order store, inventory
              management and messaging
            </Text>
          </VStack>

          <VStack
            border={"1px solid #1A1A1A"}
            alignItems={"flex-start"}
            borderRadius={"1.5rem"}
            background={"#121212"}
            w={"92%"}
            px={"2rem"}
            py={"3.25rem"}
            mb={"2rem"}
          >
            <Text
              color={"white"}
              fontWeight={700}
              fontSize={"2rem"}
              // fontFamily={"poppins"}
            >
              Why Snapcart?
            </Text>
            <Text fontFamily={"poppins"} fontSize={"1.25rem"} color={"white"}>
              The only solution that combines a free order store, inventory
              management and messaging
            </Text>
          </VStack>

          <VStack
            border={"1px solid #1A1A1A"}
            alignItems={"flex-start"}
            borderRadius={"1.5rem"}
            background={"#121212"}
            w={"92%"}
            px={"2rem"}
            py={"3.25rem"}
            mb={"2rem"}
          >
            <Text color={"white"} fontWeight={700} fontSize={"2rem"}>
              Why Snapcart?
            </Text>
            <Text fontFamily={"poppins"} fontSize={"1.25rem"} color={"white"}>
              The only solution that combines a free order store, inventory
              management and messaging
            </Text>
          </VStack>
        </VStack>

        <VStack alignItems={"center"}>
          <Text
            fontWeight={700}
            fontSize={"2.75rem"}
            textAlign={"center"}
            color={"white"}
            fontFamily={"poppins"}
          >
            Create your online store <br /> today
          </Text>

          <Button
            fontFamily={"poppins"}
            borderRadius={"1rem"}
            fontSize={"1rem"}
            fontWeight={500}
            height={"3.5rem"}
            width={"15rem"}
            color={"white"}
            bg={"#1D97FD"}
            mt={"1rem"}
            mb={"4rem"}
          >
            Get Started for Free
          </Button>

          <Box w={{ base: "90%", md: "50%" }}>
            <Image src={storefront} alt="" />
          </Box>
        </VStack>

        <VStack pt={"7rem"} pb={"2rem"} gap={"1.75rem"}>
          <Box display={"flex"} alignItems={"center"} gap={"1.5rem"}>
            <Box
              as={Link}
              href={"https://twitter.com/snapcarthq"}
              target="_blank"
              cursor={"pointer"}
              w={{ base: "1.5rem", md: "1.75rem" }}
            >
              <Image src={twitter} alt="twitter logo" />
            </Box>

            <Box
              cursor={"pointer"}
              as={Link}
              href={
                "https://www.instagram.com/snapcarthq?igshid=MWZjMTM2ODFkZg%3D%3D"
              }
              target="_blank"
              w={"1.75rem"}
            >
              <Image src={instagram} alt="instagram logo" />
            </Box>
          </Box>

          <Box display={"flex"} gap={"3rem"}>
            <Text
              cursor={"pointer"}
              color={"white"}
              fontFamily={"poppins"}
              fontWeight={300}
            >
              Privacy Policy
            </Text>
            <Text
              cursor={"pointer"}
              color={"white"}
              fontFamily={"poppins"}
              fontWeight={300}
            >
              Terms of Service
            </Text>
          </Box>
          <Box>
            <Text color={"white"} fontFamily={"poppins"} fontWeight={300}>
              &copy; 2023 Snapcart | All rights Reserved
            </Text>
          </Box>
        </VStack>
      </main>
    </>
  );
}
