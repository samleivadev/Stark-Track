import {BrowserRouter} from 'react-router-dom';
import PageSwitch from './components/app-router/appRouter';

function App() {
  return (
    <div>
     <BrowserRouter>
      <PageSwitch />
     </BrowserRouter> 
    </div>
  );
}

export default App;
