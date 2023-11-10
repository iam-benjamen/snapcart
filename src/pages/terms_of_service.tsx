import {
  Box,
  Text,
  Heading,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import twitter from "../../public/bx_bxl-twitter.svg";
import instagram from "../../public/bx_bxl-instagram-alt.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const TermOfService = () => {
  return (
    <Box style={{ width: "100vw", minHeight: "100vh", background: "#131313" }}>
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
              target="_blank"
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

        <Box
          mt={{ base: "2.5rem", md: "5rem" }}
          px={{ base: "2rem", md: "3.5rem" }}
          alignItems={"center"}
          display={"flex"}
          flexDir={"column"}
          mb={"5rem"}
        >
          <Text
            letterSpacing={"0.02375rem"}
            borderRadius={"0.8125rem"}
            fontFamily={"Poppins"}
            background={"#1f1f1f"}
            fontSize={"0.875rem"}
            color={"white"}
            fontWeight={500}
            py={".6rem"}
            px={"2rem"}
          >
            Updated Oct 10,2023
          </Text>

          <Text
            mt={".3rem"}
            letterSpacing={"-0.10281rem"}
            fontFamily={"Poppins"}
            fontSize={{ base: "2rem", md: "4.375rem" }}
            fontWeight={700}
            background={
              "linear-gradient(119deg, #75FFEE 0%, #A771FF 31.25%, #FC5CFF 57.81%, rgba(255, 71, 71, 0.60) 100%)"
            }
            backgroundClip={"text"}
            textAlign={"center"}
          >
            Terms of Service
          </Text>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            color={"#F8F8F8"}
            mb={"4.5rem"}
            mt={{ base: "2rem", md: "3.5rem" }}
          >
            Welcome to Snapcart! These terms and conditions outline the rules
            and regulations for the use of the Snapcart app and website.
            <br /> By accessing this app and website, we assume you accept these
            terms and conditions. Do not continue to use the Snapcart app and
            website if you do not agree to take all of the terms and conditions
            stated on this page. <br /> Snapcart reserves the right to make
            changes to these terms and conditions at any time without prior
            notice. Your continued use of the app and website will signify your
            acceptance of any changes made to these terms
          </Text>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            fontWeight={600}
          >
            License to Use
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Snapcart grants you a non-exclusive, non-transferable, revocable
            license to use the app and website for personal, non-commercial
            purposes only
          </Text>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            mt={"4rem"}
            fontWeight={600}
          >
            User Conduct
          </Heading>

          <Box
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            You agree to use the app and website only for lawful purposes and in
            a way that does not infringe the rights of, restrict or inhibit
            anyone else&apos;s use and enjoyment of the app and website. <br />{" "}
            You may not use the app and website:
            <UnorderedList>
              <ListItem>
                In any way that breaches any applicable local, national or
                international law or regulation.
              </ListItem>
              <ListItem>
                In any way that is unlawful or fraudulent, or has any unlawful
                or fraudulent purpose or effect.
              </ListItem>
              <ListItem>
                To send, knowingly receive, upload, download, use or re-use any
                material which does not comply with our content standards.
              </ListItem>
              <ListItem>
                To transmit, or procure the sending of, any unsolicited or
                unauthorized advertising or promotional material or any other
                form of similar solicitation (spam).
              </ListItem>
            </UnorderedList>
          </Box>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            mt={"4.5rem"}
            fontWeight={600}
          >
            Termination
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Snapcart may terminate or suspend access to the app and website
            immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach the terms.
          </Text>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            fontWeight={600}
            mt={"4.5rem"}
          >
            Disclaimer
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Snapcart does not guarantee, represent or warrant that your use of
            the app and website will be uninterrupted, timely, secure or
            error-free
          </Text>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            fontWeight={600}
            mt={"4.5rem"}
          >
            Governing Law
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Snapcart does not guarantee, represent or warrant that your use of
            the app and website will be uninterrupted, timely, secure or
            error-free
          </Text>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            mt={"4.5rem"}
            fontWeight={600}
          >
            Contact Us
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            If you have any questions about these terms and conditions, please
            contact us at{" "}
            <Link href={"mailto:support@snapcart.store"} target="_blank">
              support@snapcart.store
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TermOfService;
