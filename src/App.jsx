import React from "react";
import { GlobalStyle } from "./styles/global_styles";
import { BrowserRouter, Route } from "react-router-dom";
import Today from "./routes/Today";
import UserDetail from "./routes/UserDetail";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path="/" component={Today}></Route>
        <Route path="/user_detail" component={UserDetail}></Route>
      </BrowserRouter>
    </>
  );
};

export default App;
