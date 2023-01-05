import './score.css';
import logo from './images/logo.svg';

const Score = ({ value }) => {
  return (
  <div className="scoreBar">
    <img src={logo} className="" alt="logo" />
    <div className="scoreBox">
      <p className="score">SCORE</p>
      <p className="scoreNumber">{value}</p>
    </div>
  </div>
  );
};

export default Score
