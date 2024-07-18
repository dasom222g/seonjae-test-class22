import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Layout from "./components/layout/Layout";
import { useState } from "react";

function App() {
  // logic
  const [mbtiResultList, setMbtiResultList] = useState([]);
  const handleMbtiResultList = (data) => {
    setMbtiResultList(data);
  };

  // view
  return (
    // <div className="text-red-600">hello</div>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/test"
            element={<Test onMovePage={handleMbtiResultList} />}
          />
          <Route
            path="/result"
            element={<Result mbtiResultList={mbtiResultList} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
