import './App.css';
import MainBar from './component/MainBar';
import SideBar from './component/SideBar';
import MemoInfo from './MemoInfo';
function App() {

  return (
    <div className="App">
      <MemoInfo>
        <SideBar/>
        <MainBar/>
      </MemoInfo>
    </div>
  );
}
export default App;
