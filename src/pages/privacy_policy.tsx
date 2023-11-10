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

const PrivacyPolicy = () => {
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
              className={inter.className}
              color={"#F8F8F8"}
              fontSize={"1rem"}
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
            Snapcart Privacy Policy
          </Text>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            color={"#F8F8F8"}
            mb={"4.5rem"}
            mt={{ base: "2rem", md: "3.5rem" }}
          >
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You. We use Your Personal data to provide and improve the
            Service. By using the Service, You agree to the collection and use
            of information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the Privacy Policy
            Generator.
          </Text>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={{ base: "2.5rem", md: "3rem" }}
            fontFamily={"Poppins"}
            color={"white"}
            fontWeight={600}
            mb={"2rem"}
          >
            Interpretation and Definitions
          </Heading>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            fontWeight={600}
          >
            Interpretation
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plura
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
            Definitions
          </Heading>

          <Box
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Definitions <br /> For the purposes of this Privacy Policy:
            <UnorderedList>
              <ListItem>
                Account means a unique account created for You to access our
                Service or parts of our Service.
              </ListItem>
              <ListItem>
                Affiliate means an entity that controls, is controlled by or is
                under common control with a party, where &quot;control&quot;
                means ownership of 50% or more of the shares, equity interest or
                other securities entitled to vote for election of directors or
                other managing authority.
              </ListItem>
              <ListItem>
                Application means the software program provided by the Company
                downloaded by You on any electronic device, named Snapcart
              </ListItem>
              <ListItem>
                Company (referred to as either &quot;the Company&quot;,
                &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this
                Agreement) refers to Snapcart Studios Inc.
              </ListItem>

              <ListItem>
                Cookies are small files that are placed on Your computer, mobile
                device or any other device by a website, containing the details
                of Your browsing history on that website among its many uses.
              </ListItem>

              <ListItem>Country refers to: California, United States</ListItem>

              <ListItem>
                Device means any device that can access the Service such as a
                computer, a cellphone or a digital tablet.
              </ListItem>

              <ListItem>
                Personal Data is any information that relates to an identified
                or identifiable individual.
              </ListItem>

              <ListItem>
                Service refers to the Application or the Website or both.
              </ListItem>
              <ListItem>
                Service Provider means any natural or legal person who processes
                the data on behalf of the Company. It refers to third-party
                companies or individuals employed by the Company to facilitate
                the Service, to provide the Service on behalf of the Company, to
                perform services related to the Service or to assist the Company
                in analyzing how the Service is used.
              </ListItem>
              <ListItem>
                Third-party Social Media Service refers to any website or any
                social network website through which a User can log in or create
                an account to use the Service.
              </ListItem>
              <ListItem>
                Usage Data refers to data collected automatically, either
                generated by the use of the Service or from the Service
                infrastructure itself (for example, the duration of a page
                visit).
              </ListItem>
              <ListItem>
                Website refers to Snapcart, accessible from snapcart.shop
              </ListItem>
              <ListItem>
                “You” means the individual accessing or using the Service, or
                the company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </ListItem>
            </UnorderedList>
          </Box>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={{ base: "2.5rem", md: "3rem" }}
            fontFamily={"Poppins"}
            color={"white"}
            fontWeight={600}
            mt={"3rem"}
          >
            Collecting and Using Your Personal Data
          </Heading>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            mt={"2rem"}
            fontWeight={600}
          >
            Types of Data Collected
          </Heading>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            mt={"2rem"}
            fontWeight={600}
          >
            Personal Data
          </Heading>

          <Box
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
            <UnorderedList>
              <ListItem>Email address</ListItem>
              <ListItem>First name and last name</ListItem>
              <ListItem>Phone number</ListItem>
              <ListItem>
                Address, State, Province, ZIP/Postal code, City
              </ListItem>
              <ListItem>Usage Data</ListItem>
            </UnorderedList>
          </Box>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            mt={"2rem"}
            fontWeight={600}
          >
            Usage Data
          </Heading>
          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Usage Data is collected automatically when using the Service.
            <br /> Usage Data may include information such as Your Device&apos;s
            Internet Protocol address (e.g. IP address), browser type, browser
            version, the pages of our Service that You visit, the time and date
            of Your visit, the time spent on those pages, unique device
            identifiers and other diagnostic data.
            <br /> When You access the Service by or through a mobile device, We
            may collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
            <br /> We may also collect information that Your browser sends
            whenever You visit our Service or when You access the Service by or
            through a mobile device
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
            Information from Third-Party Social Media Services
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            color={"#F8F8F8"}
            mt={"1rem"}
            w={"100%"}
          >
            The Company allows You to create an account and log in to use the
            Service through the following Third-party Social Media Services:
            <UnorderedList>
              <ListItem>Facebook</ListItem>
              <ListItem>Instagram</ListItem>
            </UnorderedList>
            If You decide to register through or otherwise grant us access to a
            Third-Party Social Media Service, We may collect Personal data that
            is already associated with Your Third-Party Social Media
            Service&apos;s account, such as Your name, Your email address, Your
            activities or Your contact list associated with that account. You
            may also have the option of sharing additional information with the
            Company through Your Third-Party Social Media Service&apos;s
            account. If You choose to provide such information and Personal
            Data, during registration or otherwise, You are giving the Company
            permission to use, share, and store it in a manner consistent with
            this Privacy Policy.
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
            Information Collected while Using the Application
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            color={"#F8F8F8"}
            mt={"1rem"}
            w={"100%"}
          >
            While using Our Application, in order to provide features of Our
            Application, We may collect, with Your prior permission:
            <UnorderedList>
              <ListItem>Information regarding your location</ListItem>
              <ListItem>
                Pictures and other information from your Device&apos;s camera
                and photo library
              </ListItem>
            </UnorderedList>
            We use this information to provide features of Our Service, to
            improve and customize Our Service. The information may be uploaded
            to the Company&apos;s servers and/or a Service Provider&apos;s
            server or it may be simply stored on Your device.
            <br /> You can enable or disable access to this information at any
            time, through Your Device settings.
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
            Tracking Technologies and Cookies
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            The Company may use Personal Data for the following purposes:
            <UnorderedList>
              <ListItem>
                To provide and maintain our Service, including to monitor the
                usage of our Service.
              </ListItem>
              <ListItem>
                To make available to You services, products, applications or
                skills provided by third parties. We share any of Your personal
                information related to the third party transaction carried out
                with Our Service.
              </ListItem>
              <ListItem>
                To manage Your Account: to manage Your registration as a user of
                the Service. The Personal Data You provide can give You access
                to different functionalities of the Service that are available
                to You as a registered user.
              </ListItem>
              <ListItem>
                For the performance of a contract: the development, compliance
                and undertaking of the purchase contract for the products, items
                or services You have purchased or of any other contract with Us
                through the Service.
              </ListItem>
              <ListItem>
                To contact You: To contact You by email, telephone calls, SMS,
                or other equivalent forms of electronic communication, such as a
                mobile application&apos;s push notifications regarding updates
                or informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
              </ListItem>
              <ListItem>
                To provide You with news, special offers and general information
                about other goods, services and events which we offer that are
                similar to those that you have already purchased or enquired
                about unless You have opted not to receive such information.
              </ListItem>
              <ListItem>
                To manage Your requests: To attend and manage Your requests to
                Us.
              </ListItem>
              <ListItem>
                For business transfers: We may use Your information to evaluate
                or conduct a merger, divestiture, restructuring, reorganization,
                dissolution, or other sale or transfer of some or all of Our
                assets, whether as a going concern or as part of bankruptcy,
                liquidation, or similar proceeding, in which Personal Data held
                by Us about our Service users is among the assets transferred.
              </ListItem>
              <ListItem>
                For other purposes: We may use Your information for other
                purposes, such as data analysis, protecting Our Company,
                identifying usage trends, determining the effectiveness of our
                promotional campaigns and to evaluate and improve our Service,
                products, services, marketing and your experience.
              </ListItem>
              We may share Your personal information in the following
              situations:
              <ListItem>
                With Service Providers: We may share Your personal information
                with Service Providers to monitor and analyze the use of our
                Service, to contact You.
              </ListItem>
              <ListItem>
                For business transfers: We may share or transfer Your personal
                information in connection with, or during negotiations of, any
                merger, sale of Company assets, financing, or acquisition of all
                or a portion of Our business to another company.
              </ListItem>
              <ListItem>
                With Affiliates: We may share Your information with Our
                affiliates, in which case we will require those affiliates to
                honor this Privacy Policy. Affiliates include Our parent company
                and any other subsidiaries, joint venture partners or other
                companies that We control or that are under common control with
                Us.
              </ListItem>
              <ListItem>
                With business partners: We may share Your information with Our
                business partners to offer You certain products, services or
                promotions.
              </ListItem>
              <ListItem>
                With other users: when You share personal information or
                otherwise interact in the public areas with other users, such
                information may be viewed by all users and may be publicly
                distributed outside. If You interact with other users or
                register through a Third-Party Social Media Service, Your
                contacts on the Third-Party Social Media Service may see Your
                name, profile, pictures and description of Your activity.
                Similarly, other users will be able to view descriptions of Your
                activity, communicate with You and view Your profile.
              </ListItem>
              <ListItem>
                With your consent: We may disclose Your personal information for
                any other purpose with Your consent
              </ListItem>
            </UnorderedList>
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
            Retention of Your Personal Data
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies. The Company will also
            retain Usage Data for internal analysis purposes. Usage Data is
            generally retained for a shorter period of time, except when this
            data is used to strengthen the security or to improve the
            functionality of Our Service, or We are legally obligated to retain
            this data for longer time periods
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
            Transfer of Your Personal Data
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Your information, including Personal Data, is processed at the
            Company&apos;s operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction. Your consent to this Privacy
            Policy followed by Your submission of such information represents
            Your agreement to that transfer. The Company will take all steps
            reasonably necessary to ensure that Your data is treated securely
            and in accordance with this Privacy Policy and no transfer of Your
            Personal Data will take place to an organization or a country unless
            there are adequate controls in place including the security of Your
            data and other personal information.
          </Text>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.75rem"}
            fontFamily={"Poppins"}
            color={"white"}
            mt={"4.5rem"}
            fontWeight={600}
          >
            Disclosure of Personal Data
          </Heading>

          <Heading
            w={"100%"}
            textAlign={"left"}
            fontSize={"2.5rem"}
            fontFamily={"Poppins"}
            color={"white"}
            mt={"2rem"}
            fontWeight={600}
          >
            Business Transaction
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
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
            Law enforcement
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
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
            Other legal requirements
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
            <UnorderedList>
              <ListItem>Comply with a legal obligation</ListItem>
              <ListItem>
                Protect and defend the rights or property of the Company
              </ListItem>
              <ListItem>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </ListItem>
              <ListItem>
                {" "}
                Protect the personal safety of Users of the Service or the
                public
              </ListItem>
              <ListItem>Protect against legal liability</ListItem>
            </UnorderedList>
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
            Security of Your Personal Data
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            The security of Your Personal Data is important to Us and We work
            hard to protect the security of Your Personal Information during
            transmission using encryption protocols and software, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security. It is also important for You
            to protect against unauthorised access to Your password and to your
            devices and applications. We recommend using a unique password for
            Snapcart that is not used for other online accounts
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
            Children&apos;s Privacy
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We will take steps to remove that information from Our
            servers. If We need to rely on consent as a legal basis for
            processing Your information and Your country requires consent from a
            parent, We may require Your parent&apos;s consent before We collect
            and use that informations
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
            Links to Other Websites
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party&apos;s site. We strongly advise You to
            review the Privacy Policy of every site You visit. <br /> We have no
            control over and assume no responsibility for the content, privacy
            policies or practices of any third party sites or services.
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
            Changes to this Privacy Policy
          </Heading>

          <Text
            className={inter.className}
            fontSize={"1.125rem"}
            lineHeight={"2.5rem"}
            w={"100%"}
            mt={"1rem"}
            color={"#F8F8F8"}
          >
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
            We will let You know by updating the &quot;Last updated&quot; date
            at the top of this Privacy Policy. You are advised to review this
            Privacy Policy periodically for any changes. Changes to this Privacy
            Policy are effective when they are posted on this page.
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
            If you have any questions about this Privacy Policy, You can contact
            us:
            <UnorderedList>
              <ListItem>By email: support@snapcart.com</ListItem>
              <ListItem>
                By visiting this page on our website for more information:
                Snapcart Help Center
              </ListItem>
            </UnorderedList>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
