import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import {FaLinkedin,FaGithub } from 'react-icons/fa';
import ColorMode from '../ColorTheme';


const SocialButton = ({
  children,
  label,
  href,
 
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FooterInfo () {
  return (
    <Box
        bg={useColorModeValue('blackAlpha.300', 'blackAlpha.100')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        position={'absolute'}
        bottom={0}
        py={4}
        h={'5vh'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
        <ColorMode />

          <SocialButton label={'Github'} href='https://github.com/DavidAlves28'  >
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Linkedin'} href="https://www.linkedin.com/in/david-dev-full/"  >
            <FaLinkedin />
          </SocialButton>
        </Stack>
        <Text as='b' > © 2023 David Alves Costa </Text>
      </Container>
    </Box>
  );
}
