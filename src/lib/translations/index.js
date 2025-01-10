import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
    translations: {
        en: { lang },
        fr: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'common',
            loader: async () => (await import('./en/common.json')).default,
        },
        {
            locale: 'en',
            key: 'about',
            routes: ['/about'],
            loader: async () => (await import('./en/about.json')).default,
        },
        // {
        //     locale: 'en',
        //     key: 'home',
        //     routes: ['/'],
        //     loader: async () => (await import('./en/home.json')).default,
        // },
        {
            locale: 'fr',
            key: 'common',
            loader: async () => (await import('./fr/common.json')).default,
        },
        {
            locale: 'fr',
            key: 'about',
            routes: ['/about'],
            loader: async () => (await import('./fr/about.json')).default,
        },
        // {
        //     locale: 'fr',
        //     key: 'home',
        //     routes: ['/'],
        //     loader: async () => (await import('./fr/home.json')).default,
        // },
    ],
};

export const { t, loading, locales, locale, loadTranslations, addTranslations, translations, setLocale, setRoute } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations for the main instance...'));