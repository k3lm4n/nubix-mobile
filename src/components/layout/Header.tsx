import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, Heading, HStack, Icon, IconButton } from 'native-base';
import React, { FC } from 'react';

type Props = {
  heading: string;
  LeftIcon?: JSX.Element;
};

const Header: FC<Props> = ({ heading, LeftIcon }) => {
  const { goBack } = useNavigation();
  return (
    <HStack pt={5} justifyContent="space-between" alignItems="center">
      <IconButton
        icon={<Icon as={<Ionicons name="arrow-back-circle-outline" />} />}
        _icon={{
          color: '_neutral.500',
          size: '4xl',
        }}
        onPress={goBack}
      />
      <Heading
        fontFamily="heading"
        fontSize="xl"
        color="_neutral.500"
        fontWeight="bold"
      >
        {heading}
      </Heading>
      {LeftIcon ?? <Box width={12}></Box>}
    </HStack>
  );
};

export default Header;