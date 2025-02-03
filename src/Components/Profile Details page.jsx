import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Typography, Divider, Box, Avatar } from "@mui/material";
import SecondarySidebar from "./Secondary Sidebar";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import bnnerImg from './assets/bnner.png';

const ProfileDetails = () => {
  return (
    <>
      <SecondarySidebar></SecondarySidebar>
      <Box
        display="flex"
        justifyContent={{ xs: "center", md: "center", lg: "start" }}
        p={4}
      >
        <Card  className="img-fluid" 
          style={{
            width: { xs: "30%", sm: "50%", md: "50%" },
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
        <Card   className="img-fluid" 
  style={{
    backgroundImage: `url(${bnnerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "30vh",
    position: "relative",
    borderRadius: "10px",
    objectFit: "cover",
   
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
      src="https://media.licdn.com/dms/image/v2/D5635AQGboRNCTDusBQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1738561465276?e=1739167200&v=beta&t=5XpakMj5Ea7DqeUnNg-d58gbr2KEgAUcZurQvxb4Z50"
      alt="Rania Majeed"
      className="img-fluid" 
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
              <Box className="d-flex  justify-content-between">
                <Box>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Activity
                </Typography>
                </Box>
                <Box>
                <Button
                  variant="outline-primary"
                  className="text-gray me-4 mb-2 rounded-pill"
                >
                  Create a post


                </Button>
                </Box>
                </Box>

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
              <Box className="d-flex  justify-content-between">
                <Box>
                <Typography variant="h6"  fontWeight="bold">
                Experience
                </Typography>
                </Box>
                <Box>
                <Button
                  variant="outline-primary"
                  className="text-gray me-4 mb-2 rounded-pill"
                >
                  Create a post


                </Button>
                </Box>
                </Box>

               
                <Box className="d-flex ">
                  <Box>
                    <Avatar
                      variant="square"
                      sx={{ width: 60, height: 60 }}
                      src="https://media.licdn.com/dms/image/v2/C4D0BAQGk3dbR-CLCqw/company-logo_200_200/company-logo_200_200/0/1663928458296/xwavepak_logo?e=1746662400&v=beta&t=5k-GBv47AdZnk6kH6AI7_5-YK20b_TGLTKRIpgCmq1I"
                    ></Avatar>
             
                  </Box>
                
                    <Box>
                    <Typography
                      className="ms-3 mt-2"
                      variant="h3"
                      gutterBottom
                      fontSize="0.9rem"
                    >
                     Frontend Development Student
                    </Typography>
                    
                   
                   
                    <Typography  className="ms-3"  variant="body6">
                    xWave · Full-time
                    </Typography>
                    <br></br>
                    <Typography  className="ms-3" variant="body6" >Jan 2024 - Present · 1 yr 1 mo
                    </Typography>
                    <br></br>
                    <Typography  className="ms-3" variant="body6" >Pakistan
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
                  src="https://media.licdn.com/dms/image/v2/D560BAQE_61NZJi1Tqg/company-logo_200_200/company-logo_200_200/0/1693071294324?e=1746662400&v=beta&t=NUy1JtiKu8TmqnqQLQLdcjgptQITBzvys8dMAUQZvwo"
                ></Avatar>
              </Box>
              <Box>
                <Box className="d-flex justify-content-between">
                <Typography
                  className="ms-3 mt-3"
                  variant="body2"
                  gutterBottom
                  fontSize="0.9rem"
                >
                Frontend Development Intern
                </Typography>
                <Box>
                      <AddIcon className="me-3" ></AddIcon>
                      <EditIcon></EditIcon>
                    </Box>
                    </Box>
                <Typography  className="ms-3"  variant="body6">
                CognoRise InfoTech · Internship
                    </Typography>
                    <br></br>
                    <Typography  className="ms-3" variant="body6" >Aug 2024 - Jan 2025 · 6 mos
                    </Typography>
                    <br></br>
                    <Typography  className="ms-3" variant="body6" >India · Remote
                    </Typography>
                    <Typography className="ms-3">Completed three functional projects: a Currency Converter, a Quiz App, and a
                    Stopwatch. Utilized <br></br>features such as dropdowns and hovereffects, employing</Typography>
              </Box>
            </Box>
           
            <Divider style={{ backgroundColor: "#ccc", margin: "30px 0" }} />
            <Typography
              className="d-flex justify-content-center"
              variant="body2"
              gutterBottom
              fontWeight="bold"
            >
              See more...
            </Typography>
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
              <Box className="d-flex  justify-content-between">
                <Box>
                <Typography variant="h6"  fontWeight="bold">
                projects
                </Typography>
                </Box>
                <Box>
                <AddIcon></AddIcon>
                <EditIcon className="ms-3"></EditIcon>
                </Box>
                </Box>

               
                
                  
                
                    <Box>
                    <Typography
                      className=" mt-2"
                      variant="h3"
                      gutterBottom
                      fontSize="0.9rem"
                    >
                    ORGANIC FOOD WEBSITE
                    </Typography>
                    
                   
                   
                    <Typography    variant="body6">
                    Oct 2024
                    </Typography>
                    <br></br>
                    <Typography  variant="body6" >Developed a fully responsive multi-page website using the Bootstrap Grid system. Implemented <br></br> Add-to-Cart functionality with JavaScript, showcasing expertise in <br></br> creating landing  pages compatible with all devices.
                    </Typography>
                    <Box >
                    <Box className="d-flex">
                    <Avatar
                      variant="square"
                      sx={{ width: 100, height: 100 }}
                      src="https://media.licdn.com/dms/image/v2/D562DAQE8rUH4cVff3w/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1737616372296?e=1738926000&v=beta&t=nG1dr3Xaap3Rrs_VKGEVtjDsxjdC0Z63nKvXc-uLgr0"
                    ></Avatar>
                    <Box className="mt-5 ms-4">
                      <Typography variant="body6"> Food Store</Typography>
                    </Box>
                    </Box>
             
                  </Box>
                   
                </Box>
              </Col>
            </Row>

            <Divider style={{ backgroundColor: "#ccc", margin: "30px 0" }} />
             <Typography></Typography>
              
              
               <Box className="d-flex d-flex justify-content-between ">
               
               <Box>
                <Typography  className="ms-3"  variant="body6">
                Architecture Planning Designs
                    </Typography>
                    </Box>
                    <Box>
                      <AddIcon className="me-3" ></AddIcon>
                      <EditIcon></EditIcon>
                    </Box>
                    </Box>
                   
                    <Typography  className="ms-3" variant="body6" >Jul 2024
                    </Typography>
                    <br></br>
                  
                    <Typography className="ms-3">Developed a fully responsive multi-page website using the Bootstrap Grid system—showcasing expertise <br></br>in creating landing pages compatible with all devices.
              </Typography>
              <Box >
                    <Box className="d-flex">
                    <Avatar className="mt-3 rounded-4"
                      variant="square"
                      sx={{ width: 80, height: 80 }}
                      src="https://media.licdn.com/dms/image/v2/D562DAQFudlZmcZuRHA/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1737616113803?e=1738929600&v=beta&t=0x5Cq-U2BToxcOXn0-Iy3dwhjKdrGpcTtFTHiBkHaGU"
                    ></Avatar>
                    <Box className="mt-5 ms-4 ">
                      <Typography variant="body6"> Architecture Planning Designs</Typography>
                    </Box>
                    </Box>
             
                  </Box>
                   
          
           
            <Divider style={{ backgroundColor: "#ccc", margin: "30px 0" }} />
            <Typography
              className="d-flex justify-content-center"
              variant="body2"
              gutterBottom
              fontWeight="bold"
            >
              See more...
            </Typography>
          </Container>
        </Card>
  
    
      </Box>
    
    
     
    </>
  );
};

export default ProfileDetails;
