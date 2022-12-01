import {
  Button,
  Span,
  Avatar,
  Thumb,
  RegisterContainer,
} from './Registration.styled';
import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <RegisterContainer>
      <Thumb>
        <Avatar
          src={`https://eu.ui-avatars.com/api/?background=2196f3&color=fff&&length=1&name=${user.name}`}
          alt="avatar"
          title="Your avatar"
          // className={styles.avatar}
        />
      </Thumb>
      <Span>
        Welkome, <Span>{user.name}</Span>
      </Span>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </RegisterContainer>
  );
};

export default UserMenu;
