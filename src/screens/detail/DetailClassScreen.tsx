import React from "react";
import {Button, Text, View} from "react-native";
import {observer} from "mobx-react";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import globalStore from "../../stores/GlobalStore";

type Props = {};
type State = {
    loading: boolean,
    results: any,
};

class DetailClassScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            loading: false,
            results: [],
        }
    }

    componentDidMount(): void {

    }

    renderHeader() {
        return (
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                    <IonTitle>DetailClassScreen</IonTitle>
                </IonToolbar>
            </IonHeader>
        )
    }

    render() {
        return (
            <IonPage>
                {this.renderHeader()}
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
                    <View style={{margin: 25}}>
                        <Button
                            title={'add QuaterCount2'}
                            onPress={() => {
                                globalStore.incrementFourCount();
                            }}
                        />
                    </View>

                    <View style={{margin: 25}}>
                        <Button
                            color={'red'}
                            title={'decrement counter2'}
                            onPress={() => {

                                globalStore.decrementCounter2()
                            }}
                        />
                    </View>
                    <View style={{height: 80}}>
                    </View>
                </IonContent>
            </IonPage>
        );
    };
}


export default observer(DetailClassScreen)


