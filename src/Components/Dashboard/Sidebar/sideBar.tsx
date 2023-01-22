import {
  Box,
  CloseButton,
  Stack,
  Flex,
  Text,
  BoxProps,
} from "@chakra-ui/react";
import NavItem from "./sideBarNavItem";
import logo from "../../../icons/Fire_Sms_Logo.png";
import sendSMS from "../../../icons/sendSMS.png";
import transactions_icon from "../../../icons/transactions.png";
import account_icon from "../../../icons/account_icon.png";
import apiKey_icon from "../../../icons/api_key.png";
import profile_icon from "../../../icons/profile.png";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export default function SidebarContent({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      transition="3s ease"
      bg="#1A202C"
      border="1px solid"
      borderColor="rgba(26,32,44,0.2)"
      mt="0px"
      ml="-1px"
      w={{ base: "full", md: "285px" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        height="65px"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Stack spacing={1} direction="row">
          <img src={logo} style={{ marginTop: "-1px" }} alt="fireSMS-Logo" />
          <Text
            color="white"
            fontSize="24px"
            fontStyle="normal"
            fontFamily="sans-serif"
            lineHeight="29px"
            fontWeight="500px"
          >
            FireSmS
          </Text>
        </Stack>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex
        fontFamily="sans-serif"
        fontStyle="normal"
        fontSize="15px"
        fontWeight="400px"
        lineHeight="24px"
        align="center"
        p="4"
        cursor="pointer"
        ml="8"
        gap="7px"
        color="white"
        bg="#FF6406"
        borderRadius="18px"
        w="231px"
        h="54px"
        mt="81px"
        mb="81px"
        _hover={{
          bg: "#FF6406",
          color: "white",
        }}
      >
        <img
          width="16px"
          height="16px"
          alt="sendSMSIcon"
          src={sendSMS}
          style={{ marginRight: "22px" }}
        />
        <Text
          fontSize="15px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="24px"
          fontFamily="sans-serif"
        >
          Send SMS
        </Text>
      </Flex>
      <NavItem pic={account_icon} ItemName="Account" link="" />
      <NavItem pic={transactions_icon} ItemName="Transactions" link="" />
      <NavItem pic={apiKey_icon} ItemName="API Keys" link="" />
      <NavItem pic={profile_icon} ItemName="Profile" link="" />
    </Box>
  );
}
