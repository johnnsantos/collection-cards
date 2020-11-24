import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import { StyledBox } from "./styles.js";

const PokemonsPage = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150").then((res) => {
      setData(res.data.results);
      console.log(data);
    });
  });

  useEffect(() => {}, [data]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <StyledBox></StyledBox>
    </motion.div>
  );
};

export default PokemonsPage;