import { useState } from "react"

import "./App.css"
import Arasaac from "./components/Arasaac"
import Footer from "./components/Footer"
import Loading from "./components/Loading"
import MainImages from "./components/MainImages"
import Nav from "./components/Nav"

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [imageData, setImageData] = useState([])


  return (
    <div className="App">
      <Nav
        setIsLoading={setIsLoading}
        setImageData={setImageData}
        isLoading={isLoading}
      />
      <MainImages isLoading={isLoading} imageData={imageData} />
      <Arasaac />
      <Footer />
    </div>
  )
}

export default App
