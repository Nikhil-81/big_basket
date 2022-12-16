import {ChevronDownIcon } from "@chakra-ui/icons";

import {CiLocationOn} from "react-icons/ci"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  Input,
  Select,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const Location = () => {
  const [pin, setPin] = useState(440016);
  const [city, setCity] = useState("Nagpur");

  return (
    <Box>
    <Popover placement="top-start" w="100%">
      <PopoverTrigger>
        <Box display="flex" textAline="center">
        <Text cursor="pointer" display="flex" textAline="center" >
      <CiLocationOn fontSize={20}/>
         {pin},{city} 
        </Text>
        <ChevronDownIcon fontSize="22px"/>
        </Box>
        
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold" fontSize="14px">
          Select your city to start shopping
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Select variant='outline' placeholder="Select city"  onClick={(e)=>setCity(e.target.value)}>
            <option value="Nagpur">Nagpur</option>
            <option value="Banglore">Banglore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Indore">Indore</option>
            <option value="Hydrabad">Hydrabad</option>
            <option value="Pune">Pune</option>
            <option value="Lature">Lature</option>
          </Select>
          <br />
          <Input type="text" value={pin} maxLength={6} onChange={(e)=>setPin(e.target.value)}/>
        </PopoverBody>
      </PopoverContent>
    </Popover>
    </Box>
  );
};
export default Location;
