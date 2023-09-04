import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm John Wick 🎭";
const bio1 = "A FrontEnd Developer";
const bio2 = "Specialised in React ";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#002626"
    color="#F3F8F2"
  >
    {/* UI for the landing section */}

    <VStack spacing={14}>
      <VStack spacing={6}>
        <Avatar
          src="https://www.log.com.tr/wp-content/uploads/2019/09/johnwick3-4kultrahd-cover-frontpage.jpg"
          size="2xl"
          name="John Wick"
        />
        <Heading as="h2" size="lg" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h2" size="3xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h3" size="2xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
