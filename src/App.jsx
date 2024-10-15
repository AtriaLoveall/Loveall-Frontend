import React from 'react';
import AppRoute from './route';
import Header from './components/Header';
import Footer from './components/Footer';
import PopUpProvider from './context/PopUpProvider';
import { AuthProvider } from './hooks/useAuth';


export default function App() {
  return (
    <AuthProvider>
      <PopUpProvider>
        <Header />
        <AppRoute />
        <Footer />
      </PopUpProvider>
    </AuthProvider>
  );
}