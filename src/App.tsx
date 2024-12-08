import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";
import Navbar from "./components/Navbar";
import FreeCourses from "./routes/FreeCourses";
// import Resources from "./routes/Resources";
import AITools from "./routes/AITools";
import TaskManager from "./routes/TaskManager";
import SelfCare from "./routes/SelfCare";
import Contact from "./routes/Contact";
import Articles from "./resources/Articles";
import Tools from "./resources/Tools";
import Tutorials from "./resources/Tutorials";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/free-courses" element={<FreeCourses />} />
        {/* <Route path="/resources" element={<Resources />} /> */}
        <Route path="/ai-tools" element={<AITools />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/self-care" element={<SelfCare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </>
  );
};

export default App;
