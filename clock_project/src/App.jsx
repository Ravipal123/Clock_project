import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Clock from './Components/Clock';
import PrivateRoute from './PrivateRoute';
import { useEffect, useState } from 'react';
import { auth } from './FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/clock" element={<Clock isAuthenticated={isAuthenticated}/>} />
          </Route>
        </Routes>
        <ToastContainer/>
      </Router>
    </>
  )
}

export default App
