import React from "react";
import GreetingCard from "./GreetingCard";
import "./GreetingCard.css";

function App(){
  return(
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <GreetingCard name="Sandra" age="20" school="WITI Academy" address="Kampala, Uganda" />
      <GreetingCard name="Brian" age="22" school="MUBS" address="Entebbe Road" />
      <GreetingCard name="Amina" age="19" school="Makerere University" address="Ntinda" />
    </div>

  );
}
export default App;

