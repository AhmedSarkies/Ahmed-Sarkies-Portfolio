import { Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  Skills,
  Projects,
  Certificates,
  AboutMe,
  Contact,
  AppLayout,
} from "./Pages";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
