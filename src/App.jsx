import {BrowserRouter, Routes,Route} from 'react-router-dom'
import PrivateComponent from "./components/PrivateComponent";
import Todo from './components/Todo-App/Todo';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const App=()=> {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/todo' element={<Todo/>}/>
        </Route>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
