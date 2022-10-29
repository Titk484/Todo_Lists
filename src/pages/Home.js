import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Nav_Components/Navbar';
import AppHeader from '../components/AppHeader';
import AppContent from '../components/AppContent';
import PageTitle from '../components/PageTitle';
import styles from '../styles/modules/app.module.scss';

function Home() {
  return (
    <section>
      <div className="container">
        <PageTitle>TODO LISTS</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </section>
  );
}

export default Home;
