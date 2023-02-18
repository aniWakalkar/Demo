import {React} from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';

// npm install react-icons --save

function Main(){
    return  (
        <>
            <App />
        </>
        )
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);