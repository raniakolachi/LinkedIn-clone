import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Typography, Divider } from "@mui/material";
import SecondarySidebar from "./Secondary Sidebar";

const ProfileDetails = () => {
  return (
    <div>
     <SecondarySidebar></SecondarySidebar>
      <div
        style={{
          backgroundImage: `url("https://media.licdn.com/dms/image/v2/D5616AQG2NULRP75-Mw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1737610197014?e=1743638400&v=beta&t=3ws9HE3Xl5vhB70VCRoRt1Ji3i4g9yt6ut89JzwsKE0")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          height: "40vh", 
          width: window.innerWidth >= 992 ? "80%" : "100%", 
          position: "relative",
        }}
      >

        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE40U7x-Z5jgA/profile-displayphoto-shrink_400_400/B56ZSRsJbqHwAg-/0/1737611057507?e=1743638400&v=beta&t=tjKaZuEkBPM8j6mLWpT214-vCnG3d0etwZHQrNPx1s8"
            alt="Rania Majeed"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      
      <Container className="pt-5">
        
        <Row>
          <Col md={12} >
            <Typography variant="h4" gutterBottom style={{ fontWeight: "bold" }}>
              Rania Majeed
            </Typography>
            <Typography variant="h6" gutterBottom>
              Frontend Web Developer | HTML5 | CSS3 | JavaScript | React.js
            </Typography>
            <Typography variant="body1" gutterBottom>
              Innovation and Creative Web Designs
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{
                fontSize: "0.9rem",
              }}
            >
              Karachi Division, Sindh, Pakistan | raniamajeed554@gmail.com
            </Typography>
            <Button variant="outline-primary" className="mt-3 rounded-pill text-white border-white bg-primary">
  Open to
</Button>
<Button variant="outline-primary" className="mt-3 mx-3 rounded-pill text-primary border-primary bg-white">
  Add profile section
</Button>
<Button variant="outline-primary" className="mt-3 rounded-pill text-primary border-primary bg-white">
  Enhance profile
</Button>
<Button variant="outline-primary" className="mt-3 ms-3 rounded-pill text-primary border-primary bg-white">
  Resources
</Button>

          </Col>
        </Row>


        <Divider
          style={{
            backgroundColor: "#fff",
            margin: "30px 0",
            opacity: "0.6",
          }}
        />

        
        <Row>
          <Col md={12} >
            <Typography
              variant="h5"
              gutterBottom
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              style={{
                lineHeight: "1.8",
              }}
            >
              Passionate Frontend Developer with experience in creating responsive and
              user-friendly web applications. Skilled in React.js, JavaScript, HTML5, CSS3,
              and Bootstrap. Dedicated to delivering innovation and creative web designs.
            </Typography>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileDetails;
