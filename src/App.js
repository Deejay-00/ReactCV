
import './App.css';
import Darecv from './component/MyCV/Darecv';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faEnvelope,faPhone,faCode, faBook,faCarAlt, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse,faEnvelope,faPhone,faCode, faBook,faCarAlt, faPlaneDeparture);


function App() {
  return (
    <Darecv />
    
  );
}

export default App;
