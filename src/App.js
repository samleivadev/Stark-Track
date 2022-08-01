import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/header/header';
import PageSwitch from './components/app-router/appRouter';

function App() {
  return (
    <div>
     <BrowserRouter>
      <NavBar />
      <PageSwitch />
      
     </BrowserRouter> 
    </div>
  );
}

export default App;
