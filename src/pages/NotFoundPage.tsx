import {

    IonContent,
 
    IonPage
  
  } from '@ionic/react';
  import React from 'react';

  
  const NotFoundPage: React.FC = () => {
   
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
  