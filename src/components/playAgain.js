import "./playAgain.css";
import close from './images/icon-close.svg';

const PlayAgain = ({ onClick }) => {
  return (
    <button className="playAgain" onClick={onClick}>
    PLAY AGAIN
    </button>
  );
};

export default PlayAgain;
