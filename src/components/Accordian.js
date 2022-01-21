import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaArrowDown } from "react-icons/fa";

export default function SimpleAccordion() {
  return (
      <div id='accordiancontainer'>
          
    <div id="accordion">
    <h2 id="accHeading">Frequently Asked Questions</h2> <br/><br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4 id="accordionHeading">WHAT HAPPENS AFTER I MAKE A PURCHASE?</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After purchasing the course you will land on a page where you will
            be asked to create credentials that you will use to log in to the
            site.<br/><br/> When you log in to the site you will be able to access all the
            content for the course.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h4 id="accordionHeading">HOW LONG DO I HAVE ACCESS TO A COURSE AFTER PURCHASE?</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4 id="accordionHeading">IS THIS A ONE-TIME PAYMENT?</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes!!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4 id="accordionHeading">WHAT PAYMENT OPTIONS DO YOU OFFER?</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can pay using PayPal or a credit/debit card.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4 id="accordionHeading">WHAT IS YOUR RETURN POLICY</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You are eligible for a full refund or exchange if the request is
            made within 7 days from the purchase date. After seven days from the
            purchase date we can not offer you a refund or exchange.
            <br />
            <br /> Please note that progress made on a course that you desire to
            return can not be more than 20 percent.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
