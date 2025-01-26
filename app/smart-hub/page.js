"use client"
import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Toolbar,
  Typography,
  Container,
  Stack,
  TextField,
  Snackbar,
  IconButton
} from "@mui/material";
import Link from "next/link";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default function SmartHub() {
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
          <Box>
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
                  textTransform: "uppercase",
                  fontWeight: 900,
                  fontSize: "1.25rem",
                }}
              >
                Smart Translate
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: "flex", gap: "2rem" }}>
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
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Smart Hub
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/*Main Section for Cards Goes Here*/}
      <Box
        sx = {{
          background: "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)"
        }}
      >
        <Typography
          sx = {{
            color: "white",
            textAlign: "center",
            textTransform: "uppercase",
            fontFamily: "Kanit",
            fontWeight: 900,
            fontSize: "2.5rem"
          }}
        >
          The Smart Hub
        </Typography>
      </Box>


      <Box
        sx={{
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          display: "flex",
          flexDirection: "row",
          paddingBottom: "40px",
          justifyContent: "center",
          gap: 5,
          paddingTop: "30px",
        }}
      >
        <Card sx={{ maxWidth: { xs: "100%", sm: 390 } }}>
          <CardMedia
            component="img"
            image="/mapofcs.png"
            height="140px"
            alt="Map of CS"
          ></CardMedia>
          <CardContent>
            <Typography
              sx={{
                fontFamily: "Kanit",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "15px",
                fontSize: "1.25rem",
                textAlign: "center",
              }}
            >
              Smart Study
            </Typography>
            <Typography
              sx={{
                fontFamily: "Kanit", fontWeight: 500
              }}
            >
              Smart Study is made to make life a little bit easier for
              engineering students. This project was created as a free
              alternative to Chegg and Quizlet. Users will have access to
              flashcards, videos, quizzes, worksheets, and plenty of other
              features. A full list of features and upcoming features can be
              found in the documenation below.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Link href="https://smartstudycs.vercel.app/" target="_blank">
              <Button>Visit Site</Button>
            </Link>

            <Link href="#">
              <Button>Socials</Button>
            </Link>

            <Link
              href="https://smartstudy-0f4a59fc.mintlify.app/introduction"
              target="_blank"
            >
              <Button>Documentation</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: { xs: "100%", sm: 390 } }}>
          <CardMedia
            component="img"
            image="/mapofcs.png"
            height="140px"
            alt="Map of CS"
          ></CardMedia>
          <CardContent>
            <Typography
              sx={{
                fontFamily: "Kanit",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "15px",
                fontSize: "1.25rem",
                textAlign: "center",
              }}
            >
              Smart Stories
            </Typography>
            <Typography sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
              Smart Stories is made to hear from people, specifically their
              stories. This project is still in development but the purpose of
              this is to allow users to submit stories of horror or crime events
              that happened to them. It is then posted on social media such as
              Instagram, YouTube, and TikTok. This aims to create a community
              who appreciates the thrill of the unknown.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Link href="#">
              <Button>Visit Site</Button>
            </Link>

            <Link href="#">
              <Button>Socials</Button>
            </Link>

            <Link href="#">
              <Button>Documentation</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: { xs: "100%", sm: 390 } }}>
          <CardMedia
            component="img"
            image="/mapofcs.png"
            height="140px"
            alt="Map of CS"
          ></CardMedia>
          <CardContent>
            <Typography
              sx={{
                fontFamily: "Kanit",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "15px",
                fontSize: "1.25rem",
                textAlign: "center",
              }}
            >
              Smart Hoops
            </Typography>
            <Typography sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
              Smart Hoops is a project that is very far away in terms of
              development and production. However, the purpose of this project
              is to serve as a site where users will be able to view NBA scores
              in real time, real time NBA news as well, and have access to real
              time NBA game updates. Users will also be able to participate in
              Daily Fantasy as well.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Link href="#">
              <Button>Visit Site</Button>
            </Link>

            <Link href="#">
              <Button>Socials</Button>
            </Link>

            <Link href="#">
              <Button>Documentation</Button>
            </Link>
          </CardActions>
        </Card>
      </Box>

      <Box
        component="footer"
        sx={{
          height: "auto",
          py: 4,
          pb: 12.9,
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
