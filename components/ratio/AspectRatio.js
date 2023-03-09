const AspectRatio = ({ ratio, children }) => {
  let padding = ratio.split("/").reduce((first, second) => second / first);
  return (
    <div className="relative" style={{ paddingBottom: `${padding * 100}%` }}>
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default AspectRatio;
