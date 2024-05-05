import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateToDo from './pages/CreateToDo';
import EditTodo from './pages/EditTodo';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App = () => {
  const [, setSideMenuIsExpand] = useState(false);
  return (
    <>
      <Sidebar setExpand={setSideMenuIsExpand} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-todo" element={<CreateToDo />} />
        <Route path="/edit-todo/:id" element={<EditTodo />} />
      </Routes>
    </>
  );
};

export default App;
