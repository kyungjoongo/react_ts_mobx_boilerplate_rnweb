import {useObserver} from "mobx-react-lite";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {Button, Text, View} from "react-native";
import globalStore from "../../Stores/GlobalStore";
import React from "react";
import testStore from "../../Stores/TestStore";
import {WhiteSpace} from "../../Components/Shared/SharedComponents";


export default function TestDetailScreen(props: any) {

    function renderHeader(title: string) {
        return (
            <IonHeader>
                <IonToolbar color={'warning'}>
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
            {renderHeader('TestDetailScreen')}
            <IonContent>
                <View style={{height: 50}}/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 40, fontWeight: "bold"}}>

                        testCount : {testStore.testCount}</Text>
                </View>
                <WhiteSpace/>
                <Button title={'increment_cnt'} onPress={() => testStore.incrementTestCount()}/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button title={'decrement_cnt'} color={'maroon'} onPress={() => testStore.decrementTestCount()}/>
            </IonContent>
        </IonPage>
    ))

}