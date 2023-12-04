import { stats } from "../data";

const StatsSection = () => {
  return (
    <section id="stats" className="bg-primary-500 py-32">
      <div className="max-container px-16 flex justify-center sm:justify-around items-center gap-y-12 flex-wrap">
        {stats.map((stat) => (
          <ProgressBar
            key={stat.progress}
            size={220}
            radius={95}
            value={stat.progress}
            color={stat.color}
            label={stat.label}
            amount={stat.amount}
          />
        ))}
      </div>
    </section>
  );
};

const ProgressBar = ({ size, radius, value, color, label, amount }) => {
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray - (dashArray * value) / 100;

  return (
    <div className="relative">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth="10px"
          fill="none"
          stroke="#fff"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth="10px"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            fill: "none",
            stroke: color,
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
          }}
        />
        <text
          x={size / 2}
          y={size / 2 + 16}
          textAnchor="middle"
          fill="white"
          className="text-white text-4xl"
        >
          {amount}
        </text>
      </svg>
      <p className="text-center text-xl text-white font-medium mt-7">{label}</p>
    </div>
  );
};

export default StatsSection;
