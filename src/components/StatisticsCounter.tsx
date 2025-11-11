import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Statistic {
  value: number;
  label: string;
  suffix?: string;
}

const StatisticsCounter = () => {
  const statistics: Statistic[] = [
    { value: 100, label: "Projects Delivered", suffix: "+" },
    { value: 95, label: "Client Satisfaction", suffix: "%" },
    { value: 15, label: "Countries Served", suffix: "+" },
    { value: 70, label: "Professionals", suffix: "+" },
  ];

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [counts, setCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    if (inView) {
      statistics.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;
