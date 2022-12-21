import { Avatar, Box, Center, Heading, Text } from 'native-base';
import React, { useState } from 'react';

import SlideButton from '../../components/button/SlideButton';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';

const TransferConfirmation = () => {
  const [isConfirmed, setConfirmed] = useState(false);

  return (
    <Container>
      <Header heading="" />

      <Center mt="12">
        <Heading fontFamily="heading" fontSize="xl" color="_primary.500">
          You`re Going To Transfer
        </Heading>
        <Avatar mt="5" />
        <Text
          my="2"
          fontFamily="body"
          fontSize="lg"
          fontWeight="bold"
          color="_neutral.300"
        >
          Keisha Levronka
        </Text>
        <Text
          fontFamily="body"
          fontSize="lg"
          fontWeight="light"
          color="_neutral.300"
        >
          9245888444
        </Text>
        <Text
          my="12"
          fontFamily="body"
          fontWeight="bold"
          fontSize="4xl"
          color="_primary.500"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 10,
          }}
        >
          $ 500.00
        </Text>
        <Text fontFamily="body" fontSize="xl" color="_primary.500">
          With Message
        </Text>
        <Box
          mt="7"
          mb="12"
          bg="_primary.50"
          w="full"
          rounded="2xl"
          p="4"
          minH="32"
          shadow={2}
        >
          <Text color="_neutral.50" fontFamily="body" fontSize="md">
            Thanks for lending me the money!
          </Text>
        </Box>
        {isConfirmed ? (
          <Heading fontFamily="heading" fontSize="xl" color="_primary.500">
            Transfer Sent Successfully
          </Heading>
        ) : (
          <SlideButton
            buttonMessage="Drag to Send"
            onSwipeComplete={() => setConfirmed(true)}
          />
        )}
      </Center>
    </Container>
  );
};

export default TransferConfirmation;