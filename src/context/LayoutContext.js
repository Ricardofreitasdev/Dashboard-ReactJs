import { createContext } from 'react';

const LayoutContext = createContext({
    sidebar: null,
    setSidebar: () => {},
})

export default LayoutContext;