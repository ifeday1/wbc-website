import { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  getDay,
  isSunday,
  isWednesday,
  getDate,
  isToday,
} from 'date-fns';

const specialSundays = {
  '2025-03-09': [{ title: 'Annual Societal Thanksgiving', time: '8:00 AM' }],
  '2025-04-06': [{ title: 'Refresh your soul.', time: '8:00 AM' }],
  '2025-05-12': [{ title: 'Children’s Day Special', time: '8:30 AM' }],
};

const generateEvents = (daysInMonth) => {
  const events = {
    '2025-03-08': [{ title: 'Winners Workers Seminar', time: '9:30 AM' }],
    '2025-03-22': [{ title: ' Super Power Evening (SPE)', time: '6:00 PM' }],
    '2025-04-18': [{ title: 'Good Friday.', time: '9:00 AM' }],

    '2025-04-21': [{ title: 'Easter Monday', time: '' }],
    '2025-04-25': [{ title: 'Miracle Night', time: '11:50 PM' }],
  };

  daysInMonth.forEach((day) => {
    const dateKey = format(day, 'yyyy-MM-dd');
    const dayOfMonth = getDate(day);

    // Custom Special Sundays
    if (isSunday(day) && specialSundays[dateKey]) {
      events[dateKey] = specialSundays[dateKey];
    } else if (isSunday(day)) {
      if (dayOfMonth <= 7) {
        events[dateKey] = [{ title: 'Sunday Service', time: '8:00 AM' }];
      } else {
        events[dateKey] = [
          { title: 'English Service', time: '7:30 AM' },
          { title: 'Yoruba Service', time: '9:00 AM' },
        ];
      }
    }

    // Every 1st Day of the Month - "In the Boat with Jesus" at 6:00 AM
    if (dayOfMonth === 1) {
      events[dateKey] = [{ title: 'In the Boat with Jesus', time: '6:00 AM' }];
    }

    // Every Wednesday - Bible Study & Prayer Meeting
    if (isWednesday(day)) {
      events[dateKey] = [
        { title: 'Victory Hour (Bible Study & Prayer)', time: '6:00 PM' },
      ];
    }
  });

  return events;
};

export default function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const startDate = startOfMonth(currentMonth);
  const endDate = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });
  const firstDayOfMonth = getDay(startDate);
  const events = generateEvents(daysInMonth);

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <div className='p-4 max-w-6xl mx-auto'>
      {/* Month Navigation */}
      <div className='flex flex-col md:flex-row justify-between items-center mb-6 gap-3'>
        <button
          className='px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition'
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        >
          ← Previous
        </button>
        <h2 className='text-2xl font-semibold text-center'>
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          className='px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition'
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          Next →
        </button>
      </div>

      {/* Weekdays Header */}
      <div className='grid grid-cols-7 text-center font-bold text-gray-700 text-sm md:text-base bg-gray-100 py-3 rounded-lg shadow'>
        {weekdays.map((day, index) => (
          <div key={index} className='py-2'>
            {day}
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 mt-2'>
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} className='p-4'></div>
          ))}

        {daysInMonth.map((day) => {
          const dateKey = format(day, 'yyyy-MM-dd');
          return (
            <div
              key={dateKey}
              className={`p-4 border rounded-lg shadow-lg text-center hover:bg-blue-100 transition transform hover:scale-105 flex flex-col justify-between min-h-[120px] md:min-h-[160px] 
              ${isToday(day) ? 'bg-gray-800 text-white' : 'bg-white'}`}
            >
              <p className='font-bold text-lg md:text-xl'>{format(day, 'd')}</p>
              {events[dateKey]?.map((event, index) => (
                <p
                  key={index}
                  className='text-xs sm:text-sm md:text-base text-blue-600 mt-2 leading-snug break-words'
                >
                  {event.title} <br />
                  <span className='block text-gray-600 text-xs md:text-sm'>
                    {event.time}
                  </span>
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
