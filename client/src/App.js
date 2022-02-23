import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { useContext, useEffect } from 'react';

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyListFilm from "./pages/MyListFilm";
import DetailFilm from "./pages/DetailFilm";
import ListTransaction from "./pages/ListTransactions";
import AddFilm from "./pages/AddFilm";


// Get API config & setAuthToken here ...
import { API, setAuthToken } from './config/api';
import { UserContext } from './context/userContext';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  let navigate = useNavigate();
  // let { id } = useParams();
  // id = state.user.id

  // Init user context here ...
  const [state, dispatch] = useContext(UserContext);

  // Redirect Auth here ...
  useEffect(() => {
    // Redirect Auth
    if (state.user.status === "customer") {
      navigate("/profile");
    } else if (state.user.status === "admin") {
      navigate("/list-transactions")
    } else {
      navigate("/")
    }
  }, [state]);

  console.log(state)

   // Create function for check user token here ...
   const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/profile" element={ <Profile /> } />
        <Route exact path="/my-list-film" element={ <MyListFilm /> } />
        <Route exact path="/detail-film/:id" element={ <DetailFilm /> } />
        <Route exact path="/list-transactions" element={ <ListTransaction /> } />
        <Route exact path="/add-film" element={ <AddFilm /> } />
      </Routes>
    </>
  );
}

export default App;
