import { useState, useEffect, useMemo } from 'react';
import { calculateTimeLeft } from '../../../Functions/calculateTimeLeft';
import CalendarButton from './CalendarButton';

const CountdownTimer = () => {
  const targetDate = useMemo(() => new Date('2024-03-02T16:00:00'), []);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <section className="countdown-container bg-timer flex flex-col gap-8 py-12">
      <img
        src="./icono-nuestraboda.png"
        alt="anillos"
        style={{ width: '100px' }}
      />
      <span className="text-4xl font-title  text-center" data-aos="fade-left">
        {timeLeft[0].time <= 0 && timeLeft[1].time < 16
          ? '¡ Ya llego el gran dia !'
          : '¡ Cada vez falta menos !'}
      </span>
      <div className="flex tablet:gap-8  gap-1 mb-12">
        {timeLeft.map((time, i) => (
          <div
            key={i}
            className="countdown-item tablet:h-[200px] h-[85px] tablet:w-[200px] w-[85px]"
          >
            <span className="countdown-value tablet:text-5xl">
              {time.time > 0 ? time.time : 0}
            </span>
            <span className="countdown-label tablet:text-4xl font-body">
              {time.title}
            </span>
          </div>
        ))}
      </div>
      {timeLeft[0].time > 0 && <CalendarButton />}
    </section>
  );
};

export default CountdownTimer;
