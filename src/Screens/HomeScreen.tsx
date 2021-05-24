import {ActivityIndicator, Button, Text, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import globalStore from "../Stores/GlobalStore";
import {getList} from "../Services/SharedService";

type Props = {
    history: any
}


export const HomeScreen = (props: Props) => {
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
        let results: any = await getList();

        console.log("results-===>", results);
        setTimeout(() => {
            setLoading(false);
            setResults(results)
        }, 500)
    }

    async function insertOne() {
    }

    async function updateOne() {
    }


    async function delelteOne(paramId: any) {
    }

    return useObserver(() => (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton>

                        </IonMenuButton>
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <View>
                    <IonToolbar>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </View>
                <View style={{height: 50}}/>
                <Button title={'push'} color={'red'} onPress={() => {
                    props.history.push('/DetailScreen')
                }}/>

                <View style={{height: 50}}/>
                <Button title={'push to class component'} color={'orange'} onPress={() => {
                    props.history.push('/DetailClassScreen')
                }}/>

                <View style={{justifyContent: 'center', alignItems: 'center', margin: 50,}}>
                    <Text style={{fontSize: 30}}>
                        {globalStore.counter2}
                    </Text>
                </View>
                <View>
                    <Button title={'plus_10'} onPress={() => {
                        globalStore.setCounter2(globalStore.counter2 + 10)
                    }}/>
                </View>
                <View style={{height: 20}}/>
                <View>
                    <Button title={'minus_10'} onPress={() => {
                        globalStore.setCounter2(globalStore.counter2 - 10)
                    }}/>
                </View>
                {loading && <ActivityIndicator color={'red'}/>}
                {results.map((item: any, index) => {
                    return (
                        <View style={{flexDirection: 'row'}}>
                            <Text>{index.toString()}</Text>
                            <View style={{marginLeft: 50,}}>
                                <Text>{item.title}</Text>
                            </View>
                        </View>
                    )
                })}
            </IonContent>
        </
            IonPage>
    ))
}



