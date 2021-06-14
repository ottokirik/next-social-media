import { useRouter } from 'next/router';
import Link from 'next/link';

import { Icon, Message, Divider } from 'semantic-ui-react';

export const HeaderMessage = () => {
  const router = useRouter();
  const isSignupRoute = router.pathname === '/signup';

  return (
    <Message
      color="teal"
      attached
      header={isSignupRoute ? 'Get Started' : 'Welcome Back'}
      icon={isSignupRoute ? 'settings' : 'privacy'}
      content={
        isSignupRoute ? 'Create New Account' : 'Login with Email & Password'
      }
    />
  );
};

export const FooterMessage = () => {
  const router = useRouter();
  const isSignupRoute = router.pathname === '/signup';

  return (
    <>
      {isSignupRoute ? (
        <>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Existing User? <Link href="/login">Login Here Instead</Link>
          </Message>
          <Divider hidden />
        </>
      ) : (
        <>
          <Message attached="bottom" warning>
            <Icon name="lock" />
            <Link href="/reset">Forgot Password?</Link>
          </Message>
          <Message attached="bottom" warning>
            <Icon name="help" />
            New User? <Link href="/signup">Signup Here</Link> Instead
          </Message>
        </>
      )}
    </>
  );
};
