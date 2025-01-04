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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function SmartHub() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

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
                fontFamily: "Kanit, sans-serif",
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
                  fontFamily: "Kanit, sans-serif",
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
                  fontFamily: "Kanit, sans-serif",
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
                  fontFamily: "Kanit, sans-serif",
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
        <Typography variant="h2"
          sx = {{
            fontFamily: "Kanit",
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "center",
            background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
            color: "white",
            paddingTop: "30px",
            paddingBottom: "50px"
          }}
        >
          The Smart Hub
        </Typography>
      </Box>

      {/*The cards labeling each project*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          padding: "30px",
          gap: 5,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
       <Card sx={{ maxWidth: 390 }}>
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
              Smart Study is made to make life a little bit easier for engineering students. This project was created as a free 
              alternative to Chegg and Quizlet. Users will have access to flashcards, videos, quizzes, worksheets, and plenty of
              other features. A full list of features and upcoming features can be found in the documenation. 
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              href="https://smartstudycs.vercel.app/"
              target="_blank"
              rel="noopener"
              style={{
                textDecoration: "none",
                color: "black"
              }}
            >
              <Button>
                Live Site
              </Button>
            </Link>

            <Link 
              href="https://smartstudy-0f4a59fc.mintlify.app/introduction"
              target="_blank"
              rel="noopener"
            >
              <Button>
                Documentation
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 390 }}>
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
              Smart Stories is a project made to create stories, fiction and non-fiction. These stories are then posted on social media,
              primarily TikTok and Instagram. The website for this project is still in development, no timetable yet, but some stories have already been posted
              on social media, which can be seen by using the links below. 
            </Typography>
          </CardContent>

          <CardActions>
            <Link
              href="https://smarttranslate.mintlify.app/introduction"
              target="_blank" rel="noopener"
            >
              <Button>
                Documentation
              </Button>
            </Link>
            
            
            <Link
              href="https://www.tiktok.com/@smartstories0"
              target="_blank"
              rel="noopener"
            >
            
              <Button>
                TikTok
              </Button>
            </Link>

            <Button disabled>Instagram</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 390 }}>
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
              Smart Hoops is a project that is very far away in terms of development and production. However, the purpose
              of this project is to serve as a site where users will be able to view NBA scores in real time, real time
              NBA news as well, and have access to real time NBA game updates. Users will also be able to participate in
              Fantasy as well. 
            </Typography>
          </CardContent>

          <CardActions>
            <Button disabled>Documentation</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
