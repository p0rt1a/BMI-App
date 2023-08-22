import { Container, Flex, Text, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Flex
      py={10}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"blackAlpha.100"}
      direction={"column"}
      gap={3}
    >
      <HStack>
        <Text fontSize={"md"}>Developed by </Text>
        <Text color={"blue.600"} fontSize={"lg"}>
          Alperen Polat
        </Text>
      </HStack>
      <HStack spacing={5}>
        <Link href="https://github.com/p0rt1a" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alperen-polat-178444204/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            style={{ color: "#2e7bff" }}
          />
        </Link>
      </HStack>
    </Flex>
  );
}

export default Footer;
