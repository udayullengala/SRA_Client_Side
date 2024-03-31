import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import { Route, Routes } from 'react-router-dom';
import { FrontBaseRoutes } from './routes/FrontBase';
import BlankLayout from './layouts/BlankLayout';
import MainLayout from './layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        {
          FrontBaseRoutes?.map((curElem, key) => {
            const layoutWrapper = curElem?.meta?.layout === "blank" ? <BlankLayout>{curElem?.element}</BlankLayout> : <MainLayout>{curElem?.element}</MainLayout>
            return <Route path={curElem.path} element={layoutWrapper} key={key}/>
          })
        }
      </Routes>
    </div>
  );
}

export default App;
