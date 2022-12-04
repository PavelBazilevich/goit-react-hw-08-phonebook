import { Title, Container, Link, Main, Description } from './Home.styled';
const Home = () => {
  return (
    <Main>
      <Container>
        <div>
          <Title>Phonebook</Title>
        </div>
        <div></div>
        <Description>
          A fast and convenient application for your contacts
        </Description>
        <Link to="/contacts">Try it</Link>
      </Container>
    </Main>
  );
};
export default Home;
