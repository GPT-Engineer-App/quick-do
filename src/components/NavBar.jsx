import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2}>
          About
        </Link>
      </Flex>
    </Box>
  );
};

export default NavBar;
