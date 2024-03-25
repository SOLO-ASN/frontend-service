import { useState } from '#app';

export const useRtl = () => (useState('rtl', () => undefined));
export const useThemeMode = () => (useState('mode', () => undefined));
export const useHeader = () => useState(
  'header',
  () => 'mixed', /* available: mixed, basic, droplist, mega, hamburger, navscroll, search */
);
export const useFooter = () => useState(
  'footer',
  () => 'sitemap', /* basic, blog, sitemap */
);
export const useCorner = () => useState(
  'corner',
  () => 'chat', /* chat, nav */
);

const states = {
  themeMode: useThemeMode,
  rtl: useRtl,
  header: useHeader,
  footer: useFooter,
  corner: useCorner,
};

export function toggleDark() {
  const themeMode = useThemeMode();
  const storedTheme = localStorage.getItem('bungalionTheme');

  themeMode.value = storedTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('bungalionTheme', themeMode.value);
}

export function setRtl(val) {
  const rtl = useRtl();
  rtl.value = val;
}

export function setHeader(val) {
  const header = useHeader();
  header.value = val;
}

export default states;
