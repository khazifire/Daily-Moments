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
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import MainTimer from "../components/timer/MainTimer";
import { Entry, toEntry } from "../model";
import { useAuth } from "../auth";
import { add as addIcon} from 'ionicons/icons';

const HomePage: React.FC = () => {
  const { userId } = useAuth();
 
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entry, setEntry] = useState<Entry>();

  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId).collection('entries');
     console.log('You are in HomePage',  entriesRef);
     
    return entriesRef.orderBy('date','desc').limit(7).onSnapshot(({docs})=> setEntries(docs.map(toEntry)));   /*  checks for new data on firestore */  
      }, []);

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
          {entries.map((entry) => (
            <IonItem button key={entry?.id} routerLink={`/my/entry/${entry.id}`}>
              Title:{entry.title}
            </IonItem>
          ))}
        </IonList>
     
        <IonFab vertical="bottom" horizontal="end">
        <IonFabButton routerLink="/my/addentry/add">
        <IonIcon icon={addIcon} />
        </IonFabButton>
       </IonFab>
    
      
        <MainTimer />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
