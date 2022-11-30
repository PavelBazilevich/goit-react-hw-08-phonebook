import {
  InputContainer,
  InputField,
  Button,
  Form,
} from 'pages/RegisterPage/Register.styled';

const LogIn = () => {
  return (
    <Form>
      <h2>Enter your login</h2>
      <InputContainer>
        <InputField type="text" placeholder="Email" name="email" />
      </InputContainer>

      <InputContainer>
        <InputField type="password" placeholder="Password" name="psw" />
      </InputContainer>

      <Button type="submit">Log in</Button>
    </Form>
  );
};

export default LogIn;
