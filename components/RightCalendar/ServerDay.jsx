import React, { useState } from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

function ServerDay(props) {
  const {
    highlightedDays = [],
    day,
    outsideCurrentMonth,
    demoData,
    ...other
  } = props;

  const isSelected = highlightedDays.some((highlightedDate) =>
    day.isSame(dayjs(highlightedDate), 'day')
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Badge
        key={props.day.toString()}
        overlap="circular"
        color="secondary"
        badgeContent={
          isSelected ? (
            <span
              id={day.format('YYYY-MM-DD')}
              className="material-symbols-outlined hover:cursor-pointer popup"
              style={{ fontSize: '15px' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}

            >
              task_alt
            </span>
          ) : undefined
        }
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
      {isHovered && isSelected && (
        <div className="popup bg-purple-700 text-white w-16  -right-4 text-xs  h-9 rounded-xl  grid place-content-center cursor-pointer absolute -top-12 z-50 opacity-100">
          {demoData.map((item , index) =>
            day.isSame(dayjs(item.date), 'day') ? (
              <div key={index} className="popup-text hover:pointer z-50">
                {item.text}
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default ServerDay;
