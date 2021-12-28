import { Container } from "@chakra-ui/react";
import DataHead from "./DataHead";
import DataItem from "./DataItem";
import { useState } from "react";
import BitCoin from "../assets/bitcoin.png";

const BoxContainer = () => {
  const [data, setData] = useState([
    {
      time: 1640712526288,
      name: "John Smigla",
      transactionID: "0x1e87ea492c4e69a3cb18",
      token0: {
        id: 2718981290,
        unit: "USDT"
      },
      token1: {
        id: 9287651098211,
        unit: "WBNB",
        icon: BitCoin
      }
    },
    {
      time: 1640712526288,
      name: "Test Name",
      transactionID: "0x1e8291929c4e69a3cb18",
      token0: {
        id: 129818771009011,
        unit: "USDT"
      },
      token1: {
        id: 9287651098291,
        unit: "WBNB"
      }
    },
    {
      time: 1640712526912,
      name: "Test Name",
      transactionID: "0x1e8291929c4e69a3cb18",
      token0: {
        id: 129818771009011,
        unit: "USDT"
      },
      token1: {
        id: 9287651098291,
        unit: "WBNB",
        icon: BitCoin
      }
    },
    {
      time: 1640712526912,
      name: "Test Name",
      transactionID: "0x1e8291929c4e69a3cb18",
      token0: {
        id: 129818771009011,
        unit: "USDT"
      },
      token1: {
        id: 9287651098291,
        unit: "WBNB",
        icon: BitCoin
      }
    },
    {
      time: 1640712526912,
      name: "Test Name",
      transactionID: "0x1e8291929c4e69a3cb18",
      token0: {
        id: 129818771009011,
        unit: "USDT"
      },
      token1: {
        id: 9287651098291,
        unit: "WBNB"
      }
    }
  ]);

  return (
    <Container
      maxW="container.lg"
      borderRadius="15px"
      border="1px solid #6a6966"
      bg="#262626"
    >
      <DataHead />
      {data.map((item, index) => (
        <DataItem key={index} item={item} />
      ))}
    </Container>
  );
};

export default BoxContainer;
