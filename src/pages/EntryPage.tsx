import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,

  IonButtons,
  IonBackButton,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { firestore } from "../firebase";
import { Entry, toEntry } from "../model";
import { useAuth } from "../auth";
import { remove as deleteIcon} from 'ionicons/icons';
import { useHistory } from "react-router-dom";

import moment from 'moment';


const formatDate = (inputDate: string) => {
  const date = moment(inputDate);
  return (
    date.format('MMMM DD, YY, h:mm:ss a')
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
  const [entries, setEntries] = useState<Entry[]>([]);
  const history = useHistory();

  useEffect(() => {
    const entryRef = firestore.collection("users").doc(userId).collection("entries").doc(id);
    entryRef.get().then((doc) => {setEntry(toEntry(doc));
    });
  }, [userId, id]);

  
  function handleDelete() {
    firestore.collection('users').doc(userId).collection('entries').doc(id)
    .delete() 
      history.goBack();
    
      
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonFab  vertical="bottom" horizontal="end">
        <IonFabButton >
        <IonIcon onClick={handleDelete} icon={deleteIcon} />
        </IonFabButton>
       </IonFab>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{entry?.title} </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">{entry?.description} <br>
     </br>
     {formatDate(entry?.date)}
     </IonContent>
     
    </IonPage>
  );
};

export default EntryPage;
