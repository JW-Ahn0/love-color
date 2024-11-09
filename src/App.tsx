import HappyBirthdayPage from "./component/happybirthdaymainpage/HappyBirthdayPage";
import MainPage from "./component/mainpage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/love" element={<HappyBirthdayPage />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;
