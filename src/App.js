import React from 'react';
import   Creditcard from'./Card.js';


const rendernumber=number=>{
number=number.toString();
let result='';
for( let i=0; i<number.length;i+=4)
{

  result=number.slice(i, i+4)+ ''
}
return result;
}
function App() {
    return (
      
      <Creditcard 
      companyname='CREDITCARD'
      cardNumber='7542 8888 4591 3597'
      validThru='11/50'
      cardholder='CARDHOLDER'
      />
    );
  }
  
  export default App;

  