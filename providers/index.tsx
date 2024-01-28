import React from "react";
import { LoadingProvider } from "./LoadingProvider";
import { AuthProvider } from "./AuthProvider";
import { LocalizationProvider } from "./LocalizationProvider";
import { ThemeProvider } from "./ThemeProvider";

type Props = {
	children: React.ReactNode;
};

function CustomProvider({ children }: Props) {
	return (
		<LoadingProvider>
			<AuthProvider>
				<LocalizationProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</LocalizationProvider>
			</AuthProvider>
		</LoadingProvider>
	);
}

export default CustomProvider;
