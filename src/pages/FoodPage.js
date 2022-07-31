import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function FoodPage() {
  const [karotten, setKarotten] = useState(0);
  const [kaese, setKaese] = useState(0);
  const [latte, setLatte] = useState(0);

  return (
    <Container sx={{ marginBottom: 15 }}>
      <Link to="/">
        <Box>
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Unterlechner"
          ></img>
        </Box>
      </Link>

      <Stack spacing={2} alignItems={"center"} sx={{ mt: 10 }}>
        <Typography variant="h6" sx={{ mb: 5 }}>
          Wählen Sie hier Ihr morgendliches Frühstück aus
        </Typography>

        <Box>
          <FormControl sx={{ marginBottom: 5 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Routine
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Jedes mal neu zusammenstellen"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Routine behalten"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box sx={{ width: "70%" }}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight={"bold"}
            sx={{ marginBottom: 3 }}
          >
            Auswahl
          </Typography>
          <Stack spacing={5}>
            <Card
              sx={{ display: "flex", border: "1px solid #bb9a37", padding: 2 }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={process.env.PUBLIC_URL + "/karottenb.jpg"}
                alt="Karottenbrot"
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Karottenbrötchen
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Inhaltsstoffe: Vitamin D1,B2
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                    justifyContent: "flex-end",
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

                  <Typography variant="h5">{karotten}</Typography>
                  <IconButton
                    aria-label="delete"
                    onClick={() => setKarotten(karotten + 1)}
                  >
                    <AddIcon fontSize="large"></AddIcon>
                  </IconButton>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{ display: "flex", border: "1px solid #bb9a37", padding: 2 }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={process.env.PUBLIC_URL + "/bergkaese.jpg"}
                alt="Bergkäse"
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Bergkäse
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Inhaltsstoffe: Milch, Wasser, Kräuter
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton
                    aria-label="delete"
                    onClick={() =>
                      kaese > 0 ? setKaese(kaese - 1) : setKaese(0)
                    }
                  >
                    <RemoveIcon fontSize="large"></RemoveIcon>
                  </IconButton>

                  <Typography variant="h5">{kaese}</Typography>
                  <IconButton
                    aria-label="delete"
                    onClick={() => setKaese(kaese + 1)}
                  >
                    <AddIcon fontSize="large"></AddIcon>
                  </IconButton>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{ display: "flex", border: "1px solid #bb9a37", padding: 2 }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={process.env.PUBLIC_URL + "/latte.jpg"}
                alt="Live from space album cover"
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "100%" }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Latte Macchiato
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Inhaltsstoffe: Milch, Kaffee
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton
                    aria-label="delete"
                    onClick={() =>
                      latte > 0 ? setLatte(latte - 1) : setLatte(0)
                    }
                  >
                    <RemoveIcon fontSize="large"></RemoveIcon>
                  </IconButton>

                  <Typography variant="h5">{latte}</Typography>
                  <IconButton
                    aria-label="delete"
                    onClick={() => setLatte(latte + 1)}
                  >
                    <AddIcon fontSize="large"></AddIcon>
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
