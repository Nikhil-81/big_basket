import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./category.css";
const c1 = [
  "vegetables",
  "Oil",
  "Masala",
  "SNACKS & BRANDED FOODS",
  "EGGS, MEAT & FISH",
  "CLEANING & HOUSEHOLD",
  "Tea",
  "Beauty & Hygiene",
  " Cleaning & Household",
  " Bakery, Cakes & Dairy",
  " Baby Care",
  "View A",
];
const c2 = [
  "Fresh Vegetables",
  "Herbs & Seasonings",
  "Fresh Fruits",
  "Organic Fruits & Vegetables",
  "Cuts & Sprouts",
  " Exotic Fruits & Veggies",
  "Flower Bouquets, Bunches",
];
const c3 = [
  "Potato, Onion & Tomato",
  "Cucumber & Capsicum",
  " Leafy Vegetables",
  "Root Vegetables",
  "Beans, Brinjals & Okra",
  " Cabbage & Cauliflower",
  "Gourd, Pumpkin, Drumstick",
  " Specialt",
];
const c4 = [
  "Popular Searches",
  " Pomegranate",
  "Sweet Corn",
  "Broccoli",
  "Fresh Pomegran",
  "Pomegranate 1 Kg",
  " Jackfruit",
];
const Category = ({ Enter, Leave }) => {
  const [cat1] = useState(c1);
  const [cat2] = useState(c2);
  const [cat3] = useState(c3);
  const [cat4] = useState(c4);
  return (
    <div>
      <Box className="category" onMouseLeave={Leave} onMouseEnter={Enter}>
        <Box className="cat-1">
          {cat1?.map((el, index) => {
            return <Box key={index}> <Link to={`/products/${el}`} > <Text key={index}>{el}</Text> </Link> <hr/></Box>;
          })}
        </Box>
        <Box className="cat-2">
          {cat2?.map((el, index) => {
            return <Box key={index}> <Text key={index}>{el}</Text> <hr/></Box>;
          })}
        </Box>
        <Box className="cat-3">
          {cat3?.map((el, index) => {
            return   <Text key={index}>{el}</Text> ;
          })}
        </Box>
        <Box className="cat-4">
          {cat4?.map((el, index) => {
            return <Text key={index}>{el}</Text>;
          })}
        </Box>
      </Box>
    </div>
  );
};
export default Category;
