import { Typography } from "@mui/material";
import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Button,
  Grid,
} from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";


function JobSidebar() {
  return (
    <>
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6">Filters</Typography>
        
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Job Category
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel control={<Checkbox />} label="Software Engineering" />
            <FormControlLabel control={<Checkbox />} label="Marketing" />
            <FormControlLabel control={<Checkbox />} label="Product Management" />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Location
          </AccordionSummary>
          <AccordionDetails>
            <select className="form-select w-100">
              <option>All Locations</option>
              <option>New York</option>
              <option>San Francisco</option>
              <option>Remote</option>
            </select>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Experience Level
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel control={<Checkbox />} label="Entry-Level" />
            <FormControlLabel control={<Checkbox />} label="Mid-Level" />
            <FormControlLabel control={<Checkbox />} label="Senior-Level" />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Job Type
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel control={<Checkbox />} label="Full-Time" />
            <FormControlLabel control={<Checkbox />} label="Part-Time" />
            <FormControlLabel control={<Checkbox />} label="Contract" />
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
    
    </>
  );
}


function JobDetailsPage() {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    alert("Application Submitted Successfully!");
  };

  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12} md={8}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <CardHeader
              title="Frontend Developer"
              subheader="TechCorp"
              sx={{ backgroundColor: "#1976d2", color: "white" }}
            />
            <CardContent>
              <Typography variant="h6">Job Location: Remote</Typography>
              <Typography variant="h6">Job Type: Full-time</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Description:</strong> We are looking for a talented
                Frontend Developer to join our growing team. You will work
                closely with UX/UI designers to build modern and responsive
                user interfaces...
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Skills Required:</strong> React, JavaScript, HTML5, CSS3,
                Responsive Design, Version Control (Git)
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Experience:</strong> 2+ years of professional
                experience in front-end development...
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Salary:</strong> $60,000 - $80,000
              </Typography>
            </CardContent>

           
            <CardContent>
              <Typography variant="h6">About the Company</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                TechCorp is a leading software development company focused on
                providing innovative solutions for businesses worldwide...
              </Typography>
            </CardContent>

          
            <CardContent sx={{ textAlign: "center", backgroundColor: "#f5f5f5" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: applied ? "green" : "primary.main",
                  color: "#fff",
                  "&:hover": { backgroundColor: applied ? "darkgreen" : "primary.dark" },
                }}
                onClick={handleApply}
                disabled={applied}
              >
                {applied ? "Applied" : "Apply Now"}
              </Button>
            </CardContent>
          </Card>
        </Grid>

      
        <Grid item xs={12} md={4}>
          <JobSidebar />
        </Grid>
      </Grid>
    </Container>
  );
}


export default JobDetailsPage;
