import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/react';
import { keyframes } from '@chakra-ui/system';
import { NameBox } from './NameBox';

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
        <Tooltip label="2人以上いないと始められないよ><" hasArrow bg="red.600">
          <Box width="fit-content" marginX="auto" marginY="8">
            <Button width="64" size="lg" fontSize="xl" disabled={true}>
              はじめる
            </Button>
          </Box>
        </Tooltip>
        <NameBox />
      </Box>
    </Box>
  );
};

export { Start };
