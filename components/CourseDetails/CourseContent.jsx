import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const androidTopics = [
  {
    id: 1,
    title: 'Introduction to Android',
    content: 'Learn about the basics of Android development.',
  },
  {
    id: 2,
    title: 'UI Design in Android',
    content: 'Explore how to create user interfaces in Android apps.',
  },
  {
    id: 3,
    title: 'Working with Android APIs',
    content: 'Understand how to use Android APIs to add functionality.',
  },
  {
    id: 4,
    title: 'Database Integration',
    content: 'Learn how to work with databases in Android applications.',
  },
  {
    id: 5,
    title: 'Networking and Web Services',
    content: 'Discover how to implement network requests in Android.',
  },
  {
    id: 6,
    title: 'Material Design Guidelines',
    content: "Explore Google's Material Design principles for Android apps.",
  },
  {
    id: 7,
    title: 'Background Processing',
    content: 'Learn how to perform tasks in the background in Android.',
  },
  {
    id: 8,
    title: 'Debugging and Testing',
    content: 'Understand techniques for debugging and testing Android apps.',
  },
  {
    id: 9,
    title: 'App Publishing and Distribution',
    content:
      'Discover the process of publishing an Android app to the Play Store.',
  },
  {
    id: 10,
    title: 'Localization and Internationalization',
    content:
      'Learn how to make your Android app accessible to a global audience.',
  },
  {
    id: 11,
    title: 'Security and Permissions',
    content:
      'Understand security practices and permissions in Android development.',
  },

  //Modules -> Lessons -> Videos / Docs => It can be nested. What can be done is inside one content (Accordion), devs can create a conditionally rendering tab layout depending upon the to be rendered data
  // THis means, suppose if there's maths and science (for eg). For maths, handwritten or reading notes are there. It may be possible that some math lessons have lectures some may not have that.
  // In case of science, reading notes are there including a video lecture. So, under one accordion we can have tab layout on top.
  // About this tab layout, it'll render the tabs if and only if the data to be rendered is present in the api. IF the api data is null, that specific tab wouln't render
  // Now, under one accordion, we have this tab layout, using this we can render different data for different purpose, i.e, video lecture/reading material
  {
    id: 12,
    title: 'Firebase Integration',
    content:
      'Explore how to integrate Firebase services into your Android app.',
  },
];

export default function CourseContent() {
  return (
    <div className="p-4">
      {androidTopics.map((topic) => (
        <Accordion
          key={topic.id}
          style={{ border: '2px solid #2D3748', borderRadius: '6px' }}
          className="mb-2"
        >
          <AccordionSummary
            expandIcon={
              <span className="material-symbols-outlined text-white w-fit">
                expand_more
              </span>
            }
            aria-controls={`panel${topic.id}-content`}
            id={`panel${topic.id}-header`}
          >
            <Typography style={{ fontWeight: '600' }}>{topic.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: '#CBD5E0' }}>
              {topic.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
