import { LANGUAGES } from "@helpers/constants";
import { Props } from "@helpers/types";
import { i18n } from "@helpers/localization";
import React, { createContext, useContext, useState } from "react";

interface ILanguageContextProps {
	language: string;
	changeLanguage: (newLanguage: string) => void;
}

const LanguageContext = createContext<ILanguageContextProps | undefined>(
	undefined
);

export const LocalizationProvider = ({ children }: Props) => {
	const [language, setLanguage] = useState<string>(LANGUAGES.defaultLanguage); // Default language is English
	const changeLanguage = (newLanguage: string) => {
		setLanguage(newLanguage);
		i18n.locale = newLanguage;
	};

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = (): ILanguageContextProps => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
