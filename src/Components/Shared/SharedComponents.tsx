import {View} from "react-native";
import {IonBackButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar} from "@ionic/react";
import * as React from "react";


export function WhiteSpace(props: any) {
    return (
        <View style={{height: 15, width: 15}}/>
    )
}


export function CommonHeader({title, color = 'primary', isRoot = false}: any) {
    return (
        <IonHeader>
            <IonToolbar color={color}>
                {isRoot ?
                    <IonMenuButton>

                    </IonMenuButton>
                    :
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                }

                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}
