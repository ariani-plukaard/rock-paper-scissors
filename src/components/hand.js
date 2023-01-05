import "./hand.css";
import rock from './images/icon-rock.svg';
import paper from './images/icon-paper.svg';
import scissors from './images/icon-scissors.svg';

const Hand = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <img src={value === "scissors" ? scissors : value === "paper" ? paper : rock} className="image" alt={value} />
    </button>
  );
};

export default Hand;
