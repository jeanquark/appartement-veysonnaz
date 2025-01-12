// import { browser } from '$app/environment'
// import '$lib/i18n' // Import to initialize. Important :)
// import { locale, waitLocale } from 'svelte-i18n'

// export const load = async () => {
//     if (browser) {
//         locale.set(window.navigator.language)
//     }
//     await waitLocale()
// }

// import { loadTranslations } from '$lib/translations';

// /** @type {import('@sveltejs/kit').Load} */
// export const load = async ({ url }) => {
//     const { pathname } = url;

//     const initLocale = 'fr'; // get from cookie, user session, ...

//     await loadTranslations(initLocale, pathname); // keep this just before the `return`

//     return {};
// }

// export const prerender = true;


// import { setLocale, setRoute } from '$lib/translations';

export const prerender = true;

// /** @type { import('@sveltejs/kit').Load } */
// export const load = async ({ url }) => {
//     const { pathname } = url;

//     const lang = `${pathname.match(/\w+?(?=\/|$)/) || ''}`;

//     const route = pathname.replace(new RegExp(`^/${lang}`), '');

//     await setLocale(lang);
//     await setRoute(route);

//     return { route, lang };
// };

import { addTranslations, setLocale, setRoute } from '$lib/translations';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ data }) => {
    const { i18n, translations } = data;
    const { locale, route } = i18n;

    addTranslations(translations);

    await setRoute(route);
    await setLocale(locale);

    return i18n;
};