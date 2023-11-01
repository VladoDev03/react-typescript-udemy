import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
	const input = useRef<HTMLInputElement>(null);
	const customForm = useRef<FormHandle>(null);

	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
		customForm.current?.clear();
	}

	return (
		<main>
			<Input id="test" label="test" ref={input} />
			<Input id="name" label="Your name" />
			<Input id="age" label="Your age" />
			<p><Button>A Button</Button></p>
			<p><Button href="https://google.com">A Link</Button></p>
			<Container as={Button} onClick={() => { }}>Click me</Container>
			<Form onSave={handleSave} ref={customForm}>
				<Input type="text" label="name" id="name" />
				<Input type="number" label="age" id="age" />
				<p>
					<Button>Save</Button>
				</p>
			</Form>
		</main>
	);
}

export default App;
