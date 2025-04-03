import React from "react"

const Score = ({ playerScore, dealerScore }) => {
  return (
    <div>
      <h3>Player Score: {playerScore}</h3>
      <h3>Dealer Score: {dealerScore}</h3>
    </div>
  )
}

export default Score
