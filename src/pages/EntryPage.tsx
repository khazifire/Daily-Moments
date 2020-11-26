import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton,
  IonBackButton,
  IonIcon,
  IonButtons,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { firestore } from "../firebase";
import { Entry, toEntry } from "../model";
import { useAuth } from "../auth";
import { trash as deleteIcon} from 'ionicons/icons';
import { useHistory } from "react-router-dom";

import moment from 'moment';


const formatDate = (inputDate: string) => {
  const date = moment(inputDate);
  return (
    date.format('MMMM DD, YYYY')
  );
}

interface RouteParams {
  id: string;
}

const EntryPage: React.FC = () => {
  const match = useRouteMatch<RouteParams>();
  const { id } = match.params;
  const [entry, setEntry] = useState<Entry>();
  const { userId } = useAuth();
  const history = useHistory();


  
  function handleDelete() {
    firestore.collection('users').doc(userId).collection('entries').doc(id)
    .delete() 
      history.goBack(); 
    };


    useEffect(() => {
        const entryRef = firestore.collection("users").doc(userId).collection("entries").doc(id);
        entryRef.get().then((doc) => {setEntry(toEntry(doc));
        });
      }, [userId, id]);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
       
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle> {formatDate(entry?.date)}</IonTitle>
          <IonButton slot="end" onClick={handleDelete} fill="clear">
          <IonIcon  icon={deleteIcon} />
          </IonButton>

        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <h2>{entry?.title}</h2>
      <img src={entry?.pictureUrl} alt={entry?.title} />
        <p>{entry?.description}</p> 
       
    
     
     </IonContent>
     
    </IonPage>
  );
};

export default EntryPage;
