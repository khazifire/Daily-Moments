import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonPage
  
  } from '@ionic/react';
  import React, { useState } from 'react';

  
  const NotFoundPage: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    console.log('Rendering app with loggedIn=${loggedIn}');
    
    return (
      <IonPage>
        <IonContent className="ion-padding">
        Page not found. 
        </IonContent>
        </IonPage>
    );
  };
  
  export default NotFoundPage;
  