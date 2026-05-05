export default function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const startDate = startOfMonth(currentMonth);
  const endDate = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });
  const firstDayOfMonth = getDay(startDate);
  const events = generateEvents(daysInMonth);

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className='p-4 max-w-5xl mx-auto'>
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

      <div className='grid grid-cols-7 text-center font-bold text-gray-700 text-sm md:text-base bg-gray-100 py-2 rounded-lg shadow'>
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
              className={`p-3 border rounded-lg shadow-md text-center hover:bg-blue-100 transition transform hover:scale-105 flex flex-col justify-between min-h-[100px] sm:min-h-[120px] md:min-h-[140px]
              ${isToday(day) ? 'bg-gray-800 text-white' : 'bg-white'}`}
            >
              <p className='font-bold text-lg'>{format(day, 'd')}</p>
              {events[dateKey]?.map((event, index) => (
                <p
                  key={index}
                  className='text-xs sm:text-sm text-blue-600 mt-1 break-words leading-tight'
                >
                  {event.title}{' '}
                  <span className='block text-gray-500 text-xs'>
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
