import ReactDOM from 'react-dom/client';

import { Provider } from './providers';

import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = ReactDOM.createRoot(rootElement);
root.render(<Provider />);
