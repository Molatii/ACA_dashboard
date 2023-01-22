import { Box, Stack } from "@chakra-ui/react";
import CardFormat from "./cardFormat";

function Cards() {
  return (
    <Box id="cards" alignItems="center" mt="28px" mb="29px">
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
      >
        <CardFormat title="Balance" amount="200" />
        <CardFormat title="Failed Messages" amount="200" />
        <CardFormat title="Pending Messages" amount="200" />
        <CardFormat title="Total Sent" amount="200" />
      </Stack>
    </Box>
  );
}
export default Cards;
