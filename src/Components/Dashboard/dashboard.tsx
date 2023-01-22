import { ReactNode } from "react";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import Sidebar from "./Sidebar/sideBar";
import TopNav from "./TopNavigation/TopNav";

function Dashboard({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="white">
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <TopNav onOpen={onOpen} />
      <Box ml={{ base: 4, md: "304px" }} mr={{ base: 4, md: "20px" }} p="1">
        {children}
      </Box>
    </Box>
  );
}

export default Dashboard;
