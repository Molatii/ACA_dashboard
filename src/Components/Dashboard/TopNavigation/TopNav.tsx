import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  FlexProps,
  Menu,
  Stack,
  Text,
  Icon,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronDown, FiSettings, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import userLogo from "../../../icons/user_icon.jpg";
import logo from "../../../icons/Fire_Sms_Logo.png";
import MobileNav from "./MobileMenu";
import SearchBar from "./searchBar";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
export default function TopNav({ onOpen, ...rest }: MobileProps) {
  const userImage = "";
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="65px"
      alignItems="center"
      bg={{ base: "#1A202C", md: "white" }}
      borderBottomWidth="1px"
      borderBottomColor="gray.300"
      justifyContent={{ base: "space-between", md: "" }}
      {...rest}
    >
      <Flex display={{ base: "contents", md: "none" }}>
        <Stack spacing={1} direction="row">
          <img src={logo} alt="fireSMS-Logo" />
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
      </Flex>
      <MobileNav />

      <SearchBar />
      <HStack
        justifyContent="flex-end"
        display={{ base: "none", md: "contents" }}
        mr="5"
        spacing={{ base: "0", md: "6" }}
      >
        <Flex alignItems="center" mr={{ base: 0, md: "5px" }}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                {userImage === "" ? (
                  <img
                    width="36px"
                    height="36px"
                    alt="User_Image"
                    src={userLogo}
                    style={{ borderRadius: "4px" }}
                  />
                ) : (
                  <img
                    width="36px"
                    height="36px"
                    alt="User_Image"
                    src={userImage}
                    style={{ borderRadius: "4px" }}
                  />
                )}
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg="#1A202C"
              color="white"
              borderColor={useColorModeValue("gray.200", "gray.700")}
              _hover={{
                bg: "#1A202C",
                color: "white",
              }}
            >
              <MenuItem
                _hover={{
                  bg: "#1A202C",
                  color: "white",
                }}
              >
                <Icon
                  as={CgProfile}
                  mr="8px"
                  width="23.83px"
                  height="23.83px"
                />
                <Text
                  fontSize="15px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  fontFamily="sans-serif"
                >
                  My Profile
                </Text>
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: "#1A202C",
                  color: "white",
                }}
              >
                <Icon
                  as={FiSettings}
                  mr="8px"
                  width="23.83px"
                  height="23.83px"
                />
                <Text
                  fontSize="15px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  fontFamily="sans-serif"
                >
                  Settings
                </Text>
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: "#1A202C",
                  color: "white",
                }}
              >
                <Icon as={FiLogOut} mr="8px" width="23.83px" height="23.83px" />
                <Text
                  fontSize="15px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  fontFamily="sans-serif"
                >
                  Logout
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}
