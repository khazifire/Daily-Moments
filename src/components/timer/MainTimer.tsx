import { IonButton, IonLabel } from "@ionic/react";
import React, { useState, useEffect } from "react";
import Timer from "react-compound-timer";

const MainTimer = () => {
  const [timerValue, setTimerValue] = useState(null);

  useEffect(() => {
    console.log("timerValue: " + timerValue);
  }, [timerValue]);

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

              <IonButton onClick={start}> START </IonButton>

              <IonButton  onClick={pause}> PAUSE </IonButton>
             
              <IonButton  
              onClick={() => {
                const actualTime = getTime();
                setTimerValue(actualTime); stop(); reset()
              }}> STOP </IonButton>
          </div>
           <IonLabel>you worked for {timerValue} miliseconds lol</IonLabel>
          
        </>
      )}
    </Timer>
  );
};

export default MainTimer;
