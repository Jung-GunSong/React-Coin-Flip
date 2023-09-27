import { useState } from "react";

function CoinFlipper() {

  const [isHeads, setIsHeads] = useState(false);
  const [totalHeads, setTotalHeads] = useState(0);
  const [totalTails, setTotalTails] = useState(0);

  function determineFlip() {
    const outcome = Math.random();
    if (outcome < 0.5) {
      setIsHeads(true);
      setTotalHeads(totalHeads + 1)
    } else {
      setIsHeads(false);
      setTotalTails(totalTails + 1)
    }
  }


  return (
    <div>
      <h2>Let's Flip a Coin</h2>
      <p>{isHeads ? "Heads" : "Tails"}</p>
      <button onClick={determineFlip}>Click to Flip!</button>
      <p>Current totals: {totalHeads} heads and {totalTails} tails have been flipped!</p>
    </div>
  );
}

export default CoinFlipper;

//goes into coin flip app
// all of our logic is in coin flipp
// inside coin flip is two components
//one is the image of the coin
// top is title
// button
// counter
