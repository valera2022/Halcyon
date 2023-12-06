import logo from './logo.svg';
import SiteBar from './SiteBar';
import DashBoard from './DashBoard';
import { UserProvider} from './context/contex';
import { Routes,Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import AddCourse from './AddCourse';
import { CoursesProvider } from './context/coursesContext';
import DashClass from './DashClass';



function App() {
  return (
    <div className="body">
      <UserProvider>
        {/* nest providers here */}
        <CoursesProvider>
        <Navbar/>
        <SiteBar/>
        
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/dash" element={  <DashBoard className="flex"/>} />
        <Route exact path="/addcourse" element={  <AddCourse />} />
        <Route exact path="/classes/:id" element={  <DashClass />} />
      </Routes>
      
     
      </CoursesProvider>
    </UserProvider>
  </div>
  );
}

export default App;
