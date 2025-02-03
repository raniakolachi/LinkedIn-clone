import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const jobsData = [
  {
    title: "Frontend Developer",
    company: "Tech Innovators",
    location: "Remote",
    type: "Full-Time",
    description: "Looking for a React developer with experience in MUI and Bootstrap.",
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQFfbDfn5BNehQ/img-crop_100/img-crop_100/0/1738299533486?e=1746662400&v=beta&t=uCQ5BC1gXeyYP5-Sl64AAzndQ5Sfti6pAHHViOvYMAM", 
  },
  {
    title: "Backend Developer",
    company: "Jeeny",
    location: "New York, NY",
    type: "Part-Time",
    description: "Node.js developer needed for building scalable APIs.",
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQHqZavfwYJfUw/company-logo_100_100/company-logo_100_100/0/1706257375375/jeenyme_logo?e=1746662400&v=beta&t=OxSojjlYTKvGfBRzLsw3pClC5ncH7vpLidiPxI7nI_I", 
  },
  {
    title: "UI/UX Designer",
    company: "Design Pro",
    location: "San Francisco, CA",
    type: "Freelance",
    description: "Create intuitive user interfaces for web and mobile apps.",
    image: "https://media.licdn.com/dms/image/v2/D560BAQEbeTq6uMC-jQ/company-logo_100_100/company-logo_100_100/0/1727444042631/getsnippet_logo?e=1746662400&v=beta&t=F7arWr43-R4udj4QtMX3cNtkpmi7lUcLDLz9hQteJLQ", 
  },
];

const Jobs = () => {
  return (
    <>
      <Sidebar />

      <Container className="my-5">
        <Typography variant="h4" className="text-center">
          Top job picks for you
        </Typography>
        <Typography className="text-center mb-4">Top job picks for you</Typography>

        <Row className="justify-content-end">
          <Col lg={10} md={10} sm={12}>
            {jobsData.map((job, index) => (
              <Card key={index} sx={{ boxShadow: 3, borderRadius: 2, mb: 3, marginLeft: "20px",  backgroundColor: "#fff" }}>
                <CardContent>
                  {/* Image Before Title */}
                  <Box display="flex" alignItems="center" flexDirection="row">
                    <img src={job.image} alt="Job" style={{ width: 40, height: 40, marginRight: 10 }} />
                    <Typography variant="h6" gutterBottom>
                      {job.title}
                    </Typography>
                  </Box>
                  <Box className="ms-5">

                  <Typography variant="body2">{job.company}</Typography>
                  <Typography variant="body2">Location: {job.location}</Typography>
                  <Typography variant="body2" color="text.secondary">Type: {job.type}</Typography>
                  <Typography variant="body1" className="mt-2">{job.description}</Typography>

                  <Button
                    variant="outlined"
                    color="primary"
                    className="mt-3"
                    component={Link}
                    to="/job-details"
                  >
                   View
                  </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
       
        <Row className="justify-content-end">
          <Col lg={10} md={10} sm={12}>
            {jobsData.map((job, index) => (
              <Card key={index} sx={{ boxShadow: 3, borderRadius: 2, mb: 3, marginLeft: "20px",  backgroundColor: "#fff" }}>
                <CardContent>
                 
                  <Box display="flex" alignItems="center" flexDirection="row">
                    <img src={job.image} alt="Job" style={{ width: 40, height: 40, marginRight: 10 }} />
                    <Typography variant="h6" gutterBottom>
                      {job.title}
                    </Typography>
                  </Box>
                  <Box className="ms-5">

                  <Typography variant="body2">{job.company}</Typography>
                  <Typography variant="body2">Location: {job.location}</Typography>
                  <Typography variant="body2" color="text.secondary">Type: {job.type}</Typography>
                  <Typography variant="body1" className="mt-2">{job.description}</Typography>

                  <Button
                    variant="outlined"
                    color="primary"
                    className="mt-3"
                    component={Link}
                    to="/job-details"
                  >
                    View
                  </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Jobs;
