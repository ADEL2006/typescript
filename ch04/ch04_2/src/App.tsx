import IserOrCreateTest from './pages/UserOrCreateTest'
import Memo from "./pages/Memo"
import Callback from "./pages/Callback"
import HighOrderCallback from './pages/HighOrderCallback'
function App() {
  return (
    <div>
      <HighOrderCallback />
      <Callback />
      <Memo />
      <UserOrCreateTest />
    </div>
  );
}

export default App;
