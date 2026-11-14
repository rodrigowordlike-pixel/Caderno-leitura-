import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const mountApp = () => {
  const rootEl = document.getElementById('root');
  if (!rootEl || rootEl.dataset.mounted === 'true') return;
  rootEl.dataset.mounted = 'true';
  createRoot(rootEl).render(<App />);
};

const appCssLink = document.querySelector<HTMLLinkElement>('link[data-app-css]');
if (
  !appCssLink ||
  appCssLink.media === 'all' ||
  (window as unknown as {__appCssReady?: boolean}).__appCssReady
) {
  mountApp();
} else {
  const timeoutId = window.setTimeout(mountApp, 1500);
  appCssLink.addEventListener(
    'load',
    () => {
      window.clearTimeout(timeoutId);
      mountApp();
    },
    {once: true}
  );
  appCssLink.addEventListener(
    'error',
    () => {
      window.clearTimeout(timeoutId);
      mountApp();
    },
    {once: true}
  );
}
