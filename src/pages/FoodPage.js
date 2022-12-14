import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useIdleTimer } from "react-idle-timer";
import { format } from "date-fns";

import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";

import HeaderNav from "../components/HeaderNav";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { logout } from "../redux/userSlice";
import { motion, AnimatePresence } from "framer-motion";

import {
  getFirestore,
  doc,
  getDoc,
  collection,
  setDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Filter from "../components/Filter";
import { ka } from "date-fns/locale";
import Food from "../components/Food";

const timeout = 60000;

export default function FoodPage() {
  const db = getFirestore();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [filter, setFilter] = useState([]);
  const [karotten, setKarotten] = useState(0);
  const [artikel, setArtikel] = useState([]);
  const [userBestellung, setUserBestellung] = useState([]);

  const [remaining, setRemaining] = useState(timeout);
  const [elapsed, setElapsed] = useState(0);
  const [lastActive, setLastActive] = useState(+new Date());
  const [isIdle, setIsIdle] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [kategorie, setKategorie] = useState("Alles");

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const { getRemainingTime, getLastActiveTime, getElapsedTime } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  useEffect(() => {
    setRemaining(getRemainingTime());
    setLastActive(getLastActiveTime());
    setElapsed(getElapsedTime());

    setInterval(() => {
      setRemaining(getRemainingTime());
      setLastActive(getLastActiveTime());
      setElapsed(getElapsedTime());
    }, 1000);
  }, []);

  useEffect(() => {
    const ladeFr??hst??cksdaten = async () => {
      setArtikel([]);
      setFilter([]);
      const snapshot = collection(db, "fruehstueck");
      const querySnapshot = await getDocs(snapshot);
      querySnapshot.forEach((doc) => {
        setArtikel((prev) => [...prev, doc.data()]);
        setFilter((prev) => [...prev, doc.data()]);
      });
    };
    ladeFr??hst??cksdaten();
  }, []);

  useEffect(() => {
    if (isIdle) {
      dispatch(logout());
      navigate("/");
    }
  }, [isIdle]);

  useEffect(() => {
    const hatUserSchonEinmalBestellt = async () => {
      const docRef = doc(db, "orders", currentUser.room.toString());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserBestellung([docSnap.data()]);
      } else {
        setUserBestellung([]);
      }
    };

    hatUserSchonEinmalBestellt();
  }, []);

  useEffect(() => {
    const ladeDaten = () => {
      if (userBestellung.length) {
        setKarotten(userBestellung[0].br??tchen);
      } else {
        setKarotten(0);
      }
    };

    ladeDaten();
  }, [userBestellung]);

  const bestellungAufgeben = async () => {
    const docRef = doc(db, "orders", currentUser.room.toString());
    const docSnap = await getDoc(docRef);
    const ordersRef = collection(db, "orders");

    if (docSnap.exists()) {
      await updateDoc(doc(ordersRef, currentUser.room.toString()), {
        br??tchen: karotten,
      });

      setSnackBarMessage("Vielen Dank - Ihre ??nderungen haben uns erreicht!");
      setOpenSnackbar(true);

      setTimeout(() => {
        dispatch(logout());
        navigate("/");
      }, 5000);
    } else {
      await setDoc(doc(ordersRef, currentUser.room.toString()), {
        br??tchen: karotten,
      });

      setSnackBarMessage("Vielen Dank -Ihre Bestellung hat uns erreicht!");
      setOpenSnackbar(true);

      setTimeout(() => {
        dispatch(logout());
        navigate("/");
      }, 6000);
    }
  };

  return (
    <>
      <HeaderNav></HeaderNav>
      <Container maxWidth="sm" sx={{ marginBottom: 15 }}>
        <Grid container spacing={2} sx={{ marginTop: "10%" }}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 5 }} align={"center"}>
              W??hlen Sie hier Ihr morgendliches Fr??hst??ck aus
            </Typography>
          </Grid>
          <Grid item xs={12} align={"center"}>
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
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h5"
              gutterBottom
              fontWeight={"bold"}
              sx={{ marginBottom: 3 }}
            >
              Auswahl
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Filter
            </Typography>
            <Filter
              artikel={artikel}
              setFilter={setFilter}
              kategorie={kategorie}
              setKategorie={setKategorie}
            ></Filter>

            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 3 }}
            >
              <Typography variant="h6" component={"div"}>
                {filter.length} Artikel
              </Typography>
            </Box>

            <Box mt={2}>
              <Divider></Divider>
            </Box>
            <motion.div layout>
              <AnimatePresence>
                <Stack spacing={2}>
                  {filter?.map((art, idx) => {
                    return (
                      <Food
                        key={idx}
                        karotten={karotten}
                        setKarotten={setKarotten}
                        art={art}
                      ></Food>
                    );
                  })}
                </Stack>
              </AnimatePresence>
            </motion.div>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }}>
          <Button
            onClick={() => bestellungAufgeben()}
            sx={{
              width: "100%",
              backgroundColor: "#4b474d",
              "&:hover": { backgroundColor: "#4b474d" },
            }}
            variant="contained"
          >
            Bestellung aufgeben
          </Button>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleClose}
          message={snackBarMessage}
          action={action}
        />
      </Container>
    </>
  );
}
