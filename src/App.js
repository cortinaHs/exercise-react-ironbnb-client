import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ApartmentsList } from "./components/ApartmentsList";
import { ApartmentDetails } from "./components/ApartmentDetails";
import { HomePage } from "./components/HomePage";
import { CreateApartment } from "./components/CreateApartment";
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">

      <header>
        <h1>IronBnB</h1>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />

        <Route path="*" element={ <ErrorPage /> } />
      </Routes>




    </div>
  );
}

export default App;
