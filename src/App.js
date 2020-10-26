import React from 'react';
import { Menu } from './components/Menu/Menu';
import { ModalItem } from './components/ModalItem/ModalItem';
import { NavBar } from './components/NavBar/NavBar';
import { Order } from './components/Order/Order';
import { GlobalStyle } from './GlobalStyle';
import { useOpenItem } from './hooks/useOpenItem';
import { useOrders } from './hooks/useOrders';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { useAuth } from './hooks/useAuth';
import { useModal } from './hooks/useModal';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "food-shop-react.firebaseapp.com",
  databaseURL: "https://food-shop-react.firebaseio.com",
  projectId: "food-shop-react",
  storageBucket: "food-shop-react.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

function App() {

    const auth = useAuth(firebase.auth);

    const {openItem, setOpenItem} = useOpenItem();
    const ordersHook = useOrders();
    useModal(openItem);

    return (
        <>
            <GlobalStyle />
            <NavBar {...auth} />
            <Order 
                {...ordersHook} 
                setOpenItem={setOpenItem} 
                {...auth}
                firebaseDatabase={firebase.database} />
            <Menu setOpenItem={setOpenItem} />
            {openItem && 
                <ModalItem openItem={openItem} setOpenItem={setOpenItem} {...ordersHook} />
            }
        </>
    );
}

export default App;
