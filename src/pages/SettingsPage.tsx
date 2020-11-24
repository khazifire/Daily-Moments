import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonText

} from '@ionic/react';
import React, { useState } from 'react';
import { auth } from '../firebase';



const SettingsPage: React.FC = () => {


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
