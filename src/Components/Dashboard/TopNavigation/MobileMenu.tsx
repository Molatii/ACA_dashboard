import { Flex, Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MyMenuItem from "../../Navigation/MyMenuItem";

function MobileNav() {
  // props data for Nav buttons
  const name = "Send SmS";
  const name2 = "Account";
  const name3 = "Transactions";
  const name4 = "API Keys";
  const name5 = "Profile";

  return (
    <Flex display={{ base: "contents", md: "none" }}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
          display={["flex", "flex", "none", "none"]}
          mr="1"
        />
        <MenuList bg="gray.800" color="white" mt="1.5%">
          <MyMenuItem name={name} link="" />
          <MyMenuItem name={name2} link="" />
          <MyMenuItem name={name3} link="" />
          <MyMenuItem name={name4} link="" />
          <MyMenuItem name={name5} link="" />
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MobileNav;
