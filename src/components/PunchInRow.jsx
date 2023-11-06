import React, { useEffect, useState } from "react";

function PunchInRow({ day, setDayTotal }) {
  const [punchIn, setPunchIn] = useState("");
  const [lunchOut, setLunchOut] = useState("");
  const [lunchIn, setLunchIn] = useState("");
  const [punchOut, setPunchOut] = useState("");
  const [timeTotal, setTimeTotal] = useState(0);

  function handlePunchIn(time) {
    setPunchIn(time);
  }

  function handleLunchOut(time) {
    setLunchOut(time);
  }

  function handleLunchIn(time) {
    setLunchIn(time);
  }
  function handlePunchOut(time) {
    setPunchOut(time);
  }

  useEffect(() => {
    let punchInCalc = new Date("07/21/2006 " + punchIn).getTime();
    let lunchOutCalc = new Date("07/21/2006 " + lunchOut).getTime();
    let lunhcINCalc = new Date("07/21/2006 " + lunchIn).getTime();
    let punchOutCalc = new Date("07/21/2006 " + punchOut).getTime();

    let lunchResolution = lunhcINCalc - lunchOutCalc;
    let lunchRestTime = lunchResolution / 1000 / 60 / 60;

    let resolution = punchOutCalc - punchInCalc;
    let resolutionTime = resolution / 1000 / 60 / 60;
    // let asMin = Math.floor(punchInCalc / 60000);
    // let asSec = ((punchInCalc % 60000) / 1000).toFixed(0);
    // console.log("From component", asMin);
    // console.log(
    //   "From component as sec",
    //   asMin + ":" + (asSec < 10 ? "0" : "") + asSec
    // );
    if (lunchOut && lunchIn) {
      setTimeTotal(parseFloat(resolutionTime - lunchRestTime).toFixed(2));
      setDayTotal(parseFloat(resolutionTime - lunchRestTime).toFixed(2));
    } else {
      setTimeTotal(parseFloat(resolutionTime).toFixed(2));
      setDayTotal(parseFloat(resolutionTime).toFixed(2));
    }

    // setTimeTotal(resolutionTime);
  }, [punchIn, lunchIn, lunchOut, punchOut]);

  return (
    <>
      <tr>
        <td>{day}</td>
        <td>
          <input
            type="time"
            name=""
            id=""
            value={punchIn}
            onChange={(e) => handlePunchIn(e.target.value)}
          />
        </td>
        <td>
          <input
            type="time"
            name=""
            id=""
            value={lunchOut}
            onChange={(e) => handleLunchOut(e.target.value)}
          />
        </td>
        <td>
          <input
            type="time"
            name=""
            id=""
            value={lunchIn}
            onChange={(e) => handleLunchIn(e.target.value)}
          />
        </td>
        <td>
          <input
            type="time"
            name=""
            id=""
            value={punchOut}
            onChange={(e) => handlePunchOut(e.target.value)}
          />
        </td>
        <td>{timeTotal}</td>
      </tr>
    </>
  );
}

export default PunchInRow;
