import {
  Alert,
  Box,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  "& label.Mui-focused": {
    color: "#42310D",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#E1CE91",
    },
  },
};

export default function Login() {
  const [nummer, setNummer] = useState("");
  const navigate = useNavigate();

  const handleChangeNumber = (e) => {
    setNummer(e.target.value);
  };

  useEffect(() => {
    const checkNummer = () => {
      if (nummer !== "") {
        if (nummer.length === 4) {
          navigate("/");
        }
      }
    };

    checkNummer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nummer]);

  return (
    <Container>
      <Box>
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt="Unterlechner"
        ></img>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Paper sx={{ padding: 5 }} variant="outlined">
            <Typography
              component={"div"}
              letterSpacing={2}
              align="center"
              variant="h6"
              gutterBottom
              color={"#605132"}
            >
              Bitte geben Sie hier Ihre 5-Stellige Nummer ein, welche Sie in
              Ihrer{" "}
              <span style={{ fontWeight: "bold" }}>Willkommensbroschüre</span>{" "}
              finden.
            </Typography>

            <TextField
              onChange={(e) => handleChangeNumber(e)}
              sx={style}
              className="key"
              id="outlined-basic"
              label="Nummer"
              variant="outlined"
            />
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
