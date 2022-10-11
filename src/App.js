import Top from './components/Top'
import Bottom from './components/Bottom'
import './styles.css'

function App() {
  function takeStuff(x) {
    document.getElementById("2").innerHTML += x;
  }
  function removeStuff() {
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
  }
  function removeStuffOnce() {
    document.getElementById("2").innerHTML = document.getElementById("2").innerHTML.substring(0, document.getElementById("2").innerHTML.length - 1);
  }
  function calculate() {
    var value = eval(document.getElementById("2").innerHTML);
    document.getElementById("1").innerHTML = value;
  }
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <Top></Top>
      <Bottom takeStuff={takeStuff} removeStuff={removeStuff} removeStuffOnce={removeStuffOnce} calculate={calculate}></Bottom>
    </div>
  )
}

export default App;
