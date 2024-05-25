import './intro.css';

export const Intro = (props) => {
  return (
    <div className="intro">
      <h1>{props.nadpis}</h1>
      <p>{props.odstavec}</p>
    </div>
  );
};
