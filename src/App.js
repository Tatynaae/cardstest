import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Software} from "./pages/Software";
import {Dashboard} from "./pages/Dashboard";

const App = () => (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/software' element={<Software />} />
      </Routes>
    </Router>
);

export default App;
