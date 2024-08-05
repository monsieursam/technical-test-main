import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  VStack,
  Badge,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const App: React.FC = () => {
  const [cart, setCart] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bikes = [
    {
      name: "The Speedster",
      description:
        "Zoom through the streets with your bestie! No speed limits on this one!",
      image: "/public/tandem_speedster.webp",
    },
    {
      name: "Mountain Master",
      description:
        "Conquer any terrain with your partner in crime. Rocks and hills? No problem!",
      image: "/public/tandem_mountain.webp",
    },
    {
      name: "Beach Cruiser",
      description:
        "Enjoy a relaxing ride along the beach. Feel the breeze in your hair!",
      image: "/public/tandem_beach.webp",
    },
    {
      name: "City Slicker",
      description:
        "Navigate through city traffic with ease and style. Urban adventures await!",
      image: "/public/tandem_city.webp",
    },
  ];

  const addToCart = (bikeName: string) => {
    setCart([...cart, bikeName]);
  };

  const removeFromCart = (bikeName: string) => {
    const index = cart.findIndex((item) => item === bikeName);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const handlePayment = () => {
    console.log("Payment confirmed");
    onClose();
    setCart([]);
  };

  return (
    <ChakraProvider>
      <Box
        bgGradient="linear(to-r, teal.500, green.500)"
        minH="100vh"
        p={4}
        color="white"
        fontFamily="'Raleway', sans-serif"
      >
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Image
              src="public/logo.webp"
              alt="Never Alone Logo"
              boxSize="80px"
            />
            <Stack spacing={1}>
              <Heading>Never Alone</Heading>
              <Text fontSize="sm">The ultimate Tandem shop</Text>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={4} alignItems="center">
            <Button variant="outline" colorScheme="whiteAlpha">
              Login
            </Button>
            <Button variant="solid" colorScheme="teal">
              Sign Up
            </Button>
            <Flex alignItems="center">
              <Text>Cart: </Text>
              <Badge ml={2} colorScheme="pink" borderRadius="full" px={2}>
                {cart.length} items
              </Badge>
              {cart.length > 0 && (
                <Button colorScheme="teal" ml={2} onClick={onOpen}>
                  Pay
                </Button>
              )}
            </Flex>
          </Stack>
        </Flex>

        <VStack spacing={8} align="stretch">
          <Box bg="white" p={6} borderRadius="md" boxShadow="md" color="black">
            <Heading size="lg" mb={4} color="teal.500">
              Welcome to Never Alone!
            </Heading>
            <Text fontSize="lg">
              Find the perfect tandem bike for you and your partner. Enjoy the
              ride!
            </Text>
          </Box>

          <SimpleGrid columns={[1, 2, 4]} spacing={4}>
            {bikes.map((bike) => (
              <Box
                key={bike.name}
                p={4}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                color="black"
              >
                <Image
                  src={bike.image}
                  alt={bike.name}
                  mb={4}
                  borderRadius="md"
                />
                <Heading size="md" mb={2}>
                  {bike.name}
                </Heading>
                <Text mb={4}>{bike.description}</Text>
                <Button
                  colorScheme="teal"
                  onClick={() => addToCart(bike.name)}
                  className="add-to-cart-btn"
                >
                  Add to cart
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent color="black">
            <ModalHeader>Confirm Payment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Are you sure you want to proceed with the payment for the
                following items?
              </Text>
              <UnorderedList>
                {cart.map((item, index) => (
                  <ListItem key={index}>
                    {item}
                    <Button
                      size="xs"
                      ml={2}
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </Button>
                  </ListItem>
                ))}
              </UnorderedList>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handlePayment}>
                Validate
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box as="footer" bg="teal.600" py={4} mt={8}>
        <Text align="center" color="white">
          &copy; 2024 Never Alone. All rights reserved.
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default App;
