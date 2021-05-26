// @flow
import * as React from 'react';
import {observer} from "mobx-react";
import {useEffect, useRef, useState} from "react";
import {getList} from "../../services/Shared/SharedService";
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import {ActivityIndicator, Button, Text, View} from "react-native";
import globalStore from "../../stores/GlobalStore";
import testService from "../../services/TestService";

type Props = {};
type State = {};


export const ListScreen = (props: Props) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const willMount = useRef(true);

    if (willMount.current) {
        //todo : componentWillMount
    }

    useEffect(() => {
        initFetchData();
    }, [])

    async function initFetchData() {
        setLoading(true)
        let results: any = await testService.getPostList();

        console.log("results-===>", results);
        setTimeout(() => {
            setLoading(false);
            setResults(results)
        }, 500)
    }

    function renderHeader(title: string) {
        return (
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
        )
    }

    return useObserver(() => (
        <IonPage>
            {renderHeader('List Screen')}
            <IonContent>
                <View>
                    {loading && <View style={{margin: 10,}}>
                        <ActivityIndicator size={'large'} color={'orange'}/>
                    </View>}
                    {!loading && results.map((item: any, index) => {
                        console.log("sldkflsdkf===>", item);
                        return (
                            <View style={{flexDirection: "row"}}>
                                <View style={{margin:10}}>
                                    <Text>{index.toString()}</Text>
                                </View>
                                <View style={{margin:10}}>
                                    <Text>{item.title}</Text>
                                </View>

                            </View>
                        )
                    })}
                </View>
            </IonContent>
        </IonPage>
    ))
}
