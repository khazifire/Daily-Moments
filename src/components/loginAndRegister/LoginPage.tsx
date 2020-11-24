import {
  IonContent,
  IonPage,
  IonItem,
  /* IonLabel, */
  IonInput,
  IonButton,
  IonText,
/*   IonLoading, */
  IonList,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";

import React, { useState } from "react";
import { useAuth } from "../../auth";
import { auth } from "../../firebase";
import "../loginAndRegister/StylesSignUP.css";
import { Redirect } from "react-router";

/* interface Props {
  onLogin: () => void;

} */

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });
  const [errorName, setError] = useState({ Err: "" });
  const { loggedIn } = useAuth();

  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await auth.signInWithEmailAndPassword(email, password);
      console.log("credential", credential);
    } catch (error) {
      setStatus({ loading: false, error: true });
      console.log("error: ", error.message);
      setError({ Err: `${error.message}` });
      console.log("errorname: ", errorName.Err);
    }
  };

  if (loggedIn) {
    return <Redirect to="/my/entries" />;
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
          <IonCardTitle className="centerText">Login</IonCardTitle>
        </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
             {/*    <IonLabel position="stacked">Email</IonLabel> */}
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(event) => setEmail(event.detail.value)}
                  placeholder="Email"
                />
              </IonItem>

              <IonItem>
               {/*  <IonLabel position="stacked">Password</IonLabel> */}
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(event) => setPassword(event.detail.value)}
                  placeholder="Password"
                />
              </IonItem>
            </IonList>
            {status.error && <IonText color="danger">{errorName.Err}</IonText>}

            <IonButton expand="block" onClick={handleLogin}>
              Login
            </IonButton>

            <IonButton
              
              expand="block"
              fill="clear"
              routerLink="/register"
            >
              Don't have an account?
            </IonButton>

            {/* <IonLoading isOpen={status.loading}></IonLoading> */}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
