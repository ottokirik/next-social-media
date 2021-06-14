import {
  HeaderMessage,
  FooterMessage,
} from 'components/common/welcome-message';
import { LoginForm } from 'components/common/login-form';

const Login = () => {
  return (
    <>
      <HeaderMessage />
      <LoginForm />
      <FooterMessage />
    </>
  );
};

export default Login;
