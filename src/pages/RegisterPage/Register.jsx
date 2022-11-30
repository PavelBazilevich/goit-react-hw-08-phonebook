import { useDispatch } from 'react-redux';
import { InputContainer, InputField, Button, Form } from './Register.styled';
import { register } from 'Redux/auth/operations';
const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <h2>Register Form</h2>
      <InputContainer>
        <InputField type="text" placeholder="Username" name="name" />
      </InputContainer>

      <InputContainer>
        <InputField type="email" placeholder="Email" name="email" />
      </InputContainer>

      <InputContainer>
        <InputField type="password" placeholder="Password" name="password" />
      </InputContainer>

      <Button type="submit">Register</Button>
    </Form>
  );
};

export default Register;
