import React from 'react';
import './Assets/Styles/App.css';
import {IonApp, IonRouterOutlet} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import {Route,} from "react-router-dom";
import {HomeScreen} from "./Pages/Home/HomeScreen";
import DetailScreen from "./Pages/Detail/DetailScreen";
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
import WriteScreen from "./Pages/Write/WriteScreen";
import DetailClassScreen from "./Pages/Detail/DetailClassScreen";
import {ListScreen} from "./Pages/List/ListScreen";
import TestScreen from "./Pages/Test/TestScreen";
import TestDetailScreen from "./Pages/Test/TestDetailScreen";
import {AlbumListScreen} from "./Pages/Alibums/AlbumListScreen";
import {AlbumListScreen2} from "./Pages/Alibums/AlbumListScreen2";

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
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>

        );
    };
};


