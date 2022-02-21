import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyListFilm from "./pages/MyListFilm";
import DetailFilm from "./pages/DetailFilm";
import ListTransaction from "./pages/ListTransactions";
import AddFilm from "./pages/AddFilm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/profile" element={ <Profile /> } />
          <Route exact path="/my-list-film" element={ <MyListFilm /> } />
          <Route exact path="/detail-film/:id" element={ <DetailFilm /> } />
          <Route exact path="/list-transactions" element={ <ListTransaction /> } />
          <Route exact path="/add-film" element={ <AddFilm /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
