import React from 'react';
import classes from "./home.module.css";

const TimeBox = ({value, label, colon}) => {
    return(
        <div className={classes.timeBox}>
          <div>
            <div>{value}</div>
            <div className={classes.colon}>{colon}</div>
          </div>
          <label>{label}</label>
        </div>
    )
}

const ComingSoon = ({days, hours, minutes, seconds}) => {
  return (
    <div className={classes.comingBox}>
      <TimeBox value={days} label="Days" colon=":" />
      <TimeBox value={hours} label="Hours" colon=":" />
      <TimeBox value={minutes} label="Minutes" colon=":" />
      <TimeBox value={seconds} label="Seconds" colon="" />
    </div>
  )
}

export default ComingSoon
