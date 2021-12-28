import { Box, HStack, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faVolumeUp,
  faVolumeMute
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DataHead = () => {
  const [volumeUp, setVolumeUp] = useState(true);

  const handleToggle = () => setVolumeUp(!volumeUp);

  return (
    <Box p="3">
      <HStack position="relative">
        <Text color="white" width="40px">
          <FontAwesomeIcon icon={faCog} />
        </Text>
        <Text
          paddingInlineStart="0"
          fontWeight="600"
          color="white"
          width="80px"
        >
          Time
        </Text>
        <Text
          fontWeight="600"
          color="white"
          paddingInlineStart="0"
          width="120px"
        >
          Name
        </Text>
        <Text
          fontWeight="600"
          color="white"
          paddingInlineStart="0"
          width="160px"
        >
          Tx.
        </Text>
        <Text
          paddingInlineStart="0"
          fontWeight="600"
          color="white"
          width="180px"
        >
          Token 0
        </Text>
        <Text fontWeight="600" color="white">
          Token 1
        </Text>
        <Button
          onClick={handleToggle}
          color="white"
          width="40px"
          bg="transparent"
          position="absolute"
          right="10px"
          border="none"
          _hover={{
            backgroundColor: "transparent"
          }}
          _focus={{
            outline: "none",
            backgroundColor: "transparent"
          }}
        >
          {volumeUp ? (
            <FontAwesomeIcon icon={faVolumeUp} />
          ) : (
            <FontAwesomeIcon icon={faVolumeMute} />
          )}
        </Button>
      </HStack>
    </Box>
  );
};

export default DataHead;
