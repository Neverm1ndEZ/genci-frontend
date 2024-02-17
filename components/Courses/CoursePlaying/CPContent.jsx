import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { PlayCircle } from 'iconsax-react';
import Link from 'next/link';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CPContent({ id }) {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === `panel${id}`}
      onChange={handleChange(`panel${id}`)}
      className="text-white bg-dark-class"
    >
      <AccordionSummary aria-controls={`panel${1}d-content`} className="">
        <div className="flex justify-between w-full">
          <div className="text-lg font-semibold">Course Content</div>
          <div className="">
            <span className="border-r pr-2">6 lectures</span>
            <span className="pl-2">1Hr 5Min</span>
          </div>
        </div>
      </AccordionSummary>
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <AccordionDetails
          key={index}
          className="border-b border-[#797a7e] text-white"
        >
          <Link href={'/'} className="flex justify-between">
            <div className=" flex items-center">
              <PlayCircle size="28" className="text-blue-500" />
              <div className="text-lg leading-[1.5625rem]">
                {' '}
                &nbsp; Introduction to thr User Experience Course
              </div>
            </div>
            <div className="text-right font-['Montserrat'] text-lg leading-[1.5625rem]">
              30:30
            </div>
          </Link>
        </AccordionDetails>
      ))}

      <style>
        {`.bg-dark-class{
            background: none !important;
          }`}
      </style>
    </Accordion>
  );
}
