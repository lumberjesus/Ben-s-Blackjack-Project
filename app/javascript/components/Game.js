import React, { useState, useEffect } from "react"

const Game = () => {
  const [game, setGame] = useState(null)
  const [status, setStatus] = useState("")

  // Fetch game data when component mounts
  useEffect(() => {
    fetch("/games")
      .then(response => response.json())
      .then(data => setGame(data.game))
  }, [])

  const handleHit = () => {
    fetch(`/games/${game.id}/hit`, { method: "POST" })
      .then(response => response.json())
      .then(data => {
        setGame(data.game)
        setStatus(data.status)
      })
  }

  const handleStand = () => {
    fetch(`/games/${game.id}/stand`, { method: "POST" })
      .then(response => response.json())
      .then(data => {
        setGame(data.game)
        setStatus(data.status)
      })
  }

  return (
    <div>
      {game ? (
        <>
          <h1>Blackjack Game</h1>
          <div>
            <h2>Player's Hand: {game.player_hand.join(", ")}</h2>
            <h2>Dealer's Hand: {game.dealer_hand.join(", ")}</h2>
            <h3>Player Score: {game.player_score}</h3>
            <h3>Dealer Score: {game.dealer_score}</h3>
          </div>

          {status && <h3>Status: {status}</h3>}

          {status !== "won" && status !== "lost" && (
            <div>
              <button onClick={handleHit}>Hit</button>
              <button onClick={handleStand}>Stand</button>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Game
