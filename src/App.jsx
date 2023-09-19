import './App.css'
import LineChart from './Components/LineChart/LineChart'
import LineChart2 from './Components/LineChart/LineChart2'
import LineChart3 from './Components/LineChart/LineChart3'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/Price/PriceOptions'

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <LineChart2></LineChart2>
      <LineChart3></LineChart3>
      <Phones></Phones>
    </>
  )
}

export default App
