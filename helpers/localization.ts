import { EnResource, TrResouce } from "@assets/localization";
import { LANGUAGES } from "@helpers/constants";
import { I18n, TranslateOptions } from "i18n-js";

const i18n = new I18n(
	{
		en: EnResource,
		tr: TrResouce,
	},
	{
		defaultLocale: LANGUAGES.english,
	}
);

const translate = (key: string, props?: TranslateOptions): string =>
	i18n.t(key, props);

export { i18n, translate };
