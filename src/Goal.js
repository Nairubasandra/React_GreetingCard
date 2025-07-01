import React from "react";
import MadeGoal from './made_goal';
import MissedGoal from './missed_goal';
import './Goal.css';


// export name
 function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

export default Goal;