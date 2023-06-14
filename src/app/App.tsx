import React from 'react';
import { AdaptationPage } from '../pages/AdaptationPage';
import { classNames } from '../shared/lib/classNames/classNames';
import { Footer } from '../widgets/Footer';
import { Navbar } from '../widgets/Navbar';
import './styles/App.scss';

function App() {
  return (
    <div className={classNames('container')}>
      <Navbar />
      <div className='content-page'>
        <div className='page'>
          <AdaptationPage />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
