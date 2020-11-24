import {
 
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
 
  IonButtons,
  IonBackButton,

} from "@ionic/react";
import React, {  } from "react";
import LineRechartComponent from "../components/AreaChart";


// function ProgressReport() {
//     return (
//                 <IonPage>
//                 <IonHeader>
//                     <IonToolbar>
//                         <IonButtons slot="start"><IonBackButton/></IonButtons>
//                         <IonTitle>Mango Chart</IonTitle>
//                     </IonToolbar>
//                 </IonHeader>
//                 <IonContent className="ion-padding">
//                 <h2>Work Hours Gained</h2>
//                 <MangoChart startDay={10} endDay={10} size={10} />
//                 </IonContent>
//             </IonPage>
//             )
//         };

function ProgressReport() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Mango Chart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Work Hours Gained</h2>
        <LineRechartComponent />
      </IonContent>
    </IonPage>
  );
}

export default ProgressReport;
