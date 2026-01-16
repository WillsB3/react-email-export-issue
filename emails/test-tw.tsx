import { Html, Body, Container, Head } from "@react-email/components";
import { Tailwind } from "../components/Tailwind/index";
import { CustomComponent } from "../components/ExampleComponent/index";

export default function TestEmail() {
	return (
		<Tailwind theme="brand-b">
			<Html>
				<Head>
					<title>Test Email - Brand A</title>
				</Head>
				<Body>
					<Container>
						<CustomComponent />
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
}
