const ProgressIcon = ({
  total,
  values,
  icon,
}) => {
  const percentages = values.reduce(
    (acc, { value, color, label } ) => {
      const pct = value / total * 100;
      acc.values.push({
        value: pct,
        offset: 100 - acc.total + 25,
        color,
        label,
      });
      return {
        values: acc.values,
        total: acc.total + pct,
      };
    },
    { values: [], total: 0 }
  );

  return (
    <svg width={100} height={100} viewBox="0 0 40 40">
      <circle
        cx="20"
        cy="20"
        r="15.91549430918954"
        fill="transparent"
        stroke="#cccccc"
        strokeWidth={2}
      />
      { percentages.values.map(({ value, offset, color, label }, index) => (
        <circle
        
          key={index}
          cx="20"
          cy="20"
          r="15.91549430918954"
          fill="transparent"
          strokeWidth={2}
          stroke={color}
          strokeDasharray={[value,100-value]}
          strokeDashoffset={offset}
        />
      ))}
      <text
        x="20"
        y="26"
        dangerouslySetInnerHTML={{ __html: icon}}
        className="stepIcon"
        
      />
    </svg>
  );
};

export default ProgressIcon;
