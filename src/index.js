import {createRoot} from 'react-dom/client'
import MyRoutes from './Routes';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <MyRoutes/>
  );

