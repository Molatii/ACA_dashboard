import { Box, Text } from "@chakra-ui/react";
import Dashboard from "../../dashboard";
import Cards from "../../Cards/cards";
import AllChart from "../../Charts/allCharts";

function Account() {
  return (
    <Box justifyContent="center" w="100%">
      <Dashboard>
        <Box w="100%">
          <Text
            fontStyle="normal"
            color="#000000"
            fontWeight="400"
            fontSize="30px"
            line-hieght="20px"
            fontFamily="sans-serif"
            mt="44px"
          >
            Welcome Back User
          </Text>
          <Text
            fontStyle="normal"
            color="#000000"
            fontWeight="600"
            fontSize="16.0px"
            line-hieght="20px"
            fontFamily="sans-serif"
            mt="px"
          >
            Here`s your SMS overview
          </Text>
          <Cards />
          <AllChart />
        </Box>
      </Dashboard>
    </Box>
  );
}
export default Account;
