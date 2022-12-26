import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { Heading, Icon, IconButton, Text, VStack } from 'native-base';
import React, { useEffect, useRef } from 'react';

import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';

const NFCPayment = () => {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    animation.current.play(0, 138);
  }, []);

  return (
    <Container>
      <Header
        heading="Pagamento"
        RightIcon={
          <IconButton
            icon={
              <Icon
                as={Entypo}
                name="dots-three-horizontal"
                size="xl"
                color="_neutral.600"
              />
            }
            borderRadius="full"
          />
        }
      />

      <VStack alignItems="center" mt="20" space="4">
        <Heading
          fontFamily="body"
          fontWeight="bold"
          fontSize="2xl"
          color="_primary.500"
        >
          CONTACTLESS
        </Heading>
        <Icon
          as={MaterialCommunityIcons}
          name="contactless-payment"
          color="_primary.500"
          size="lg"
        />
      </VStack>

      <LottieView
        autoPlay
        loop
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#fff',
        }}
        source={require('../../../assets/animation/contactless-payment.json')}
      />

      <Text
        textAlign="center"
        mt="16"
        fontFamily="body"
        fontWeight="normal"
        fontSize="lg"
        color="_primary.500"
      >
        APROXIME O TELEFONE AO TPA
      </Text>
    </Container>
  );
};

export default NFCPayment;
