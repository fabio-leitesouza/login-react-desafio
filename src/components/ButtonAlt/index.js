import './style.css';

const ButtonAlt = ({ text, onClick }) => {
  return (
    <button className="button-alt" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonAlt;