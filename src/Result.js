import React from 'react'

function Result({secretNum, term}) {
    let result;

    if (term > secretNum){
        result = "Higher";
    } else if ( term < secretNum) {
        result = "Lower";
    } else if (term == secretNum){
        result = "Yippee..! You are correct";
    } else if (term == "" && secretNum) {
        result = "Need number"
    } else {
        result = "Not a valid Input";
    }



  return (
    <div>
        <h3> You Guessed: {result}</h3>
    </div>
  )
}

export default Result