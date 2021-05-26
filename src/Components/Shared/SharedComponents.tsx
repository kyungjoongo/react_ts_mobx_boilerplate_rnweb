import {View} from "react-native";
import {IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import * as React from "react";


export function WhiteSpace(props: any) {
    return (
        <View style={{height: 15, width: 15}}/>
    )
}


export function CommonHeader(props: any) {
    return (
        <IonHeader>
            <IonToolbar color={'warning'}>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/"/>
                </IonButtons>
                <IonTitle>{props.title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}