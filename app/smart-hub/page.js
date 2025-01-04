"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Stack,
  TextField,
  Snackbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

{/*Footer Contact Thingy*/}
import { collection, addDoc} from "firebase/firestore";
import { db } from "@/firebase";

export default function SmartHub() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  {
    /* For the Newsletter Now */
  }
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
  {/*Newsletter Ends Here*/}

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
        }}
      >
        <Toolbar //this is the entire toolbar, everything is locaed inside here
          sx={{
            paddingTop: "20px",
            paddingBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box //this is the code for the "logo" aka the Smart Translate text. for mobile view
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              px: 2,
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: "35px" }} />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontFamily: "Kanit",
                fontWeight: "900",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Smart Translate
            </Typography>
          </Box>

          <Box //this is code for the logo for desktop/laptop view
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  flexGrow: 1,
                  fontFamily: "Kanit",
                  fontWeight: "900",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                Smart Translate
              </Typography>
            </Link>
          </Box>

          <Box //and this is the code for the links in the toolbar. notice how it's in its own box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            <Link
              href="https://smarttranslate.mintlify.app/introduction"
              target="_blank"
              passHref
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Documentation
              </Button>
            </Link>
            <Link
              href="/translate-video"
              passHref
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Button
                color="inherit"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                Translate Videos
              </Button>
            </Link>
            <Link
              href="/smart-hub"
              passHref
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Button
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "white",
                }}
              >
                Smart Hub
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/*drawer for the mobile view*/}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/">
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="https://smarttranslate.mintlify.app/introduction"
                target="_blank"
              >
                <ListItemText primary="Documentation" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/translate-video">
                <ListItemText primary="Translate Videos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/smart-hub">
                <ListItemText primary="Smart Hub" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Kanit",
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "center",
            background:
              "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
            color: "white",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          The Smart Hub
        </Typography>
      </Box>

      {/*The cards labeling each project*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          padding: "30px",
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ maxWidth: { xs: "100%", sm: 390 } }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/mapofcs.png"
            title="Map of CS"
          ></CardMedia>

          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontFamily: "Kanit", fontWeight: 700 }}
            >
              Smart Study
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontFamily: "Kanit", fontWeight: 700 }}
            >
              Smart Study is made to make life a little bit easier for
              engineering students. This project was created as a free
              alternative to Chegg and Quizlet. Users will have access to
              flashcards, videos, quizzes, worksheets, and plenty of other
              features. A full list of features and upcoming features can be
              found in the documenation.
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              href="https://smartstudycs.vercel.app/"
              target="_blank"
              rel="noopener"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Button>Live Site</Button>
            </Link>

            <Link
              href="https://smartstudy-0f4a59fc.mintlify.app/introduction"
              target="_blank"
              rel="noopener"
            >
              <Button>Documentation</Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: { xs: "100%", sm: 390 } }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/mapofcs.png"
            title="Map of CS"
          ></CardMedia>

          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontFamily: "Kanit", fontWeight: 700 }}
            >
              Smart Stories
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontFamily: "Kanit", fontWeight: 700 }}
            >
              Smart Stories is a project made to create stories, fiction and
              non-fiction. These stories are then posted on social media,
              primarily TikTok and Instagram. The website for this project is
              still in development, no timetable yet, but some stories have
              already been posted on social media, which can be seen by using
              the links below.
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              href="https://smarttranslate.mintlify.app/introduction"
              target="_blank"
              rel="noopener"
            >
              <Button>Documentation</Button>
            </Link>

            <Link
              href="https://www.tiktok.com/@smartstories0"
              target="_blank"
              rel="noopener"
            >
              <Button>TikTok</Button>
            </Link>

            <Button disabled>Instagram</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: { xs: "100%", sm: 390 } }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/mapofcs.png"
            title="Map of CS"
          ></CardMedia>

          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontFamily: "Kanit", fontWeight: 700 }}
            >
              Smart Hoops
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontFamily: "Kanit", fontWeight: 700 }}
            >
              Smart Hoops is a project that is very far away in terms of
              development and production. However, the purpose of this project
              is to serve as a site where users will be able to view NBA scores
              in real time, real time NBA news as well, and have access to real
              time NBA game updates. Users will also be able to participate in
              Fantasy as well.
            </Typography>
          </CardContent>

          <CardActions>
            <Button disabled>Documentation</Button>
          </CardActions>
        </Card>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          height: "auto",
          py: 4,
          pb: 10,
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          paddingTop: "100px"
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
                }}
              >
                Smart Translate
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", fontFamily: "Kanit" }}
              >
                Subscribe to our newsletter
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
                      fontWeight: "900",
                    },
                    "& .MuiInputBase-input": {
                      color: "black",
                      fontFamily: "Kanit",
                      fontWeight: "900",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    background: "primary",
                    transition: "background 0.4s ease-in-out",
                    "&:hover": {
                      background: "rgba(145, 83, 209, 1)",
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

            <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
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
                  href="/aboutus"
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
                  href="/blog"
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
                  Blog
                </Link>
              </Stack>

              {/* References Section */}
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Kanit",
                    fontWeight: "900",
                  }}
                >
                  References
                </Typography>
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

              {/* Legal Section */}
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Kanit",
                    fontWeight: "900",
                  }}
                >
                  Legal
                </Typography>
                <Link
                  href="/privacy"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Privacy
                </Link>
                <Link
                  href="/termsandcond"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "Kanit",
                    fontWeight: "400",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Terms and Conditions
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
