import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
	return (
		<main>
			<Input id="name" label="Your name" />
			<Input id="age" label="Your age" />
			<p><Button>A Button</Button></p>
			<p><Button href="https://google.com">A Link</Button></p>
			<Container as={Button} onClick={() => { }}>Click me</Container>
		</main>
	);
}

export default App;
