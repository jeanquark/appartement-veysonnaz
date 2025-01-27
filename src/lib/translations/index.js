import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const defaultLocale = 'fr';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
    fallbackLocale: 'fr',
    translations: {
        fr: { lang },
        de: { lang },
    },
    loaders: [
        {
            locale: 'fr',
            key: 'common',
            loader: async () => (await import('./fr/common.json')).default,
        },
        {
            locale: 'fr',
            key: 'home',
            loader: async () => (await import('./fr/home.json')).default,
        },
        {
            locale: 'fr',
            key: 'about',
            routes: ['/about'],
            loader: async () => (await import('./fr/about.json')).default,
        },
        {
            locale: 'fr',
            key: 'price',
            routes: ['/tarifs'],
            loader: async () => (await import('./fr/price.json')).default,
        },
        {
            locale: 'de',
            key: 'common',
            loader: async () => (await import('./de/common.json')).default,
        },
        {
            locale: 'de',
            key: 'home',
            loader: async () => (await import('./de/home.json')).default,
        },
        {
            locale: 'de',
            key: 'about',
            routes: ['/about'],
            loader: async () => (await import('./de/about.json')).default,
        },
        {
            locale: 'de',
            key: 'price',
            routes: ['/tarifs'],
            loader: async () => (await import('./de/price.json')).default,
        },
    ],
};

export const { t, loading, locales, locale, loadTranslations, addTranslations, translations, setLocale, setRoute } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations for the main instance...'));