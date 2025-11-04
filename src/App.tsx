import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import GreenhouseCapitalPage from '@/pages/GreenhouseCapitalPage';

const LoadingScreen = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center">
    <p className="mt-8 font-inter tracking-[0.2em] text-black text-sm uppercase">greenhouse capital</p>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set page title
    document.title = 'Greenhouse Capital | AI Native Company Builder';

    // Disable default cursor
    document.body.style.cursor = 'none';

    // Loading screen timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<GreenhouseCapitalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
