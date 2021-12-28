import { Box, HStack, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faEye,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const DataItem = ({ item }) => {
  // destructring
  const {
    name,
    time,
    transactionID,
    token0: { id: token0ID, unit: token0Unit, icon: token0Icon },
    token1: { id: token1ID, unit: token1Unit, icon: token1Icon }
  } = item;

  const formatTime = (date) => {
    return `${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
  };

  return (
    <Box p="3" borderRadius="10px" border="1px solid #6a6966" my="4">
      <HStack position="relative">
        <Text color="white" width="40px">
          <FontAwesomeIcon icon={faEye} />
        </Text>
        <Text paddingInlineStart="0" color="white" width="80px">
          {formatTime(time)}
        </Text>
        <Text color="white" paddingInlineStart="0" width="120px">
          {name}
        </Text>
        <Text color="white" paddingInlineStart="0" width="160px">
          {`${transactionID.slice(0, 13)}...`}
        </Text>
        <Text paddingInlineStart="0" color="white">
          <HStack>
            <HStack>
              {token0Icon ? (
                <Image
                  borderRadius="full"
                  boxSize="28px"
                  src={token0Icon}
                  alt="Dan Abramov"
                />
              ) : (
                <FontAwesomeIcon icon={faQuestionCircle} />
              )}
              <Text>
                {token0ID
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              </Text>
              <Text>{token0Unit}</Text>
            </HStack>
            <FontAwesomeIcon icon={faArrowRight} />
            <HStack>
              {token1Icon ? (
                <Image
                  borderRadius="full"
                  boxSize="28px"
                  src={token1Icon}
                  alt="Dan Abramov"
                />
              ) : (
                <FontAwesomeIcon icon={faQuestionCircle} />
              )}

              <Text>{token1ID}</Text>
              <Text>{token1Unit}</Text>
            </HStack>
          </HStack>
        </Text>
      </HStack>
    </Box>
  );
};

export default DataItem;
