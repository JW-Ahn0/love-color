import HappyBirthdayPage from "./component/happybirthdaymainpage/HappyBirthdayPage";
import MainPage from "./component/mainpage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useNotification from "./hooks/useNotifications";
import { useEffect, useState } from "react";
function App() {
  const { requestPermission } = useNotification();
  const [token, setToken] = useState("");

  useEffect(() => {
    requestPermission().then((token) => {
      console.log(token);
      setToken(token || "");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(token);
  }, [token]);
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage token={token} />} />
          <Route path="/love" element={<HappyBirthdayPage />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;
