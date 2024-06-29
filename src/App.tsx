import { Outlet } from 'react-router-dom';
import { NavBar } from './components';
import { useState } from 'react';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <>
      <NavBar toggleSideBar={toggleSideBar} />

      <Outlet />
    </>
  );
}

export default App;
