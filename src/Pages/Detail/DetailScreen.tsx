import {Button, Text, View} from "react-native";
import React from "react";
import {IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import globalStore from "../../Stores/GlobalStore";
import {CommonHeader, WhiteSpace} from "../../Components/Shared/SharedComponents";

type Props = {
    history: any
}


export default function DetailScreen(props: Props) {

    return useObserver(() => (
        <IonPage>
            <CommonHeader title={'Detail Screen'}/>
            <IonContent>
                <View style={{height: 80}}>
                </View>
                <View style={{height: 50,}}/>
                <View style={{justifyContent: 'center', alignItems: 'center',}}>
                    <IonButton color={'warning'} style={{color: 'orange', width: '100%'}} fill={'outline'}
                               onClick={() => {
                                   globalStore.incrementDoubleCount()
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
                        <span style={{color: 'blue'}}> counter2</span>:&nbsp;&nbsp;{globalStore.counter2}
                    </Text>
                </View>

                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <View style={{marginHorizontal: 25}}>
                    <Button color={'maroon'} title={'increment_querter_count'} onPress={() => {

                        globalStore.incrementQuarterCount()

                    }}/>
                </View>

                <View style={{margin: 25,}}>
                    <Button title={'+2'} onPress={() => {
                        globalStore.incrementDoubleCount();

                    }}/>
                </View>
            </IonContent>
        </IonPage>

    ))
}



