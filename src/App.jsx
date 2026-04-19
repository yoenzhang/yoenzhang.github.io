import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Classes, Contact, Experience, Hero, Navbar, StarsCanvas, Stats, Works } from './components';
import { ImageViewerProvider } from './components/ImageViewer';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ImageViewerProvider>
        <div className="relative z-0 bg-primary">
          <div>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Stats />
          <Classes />
          <Experience />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </ImageViewerProvider>
    </BrowserRouter>
  );
};

export default App;
