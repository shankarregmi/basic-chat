import React from 'react';
import { Route } from 'react-router-dom';
import Chats from '../Chats';

const Main = ({ socket }) => (
    <main>
      <Route exact path="/" component={Chats} socket={socket}/>
    </main>
);

export default Main;
