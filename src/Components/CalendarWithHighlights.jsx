// src/components/CalendarWithHighlights.jsx
import React from 'react';
import { Calendar } from 'react-calendar';

const CalendarWithHighlights = ({ tasks, onDateChange, currentDate }) => {
  const getDateClass = (date) => {
    return tasks.some((task) => new Date(task.dueDate).toDateString() === date.toDateString())
      ? 'bg-blue-200'
      : '';
  };

  return (
    <Calendar
      value={currentDate}
      onChange={onDateChange}
      tileClassName={({ date }) => getDateClass(date)}
    />
  );
};

export default CalendarWithHighlights;
