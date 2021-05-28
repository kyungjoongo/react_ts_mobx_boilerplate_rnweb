import React from 'react';
import './assets/styles/App.css';
import {IonApp, IonRouterOutlet} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import {Route,} from "react-router-dom";
import {HomeScreen} from "./screens/HomeScreen";
import DetailScreen from "./screens/detail/DetailScreen";
//todo: antd css
import 'antd/dist/antd.css';
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import WriteScreen from "./screens/WriteScreen";
import DetailClassScreen from "./screens/detail/DetailClassScreen";
import {ListScreen} from "./screens/ListScreen";
import TestScreen from "./screens/TestScreen";
import TestDetailScreen from "./screens/TestDetailScreen";
import {AlbumListScreen} from "./screens/album/AlbumListScreen";
import {AlbumListScreen2} from "./screens/album/AlbumListScreen2";
import {InstallDetailScreen} from "./screens/installation/InstallDetailScreen";
import {InstallMainScreen} from "./screens/installation/InstallMainScreen";

type Props = {};
type State = {
    loading: boolean,
};

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true,
        }
    }


    render() {
        return (
            <IonApp>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route path="/" exact component={HomeScreen}/>
                        <Route path="/DetailScreen" exact component={DetailScreen}/>
                        <Route path="/DetailClassScreen" exact component={DetailClassScreen}/>
                        <Route path="/WriteScreen" exact component={WriteScreen}/>
                        <Route path="/ListScreen" exact component={ListScreen}/>
                        <Route path="/TestScreen" exact component={TestScreen}/>
                        <Route path="/TestDetailScreen" exact component={TestDetailScreen}/>
                        <Route path="/AlbumListScreen" exact component={AlbumListScreen}/>
                        <Route path="/AlbumListScreen2" exact component={AlbumListScreen2}/>
                        <Route path="/InstallDetailScreen" exact component={InstallDetailScreen}/>
                        <Route path="/InstallMainScreen" exact component={InstallMainScreen}/>
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>

        );
    };
};


