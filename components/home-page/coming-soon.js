import React from 'react';
import classes from "./home.module.css";

const TimeBox = ({value, label}) => {
    return(
        <div className={classes.timeBox}>
          <div>
            <div>{value}</div>
          </div>
          <label>{label}</label>
        </div>
    )
}

const ComingSoon = ({days, hours, minutes, seconds}) => {
  return (
    <div className={classes.comingBox}>
      <TimeBox value={days} label="Days" />
      <div className={classes.colon}>:</div>
      <TimeBox value={hours} label="Hours" />
      <div className={classes.colon}>:</div>
      <TimeBox value={minutes} label="Minutes" />
      <div className={classes.colon}>:</div>
      <TimeBox value={seconds} label="Seconds" />
    </div>
  )
}

export default ComingSoon
