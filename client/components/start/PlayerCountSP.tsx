import { Box, Text } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { playerCountSelector } from '../../modules/state';

const PlayerCountSP: React.FC = () => {
  const playerCount = useRecoilValue(playerCountSelector);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleTooltip = () => {
    setTooltipOpen((prev) => !prev);
  };

  return (
    <Tooltip
      label="今の参加者の人数"
      bgColor="gray.300"
      isOpen={tooltipOpen}
      color="black"
      fontFamily="'Hachi Maru Pop', cursive"
    >
      <Box
        display={{ base: 'flex', md: 'none' }}
        position="fixed"
        right={4}
        bottom={4}
        width="10"
        height="10"
        borderRadius="40"
        justifyContent="center"
        alignItems="center"
        bgColor="gray.300"
        onClick={handleTooltip}
      >
        <Text fontSize="sm" color="gray.900">
          {playerCount}
        </Text>
      </Box>
    </Tooltip>
  );
};

export { PlayerCountSP };
