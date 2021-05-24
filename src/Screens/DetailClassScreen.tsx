import React from "react";
import {Text, View} from "react-native";
import {observer} from "mobx-react";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import globalStore from "../Stores/GlobalStore";

type Props = {};
type State = {};

export default observer(
    class DetailClassScreen extends React.Component<Props, State> {
        render() {
            return (
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonBackButton defaultHref="/"/>
                            </IonButtons>
                            <IonTitle>DetailClassScreen</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <View style={{
                            justifyContent: "center",
                            alignItems: 'center',
                            marginTop: 30,

                        }}>
                            <Text style={{fontSize: 45}}>
                                {globalStore.counter2}
                            </Text>
                        </View>
                        <View style={{height: 80}}>
                        </View>
                    </IonContent>
                </IonPage>
            );
        };
    }
);
