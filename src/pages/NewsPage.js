import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NewsPage() {
  return (
    <Container>
      <Link to="/">
        <Box>
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Unterlechner"
          ></img>
        </Box>
      </Link>
    </Container>
  );
}
