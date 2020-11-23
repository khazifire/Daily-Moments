import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton

} from '@ionic/react';
import React, { useState } from 'react';
import { auth } from '../firebase';


const SettingsPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  console.log('Rendering app with loggedIn=${loggedIn}');
  
  return (
    <IonPage>
      <IonHeader>
 <IonToolbar>
          <IonTitle>Settings</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color="medium" expand="block"
          onClick={() => auth.signOut()}>
          Logout
        </IonButton>
      </IonContent>
      </IonPage>
  );
};

export default SettingsPage;
