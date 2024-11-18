// utils/cookieUtils.ts

import { Preferences } from "@/app/component/CookieConsent";

/**
 * Sets a cookie with a specified name, value, and expiration in days.
 * @param name - The name of the cookie.
 * @param value - The value of the cookie.
 * @param days - The number of days until the cookie expires.
 */
export const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax;`;
};

/**
* Retrieves the value of a cookie by its name.
* @param name - The name of the cookie to retrieve.
* @returns The value of the cookie, or an empty string if not found.
*/
export const getCookie = (name: string) => {
  return document.cookie.split('; ').reduce((r, c) => {
      const [key, ...v] = c.split('=');
      return key === name ? decodeURIComponent(v.join('=')) : r;
  }, '');
};

/**
* Erases a cookie by its name.
* @param name - The name of the cookie to erase.
*/
export const eraseCookie = (name: string) => {
  setCookie(name, '', -1);
};

/**
* Sets essential cookies. These cookies do not require consent.
*/
export const setEssentialCookies = () => {
  setCookie("session_id", "some_session_value", 30); // Example essential cookie
  // Add other essential cookies as needed
};

/**
* Sets functional cookies if the user has consented to them.
* @param preferences - User preferences regarding cookies.
*/
export const setFunctionalCookies = (preferences: { functional: boolean }) => {
  if (preferences.functional) {
      setCookie("user_preferences", JSON.stringify({ theme: "dark" }), 30); // Example functional cookie
      // Add other functional cookies as needed
  }
};

/**
* Sets analytics cookies if the user has consented to them.
* @param preferences - User preferences regarding cookies.
*/
export const setAnalyticsCookies = (preferences: { analytics: boolean }) => {
  if (preferences.analytics) {
      setCookie("analytics_opt_in", "true", 30); // Example analytics cookie
      // Initialize analytics tools here
  }
};

/**
* Sets marketing cookies if the user has consented to them.
* @param preferences - User preferences regarding cookies.
*/
export const setMarketingCookies = (preferences: { marketing: boolean }) => {
  if (preferences.marketing) {
      setCookie("marketing_opt_in", "true", 30); // Example marketing cookie
      // Initialize marketing tools here
  }
};

export const acceptFunctionalCookies = (preferences: Preferences) => {
  setFunctionalCookies(preferences);
};

/**
* Accepts only analytics cookies based on user preferences.
* @param preferences - User preferences regarding cookies.
*/
export const acceptAnalyticsCookies = (preferences: Preferences) => {
  setAnalyticsCookies(preferences);
};

/**
* Accepts only marketing cookies based on user preferences.
* @param preferences - User preferences regarding cookies.
*/
export const acceptMarketingCookies = (preferences: Preferences) => {
  setMarketingCookies(preferences);
};