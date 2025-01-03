"use client";
import { useState } from "react";
import {Box, Typography, AppBar, Toolbar, IconButton, Button, List, ListItem, ListItemButton, ListItemText, Drawer} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function TranslateVideo() {
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
    </>
  );
}