import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import router from './routes';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/atoms/Layout';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <ToastContainer
      draggable={true}
      position={'bottom-right'}
      autoClose={5000}
      pauseOnHover={true}
    />
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
