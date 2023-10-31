import GetStarted from "./pages/GetStarted"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
