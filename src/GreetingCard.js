import React from "react";
import "./GreetingCard.css";

// GreetingCard components
function GreetingCard ({name,age,school,address}) {
    return (
       <div class = "card">
        <h2>Hello, {name}!</h2>
        <p><strong>Age, {age}</strong></p>
        <p><strong>School, {school}</strong></p>
        <p><strong>Address, {address}</strong></p>
        <p></p>
       </div>    
    );
}
export default GreetingCard;