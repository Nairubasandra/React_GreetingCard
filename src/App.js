import './App.css';
import GreetingCard from './GreetingCard'
import  './form1.css';
import './form2.css';
import './Goal.css';

import Goal from './Goal';
import Garage from './Garage';
import MyForm from "./form1";
import TextAreaForm from "./form2";
import SelectForm from "./form3";
import MadeGoal from './made_goal';
import MissedGoal from './missed_goal'



function App(){
  return(
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <GreetingCard name="Sandra" age="20" school="WITI Academy" address="Kampala, Uganda" />
      <GreetingCard name="Brian" age="22" school="MUBS" address="Entebbe Road" />
      <GreetingCard name="Amina" age="19" school="Makerere University" address="Ntinda" />

      <MyForm/>

      <SelectForm/>

      <Garage/>

      <TextAreaForm/>

      <Goal/>

      <MadeGoal/>

      <MissedGoal/>

    </div>

  );
}

export default App;

