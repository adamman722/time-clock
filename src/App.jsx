import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PunchInRow from "./components/PunchInRow";

function App() {
  const [mondayTime, setMondayTime] = useState(0);
  const [tuesdayTime, setTuesdayTime] = useState(0);
  const [wednesdayTime, setWednesdayTime] = useState(0);
  const [thursdayTime, setThursdayTime] = useState(0);
  const [fridayTime, setFridayTime] = useState(0);
  const [finalTotalHours, setFinalTotalHours] = useState(0);

  useEffect(() => {
    let monTime = parseFloat(mondayTime).toFixed(2);
    let tueTime = parseFloat(tuesdayTime).toFixed(2);
    let wedTime = parseFloat(wednesdayTime).toFixed(2);
    let thuTime = parseFloat(thursdayTime).toFixed(2);
    let friTime = parseFloat(fridayTime).toFixed(2);

    let monAsNum = parseFloat(monTime);
    let tuseAsNum = parseFloat(tueTime);
    let wedAsNum = parseFloat(wedTime);
    let thurAsNum = parseFloat(thuTime);
    let friAsNum = parseFloat(friTime);

    let Total = monAsNum + tuseAsNum + wedAsNum + thurAsNum + friAsNum;
    let asMinute = Total;

    // let minAsMIli =
    // let min = Math.floor(minAsMIli / 60000);
    // console.log("As min", min);
    setFinalTotalHours(Total.toFixed(2));
  }, [mondayTime, tuesdayTime, wednesdayTime, thursdayTime, fridayTime]);

  return (
    <>
      <h1>Work Punch in Calc</h1>
      <table>
        <tr>
          <th></th>
          <th>IN</th>
          <th>lunch out</th>
          <th>lunch in</th>
          <th>out</th>
          <th>Total</th>
        </tr>
        <PunchInRow day={"Monday"} setDayTotal={setMondayTime} />
        <PunchInRow day={"Tuesday"} setDayTotal={setTuesdayTime} />
        <PunchInRow day={"Wednesday"} setDayTotal={setWednesdayTime} />
        <PunchInRow day={"Thursday"} setDayTotal={setThursdayTime} />
        <PunchInRow day={"Friday"} setDayTotal={setFridayTime} />
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total: {finalTotalHours}</td>
        </tr>
      </table>
    </>
  );
}

export default App;
