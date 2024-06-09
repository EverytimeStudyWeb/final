import { Link, NavLink } from "react-router-dom";
import "./home.css";
import Free from "../free/free";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const tileClassName = ({ date, view }) => {
    if (date.toDateString() === new Date().toDateString()) {
      return "today";
    }
    return "";
  };

  return (
    <div className="home">
      <div className="board-container">
        <ul className="board">
          <p>게시판</p>
          <li>
            <Link to={"/free"}>자유게시판</Link>
          </li>
          <li>
            <Link to={"/market"}>중고장터</Link>
          </li>
          <li>
            <Link to={"/timer"}>타이머</Link>
          </li>
        </ul>
        <div className="calendar">
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={tileClassName}
          />
        </div>
      </div>
      <ul className="class">
        <p>시간표</p>
        <li>
          <Link to={"/schduler"}>상세보기</Link>
        </li>
        <div>
          <img src="./images/class.png" />
        </div>
      </ul>
      <ul className="menu">
        <p>학식</p>
        <li>
          <Link to={"/restaurants"}>상세보기</Link>
        </li>
        <div>
          <img src="./images/menuex.png" />
        </div>
      </ul>
    </div>
  );
}
