import {
  Flex,
  HStack,
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";

type FormValues = {
  search: string;
};

function SearchBar() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSearch = handleSubmit(async (search, e) => {
    e?.preventDefault();
  });
  return (
    <Flex
      justifyContent="flex-start"
      display={{ base: "none", md: "contents" }}
    >
      <form onSubmit={onSearch}>
        <HStack spacing={4} ml="14%">
          <InputGroup>
            <InputLeftElement pointerEvents="none" mr="2">
              <Icon as={IoIosSearch} color="#1A202C" w="15.88px" h="15.88px" />
            </InputLeftElement>
            <Input
              type="search"
              bg="white"
              shadow="3px"
              borderWidth="1px"
              borderColor="gray.300"
              w="380px"
              height="36px"
              borderRadius="4px"
              h="20px"
              color="#1A202C"
              id="search"
              placeholder="Search"
              {...register("search")}
            />
          </InputGroup>
        </HStack>
      </form>
    </Flex>
  );
}
export default SearchBar;
