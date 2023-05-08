import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

export const GifSearchItem = ({ title, url }) => {
  return (
    <div
      className="ct-card"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <img className="card-gif-img" src={url} alt={title} />
      <h5 className="card-gif-title">{title}</h5>
    </div>
  );
};
