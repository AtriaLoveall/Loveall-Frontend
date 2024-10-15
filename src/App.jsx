import React from 'react';
import AppRoute from './route';
import Header from './components/Header';
import Footer from './components/Footer';
import PopUpProvider from './context/PopUpProvider';


export default function App() {
  return (
    <PopUpProvider>
      <Header />
      <AppRoute />
      <Footer />
    </PopUpProvider>
  );
}