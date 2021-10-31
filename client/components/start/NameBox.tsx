import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { nameState, playerIdState } from '../../modules/state';
import { StartNameForm } from './StartNameForm';

const NameBox: React.FC = () => {
  const name = useRecoilValue(nameState);
  const playerId = useRecoilValue(playerIdState);
  const [canEdit, setCanEdit] = useState(true);
  if (playerId === 0 || canEdit) {
    return <StartNameForm setCanEdit={setCanEdit} />;
  }
  return (
    <Box display="flex" justifyContent="center">
      <Text color="white" fontSize="xl">
        ( ・ω・)ﾉやあ、
        <Text as="span" color="green.300">
          {name}
        </Text>
      </Text>
      <Button marginLeft="2" size="sm" onClick={() => setCanEdit(true)}>
        名前変更
      </Button>
    </Box>
  );
};

export { NameBox };
