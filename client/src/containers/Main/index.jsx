import React from 'react';
import { Route } from 'react-router-dom';
// import Home from '../home';
import Chats from '../Chats';

const Main = () => (
    <main>
      <Route exact path="/" component={Chats} />
    </main>
);

export default Main;
