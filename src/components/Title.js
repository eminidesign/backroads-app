const Title = ({ title, afterTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{afterTitle}</span>
      </h2>
    </div>
  );
};
export default Title;
