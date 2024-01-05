import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import BaseLayout from './pages/layoutPage';
import About from './pages/aboutPage';
import Map from './pages/mapPage';
import Loading from './components/loadingPage';
import Contact from './pages/contactPage';
import Profile from './pages/profilePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching initial data)
    const fetchData = async () => {
      try {
        // Perform any initial data fetching or other setup here
        // ...

        // Simulate loading for a few seconds
        await new Promise(resolve => setTimeout(resolve, 4100));

        // Set loading to false once the initial setup is complete
        setIsLoading(false);
      } catch (error) {
        console.error('Error during initial setup:', error);
        // Handle errors as needed
        setIsLoading(false); // Ensure loading state is set to false in case of an error
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<BaseLayout />}>
              <Route index element={<Map />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
