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
import React, { useEffect, useRef, useState } from "react";
import { firestore, storage } from "../firebase";
import { useAuth } from "../auth";
import { useHistory } from "react-router-dom";


async function savePicture(blobUrl, userId){
const pictureRef = storage.ref(`/users/${userId}/pictures/${Date.now()}`);
const response = await fetch(blobUrl);
const blob = await response.blob();
const snapshot = await pictureRef.put(blob);
const url = await snapshot.ref.getDownloadURL();
return url;
}

const AddEntryPage: React.FC = () => {
  const { userId } = useAuth();
  const [title, setTitle] = useState('');
  const [date, setdate] = useState('');
  const [pictureUrl, setpictureUrl] = useState('/assets/placeholder.png');
  const [description, setDescription] = useState('');
  const history = useHistory();
  const fileInputRef = useRef<HTMLInputElement>();




  const handlesave = async() => {
   const entriesRef =firestore.collection("users").doc(userId).collection("entries")
      const entryData = {date, title, pictureUrl, description};
      const entryRef= await entriesRef.add(entryData);
if (pictureUrl.startsWith('blob:')) {
      entryData.pictureUrl = await savePicture(pictureUrl, userId);
}
    history.goBack();
  }

/*   function handlesave() {
    firestore.collection("users").doc(userId).collection("entries")
      .add({
        description: description,
        title: title,
        date: date
      })
    history.goBack();
  } */

  useEffect(() => () =>{
    if (pictureUrl.startsWith('blob:')) {
      URL.revokeObjectURL(pictureUrl);
    }
      },[pictureUrl])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
if (event.target.files.length > 0){
  const file=event.target.files.item(0);
  const pictureUrl=URL.createObjectURL(file);
  setpictureUrl(pictureUrl)
}
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
          <IonLabel position="stacked">Picture</IonLabel><br />
        <input type="file" accept="image/*" 
        onChange={handleFileChange} hidden ref={fileInputRef}/>
        <img src={pictureUrl} alt="" style={{cursor: 'pointer'}} 
        onClick={() => fileInputRef.current.click()}/>
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