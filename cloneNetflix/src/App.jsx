import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* /player/:id: Đây là một đường dẫn động.
        /player/: Phần tĩnh của đường dẫn.
        :id: Phần động của đường dẫn, đại diện 
        cho một tham số có thể thay đổi. Trong 
        trường hợp này, id có thể là bất kỳ giá 
        trị nào */}
        <Route path="/player/:id" element={<Player />}></Route>
      </Routes>
    </div>
  );
};

export default App
