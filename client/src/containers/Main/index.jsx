import React from 'react';
import { Route } from 'react-router-dom';
import Chats from '../Chats';

const Main = () => (
    <main>
      <Route exact path="/" component={Chats} />
    </main>
);

export default Main;
