import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Navbar from './components/Navbar';
//import './App.css'
function App() {
    const [count, setCount] = useState(0);
    return (_jsx(_Fragment, { children: _jsx(Navbar, {}) }));
}
export default App;
