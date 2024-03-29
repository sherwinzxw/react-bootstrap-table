const Introduction = (props: any) => {
  const { title, intro } = props;
  return (
    <div className="nsw-docs__intro">
      <div className="nsw-docs__container">
        <h1>{title}</h1>

        <p className="nsw-intro">{intro}</p>
      </div>
    </div>
  );
};

export default Introduction;
