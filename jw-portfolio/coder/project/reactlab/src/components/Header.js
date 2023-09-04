import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: navid.tehseen@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ntehseen",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Show/Hide header animation accoriding to scroll direction
  const headerRef = useState(null);

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    // Handle Scroll events
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const currentHeaderElement = headerRef.current;

      if (!currentHeaderElement) return;

      if (previousScrollPosition > currentScrollPosition)
        currentScrollPosition.style.transform = "translateY(0)";
      else currentHeaderElement.style.transform = "translateY(-200px)";

      previousScrollPosition = currentScrollPosition;

      // Add  scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Remove scroll event listener

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#192A51"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={10}>
              {socials.map(({ icon, url }) => (
                <a key={url} icon={icon} target="_blank" rel="null">
                  <FontAwesomeIcon key={url} icon={icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contact-me" onClick={handleClick("contactme")}>
                Contact
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
