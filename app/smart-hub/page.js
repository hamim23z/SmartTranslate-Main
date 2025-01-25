import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function SmartHub() {
  return (
    <>
      <AppBar
        sx={{
          background:
            "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
          paddingTop: "5px",
          paddingBottom: "5px",
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
      
    </>
  );
}
