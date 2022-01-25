import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Greeting from "./components/greeting/Greeting";
import AdminPage from "./page/admin/AdminPage";
import HomePage from "./page/home/HomePage";

function App() {
  const [Greetings, setGreetings] = useState(false);

  //
  useEffect(() => {
    setTimeout(() => {
      setGreetings(false);
    }, 2000);
  }, []);
  return (
    <>
      {Greetings ? (
        <Greeting />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/admins" element={<AdminPage />} />
              {/* DEFAULT ROUTE */}
              <Route
                path="*"
                element={
                  <main
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "calc(100vh - 3rem)",
                    }}
                  >
                    <Link to="/">
                      <h1 style={{ color: "tomato" }}>There's nothing here!</h1>
                    </Link>
                  </main>
                }
              />
            </Routes>
            <Footer />
          </Router>
        </>
      )}
    </>
  );
}

export default App;
