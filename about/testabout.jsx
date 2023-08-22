import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text, Image, HStack } from "@chakra-ui/react";
//import { Instagram, WhatsApp } from "@chakra-ui/icons";
import vision from "../images/vision.png";
import goal from "../images/goal.png";
import mission from "../images/mission.png";

function About() {
  return (
    <Box className="about-container" bg="url('https://static.vecteezy.com/system/resources/previews/007/535/047/original/cool-plain-blue-background-free-vector.jpg')"
    bgSize="cover"
    bgPos="center"
    display="flex"
    flexDirection="column"
    minHeight="100vh">
      <Flex as="nav" justifyContent="space-evenly" alignItems="center" height="50px" border="none" p="20px" textAlign="center" borderRadius="5px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" color="black">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About page</Link>
        <Link to={"/contact"}>Contact us</Link>
        <Link to={"/signup"}>Login</Link>
      </Flex>
      <Heading textAlign="center" mt="20px">About us</Heading>
      <Flex className="about-content" flex="1" justifyContent="center" alignItems="center" flexWrap="wrap" p="40px">
        <Box className="about-card" bgColor="#ffffff" border="1px solid #dcdcdc" borderRadius="10px" p="20px" m="20px" textAlign="center" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" flex="1" maxW="300px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Text fontSize="lg" fontWeight="bold" mb="10px">Our Vision</Text>
          <Image src={vision} alt="Vision" maxW="100px" h="auto" mb="15px" />
          <Text fontSize="md">
            A clear vision statement articulates the long-term goals and core
            values of your company. It guides your business strategy and shapes
            your online presence to align with your vision.
          </Text>
        </Box>
        <Box className="about-card" bgColor="#ffffff" border="1px solid #dcdcdc" borderRadius="10px" p="20px" m="20px" textAlign="center" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" flex="1" maxW="300px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Text fontSize="lg" fontWeight="bold" mb="10px">Our Goal</Text>
          <Image src={goal} alt="Goal" maxW="100px" h="auto" mb="15px" />
          <Text fontSize="md">
            Our goal is to provide a seamless online shopping experience where
            customers can buy and sell a wide range of products and services,
            all in one platform.
          </Text>
        </Box>
        <Box className="about-card" bgColor="#ffffff" border="1px solid #dcdcdc" borderRadius="10px" p="20px" m="20px" textAlign="center" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" flex="1" maxW="300px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Text fontSize="lg" fontWeight="bold" mb="10px">Our Mission</Text>
          <Image src={mission} alt="Mission" maxW="100px" h="auto" mb="15px" />
          <Text fontSize="md">
            Our mission is to deliver convenience and quality to our customers
            through an accessible and user-friendly e-commerce platform.
          </Text>
        </Box>
      </Flex>
      <Flex as="footer" textAlign="center" p="20px 0" border="none" borderRadius="5px" boxShadow="0 0 10px rgba(0, 0, 0, 0.1)" transition="box-shadow 0.3s ease">
        <HStack spacing="20px" mt="20px">
          <a href="#" className="social-icon" id="facebook"> 
          </a>
          <a href="#" className="social-icon" id="whatsapp">
          </a>
          <a href="#" className="social-icon" id="twitter">
          </a>
        </HStack>
        <Text flex="1" m="0">© 2023 Bit Lords. All rights reserved.</Text>
      </Flex>
    </Box>
  );
}

export default About;
