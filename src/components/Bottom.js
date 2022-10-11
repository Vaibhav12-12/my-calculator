import React from 'react'

export default function Bottom(props) {
  const { takeStuff, removeStuff, removeStuffOnce, calculate } = props;
  return (
    <div className="bottom">
      <button onClick={removeStuff} className="allClear">AC</button>
      <button onClick={removeStuffOnce}>C</button>
      <button onClick={() => takeStuff("/")}>/</button>
      <button onClick={() => takeStuff("1")}>1</button>
      <button onClick={() => takeStuff("2")}>2</button>
      <button onClick={() => takeStuff("3")}>3</button>
      <button onClick={() => takeStuff("*")}>x</button>
      <button onClick={() => takeStuff("4")}>4</button>
      <button onClick={() => takeStuff("5")}>5</button>
      <button onClick={() => takeStuff("6")}>6</button>
      <button onClick={() => takeStuff("-")}>-</button>
      <button onClick={() => takeStuff("7")}>7</button>
      <button onClick={() => takeStuff("8")}>8</button>
      <button onClick={() => takeStuff("9")}>9</button>
      <button onClick={() => takeStuff("+")}>+</button>
      <button onClick={() => takeStuff(".")}>.</button>
      <button onClick={() => takeStuff("0")}>0</button>
      <button className="equal" onClick={calculate}>=</button>
    </div>
  )
}