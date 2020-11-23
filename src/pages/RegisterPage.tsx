import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonRouterLink,
  IonList,
  IonItem,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonLoading
} from '@ionic/react';

import React, { useState } from 'react';
import { useAuth } from '../auth';
import { auth } from '../firebase';
import '../components/Login.css';
import { Redirect } from 'react-router';


//import { Link } from 'react-router-dom';

interface Props {
  onLogin: () => void;
  //loggedIn:Boolean;
}

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({loading: false, error: false});

  const handleRegister = async () => {
    try {
      setStatus({loading: true, error: false});
      const credential = await auth.createUserWithEmailAndPassword(email, password);
      console.log('credential', credential);
    } catch (error) {
      setStatus({loading: false, error: true })
      console.log('error: ', error);
    }
  };

  const { loggedIn } = useAuth();
  if(loggedIn){
    return <Redirect to="/my/entries"/>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
  
          <IonContent className="ion-padding">
         <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" 
              value={email} onIonChange={(event) => setEmail(event.detail.value)}/>
         </IonItem>

         <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password"
               value={password} onIonChange={(event) => setPassword(event.detail.value)}/>
         </IonItem>

          {status.error &&
              <IonText color="danger">Registration Failed</IonText>
          }

              <IonButton expand="block" onClick={handleRegister}>
               Create Account
                </IonButton>
              <IonButton expand="block" fill="clear" routerLink="/login">
               Already have an account?
              </IonButton>
              <IonLoading isOpen={status.loading}></IonLoading>
          </IonContent>
    </IonPage>
  );
};



export default RegisterPage;
