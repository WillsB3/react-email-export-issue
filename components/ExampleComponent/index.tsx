import { useContext } from "react";
import { ThemeContext } from "../Tailwind/context";

export const CustomComponent = () => {
	const theme = useContext(ThemeContext);

	return (
		<div className="bg-primary text-white p-4 rounded-md">
			<p>
				Current theme from context: <strong>{theme}</strong>
			</p>
			<p>This component uses useContext to get the theme value.</p>
		</div>
	);
};
