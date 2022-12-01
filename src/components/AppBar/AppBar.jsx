import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './AppBar.styled';
import LogInRef from 'components/Registration/LogInRef';
import UserMenu from 'components/Registration/UserMenu';
import { useAuth } from 'components/hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="contacts">Contacts</Link>}
        </nav>
        {isLoggedIn ? <UserMenu /> : <LogInRef />}
      </Header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default AppBar;
