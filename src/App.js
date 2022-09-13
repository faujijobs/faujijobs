import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FaujiNavbar from "./components/FaujiNavbar";
import FaujiLogin from "./faujiLogin";
import About from "./pages/About";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import SaveJob from "./pages/SaveJob";
import { CandidateLoginProvider } from "./Providers/CandidateLoginProvider";
import {JobsProvider} from "./Providers/JobsProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <CandidateLoginProvider>
          <JobsProvider>
            <FaujiNavbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/profile" element={
                <FaujiLogin />
              } />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/savedJobs" element={<SaveJob />} />
            
            </Routes>
          </JobsProvider>
        </CandidateLoginProvider>
      </Router>
    </div>
  );
}

export default App;
