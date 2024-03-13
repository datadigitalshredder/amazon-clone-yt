import { Container, Main } from "../styles/sharedstyles";
import LoginForm from "../components/LoginForm";
import { LoginContainer } from "../styles/loginstyles";

export default function Login() {
  return (
    <Container>
      <Main>
        <LoginContainer>
            {/* <h1>Sign In</h1> */}
          <LoginForm />
        </LoginContainer>
      </Main>
    </Container>
  );
}