import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => ({
  messages: (await import(`@cc/internationalization/dictionaries/${requestLocale}.json`)).default,
  timeZone: "Europe/Prague",
}));
