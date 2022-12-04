import {
  InputContainer,
  InputField,
  Button,
  Form,
} from 'pages/RegisterPage/Register.styled';
import { Main } from 'pages/HomePage/Home.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';

const LogIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <h2>Enter your login</h2>
        <InputContainer>
          <InputField type="text" placeholder="Email" name="email" />
        </InputContainer>

        <InputContainer>
          <InputField type="password" placeholder="Password" name="password" />
        </InputContainer>

        <Button type="submit">Log in</Button>
      </Form>
    </Main>
  );
};

export default LogIn;
