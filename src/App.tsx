import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/Home"));
const Learning = lazy(() => import("./components/Learning"));
const Loader = lazy(() => import("./components/Loader"));
const Quiz = lazy(() => import("./components/Quiz"));
const Result = lazy(() => import("./components/Result"));

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<Loader/>} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learning />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="*" element={<Home/>}/>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
