import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonList,
  IonButtons,
  IonBackButton,
  IonDatetime,
  IonFooter,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import LineRechartComponent from "../components/AreaChart";
import { entries } from "../data";
import { useLocalStorage } from "../hook";
import SettingsPage from "./SettingsPage";
import { firestore } from "../firebase";
import { useEffect } from "react";
import MangoChart from "../components/MangoChart";

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
