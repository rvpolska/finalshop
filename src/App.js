import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import AnimalFood from './Components/AnimalFood/AnimalFood';
import AllCategories from './Filter/AllCategories';
import Cart from './Cart/Cart';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Загрузка данных или других ресурсов
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="App">
          <div className='block'>
          <AllCategories/>
          <Cart/>
          </div>
          <div className='block'>
          <AnimalFood/>
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
