import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  const [value, setValue] = useState(3);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Let's start the React with basic Counter project</h1>
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 mb-2">
          <button type="button" className="btn btn-outline-success w-100 px-4 py-2" onClick={() => value < 10 ? setValue(value + 1) : alert("Value can't go more then 10")}>
            Increase
          </button>
        </div>
        <div className="col-md-6 mb-2">
          <button type="button" className="btn btn-outline-danger w-100 px-4 py-2" onClick={() => value > 0 ? setValue(value - 1) : alert("Value must be positive, can't go negative.")}>
            Decrease
          </button>
        </div>
      </div>
      <h3 className="text-info">Value: {value}</h3>
    </div>
  );
}

export default App;
