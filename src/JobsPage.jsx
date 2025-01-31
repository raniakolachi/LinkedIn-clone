import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { WorkOutline } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import SecondarySidebar from "./Secondary Sidebar";

const jobsData = [
  {
    
    title: "Frontend Developer",
    company: "Tech Innovators",
    location: "Remote",
    type: "Full-Time",
    description: "Looking for a React developer with experience in MUI and Bootstrap.",
  },
  {
    title: "Backend Developer",
    company: "Code Alpha",
    location: "New York, NY",
    type: "Part-Time",
    description: "Node.js developer needed for building scalable APIs.",
  },
  {
    title: "UI/UX Designer",
    company: "Design Pro",
    location: "San Francisco, CA",
    type: "Freelance",
    description: "Create intuitive user interfaces for web and mobile apps.",
  },
];

const Jobs = () => {
  return (
    <>
      <Sidebar />
      <SecondarySidebar></SecondarySidebar>
      <Container className="my-5">
        <Typography variant="h4" className="text-center"> 
           Top job picks for you
        </Typography> 
        <Typography  className="text-center mb-4"> 
           Top job picks for you
        </Typography>

       
        <Row className="justify-content-center">
          <Col lg={4} md={10} sm={12}>
            {jobsData.map((job, index) => (
              <Card key={index} sx={{ boxShadow: 3, borderRadius: 2, mb: 3, backgroundColor: "#fff" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="body2">{job.company}</Typography>
                  <Typography variant="body2">Location: {job.location}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {job.type}
                  </Typography>
                  <Typography variant="body1" className="mt-2">
                    {job.description}
                  </Typography>
                  <Button variant="outlined" color="primary"className="mt-3">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Typography variant="h4" className="text-center"> 
           Top job picks for you
        </Typography> 
        <Typography  className="text-center mb-4"> 
           Top job picks for you
        </Typography>

       
        <Row className="justify-content-center">
          <Col lg={4} md={10} sm={12}>
            {jobsData.map((job, index) => (
              <Card key={index} sx={{ boxShadow: 3, borderRadius: 2, mb: 3, backgroundColor: "#fff" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="body2">{job.company}</Typography>
                  <Typography variant="body2">Location: {job.location}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {job.type}
                  </Typography>
                  <Typography variant="body1" className="mt-2">
                    {job.description}
                  </Typography>
                  <Button variant="outlined" color="primary"className="mt-3">
                    Apply Now
                  </Button>
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
