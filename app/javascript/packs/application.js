import React from "react"
import ReactDOM from "react-dom"
import Game from "../components/Game"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Game />,
    document.body.appendChild(document.createElement("div"))
  )
})
