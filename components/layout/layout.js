import { HeadTags } from './head-tags';
import { Navbar } from './nav-bar';
import { Container } from 'semantic-ui-react';
import nProgress from 'nprogress';
import Router from 'next/router';

export const Layout = ({ children }) => {
  Router.onRouteChangeStart = () => nProgress.start();
  Router.onRouteChangeComplete = () => nProgress.done();
  Router.onRouteChangeError = () => nProgress.done();

  return (
    <>
      <HeadTags />
      <Navbar />
      <Container text>{children}</Container>
    </>
  );
};
