import {BrowserRouter , Routes , Route} from "react-router-dom"
import Header from "./Components/Header"
import About from "./Pages/About"
import AllCourses from "./Pages/AllCourses"
import CourseDetails from "./Pages/CourseDetails"
import Home from "./Pages/Home"
import './index.css'

function App() {
  

  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/"  exact element={<Home/>}/>
    <Route path="/about"  exact element={<About/>}/>
    <Route path="/courses"  exact element={<AllCourses/>}/>
    <Route path="/course/:course"  exact element={<CourseDetails/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
