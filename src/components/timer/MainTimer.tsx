import { IonButton, IonContent, IonItem, IonLabel, IonPopover, IonTextarea } from "@ionic/react";
import React, { useState} from "react";
import Timer from "react-compound-timer";

import { useAuth } from "../../auth";
import { useHistory } from "react-router-dom";
import { firestore } from "../../firebase";

import moment from 'moment';



/* https://vercel.com/khazifire/mango-time-tracker/settings/domains
https://github.com/chanrose/vls/blob/main/package.json */


const MainTimer = () => {
  var [timerValue, setTimerValue] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');  
  const [timeSaved, setTimeSaved] = useState('');




  const { userId } = useAuth();
  const [description, setDescription] = useState('');
  const history = useHistory();


  function StoreTime() {
    firestore.collection("users").doc(userId).collection("entries")
      .add({
        description: description,
        title: description,
        workedTime: description,
        date: new Date()
      })
    history.goBack();
  }

  
  
  
    const handleTimeIn = () => {
      const now = moment();
      console.log("Time In: ", now);
      setTimeIn(now.toISOString());    
    }
  
    const handleTimeOut = () => {
      const now = moment();  
      console.log("Time Out: ", now);
      setTimeOut(now.toISOString());  
    }
  
    const handleSaveTime = () => {
      const time1 = moment(timeIn);
      const time2 = moment(timeOut);
      const timeDiff = time2.diff(time1);
      console.log(timeDiff/1000, "Second");
    }
  






  return (
    <Timer
      formatValue={value => `${value < 10 ? `0${value}` : value}`}
      initialTime={0}
      startImmediately={false}
      onStart={() => console.log("onStart")}
      onPause={() => console.log("onPause")}
      onStop={() => {
        console.log("onStop");
      }}
      onReset={() => console.log("onReset")}
    >
      {({ start, pause, stop, reset, getTime }) => (
        <>
          <div >
            <div>
              <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
            </div>
          </div>
          <div
           
            style={{ minWidth: "9rem" }}
          >
        <IonItem>
          <IonLabel position="stacked">What are you working on</IonLabel>
          <IonTextarea
            value={description} onIonChange={(event) => setDescription(event.detail.value)} />
        </IonItem>


              <IonButton onClick={() =>{ 
                start();       
                handleTimeIn();
              }}> START 
              </IonButton>


              <IonButton  onClick={() =>{pause()
              }}> PAUSE 
            </IonButton>
             
              <IonButton  
              onClick={() => { stop();  reset();
                handleTimeOut();
                StoreTime();
               
              }}> STOP </IonButton>
 <IonButton  
              onClick={() => { 
                handleSaveTime();
                setShowPopover(true);
              }}> STOP </IonButton>
           
          </div>
           


           mom
           <IonContent>
        <IonPopover
          isOpen={showPopover}
          cssClass="conainer-of-Pop-Ups"
          onDidDismiss={(e) => setShowPopover(false)}
        >
          <p className="centerText">Congratulation!</p>
          <p className="centerText">You spent {timerValue} working  </p>
          <IonButton className="IonButtonRadius" expand="block">
            View Report
          </IonButton>

        </IonPopover>
      </IonContent> 
        </>
      )}
    </Timer>
  );
};

export default MainTimer;