import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Header from './Header';
import Signin from "./Signin";
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route from react-router-dom
import store from './Source/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
