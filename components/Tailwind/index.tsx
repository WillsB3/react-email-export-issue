import { Tailwind as Tw } from "@react-email/components";
import { ThemeContext, DEFAULT_THEME } from "./context";

const brandAConfig = {
	theme: {
		extend: {
			colors: {
				primary: "#FF6B6B",
				secondary: "#4ECDC4",
				background: "#F7FFF7",
			},
			fontFamily: {
				sans: ["Arial", "Helvetica", "sans-serif"],
				serif: ["Georgia", "serif"],
			},
		},
	},
};

const brandBConfig = {
	theme: {
		extend: {
			colors: {
				primary: "#6C5CE7",
				secondary: "#FD79A8",
				background: "#DFE6E9",
			},
			fontFamily: {
				sans: ["Verdana", "Geneva", "sans-serif"],
				serif: ["Times New Roman", "serif"],
			},
		},
	},
};

const getTailwindConfig = (theme: string) => {
	switch (theme) {
		case "brand-a":
			return brandAConfig;
		case "brand-b":
			return brandBConfig;
		default:
			return brandAConfig;
	}
};

export const Tailwind = ({
	theme,
	children,
	...props
}: {
	theme: string;
	children: React.ReactNode;
}) => {
	const config = getTailwindConfig(theme || DEFAULT_THEME);

	return (
		<ThemeContext.Provider value={theme || DEFAULT_THEME}>
			<Tw config={config} {...props}>
				{children}
			</Tw>
		</ThemeContext.Provider>
	);
};
