import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import CourseDetail from "./pages/components/CourseDetail";
import Notes from "./pages/Notes";
import Tutorials from "./pages/Tutorials";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import PHPStart from "./pages/start-learning/PHPStart";
import CPPStart from "./pages/start-learning/CPPStart";
import JavaStart from "./pages/start-learning/JavaStart";
import ReactStart from "./pages/start-learning/ReactStart";
import PythonStart from "./pages/start-learning/PythonStart";
import JSStart from "./pages/start-learning/JSStart";
import CSSStart from "./pages/start-learning/CSSStart";
import HTMLStart from "./pages/start-learning/HTMLStart";
import CStart from "./pages/start-learning/CStart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/course/:id" element={<CourseDetail />} />{" "}
        <Route path="/notes" element={<Notes />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/phpstart" element={<PHPStart />} />
        <Route path="/cppstart" element={<CPPStart />} />
        <Route path="/javastart" element={<JavaStart />} />
        <Route path="/reactstart" element={<ReactStart />} />
        <Route path="/pythonstart" element={<PythonStart />} />
        <Route path="/jsstart" element={<JSStart />} />
        <Route path="/cssstart" element={<CSSStart />} />
        <Route path="/htmlstart" element={<HTMLStart />} />
        <Route path="/cstart" element={<CStart />} />
      </Routes>
    </Router>
  );
}

export default App;
