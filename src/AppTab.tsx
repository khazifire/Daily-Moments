import {
    IonTabBar, 
    IonLabel,
    IonTabButton,
    IonTabs,
    IonIcon,
    IonRouterOutlet
  } from '@ionic/react';
  
  import React from 'react';
  import { home as homeIcon, settings as settingsIcon, happyOutline, peopleCircle } from 'ionicons/icons';
  import { Redirect, Route } from 'react-router-dom';
  
  import Homepage from './pages/Homepage';
  import SettingsPage from './pages/SettingsPage';
  import EntryPage from './pages/EntryPage';
  import AddEntryPage from './pages/AddEntryPage';
  import { useAuth } from './auth';

  
  
  const AppTab: React.FC = () => {
    const { loggedIn } = useAuth();
    if(!loggedIn){
      return <Redirect to="/login"/>
    }
    
    return (
          <IonTabs>    
            <IonRouterOutlet>

        <Route exact path="/my/home">
          <Homepage />
        </Route>
  
        <Route exact path="/my/entries">
          <Homepage />
        </Route>

        <Route path="/my/entry/:id" component={EntryPage} exact={true} />

        <Route path="/my/addentry/add" component={AddEntryPage} exact={true} />

        <Route path="/my/setting" component={SettingsPage}> 
          <SettingsPage />
        </Route>

  
        

        <Route path="/" render={() => <Redirect to ="/home" />} exact={true} />
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
  
          <IonTabButton tab="home" href="/my/home">
            <IonIcon icon={homeIcon} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
  
          <IonTabButton tab="tab3" href="/my/setting">
            <IonIcon icon={settingsIcon} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>

          </IonTabBar>
          </IonTabs>
    );
  };
  
  export default AppTab;
  