import ReactDOM from 'react-dom/client';
import App from './App';
import demoReducer from "./demoSlice"
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
const root=ReactDOM.createRoot(document.getElementById("root"));
const store= configureStore({
    reducer:{
        demo:demoReducer
    }
})
root.render(<Provider store={store}><App/></Provider>);