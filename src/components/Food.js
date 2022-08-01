import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";

export default function Food({ art, setKarotten, karotten }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Card
        sx={{
          display: "flex",
          border: "1px solid #bb9a37",
          padding: 2,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={art.img}
          alt={art.name}
          loading="lazy"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: { xs: "11rem", sm: "20rem" },
              }}
            >
              <Typography
                noWrap
                letterSpacing={1}
                sx={{ fontSize: { xs: "1.0rem", sm: "2rem" } }}
              >
                {art.name}
              </Typography>
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: { xs: "11rem", sm: "20rem" },
              }}
            >
              <Typography
                noWrap
                sx={{ fontSize: { xs: "1rem", sm: "1rem" } }}
                color="text.secondary"
              >
                Inhaltsstoffe: Vitamin D1,B2
              </Typography>
            </Box>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              justifyContent: "space-around",
            }}
          >
            <IconButton
              aria-label="delete"
              onClick={() =>
                karotten > 0 ? setKarotten(karotten - 1) : setKarotten(0)
              }
            >
              <RemoveIcon fontSize="large"></RemoveIcon>
            </IconButton>

            <Typography variant="h5">{karotten ? karotten : 0}</Typography>
            <IconButton
              aria-label="delete"
              onClick={() => setKarotten(karotten + 1)}
            >
              <AddIcon fontSize="large"></AddIcon>
            </IconButton>
          </Box>
        </Box>
      </Card>
    </motion.div>
  );
}
