import { Flex, FlexProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface NavItemProps extends FlexProps {
  ItemName: string;
  link: string;
  pic: string;
}
export default function NavItem(props: NavItemProps) {
  const { ItemName, pic, link } = props;
  return (
    <Link
      to={link}
      onClick={() => {
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <Flex
        fontFamily="sans-serif"
        fontStyle="normal"
        fontSize="15px"
        fontWeight="400px"
        lineHeight="24px"
        align="center"
        p="4"
        mb="15px"
        gap="7px"
        ml="8"
        w="231px"
        h="54px"
        borderRadius="8px"
        color="white"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#FF6406",
          color: "white",
        }}
      >
        <img
          style={{ marginRight: "22px" }}
          width="20px"
          height="20px"
          src={pic}
          alt="btn_icon"
        />
        {ItemName}
      </Flex>
    </Link>
  );
}
