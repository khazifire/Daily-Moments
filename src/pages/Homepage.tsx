import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonThumbnail,
  IonImg,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";

import { Entry, toEntry } from "../model";
import { useAuth } from "../auth";
import { add as addIcon} from 'ionicons/icons';
import moment from 'moment';

const HomePage: React.FC = () => {
  const { userId } = useAuth();
 
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entry, setEntry] = useState<Entry>();

  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId).collection('entries');
     console.log('You are in HomePage',  entriesRef);
     
    return entriesRef.orderBy('date','desc').limit(7).onSnapshot(({docs})=> setEntries(docs.map(toEntry)));   /*  checks for new data on firestore */  
      }, []);


      const formatDate = (inputDate: string) => {
        const date = moment(inputDate);
        return (
          date.format('MMMM DD, YYYY')
        );
      }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>HOME</IonTitle>
      
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLabel>hi! welcome to mangotime</IonLabel>
        <IonList>
          {entries.map((entry) => 
            <IonItem button key={entry.id} routerLink={`/my/entry/${entry.id}`}>
              <IonThumbnail slot="end">
            <IonImg src={entry.pictureUrl}/>
              </IonThumbnail>
              
              <IonLabel>
                <h1> {formatDate(entry.date)}</h1>
                <h2> {entry.title}</h2>
              </IonLabel>
             
            </IonItem>
          )}
        </IonList>
     
        <IonFab vertical="bottom" horizontal="end">
        <IonFabButton routerLink="/my/addentry/add">
        <IonIcon icon={addIcon} />
        </IonFabButton>
       </IonFab>
    
      
      
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
