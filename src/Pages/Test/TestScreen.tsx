import {useObserver} from "mobx-react-lite";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {Button, Text, View} from "react-native";
import globalStore from "../../Stores/GlobalStore";
import React from "react";
import testStore from "../../Stores/TestStore";
import WhiteSpace from "../../Components/Shared/SharedComponents";


export default function TestScreen(props: any) {

    function renderHeader(title: string) {
        return (
            <IonHeader>
                <IonToolbar color="danger">
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
            {renderHeader('TestScreen')}
            <IonContent>
                <View style={{height: 50}}/>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 40, fontWeight: "bold"}}>

                        testCount : {testStore.testCount}</Text>
                </View>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <View style={{flexDirection: "row"}}>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button title={'increment_cnt'} onPress={() => testStore.incrementTestCount()}/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button title={'decrement_cnt'} color={'maroon'} onPress={() => testStore.decrementTestCount()}/>
                    <WhiteSpace/>
                    <WhiteSpace/>

                    <Button title={'push more detail Screen'} color={'black'} onPress={() => {
                        props.history.push('/TestDetailScreen')
                    }}/>
                </View>
            </IonContent>
        </IonPage>
    ))

}