import {
  HeaderMessage,
  FooterMessage,
} from 'components/common/welcome-message';

import { SignupForm } from 'components/common/signup-form';

const Signup = () => {
  return (
    <>
      <HeaderMessage />
      <SignupForm />
      <FooterMessage />
    </>
  );
};
export default Signup;
