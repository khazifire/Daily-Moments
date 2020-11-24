import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonLoading,
IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from '@ionic/react';

import React, { useState } from 'react';
import { useAuth } from '../../auth';
import { auth } from '../../firebase';

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
    <IonContent color="light" fullscreen>
      <IonCard className="ionCardstyle">
        <IonCardHeader>
          <img
            className="imageSize"
            src=""
          />
          <IonCardTitle className="centerText">Sign Up</IonCardTitle>
        </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(event) => setEmail(event.detail.value)}
                  placeholder="Email"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(event) => setPassword(event.detail.value)}
                  placeholder="Password"
                />
              </IonItem>
            </IonList>
            {status.error &&
              <IonText color="danger">Registration Failed</IonText>
          }

            <IonButton 
            expand="block" 
            onClick={handleRegister}>Sign Up
            </IonButton>

            <IonButton 
            expand="block" 
            fill="clear" 
            routerLink="/login">Already have an account?
              </IonButton>

              <IonLoading isOpen={status.loading}></IonLoading>

            {/* <IonLoading isOpen={status.loading}></IonLoading> */}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};




  /*   <IonPage>
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
 */


export default RegisterPage;
