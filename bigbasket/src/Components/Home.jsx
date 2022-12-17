import { Box, Image, Text } from "@chakra-ui/react";
import "./Home.css";
import Crowser from "./myHome/crowser";
import Slider from "./myHome/slider";
import off1 from "../assets/off1.png";
import off2 from "../assets/off2.png";
import off3 from "../assets/off3.png";
import off4 from "../assets/off4.png";
import off5 from "../assets/off5.png";
import off6 from "../assets/off6.png";
import bank_off1 from "../assets/bank-off1.png";
import bank_off2 from "../assets/bank-off2.png";
import bank_off3 from "../assets/bank-off3.png";
import bank_off4 from "../assets/bank-off4.png";
import top_off1 from "../assets/top-off1.png";
import top_off2 from "../assets/top-off2.png";
import top_off3 from "../assets/top-off3.png";
import top_off4 from "../assets/top-off4.png";
import Fnv1 from "../assets/FnV1.png";
import Fnv2 from "../assets/FnV2.png";
import Fnv3 from "../assets/FnV3.png";
import Fnv4 from "../assets/FnV4.png";
import Fnv5 from "../assets/FnV5.png";
import Fnv6 from "../assets/FnV6.png";
import daly_Staple1 from "../assets/daly_Staple1.png";
import daly_Staple2 from "../assets/daly_Staple2.png";
import daly_Staple3 from "../assets/daly_Staple3.png";
import daly_Staple4 from "../assets/daly_Staple4.png";
import daly_Staple5 from "../assets/daly_Staple5.png";
import daly_Staple6 from "../assets/daly_Staple6.png";
import bevrage1 from "../assets/bevrage1.png";
import bevrage2 from "../assets/bevrage2.png";
import bevrage3 from "../assets/bevrage3.png";
import bevrage4 from "../assets/bevrage4.png";
import bevrage5 from "../assets/bevrage5.png";
import snacks1 from "../assets/snacks1.png";
import snacks2 from "../assets/snacks2.png";
import snacks3 from "../assets/snacks3.png";
import snacks4 from "../assets/snacks4.png";
import snacks5 from "../assets/snacks5.png";
import snacks6 from "../assets/snacks6.png";
import cleaningH1 from "../assets/cleaningH1.png";
import cleaningH2 from "../assets/cleaningH2.png";
import cleaningH3 from "../assets/cleaningH3.png";
import cleaningH4 from "../assets/cleaningH4.png";
import Beauty1 from "../assets/Beauty1.png";
import Beauty2 from "../assets/Beauty2.png";
import Beauty3 from "../assets/Beauty3.png";
import Beauty4 from "../assets/Beauty4.png";
import Beauty5 from "../assets/Beauty5.png";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
const off = [off1, off2, off3, off4, off5, off6];
const bank_off = [bank_off1, bank_off2, bank_off3, bank_off4];
const top_off = [top_off1, top_off2, top_off3, top_off4];
const FandV = [Fnv1, Fnv2, Fnv3, Fnv4, Fnv5, Fnv6];
const dalyStaple = [
  daly_Staple1,
  daly_Staple2,
  daly_Staple3,
  daly_Staple4,
  daly_Staple5,
  daly_Staple6,
];
const Beverages = [bevrage1, bevrage2, bevrage3, bevrage4, bevrage5];
const Snacks = [snacks1, snacks2, snacks3, snacks4, snacks5, snacks6];
const CleaningH = [cleaningH1, cleaningH2, cleaningH3, cleaningH4];
const Beauty = [Beauty1, Beauty2, Beauty3, Beauty4, Beauty5];
const Brand = [brand1, brand2, brand3, brand4, brand5, brand6];
const Home = () => {
  return (
    <Box className="home">
      {/* -----------------------Crowser---------------------------- */}
      <Crowser />
      {/* -----------------------Crowser End---------------------------- */}

      {/* -----------------------Offers----------------------------- */}
      <Box className="newOff">
        {off?.map((el, index) => {
          return <Image key={index} src={el} alt="offes on products" />;
        })}
        <Image />
      </Box>
      {/* -----------------------Offers End---------------------------- */}

      {/* -----------------------Bank Offers---------------------------- */}

      <Text
        textAlign={"center"}
        fontSize="22px"
        mt="30px"
        mb="20px"
        fontWeight={600}
      >
        Bank Offers
      </Text>
      <Box className="bank-offers">
        {bank_off?.map((el, index) => {
          return <Image key={index} src={el} alt="offes on products" />;
        })}
      </Box>
      {/* -----------------------Bank End---------------------------- */}

      {/* -----------------------Top Offers---------------------------- */}

      <Text
        textAlign={"center"}
        fontSize="22px"
        mt="30px"
        mb="20px"
        fontWeight={600}
      >
        Top Offers
      </Text>
      <Box className="bank-offers">
        {top_off?.map((el, index) => {
          return <Image key={index} src={el} alt="offes on products" />;
        })}
      </Box>
      {/* -----------------------Top Offers End---------------------------- */}

      {/* -----------------------Vegitaibles---------------------------- */}
      <Text
        textAlign={"center"}
        fontSize="22px"
        mt="30px"
        mb="20px"
        fontWeight={600}
      >
        Fruits and Vegetables
      </Text>
      <Box className="FnV">
        {FandV?.map((el, index) => {
          return <Image key={index} src={el} alt=" products" />;
        })}
      </Box>

      {/* -----------------------vegitable End---------------------------- */}

      {/* -----------------------daily Staple---------------------------- */}

      <Text
        textAlign={"center"}
        fontSize="22px"
        mt="30px"
        mb="20px"
        fontWeight={600}
      >
        Your Daily Staples
      </Text>
      <Box className="FnV">
        {dalyStaple?.map((el, index) => {
          return <Image key={index} src={el} alt="products" />;
        })}
      </Box>

      {/* -----------------------Daily staple End---------------------------- */}

      {/* -----------------------Bevrage End---------------------------- */}

      <Text
        textAlign={"center"}
        fontSize="22px"
        mt="30px"
        mb="20px"
        fontWeight={600}
      >
        Beverages
      </Text>
      <Box className="Bevrage">
        {Beverages?.map((el, index) => {
          console.log(el);
          return (
            <Image
              key={index}
              src={el}
              className={"bev" + (index + 1)}
              alt="products"
            />
          );
        })}
      </Box>
      {/* -----------------------Bevrage End---------------------------- */}

      {/* ----------------------Snake Store------------------------------- */}
      <Text
        textAlign={"center"}
        fontSize="22px"
        mt="30px"
        mb="20px"
        fontWeight={600}
      >
        Snacks Store
      </Text>
      <Box className="FnV">
        {Snacks?.map((el, index) => {
          return <Image key={index} src={el} alt=" products" />;
        })}
      </Box>

      {/* -----------------------Snake Store End---------------------------- */}

      {/* -----------------------Cleaning & Household---------------------------- */}
      <Text
        textAlign={"center"}
        fontSize="22px"
        mt="30px"
        mb="20px"
        fontWeight={600}
      >
        Cleaning & Household
      </Text>
      <Box className="bank-offers">
        {CleaningH?.map((el, index) => {
          return <Image key={index} src={el} alt="cleaning households" />;
        })}
      </Box>

      {/* -----------------------Cleaning & households End---------------------------- */}

      {/* -----------------------Beauty and Hygiene---------------------------- */}
      <Text
        textAlign={"center"}
        fontSize="22px"
        mt="30px"
        mb="20px"
        fontWeight={600}
      >
        Beauty and Hygiene
      </Text>
      <Box className="Bevrage">
        {Beauty?.map((el, index) => {
          console.log(el);
          return (
            <Image
              key={index}
              src={el}
              className={"bev" + (index + 1)}
              alt="products"
            />
          );
        })}
      </Box>
      {/* -----------------------Beauty and Hygiene End---------------------------- */}

      {/* -----------------------Slider----------------------------- */}

      <Box width="83%" margin="auto" mt="30px" mb="25px">
        {" "}
        <Slider />{" "}
      </Box>

      {/* -----------------------Slider End---------------------------- */}

      {/* -----------------------Brand Store---------------------------- */}
      <Text
        textAlign="center"
        fontSize="22px"
        mt="30px"
        mb="10px"
        fontWeight={600}
      >
        Brand Store
      </Text>
      <hr style={{ margin: "auto", width: "83%" }} />
      <br />
      <Box className="FnV">
        {Brand?.map((el, index) => {
          return <Image key={index} src={el} alt=" products" />;
        })}
      </Box>

      {/* -----------------------Brande Store End---------------------------- */}

      <Box mb="120px"></Box>
    </Box>
  );
};
export default Home;
