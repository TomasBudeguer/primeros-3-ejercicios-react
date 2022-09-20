import TituloPrincipal from "./components/TituloPrincipal";
import './style.css'
function App() {
  const friend = 'my friend'
  return (
    <TituloPrincipal myFriend={friend} />
  );
}

export default App;
