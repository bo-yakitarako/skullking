import { Box, List, ListItem, Text } from '@chakra-ui/layout';
import { useRecoilValue } from 'recoil';
import { playerIdState, startPlayersState } from '../../modules/state';

const StartPlayerList: React.FC = () => {
  const ownPlayerId = useRecoilValue(playerIdState);
  const players = useRecoilValue(startPlayersState);
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      position="fixed"
      right={4}
      bottom={4}
      border="solid 1px white"
      borderRadius="xl"
      width="60"
      height="fit-content"
      padding="4"
      zIndex={11}
    >
      <Text
        position="absolute"
        textAlign="center"
        width="fit-content"
        paddingX={2}
        bgColor="gray.900"
        fontSize="lg"
        color="white"
        left="50%"
        zIndex={12}
        transform="translate(-50%, -32px)"
      >
        さんかしゃ
      </Text>
      <List>
        {players.map(({ playerId, name }) => (
          <ListItem
            key={playerId}
            color={playerId === ownPlayerId ? 'green.300' : 'white'}
            fontSize="md"
          >
            {playerId}. {name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export { StartPlayerList };
