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
          position: "static"
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
            background: "linear-gradient(90deg, #131313, #151c18, #17241c, #172d21, #173726, #16402a, #134a2f, #0e5434)",
            display: "flex", flexDirection: "row",
            paddingBottom: "40px",
            justifyContent: "center",
            gap: 5,
            paddingTop: "50px"
        }}
      >
        <Card sx = {{maxWidth: { xs: "100%", sm: 390 }}}>
            <CardMedia
                component = "img"
                image="/mapofcs.png"
                height= "140px"
                alt= "Map of CS"
            >
            </CardMedia>
            <CardContent>
                <Typography sx = {{fontFamily: "Kanit", textTransform: "uppercase", fontWeight: 700, marginBottom: "15px", fontSize: "1.25rem", textAlign: "center"}}>
                    Smart Study
                </Typography>
                <Typography
                    sx = {{
                        fontFamily: "Kanit",
                    }}
                >
                    Smart Study is made to make life a little bit easier for engineering students. 
                    This project was created as a free alternative to Chegg and Quizlet. Users will 
                    have access to flashcards, videos, quizzes, worksheets, and plenty of other features. 
                    A full list of features and upcoming features can be found in the documenation below.
                </Typography>
            </CardContent>
            <CardActions sx = {{justifyContent: "center"}}>
                <Link href="#">
                    <Button>Visit Site</Button>
                </Link>

                <Link href = "#" target="_blank">
                    <Button>Socials</Button>
                </Link>

                <Link href="#">
                    <Button>Documentation</Button>
                </Link>
            </CardActions>
        </Card>

        <Card sx = {{maxWidth: { xs: "100%", sm: 390 }}}>
            <CardMedia
                component = "img"
                image="/mapofcs.png"
                height= "140px"
                alt= "Map of CS"
            >
            </CardMedia>
            <CardContent>
                <Typography sx = {{fontFamily: "Kanit", textTransform: "uppercase", fontWeight: 700, marginBottom: "15px", fontSize: "1.25rem", textAlign: "center"}}>
                    Smart Stories
                </Typography>
                <Typography sx = {{fontFamily: "Kanit"}}>
                    Smart Stories is made to hear from people, specifically their stories. This project
                    is still in development but the purpose of this is to allow users to submit stories of
                    horror or crime events that happened to them. It is then posted on social media such as
                    Instagram, YouTube, and TikTok. This aims to create a community who appreciates the thrill of the unknown.
                </Typography>
            </CardContent>
            <CardActions sx = {{justifyContent: "center"}}>
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

        <Card sx = {{maxWidth: { xs: "100%", sm: 390 }}}>
            <CardMedia
                component = "img"
                image="/mapofcs.png"
                height= "140px"
                alt= "Map of CS"
            >
            </CardMedia>
            <CardContent>
                <Typography sx = {{fontFamily: "Kanit", textTransform: "uppercase", fontWeight: 700, marginBottom: "15px", fontSize: "1.25rem", textAlign: "center"}}>
                    Smart Hoops
                </Typography>
                <Typography sx = {{fontFamily: "Kanit", fontWeight: 500}}>
                    Smart Hoops is a project that is very far away in terms of development and production. 
                    However, the purpose of this project is to serve as a site where users will be able to 
                    view NBA scores in real time, real time NBA news as well, and have access to real time 
                    NBA game updates. Users will also be able to participate in Daily Fantasy as well.
                </Typography>
            </CardContent>
            <CardActions sx = {{justifyContent: "center"}}>
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
    </>
  );
}
