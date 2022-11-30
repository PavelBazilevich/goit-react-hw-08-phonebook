import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './AppBar.styled';
import { LogIn } from 'components/Registration/LogIn';
import UserMenu from 'components/Registration/UserMenu';

const AppBar = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="home" end>
            Home
          </Link>
          <Link to="contacts">Contacts</Link>
        </nav>
        <LogIn />
        <UserMenu />
      </Header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default AppBar;
