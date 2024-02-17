import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Document, PlayCircle } from 'iconsax-react';
import Link from 'next/link';
import { useGetModules } from 'utils/query/GetModulesQuerry';

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

export default function BriefCourseAccordion({ module, slug }) {
  const [expanded, setExpanded] = React.useState();

  console.log(module);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { data: modules } = useGetModules(slug);

  const data = modules?.module;
  console.log('data', data);

  return (
    <>
      {module?.map((item) => (
        <Accordion
          expanded={expanded === `panel${item}`}
          onChange={handleChange(`panel${item}`)}
          className="text-white bg-dark-class"
          key={item}
        >
          <AccordionSummary aria-controls={`panel${1}d-content`} className="">
            <div className="flex justify-between w-full">
              <div className="text-lg font-semibold">{item}</div>
              <div className="">
                <span className="border-r pr-2">6 lectures</span>
                <span className="pl-2">1Hr 5Min</span>
              </div>
            </div>
          </AccordionSummary>

          {data
            ?.filter((filter) => filter.module_name === item)
            .map((topic, index) => (
              <AccordionDetails
                key={index}
                className="border-b border-[#797a7e] text-white"
              >
                <Link href={'/'} className="flex justify-between">
                  {topic.module_type === 'video' ? (
                    <PlayCircle size="28" className="text-blue-500" />
                  ) : (
                    <Document size="28" className="text-blue-500" />
                  )}
                  <div className=" flex items-center">
                    <div className="text-lg leading-[1.5625rem]">
                      &nbsp; {topic.topic_name}
                    </div>
                  </div>
                  <div className="text-right font-['Montserrat'] text-lg leading-[1.5625rem]">
                    {topic.duration || '-- : --'}
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
      ))}
    </>
  );
}
