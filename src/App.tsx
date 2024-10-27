import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
   About,
   Home,
   Error,
   TutorDashboard,
   AdminDashboard,
   Payment,
   TutorSignup,
   StudentDashboard,
   InvestPage,
   PartnerPage,
   LiveClass,
} from './pages';

import {
   Education,
   Pricing,
   ProfileComp,
   Success,
   TutorAvailability,
   TutorCertificate,
   TutorLogin,
   TutorProfileDesc,
   VideoDesc,
   TutorSignupComp,
} from './pages/tutor_auth/index';
import {
   EmailConfirmation,
   SetPassword,
   ForgotPassword,
   ResetPassword,
   RecoveryEmail,
   SecondEmailConfirmation,
   Signup,
   Login,
} from './pages/auth/index';
import { AdminLogin } from './pages/admin_auth/index';

import Profile from './pages/tutor_profile/Profile';
import TutorProfile from './pages/tutor_profile/TutorProfile';
import Wallet from './pages/wallet/Wallet';
import TutorLandingPage from './pages/landing_page/tutor_landing_page/TutorLandingPage';
import Report from './pages/report/Report';
import EditProfile from './pages/tutor_profile/EditProfile';
import LiveChat from './pages/live_chat/LiveChat';
import { ViewSubmissions } from './pages/dashboard/admin/pages/index';
import StudentClassroom from './pages/dashboard/student/pages/Classroom/StudentClassroom';
import Dashboard from './pages/dashboard/tutor/pages/Dashboard/Dashboard';
import BookLesson from './pages/dashboard/student/Flows/BookLesson/BookLesson';

const MyApp = () => {
   return (
      <div className="[&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200 mx-auto w-full ">
         <Outlet />
      </div>
   );
};

const router = createBrowserRouter([
   {
      element: <MyApp />,
      errorElement: <Error />,
      children: [
         { path: '/', element: <Home /> },
         { path: '/live-class', element: <LiveClass /> },
         { path: '/view-subs', element: <ViewSubmissions /> },
         { path: '/admin-dashboard', element: <AdminDashboard /> },
         { path: '/chat', element: <LiveChat /> },
         { path: '/tutor/classroom', element: <StudentClassroom /> },
         { path: '/tutor/dashboard', element: <Dashboard /> },
         { path: '/tutor/home', element: <TutorLandingPage /> },
         { path: '/profile', element: <Profile /> },
         { path: '/tutor-profile', element: <TutorProfile /> },
         { path: '/edit-profile', element: <EditProfile /> },
         { path: '/wallet', element: <Wallet /> },
         { path: '/about', element: <About /> },
         { path: '/report', element: <Report /> },
         { path: '/invest', element: <InvestPage /> },
         { path: '/partner', element: <PartnerPage /> },
         { path: '/book-lesson', element: <BookLesson /> },

         {
            path: '/tutor',
            element: (
               <div>
                  {' '}
                  <TutorSignup /> <Outlet />
               </div>
            ),
            children: [
               { path: 'education', element: <Education /> },
               { path: 'pricing', element: <Pricing /> },
               { path: 'photo', element: <ProfileComp /> },
               { path: 'success', element: <Success /> },
               { path: 'availability', element: <TutorAvailability /> },
               { path: 'certification', element: <TutorCertificate /> },
               { path: 'about', element: <TutorLogin /> },
               { path: 'description', element: <TutorProfileDesc /> },
               { path: 'video', element: <VideoDesc /> },
               { path: 'about', element: <TutorSignupComp /> },
               { path: 'profile', element: <TutorSignupComp /> },
            ],
         },
         {
            path: '/auth',
            children: [
               { path: 'login', element: <Login /> },
               { path: 'signup', element: <Signup /> },
               { path: 'set-password', element: <SetPassword /> },
               { path: 'email-confirmation', element: <EmailConfirmation /> },
               { path: 'confirmation', element: <SecondEmailConfirmation /> },
               { path: 'forgot-password', element: <ForgotPassword /> },
               { path: 'reset-password', element: <ResetPassword /> },
               { path: 'email-recovery-msg', element: <RecoveryEmail /> },
            ],
         },
         {
            path: '/tutor-auth',
            children: [{ path: 'tutor-sign-in', element: <TutorLogin /> }],
         },
         {
            path: '/admin-auth',
            children: [{ path: 'admin-login', element: <AdminLogin /> }],
         },
         { path: '/dashboard', element: <TutorDashboard /> },
         { path: '/admin-dashboard', element: <AdminDashboard /> },
         {
            path: '/dashboard-student',
            element: <StudentDashboard pageTemp="dashboard" />,
         },
         {
            path: '/dashboard-student/group-class',
            element: <StudentDashboard pageTemp="groupclass" />,
         },
         {
            path: '/dashboard-student/find-tutor',
            element: <StudentDashboard pageTemp="findtutor" />,
         },
         { path: '/payment', element: <Payment /> },
      ],
   },
]);

function App() {
   return (
      <div className="App text-slate-800">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
