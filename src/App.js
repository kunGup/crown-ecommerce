import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";
import Signin from './routes/sign-in/sign-in.component'
function Shop() {
  return <h1>I'm the shop</h1>;
}

function App() {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin/>}/>
      </Route>
    </Routes>
  );
}

export default App;
