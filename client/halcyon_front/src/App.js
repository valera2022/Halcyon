import logo from './logo.svg';
import SiteBar from './SiteBar';
import DashBoard from './DashBoard';
import { UserProvider} from './context/contex';
import { Routes,Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import AddCourse from './AddCourse';

import DashClass from './DashClass';
import Profile from './Profile';
import MyCourses from './MyCourses';




function App() {
  return (
    <div className="body">
      <UserProvider>
        {/* nest providers here */}
       
        
        <Navbar/>
        <SiteBar/>
        
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/dash" element={  <DashBoard className="flex"/>} />
        <Route exact path="/addcourse" element={  <AddCourse />} />
        <Route exact path="/classes/:id" element={  <DashClass />} />
        <Route exact path="/profile" element={  <Profile />} />
        <Route exact path="/myClasses" element={  <MyCourses />} />
      </Routes>
      
     
    
    </UserProvider>
  </div>
  );
}

export default App;
