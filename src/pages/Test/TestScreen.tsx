import {useObserver} from "mobx-react-lite";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {Button, Text, View} from "react-native";
import globalStore from "../../stores/GlobalStore";
import React from "react";
import testStore from "../../stores/TestStore";
import {CommonHeader, WhiteSpace} from "../../components/Shared/SharedComponents";


export default function TestScreen(props: any) {

    return useObserver(() => (
        <IonPage>
            <CommonHeader title={'test Screen'} color={'warning'}/>
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
