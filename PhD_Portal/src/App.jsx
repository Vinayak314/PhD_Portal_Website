import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import LandingPage from './pages/landing-page/LandingPage.jsx' 
import LoginPage from "./pages/login-page/LoginPage.jsx";
import RegistrationPage from "./Registration_page/Registration_page.jsx";
import StudentDashboard from './pages/dashboard/StudentDashboard.jsx';
import StudentLayout from './layout/StudentLayout.jsx';
import AllCourses from './pages/my-courses/AllCourses.jsx';
import AllCourseDetails from './pages/my-courses/AllCourseDetails.jsx';
import LearningGuides from './pages/my-courses/LearningGuides.jsx';
import StudentProfile from './pages/profile-page/StudentProfile.jsx';
import AssignmentsPanel from './pages/assignment-page/AssignmentPanel.jsx';
import AssignmentDetails from './pages/assignment-page/AssignmentDetails.jsx';
import PDFViewer from './pages/my-courses/CoursePDf.jsx';

import sample from "./assets/Unit 3 Magnetic Sensors.pdf";


const App = () => {
  const [showLanding, setShowLanding] = useState(true);
  const assignments = [
  {
    id: "1",
    title: "Experiment 1 - Process Scheduling",
    status: "Pending",
    deadline: "31/05/2025",
    statusDescription: "Not yet submitted",
    timeRemaining: "3 days left",
    lastModified: "",
    grade: "Not Graded",
    comments: "-",
    attachments: [],
    submission: { name: "-", url: "#" },
  },
  {
    id: "2",
    title: "Experiment 2 - Disk Scheduling",
    status: "Submitted",
    deadline: "31/05/2025, 11:59 pm",
    statusDescription: "Submitted for Grading",
    timeRemaining: "Assignment was Submitted 2 hours early",
    lastModified: "31/05/2025, 09:59 pm",
    grade: "Not Graded",
    comments: "Remarks From Faculty",
    attachments: [
      { name: "Exp2_WriteUp.docx", url: sample },
      { name: "ReferenceMaterial.pdf", url: sample },
    ],
    submission: { name: "Experiment2.pdf", url: "#" },
  },
  // Add more assignments...
]
  return(
    <Router>
      <div className="relative h-screen w-screen overflow-auto scroll-smooth font-[Marcellus]">
      
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={
            <>
              {showLanding && <LandingPage onContinue={() => setShowLanding(false)} />}
              {!showLanding && <LoginPage />}
            </>}
          />
          <Route path='/register' element={<RegistrationPage />} />

          <Route path='/student' element={<StudentLayout />}>
            <Route path='dashboard' element={<StudentDashboard />} />
            <Route path='courses' element={<AllCourses/>}/>
            <Route path='courses/details' element={<AllCourseDetails/>}/>
            <Route path='courses/details/learning-guides/pdf' element={<PDFViewer/> }/>
            <Route path='courses/details/learning-guides' element={<LearningGuides/>}/>
            <Route path='profile' element={<StudentProfile/>}/>
            <Route path="assignments" element={<AssignmentsPanel assignments={assignments} />} />
            <Route path="assignments/:id" element={<AssignmentDetails assignments={assignments} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
