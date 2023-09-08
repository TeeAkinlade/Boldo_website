import { Routes, Route } from "react-router-dom"
import Footer from "./component/Footer"
import Header from "./component/Header"
import HomePage from "./page/HomePage"
import About from "./page/About"
import BlogPage from "./page/BlogPage"

function App() {


  return (
    <div className="manrope">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
