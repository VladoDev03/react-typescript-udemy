import Button from "./components/Button";
import Input from "./components/Input";

function App() {
	return (
		<main>
			<Input id="name" label="Your name" />
			<Input id="age" label="Your age" />
			<p><Button el="button">A Button</Button></p>
			<p><Button el="anchor" href="https://google.com">A Link</Button></p>
		</main>
	);
}

export default App;
