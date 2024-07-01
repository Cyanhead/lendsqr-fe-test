import { Outlet } from 'react-router-dom';
import { NavBar, SideBar } from './components';
import { Layout } from './uikit';
import { useRef, useState } from 'react';
import styles from './App.module.scss';
import { useClickOutside } from './hooks';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const sideBarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  function handleCloseSideBar() {
    setShowSideBar(false);
  }

  useClickOutside([sideBarRef, menuButtonRef], handleCloseSideBar);

  return (
    <>
      <NavBar toggleSideBar={toggleSideBar} menuButtonRef={menuButtonRef} />
      <Layout.FlexRow classes={styles.wrap}>
        <SideBar showSideBar={showSideBar} sideBarRef={sideBarRef} />
        <main className={styles.main}>
          <Outlet />
        </main>
      </Layout.FlexRow>
    </>
  );
}

export default App;
