import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Typography, Divider, Box, Avatar } from "@mui/material";
import SecondarySidebar from "./Secondary Sidebar";

const ProfileDetails = () => {
  return (
    <>
      <SecondarySidebar></SecondarySidebar>
      <Box
        display="flex"
        justifyContent={{ xs: "center", md: "center", lg: "start" }}
        p={1}
      >
        <Card
          style={{
            width: { xs: "90%", sm: "50%", md: "50%" },
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Card
            style={{
              backgroundImage: `url("https://media.licdn.com/dms/image/v2/D5616AQG2NULRP75-Mw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1737610197014?e=1743638400&v=beta&t=3ws9HE3Xl5vhB70VCRoRt1Ji3i4g9yt6ut89JzwsKE0")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "30vh",
              position: "relative",
              borderRadius: "10px",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: "80%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQE40U7x-Z5jgA/profile-displayphoto-shrink_400_400/B56ZSRsJbqHwAg-/0/1737611057507?e=1743638400&v=beta&t=tjKaZuEkBPM8j6mLWpT214-vCnG3d0etwZHQrNPx1s8"
                alt="Rania Majeed"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Card>

          <Container className="pt-5">
            <Row>
              <Col md={12}>
                <Box className="d-flex justify-content-between ">
                  <Box>
                    <Typography variant="h4" gutterBottom fontWeight="bold">
                      Rania Majeed
                    </Typography>
                    <Typography variant="body5" gutterBottom>
                      Frontend Web Developer | HTML5 | CSS3 | JavaScript |
                      React.js
                    </Typography>
                  </Box>
                  <Box>
                    <Box className="d-flex">
                      <Box>
                        <Avatar
                          variant="square"
                          sx={{ width: 40, height: 40 }}
                          src="https://media.licdn.com/dms/image/v2/C4D0BAQGk3dbR-CLCqw/company-logo_100_100/company-logo_100_100/0/1663928458296/xwavepak_logo?e=1746662400&v=beta&t=xxhi_BG_-qe5Ns4j8Me7XU8BQLdfuT2ib1bB-jZPizw"
                        ></Avatar>
                      </Box>
                      <Box>
                        <Typography className="ms-3" variant="body6">
                          xWave
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="d-flex mt-3">
                      <Box>
                        <Avatar
                          variant="square"
                          sx={{ width: 40, height: 40 }}
                          src="https://www.linkedin.com/search/results/all/?keywords=Govt+Girls+Collage+&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BUbpTu5oUTW2Cy79tqxBxuw%3D%3D"
                        ></Avatar>
                      </Box>
                      <Box>
                        <Typography className="ms-3" variant="body6">
                          Govt Girls Collage
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Typography variant="body1" gutterBottom>
                  Innovation and Creative Web Designs
                </Typography>
                <Typography variant="body2" gutterBottom fontSize="0.9rem">
                  Karachi Division, Sindh, Pakistan | raniamajeed554@gmail.com
                </Typography>
                <Button variant="outline-primary" className="mt-3 rounded-pill">
                  Open to
                </Button>
                <Button
                  variant="outline-primary"
                  className="mt-3 mx-3 rounded-pill"
                >
                  Add profile section
                </Button>
                <Button variant="outline-primary" className="mt-3 rounded-pill">
                  Enhance profile
                </Button>
                <Button
                  variant="outline-primary"
                  className="mt-3 ms-3 rounded-pill"
                >
                  Resources
                </Button>
              </Col>
            </Row>

            <Divider style={{ backgroundColor: "#ccc", margin: "30px 0" }} />

            <Row>
              <Col md={12}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  About Me
                </Typography>
                <Typography variant="body1" style={{ lineHeight: "1.8" }}>
                  Passionate Frontend Developer with experience in creating
                  responsive and user-friendly web applications. <br></br>
                  Skilled in React.js, JavaScript, HTML5, CSS3, and Bootstrap.
                  Dedicated <br></br> to delivering innovation and creative web
                  designs.
                </Typography>
              </Col>
            </Row>
          </Container>
        </Card>
      </Box>
      <Box
        display="flex"
        justifyContent={{ xs: "center", md: "center", lg: "start" }}
        p={3}
      >
        <Card
          style={{
            width: { xs: "90%", sm: "50%", md: "50%" },
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Container className="pt-5">
            <Row>
              <Col md={12}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Activity
                </Typography>

                <Typography variant="body1" gutterBottom>
                  10 followers
                </Typography>
                <Button
                  variant="outline-success"
                  className="bg-success text-white me-4 mb-2 rounded-pill"
                >
                  POST
                </Button>
                <Button
                  variant="outline-success"
                  className=" mb-2 rounded-pill"
                >
                  Comment
                </Button>
                <Typography variant="body2" gutterBottom fontSize="0.9rem">
                  Rania Majeed posted this • 53m
                </Typography>
                <Box className="d-flex ">
                  <Box>
                    <Avatar
                      variant="square"
                      sx={{ width: 60, height: 60 }}
                      src="https://media.licdn.com/media/AAYQAQQSAAgAAQAAAAAAABqdcB5EZ18gQPCF4HzBOFBBhw.gif"
                    ></Avatar>
                  </Box>
                  <Box>
                    <Typography
                      className="ms-3 mt-3"
                      variant="body2"
                      gutterBottom
                      fontSize="0.9rem"
                    >
                      I’m happy to share that I’m starting a new position as
                      Frontend Development Intern a CognoRise InfoTech!
                    </Typography>
                  </Box>
                </Box>
              </Col>
            </Row>

            <Divider style={{ backgroundColor: "#ccc", margin: "30px 0" }} />
            <Box className="d-flex ">
              <Box>
                <Avatar
                  variant="square"
                  sx={{ width: 60, height: 60 }}
                  src="https://media.licdn.com/media/AAYQAQQSAAgAAQAAAAAAABgBrZ2daanMQJ-egBdqUfzcNg.gif"
                ></Avatar>
              </Box>
              <Box>
                <Typography
                  className="ms-3 mt-3"
                  variant="body2"
                  gutterBottom
                  fontSize="0.9rem"
                >
                  It’s been a while since I started my role at xWave as a Web
                  Developer, but I wanted to<br></br> share this update with
                  everyone.
                </Typography>
              </Box>
            </Box>
            <Divider style={{ backgroundColor: "#ccc", margin: "30px 0" }} />
            <Box className="d-flex ">
              <Box>
                <Avatar
                  variant="square"
                  sx={{ width: 60, height: 60 }}
                  src="https://media.licdn.com/media/AAYQAQQSAAgAAQAAAAAAABqdcB5EZ18gQPCF4HzBOFBBhw.gif"
                ></Avatar>
              </Box>
              <Box>
                <Typography
                  className="ms-3 mt-3"
                  variant="body2"
                  gutterBottom
                  fontSize="0.9rem"
                >
                  I’m happy to share that I’m starting a new position as
                  Frontend Development Intern at CognoRise InfoTech!
                </Typography>
              </Box>
            </Box>
            <Divider style={{ backgroundColor: "#ccc", margin: "30px 0" }} />
            <Typography
              className="d-flex justify-content-center"
              variant="body2"
              gutterBottom
              fontWeight="bold"
            >
              Show all posts
            </Typography>
          </Container>
        </Card>
      </Box>
    </>
  );
};

export default ProfileDetails;
