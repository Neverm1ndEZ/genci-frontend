'use client';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import ServerDay from './ServerDay';
import { useTodos } from '../../utils/query/TodoQuery';

function DateCalendarServerRequest() {
  const { data: fetchedTodos } = useTodos();

  const highlightedDates = fetchedTodos
    ? fetchedTodos?.allTodo?.map((todo) => todo.date)
    : [];

  const calendarRef = useRef();

  const handleYearChange = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollTo(0, 0);
    }
  };

  return (
    <div className="scale-90 xl:scale-100">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          ref={calendarRef}
          onYearChange={handleYearChange}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: (props) => (
              <ServerDay {...props} demoData={fetchedTodos?.allTodo} />
            ),
          }}
          slotProps={{
            day: {
              highlightedDays: highlightedDates,
            },
          }}
        />
      </LocalizationProvider>
      <style>
        {`.MuiButtonBase-root,
          .MuiPickersDay-root,
          .MuiPickersDay-dayWithMargin,
          .MuiTypography-root,
          .MuiTypography-caption,
          .MuiDayCalendar-weekDayLabel {
            height: 34px !important;
            width: 34px !important;
            color: white !important;
            font-size: 13px !important;
            font-family: 'Montserrat';
          }
        `}
      </style>
    </div>
  );
}

export default dynamic(() => Promise.resolve(DateCalendarServerRequest), {
  ssr: false,
});
