import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <aside></aside>
      <main>
        <Routes>
          <Route path="/" />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
