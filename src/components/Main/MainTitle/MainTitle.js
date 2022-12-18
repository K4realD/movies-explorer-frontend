import "./MainTitle.css";

function MainTitle({ text }) {
  return (
    <div className="main__title-container">
      <h2 className="main__title">{text}</h2>
    </div>
  );
}

export default MainTitle;
