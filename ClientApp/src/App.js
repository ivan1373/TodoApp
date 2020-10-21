import React from 'react';

// Components
import Layout from "./components/Layout";

// Services
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {

    return (
        <>
            <NotificationContainer />
            <Layout />
        </>
        
    );
}

export default App;
