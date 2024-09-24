import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {setupStore} from "./app/store/store.ts";
import App from "../src/app/App.tsx";

const store = setupStore()

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
)