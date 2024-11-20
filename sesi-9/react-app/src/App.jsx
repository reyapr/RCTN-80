import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutCompany from "./pages/AboutCompany";
import AboutMe from "./pages/AboutMe";
import Members from "./pages/Members";
import Member from "./pages/Members/Member";
import Pokemon from "./pages/Pokemon";
import PokemonDetails from "./pages/Pokemon/PokemonList";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/me" element={<AboutMe />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/members" element={<Members />}>
          <Route path="/members/:name" element={<Member />} />
        </Route>
        <Route
          path="/pokemon"
          element={
            <ProtectedRoute>
              <Pokemon />
            </ProtectedRoute>
          }
        >
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
