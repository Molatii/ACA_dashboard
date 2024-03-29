import {
  Box,
  Stack,
  Text,
  useControllableState,
  Image,
} from "@chakra-ui/react";
import JSDevelopers from "./Languages/jsDeveloper";
import PHPDevelopers from "./Languages/phpDevelper";
import PythonDevelopers from "./Languages/pythonDeveloper";
import python_Icon from "../../../icons/python-icon.png";
import js_Icon from "../../../icons/js.webp";
import php_Icon from "../../../icons/php.png";

function SelectDeveloper() {
  const [value, setValue] = useControllableState({
    defaultValue: "Javascript",
  });
  return (
    <Box w="100%" textAlign="center" alignItems="center">
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        color="orange.400"
        pt={{ base: "24%", md: "8%" }}
        pb={{ base: "8%", md: "1%" }}
      >
        Documentation
      </Text>
      <Text color="orange.400">Use the language of your choice</Text>
      <Stack
        direction="row"
        pt="5%"
        pb="5%"
        justify="center"
        alignItems="center"
        textAlign="center"
        color="orange.400"
        spacing="8"
      >
        <Stack direction="column" alignItems="center">
          <Image
            cursor="pointer"
            onClick={() => setValue("Javascript")}
            boxSize="26px"
            objectFit="cover"
            src={js_Icon}
            alt="icon"
          />
          <Text cursor="pointer" onClick={() => setValue("Javascript")}>
            Javascript
          </Text>
        </Stack>
        <Stack direction="column" alignItems="center">
          <Image
            cursor="pointer"
            onClick={() => setValue("PHP")}
            boxSize="26px"
            objectFit="cover"
            src={php_Icon}
            alt="icon"
          />
          <Text cursor="pointer" onClick={() => setValue("PHP")}>
            PHP
          </Text>
        </Stack>
        <Stack direction="column" alignItems="center">
          <Image
            cursor="pointer"
            onClick={() => setValue("Python")}
            boxSize="26px"
            objectFit="cover"
            src={python_Icon}
            alt="Python-Icon"
          />
          <Text cursor="pointer" onClick={() => setValue("Python")}>
            Python
          </Text>
        </Stack>
      </Stack>
      <Box
        justifyContent="center"
        alignItems="center"
        pb={{ base: "8%", md: "1%" }}
        w="100%"
      >
        {value && value === "Javascript" && (
          <Stack alignItems="center" textAlign="center">
            <JSDevelopers />
          </Stack>
        )}
        {value && value === "PHP" && (
          <Stack alignItems="center" textAlign="center">
            <PHPDevelopers />
          </Stack>
        )}
        {value && value === "Python" && (
          <Stack alignItems="center" justifyItems="center" textAlign="center">
            <PythonDevelopers />
          </Stack>
        )}
      </Box>
    </Box>
  );
}
export default SelectDeveloper;
