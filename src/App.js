import "./App.css";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Habits from "./pages/Habits/Habits";
import Analytics from "./pages/Analytics/Analytics";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navigation />
        <section className="App">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/create" element={<Create />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/habits" element={<Habits />} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>
  );
}

export default App;
