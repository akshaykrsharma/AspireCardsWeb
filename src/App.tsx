import React,{createContext} from 'react';
import Home from './components/screen/Home/Home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentA from './components/common/ComponentA';

export const NameContext = createContext("");

const App = () => {
  return <NameContext.Provider value={"Hello"}><ComponentA></ComponentA></NameContext.Provider>
  //return <Home/>;
};
export default App;
