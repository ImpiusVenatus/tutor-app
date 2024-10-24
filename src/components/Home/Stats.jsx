import "./Stats.css";
import img1 from "../../assets/images/counter/counter-1.png";
import img2 from "../../assets/images/counter/counter-2.png";
import img3 from "../../assets/images/counter/counter-3.png";
import img4 from "../../assets/images/counter/counter-4.png";

const Stats = () => {
  return (
    <div className="stats-container">
      <svg
        width="54"
        height="10"
        viewBox="0 0 54 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.5 10C35.6 10 33.5 8 31.9 6.4C30.4 5 29.3 4 27 4C24.7 4 23.6 5 22.1 6.4C20.5 8 18.4 10 14.5 10C10.6 10 8.5 8 6.9 6.4C5.4 5 4.3 4 2 4C0.9 4 0 3.1 0 2C0 0.9 0.9 0 2 0C5.9 0 8 2 9.6 3.6C11.1 5 12.2 6 14.5 6C16.8 6 17.9 5 19.4 3.6C21 2 23.1 0 27 0C30.9 0 33 2 34.6 3.6C36.1 5 37.2 6 39.5 6C41.8 6 42.9 5 44.4 3.6C46 2 48.1 0 52 0C53.1 0 54 0.9 54 2C54 3.1 53.1 4 52 4C49.7 4 48.6 5 47.1 6.4C45.5 8 43.4 10 39.5 10Z"
          fill="currentColor"
        />
      </svg>

      <h2>
        Stats that explain everything about <span>#Our success</span>
      </h2>
      <div className="stats-grid">
        <div className="stats-column">
          <div className="stats-img">
            <img src={img1}></img>
          </div>
          <div className="stats-details">
            <h3>Stat 1</h3>
            <p>Details about stat 1</p>
          </div>
        </div>
        <div className="stats-column">
          <div className="stats-img">
            <img src={img2}></img>
          </div>
          <div className="stats-details">
            <h3>Stat 1</h3>
            <p>Details about stat 1</p>
          </div>
        </div>
        <div className="stats-column">
          <div className="stats-img">
            <img src={img3}></img>
          </div>
          <div className="stats-details">
            <h3>Stat 1</h3>
            <p>Details about stat 1</p>
          </div>
        </div>
        <div className="stats-column">
          <div className="stats-img">
            <img src={img4}></img>
          </div>
          <div className="stats-details">
            <h3>Stat 1</h3>
            <p>Details about stat 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
