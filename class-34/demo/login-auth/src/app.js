import LoginProvider from './context/auth';
import Login from './components/login';
import Auth from './components/auth';

const EditLink = (props) => {
  return (
    <Auth capability="update">
      <p>You can Edit!</p>
    </Auth>
  );
};
const DeleteLink = (props) => {
  return (
    <Auth capability="delete">
      <p>You can Delete!</p>
    </Auth>
  );
};
function App() {
  return (
    <LoginProvider>
      <Login />
      <EditLink />
      <DeleteLink />
    </LoginProvider>
  );
}
export default App;
