import React, { useState, useEffect } from 'react';

const App = () => {

  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch('/api/v1/deals')
      .then(res => res.json())
      .then(data => setDeals(data))
      .catch(err => { throw err });
  }, []);

  console.log(deals);
  return (
    <div>
      App is running!
    </div>
  );
}

export default App;
