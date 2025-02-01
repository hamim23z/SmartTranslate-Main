"use client";
import { useState } from "react";
import {
  AppBar,
  Box,
  TextField,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Container,
  Stack,
  Snackbar,
  IconButton, Drawer, List, ListItemText, ListItem
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";
import MenuIcon from '@mui/icons-material/Menu';

export default function HomePage() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const commonLanguages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
  ];

  const allLanguages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
    { code: "hi", name: "Hindi" },
    { code: "ar", name: "Arabic" },
    { code: "ru", name: "Russian" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
  ];

  const handleTranslate = async () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: inputText,
        target: selectedLanguage,
      }),
    });

    const data = await response.json();
    if (data?.data?.translations?.[0]?.translatedText) {
      setOutputText(data.data.translations[0].translatedText);
    } else {
      setOutputText("Translation failed. Please try again.");
    }
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
    handleMenuClose();
  };

  {/*NewsLetter*/}
  const [snackbarOpenNews, setSnackbarOpenNews] = useState(false);
  const [emailNews, setEmailNews] = useState("");
  const [emailErrorNews, setEmailErrorNews] = useState("");
  const emailRegexNews = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSnackbarCloseNews = () => {
    setSnackbarOpenNews(false);
  };

  const handleEmailChangeNews = (e) => {
    const value = e.target.value;
    setEmailNews(value);

    if (!emailRegexNews.test(value)) {
      setEmailErrorNews("Enter a valid email address.");
    } else {
      setEmailErrorNews("");
    }
  };

  const handleSendMessageNews = async () => {
    setEmailErrorNews("");

    if (!emailNews.trim()) {
      setSnackbarOpenNews(true);
      setEmailErrorNews("Email cannot be empty.");
      return;
    }

    if (!emailRegexNews.test(emailNews)) {
      setSnackbarOpenNews(true);
      setEmailErrorNews("Enter a valid email address.");
      return;
    }

    try {
      await addDoc(collection(db, "Newsletter"), {
        email: emailNews,
        timestamp: new Date(),
      });

      setSnackbarOpenNews(true);
      setEmailErrorNews("");

      setEmailNews("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const [openNavDrawer, setOpenNavDrawer] = useState(false);
  const toggleNavDrawer = (open) => {
    setOpenNavDrawer(open);
  }

  return (
    <>
      <AppBar
        sx={{
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          paddingTop: "5px",
          paddingBottom: "5px",
          position: "static",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Hamburger menu icon for mobile (left side) */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => toggleNavDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: "30px", marginTop: "15px" }} />
            </IconButton>
          </Box>

          <Box>
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  textTransform: "uppercase",
                  fontWeight: 900,
                  fontSize: "1.25rem",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Smart Translate
              </Typography>
            </Link>
          </Box>

          {/* Desktop links */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "2rem",
            }}
          >
            <Link
              href="https://smarttranslate.mintlify.app/introduction"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Documentation
              </Typography>
            </Link>

            <Link
              href="/translate-video"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Translate Video
              </Typography>
            </Link>

            <Link
              href="/smart-hub"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Smart Hub
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={openNavDrawer}
        onClose={() => toggleNavDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <List>
        <ListItem button={true} onClick={() => toggleNavDrawer(false)}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  paddingTop: "10px"
                }}
              >
                Home
              </Typography>
            </Link>
          </ListItem>

          <ListItem button={true} onClick={() => toggleNavDrawer(false)}>
            <Link
              href="https://smarttranslate.mintlify.app/introduction"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Documentation
              </Typography>
            </Link>
          </ListItem>

          <ListItem button={true} onClick={() => toggleNavDrawer(false)}>
            <Link
              href="/translate-video"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Translate Video
              </Typography>
            </Link>
          </ListItem>

          <ListItem button={true} onClick={() => toggleNavDrawer(false)}>
            <Link
              href="/smart-hub"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Smart Hub
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Drawer>

      {/*Main Section for Translating Text Goes Here*/}
      <Box
        sx={{
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          padding: { xs: "30px 10px", sm: "40px 20px", md: "50px 30px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Kanit",
            textAlign: "center",
            color: "white",
            textTransform: "uppercase",
            fontWeight: 900,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Translate Text Into Your Desired Language
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          padding: "20px",
        }}
      >
        {/* Common Languages Dropdown */}
        <TextField
          id="common-languages"
          select
          label="Common Languages"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          variant="filled"
          sx={{
            background: "white",
            borderRadius: "10px",
            fontFamily: "Kanit",
            width: { xs: "100%", sm: "300px" },
          }}
        >
          {commonLanguages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              {lang.name}
            </MenuItem>
          ))}
        </TextField>

        {/* All Languages Dropdown */}
        <TextField
          id="all-languages"
          select
          label="All Languages"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          variant="filled"
          sx={{
            background: "white",
            borderRadius: "10px",
            fontFamily: "Kanit",
            width: { xs: "100%", sm: "300px" },
          }}
        >
          {allLanguages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              {lang.name}
            </MenuItem>
          ))}
        </TextField>

        {/* Translate Button */}
        <Button
          variant="contained"
          sx={{
            background: "rgb(16, 148, 75)",
            color: "white",
            fontFamily: "Kanit",
            textTransform: "uppercase",
            fontWeight: "bold",
            width: { xs: "100%", sm: "auto" },
          }}
          onClick={handleTranslate}
        >
          Translate
        </Button>
      </Box>

      <Box
        sx={{
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        {/* Display Selected Language */}
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontFamily: "Kanit",
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          {selectedLanguage
            ? `You chose: ${
                allLanguages.find((lang) => lang.code === selectedLanguage)
                  ?.name || "Unknown"
              }`
            : "No language selected yet"}
        </Typography>
      </Box>

      {/* Form Section */}
      <Box
        component="form"
        sx={{
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          textAlign: "center",
          paddingBottom: "100px",
          paddingTop: "50px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="input-text"
          label="Input Text"
          variant="filled"
          multiline
          maxRows={10}
          sx={{
            background: "white",
            borderRadius: "10px",
            fontFamily: "Kanit",
            "& .MuiInputBase-input": {
              minHeight: "250px",
            },
            width: { xs: "90%", sm: "500px" },
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <TextField
          id="output-text"
          label="Output Text"
          variant="filled"
          multiline
          maxRows={10}
          sx={{
            background: "white",
            borderRadius: "10px",
            fontFamily: "Kanit",
            "& .MuiInputBase-input": {
              minHeight: "250px",
            },
            width: { xs: "90%", sm: "500px" },
          }}
          value={outputText}
          InputProps={{ readOnly: true }}
        />
      </Box>

      <Box
        component="footer"
        sx={{
          height: "auto",
          py: 4,
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Kanit",
                  fontWeight: "900",
                  textTransform: "uppercase",
                }}
              >
                Smart Translate
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontFamily: "Kanit" }}
              >
                Subscribe to our newsletter for updates!
              </Typography>
              <Stack direction="row" spacing={1}>
                <TextField
                  variant="outlined"
                  size="small"
                  onChange={handleEmailChangeNews}
                  placeholder="Your email"
                  value={emailNews}
                  sx={{
                    flexGrow: 1,
                    background: "white",
                    borderRadius: "10px",
                    "& .MuiInputBase-input::placeholder": {
                      color: "black",
                      fontFamily: "Kanit",
                      fontWeight: "700",
                    },
                    "& .MuiInputBase-input": {
                      color: "black",
                      fontFamily: "Kanit",
                      fontWeight: "700",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    background: "rgb(16, 110, 58)",
                    transition: "background 0.4s ease-in-out",
                    "&:hover": {
                      background: "rgb(16, 148, 75)",
                    },
                  }}
                  onClick={handleSendMessageNews}
                >
                  Submit
                </Button>

                <Snackbar
                  open={snackbarOpenNews}
                  autoHideDuration={6000}
                  onClose={handleSnackbarCloseNews}
                  message={
                    emailErrorNews ||
                    "You have successfully signed up for our newsletter."
                  }
                />
              </Stack>
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
              {/* Company Section */}
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Kanit",
                    fontWeight: "900",
                  }}
                >
                  Company
                </Typography>
                <Link
                  href="/about-us"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  About Us
                </Link>

                <Link
                  href="https://smarttranslate.mintlify.app/introduction"
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Documentation
                </Link>

                <Link
                  href="/demos"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Demos
                </Link>
              </Stack>

              {/* Support Section */}
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Kanit",
                    fontWeight: "900",
                  }}
                >
                  Support
                </Typography>
                <Link
                  href="/contact"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/resources"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Resources
                </Link>

                <Link
                  href="/privacy-policy"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Privacy Policy
                </Link>
              </Stack>

              {/* Smart Hub Section */}
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Kanit",
                    fontWeight: "900",
                  }}
                >
                  Smart Hub
                </Typography>
                <Link
                  href="https://smartstudycs.vercel.app/"
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Smart Study
                </Link>
                <Link
                  href="#"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Smart Stories
                </Link>

                <Link
                  href="#"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Smart Hoops
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}