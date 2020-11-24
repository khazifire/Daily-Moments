import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPopover, IonTextarea } from "@ionic/react";
import React, { useState, useEffect } from "react";
import Timer from "react-compound-timer";

import { useAuth } from "../../auth";
import { useHistory } from "react-router-dom";
import { firestore } from "../../firebase";
import { isMoment } from "moment";
import moment from 'moment';
import { DiffieHellman } from "crypto";
import { timeOutline } from "ionicons/icons";

/* https://vercel.com/khazifire/mango-time-tracker/settings/domains
https://github.com/chanrose/vls/blob/main/package.json */


const MainTimer = () => {
  var [timerValue, setTimerValue] = useState('');
  const [showPopover, setShowPopover] = useState(false);

  const [StartingTime, setStartingTime] = useState('');
  const [PausingTime, setPausingTime] = useState('');
  const [StopingTIme, setStopingTIme] = useState('');
  const [WorkedTime, setWorkedTime] = useState<any>('');


  const { userId } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();


  function timeWorked (){
    
    const startedTime = moment(StartingTime);
    const stoppedTime = moment(StopingTIme);
    console.log(startedTime, "timestartedddd");
    const totaltime = stoppedTime.diff(startedTime, 'minutes')
   setWorkedTime(totaltime); 
    console.log(totaltime, "  totaltimeeeeeeeeee"); 
  }

  function StoreTime() {
    firestore.collection("users").doc(userId).collection("entries")
      .add({
        description: description,
        title: description,
        workedTime: timerValue ,
        date: new Date()
      })
    history.goBack();
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
                start()       
            
                const TimeOnStart = moment().format('hh:mm:ss');
                console.log("TimeOnStart", TimeOnStart) 
                setStartingTime(TimeOnStart);
               

              }}> START 
              </IonButton>


              <IonButton  onClick={() =>{pause()
              const TimeOnPause = moment() 
              console.log("TimeOnPause", TimeOnPause)
              
              }}> PAUSE 
            </IonButton>
             
              <IonButton  
              onClick={() => { stop();  reset();
                const TimeOnStop = moment().format('hh:mm:ss');

             /*    const TimeOnStop = moment().toISOString(); */
                console.log("TimeOnStop", TimeOnStop);
                
                StoreTime();
                setShowPopover(true);
                setStopingTIme(TimeOnStop);
                timeWorked();
                
              }}> STOP </IonButton>

              <p>{StartingTime}</p>
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