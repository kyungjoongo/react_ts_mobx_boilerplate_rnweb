import {Button, Text, View} from "react-native";
import React from "react";
import {IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import globalStore from "../Stores/GlobalStore";

type Props = {
    history: any
}


export default function DetailScreen(props: Props) {

    return useObserver(() => (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>Detail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <View style={{height: 80}}>
                </View>
                <View style={{height: 50,}}/>
                <View style={{justifyContent: 'center', alignItems: 'center',}}>
                    <IonButton color={'warning'} style={{color: 'orange', width: '100%'}} fill={'outline'}
                               onClick={() => {
                                   globalStore.incrementCounter2()
                               }}>
                        increment count
                    </IonButton>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 35,}}>
                    <IonButton color={'warning'} style={{color: 'orange', width: '100%'}} fill={'outline'}
                               onClick={() => {
                                   globalStore.decrementCounter2();
                               }}>
                        decrement Counter2
                    </IonButton>
                </View>

                <View style={{justifyContent: "center", alignItems: 'center', marginTop: 30,}}>
                    <Text style={{fontSize: 22}}>
                        {globalStore.counter2}
                    </Text>
                </View>

                <View style={{justifyContent: "center", alignItems: 'center', marginTop: 30,}}>
                    <Text style={{fontSize: 22, color: 'blue', fontWeight: "bold"}}>{globalStore.counter2}</Text>
                </View>
                <View style={{margin: 25,}}>
                    <Button title={'+2'} onPress={() => {
                        globalStore.incrementCounter2();

                    }}/>
                </View>
            </IonContent>
        </IonPage>

    ))
}



