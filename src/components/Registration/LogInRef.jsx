import { Link } from './Registration.styled';
const LogInRef = () => {
  return (
    <ul>
      <li>
        <Link to="register">Sing up</Link>
      </li>
      <li>
        <Link to="logIn">Log in</Link>
      </li>
    </ul>
  );
};
export default LogInRef;
