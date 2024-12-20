import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

const HomePage = observer(function HomePage() {
    const { userStore, modalStore } = useStore();
    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }}></Image>
                    Reactivities
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted>Welcome to Reactivities</Header>
                        <Button as={Link} to='/activities' color='teal' size='huge' inverted >
                            Go to Actvities!
                        </Button>
                    </>
                ) : (
                    <>
                        <Button as={Link} to='/login' color='teal' size='huge' inverted onClick={() => modalStore.openModal(<LoginForm />)} >
                            Login!
                        </Button>
                        <Button as={Link} to='/login' color='teal' size='huge' inverted onClick={() => modalStore.openModal(<RegisterForm/>)} >
                            Register!
                        </Button>
                    </>

                )}
            </Container>
        </Segment>
    )
});

export default HomePage;
HomePage.displayName = "HomePage";
