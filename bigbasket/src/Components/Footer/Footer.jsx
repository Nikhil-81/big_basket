import { Box, Image, Text } from "@chakra-ui/react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import painter from "../../assets/painter.png";
import twitter from "../../assets/twitter.png";
import Apple from "../../assets/Apple-App-store-icon.png";
import A_Express from "../../assets/american-express.png";
import cod from "../../assets/cod.png"
import mastercard from "../../assets/mastercard.png";
import rupay from "../../assets/rupay.png";
import visa from "../../assets/visa.png";
import paytm from "../../assets/paytm.png"
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <Box>
        <Box className="about-flex">
          <Box className="bigbasket">
            <Text color="#84c225">bigbasket</Text>
            <Text className="hover">About US</Text>
            <Text className="hover">In News</Text>
            <Text className="hover">Green bigbasket</Text>
            <Text className="hover">Privacy Pllicy</Text>
            <Text className="hover">Affilaiate</Text>
            <Text className="hover">Terms and Conditions</Text>
            <Text className="hover">Careers At bigbasket</Text>
            <Text className="hover">bb Instant</Text>
            <Text className="hover">bb Daily</Text>
            <Text className="hover">bb Blog</Text>
            <Text className="hover">bbnow</Text>
          </Box>

          <Box className="help">
            <Text color="#84c225">Help</Text>
            <Text className="hover">FAQs</Text>
            <Text className="hover">Contact Us</Text>
            <Text className="hover">bb Wallet FAQs</Text>
            <Text className="hover">bb Wallet T&Cs</Text>
            <Text className="hover">Vendor Connect</Text>
          </Box>

          <Box className="download_app">
            <Text color="#84c225" mb="10px">
              Downloade Our App
            </Text>
            <Box className="download_child">
              <Image
                w="100%"
                h="100%"
                mb="10px"
                src="https://www.bbassets.com/static/v2616/custPage/build/content/img/Google-App-store-icon.png"
                alt="google play store"
              />
              <Image w="100%" h="100%" src={Apple} alt="apple app store" />
            </Box>
          </Box>

          <Box className="social-media">
            <Text color="#84c225" mb="10px">
              Get Social With Us
            </Text>
            <Box className="social_child">
              <Image width={10} height={10} src={facebook} alt="facebook" />
              <Image width={10} height={10} src={painter} alt="painter" />
              <Image width={10} height={10} src={twitter} alt="twitter" />
              <Image width={10} height={10} src={instagram} alt="instagram" />
            </Box>
          </Box>
        </Box>

        <Box className="about-flex-2">
          <Box className="P-category">
            <Text fontSize={16} color="#84c225">POPULAR CATEGORIES:</Text>
            <Text>
              Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes,
              Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy
              Vegetables, Frozen Veg Food, Diapers & Wipes,
            </Text>
          </Box>

          <Box className="P-brand">
            <Text fontSize={16} color="#84c225">POPULAR BRANDS:</Text>
            <Text>
              Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez,
              Yera, Yakult, Britannia, Wow Momo, Fortune , Haldirams , Ferrero,
              Lays, Patanjali, McCain, kwality walls, Cadbury Dairy Milk,
              Pedigree,
            </Text>
          </Box>

          <Box className="P-serve">
            <Text fontSize={16} color="#84c225">CITIES WE SERVE:</Text>
            <Text>
              Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore,
              Madurai, Coimbatore, Vijayawada-Guntur, Kolkata,
              Ahmedabad-Gandhinagar, Nashik Business, Lucknow-Kanpur, Gurgaon,
              Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh
              Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District,
              Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere,
              Trichy, Amravati, Raipur, Rajkot, Gwalior, Bareilly, Allahabad,
              Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural,
              Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural,
              Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram
              Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural,
              Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural,
              Surat Rural, Vadodara Rural, Jaipur Rural, Ranchi, Nashik, Agra,
              Kozhikode,{" "}
            </Text>
          </Box>
          <Box className="P-options">
            <Text fontSize={16} color="#84c225">PAYMENT OPTIONS:</Text>
            <Box className="options">
              <Image w={10} h={10} src={cod} alt="icons"/>
              <Image w={10} h={10} src={visa} alt="icons"/>
              <Image w={10} h={10} src={rupay} alt="icons"/>
              <Image w={10} h={10} src={paytm} alt="icons"/>
              <Image w={10} h={10} src={mastercard} alt="icons"/>
              <Image w={10} h={10} src={A_Express} alt="icons"/>
            </Box>
          </Box>
        </Box>

        <Box w="100%" bg="#eaeaea" h="30px" >
            <Text w="82%" margin="auto"  textAlign="center" alignItems="center" fontSize={13} color="#777474" >Copyright © 2021-2023 Supermarket Grocery Supplies Pvt Ltd</Text>
        </Box>
      </Box>
    </div>
  );
};
export default Footer;
