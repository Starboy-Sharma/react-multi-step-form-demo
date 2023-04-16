import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/state"
import Contact from "./components/step-form/Contact"
import About from "./components/step-form/About"
import Confirm from "./components/step-form/Confirm"
import Education from "./components/step-form/Education"

function App() {

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
