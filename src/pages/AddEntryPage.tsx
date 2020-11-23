import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton,
  IonItem,
  IonTextarea,
  IonDatetime

} from "@ionic/react";
import React, { useState } from "react";
import { firestore } from "../firebase";
import { useAuth } from "../auth";
import { useHistory } from "react-router-dom";



const AddEntryPage: React.FC = () => {
  const { userId } = useAuth();
  const [title, setTitle] = useState('');
  const [date, setdate] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  function handlesave() {
    firestore.collection("users").doc(userId).collection("entries")
      .add({
        description: description,
        title: title,
        date: date
      })
    history.goBack();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Add Entry</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Title</IonLabel>
          <IonInput type="email"
            value={title} onIonChange={(event) => setTitle(event.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Description</IonLabel>
          <IonTextarea
            value={description} onIonChange={(event) => setDescription(event.detail.value)} />
        </IonItem>

    <IonItem>
          <IonLabel position="stacked">Date</IonLabel>
          <IonDatetime value={date} onIonChange={(event) => setdate(event.detail.value)} /> 
          
        </IonItem> 
        <IonButton expand="block" onClick={handlesave} >Add Entry</IonButton>
      </IonContent>
    </IonPage>
  );
};



export default AddEntryPage;