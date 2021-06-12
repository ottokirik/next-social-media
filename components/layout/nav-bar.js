import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, Container, Icon } from 'semantic-ui-react';

export const Navbar = () => {
  const router = useRouter();

  const isActive = (route) => route === router.pathname;

  return (
    <Menu fluid borderless>
      <Container text>
        <Link href="/login">
          <Menu.Item header active={isActive('/login')}>
            <Icon size="large" name="sign in" />
            Login
          </Menu.Item>
        </Link>
        <Link href="/signup">
          <Menu.Item header active={isActive('/signup')}>
            <Icon size="large" name="signup" />
            Signup
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
};
