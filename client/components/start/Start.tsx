import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import { keyframes } from '@chakra-ui/system';

const setCrowdyKeyframe = (rotate: number) => `
  0%, 100% {
    transform: translateY(5px) rotate(${rotate}deg);
  }
  50% {
    transform: translateY(-5px) rotate(${rotate}deg);
  }
`;

const Start: React.FC = () => {
  return (
    <Box
      backgroundColor="gray.900"
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="fit-content"
        position="relative"
        fontFamily="'Hachi Maru Pop', cursive"
        textAlign="center"
      >
        <Image
          alt="海賊男"
          src="/images/start/kaizoku_man.png"
          position="absolute"
          width="28"
          zIndex={1}
          animation={`${keyframes(setCrowdyKeyframe(-10))} 3s infinite`}
        />
        <Image
          alt="海賊女"
          src="/images/start/kaizoku_woman.png"
          position="absolute"
          width="32"
          zIndex={1}
          animation={`${keyframes(setCrowdyKeyframe(10))} 3s infinite`}
          right="0"
        />
        <Text
          position="relative"
          color="white"
          fontSize="7xl"
          paddingX="28"
          zIndex={10}
        >
          すかるきんぐ
        </Text>
        <Button width="64" marginY="8" size="lg" fontSize="xl" disabled={true}>
          はじめる
        </Button>
        <Box display="flex" width="fit-content" marginX="auto">
          <Input placeholder="名前を入力" color="white" />
          <Button marginLeft="4">登録</Button>
        </Box>
      </Box>
    </Box>
  );
};

export { Start };
