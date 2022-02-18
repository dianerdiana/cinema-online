import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyListFilm from "./pages/MyListFilm";
import DetailFilm from "./pages/DetailFilm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/profile" element={ <Profile /> } />
          <Route exact path="/my-list-film" element={ <MyListFilm /> } />
          <Route exact path="/detail-film/:id" element={ <DetailFilm /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
