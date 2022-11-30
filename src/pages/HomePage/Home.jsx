import { Title, Container, Link } from './Home.styled';
const Home = () => {
  return (
    <main>
      <Container>
        <div>
          <Title>Phonebook</Title>
        </div>
        <div></div>
        <p>A fast and convenient application for your contacts</p>
        <Link to="/contacts">Try it</Link>
      </Container>
    </main>
  );
};
export default Home;
