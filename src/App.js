import logo from './logo.svg';
import './App.css';
import Body from './components/bodyComponent/Body';
import { Provider } from 'react-redux';
import appStore from './utils/userStore';


function App() {
  return (
    <div className="App">
      <Provider store={appStore}>

        <Body />
      </Provider>
    </div>
  );
}

export default App;
