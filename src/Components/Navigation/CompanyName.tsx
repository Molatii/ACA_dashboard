import { Flex, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../icons/Fire_Sms_Logo.png";

function CompanyName() {
  return (
    <Flex mt="3.5" mb="2" w="100%">
      <Link
        to="/"
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <Stack direction="row" spacing={1} mt="1">
          <Stack ml={{ base: 4, md: 4 }} mt="-1px" alignItems="center">
            <img alt="logo" src={logo} />
          </Stack>
          <Stack>
            <Text
              color="white"
              fontSize="24px"
              fontStyle="normal"
              fontFamily="sans-serif"
              lineHeight="29px"
              fontWeight="500px"
              cursor="pointer"
            >
              FireSmS
            </Text>
          </Stack>
        </Stack>
      </Link>
    </Flex>
  );
}
export default CompanyName;
