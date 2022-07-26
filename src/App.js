import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FaujiNavbar from "./components/FaujiNavbar";
import FaujiLogin from "./faujiLogin";
import About from "./pages/About";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import SaveJob from "./pages/SaveJob";
import { CandidateLoginProvider } from "./Providers/CandidateLoginProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <CandidateLoginProvider>
          <FaujiNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/profile" element={
              <FaujiLogin />
            } />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/savedJobs" element={<SaveJob />} />
          </Routes>
        </CandidateLoginProvider>

      </Router>
    </div>
  );
}

export default App;
