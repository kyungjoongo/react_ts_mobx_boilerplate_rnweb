import {ActivityIndicator, Button, Text, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import globalStore from "../../Stores/GlobalStore";
import {getList} from "../../Services/SharedService";
import {WhiteSpace, CommonHeader} from "../../Components/Shared/SharedComponents";
import testStore from "../../Stores/TestStore";

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

    function renderHeader() {
        return (
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton>

                        </IonMenuButton>
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
        )
    }

    return useObserver(() => (
        <IonPage>
            {renderHeader()}
            <IonContent>
                <View style={{height: 50}}/>
                <Button title={'push to hooks'} color={'red'} onPress={() => {
                    props.history.push('/DetailScreen')
                }}/>

                <View style={{height: 50}}/>
                <Button title={'push to Detail Class Page'} color={'orange'} onPress={() => {
                    props.history.push('/DetailClassScreen')
                }}/>

                <View style={{justifyContent: 'center', alignItems: 'center', margin: 50,}}>
                    <Text style={{fontSize: 30}}>
                        {globalStore.counter2}
                    </Text>
                </View>
                <View>
                    <Button title={'plus_1'} onPress={() => {
                        globalStore.incrementDoubleCount()
                    }}/>
                </View>

                <View style={{height: 20,}}/>

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
                <View style={{height: 30,}}/>


                <Button title={'push to list Screen'} color={'pink'} onPress={() => {
                    props.history.push('/ListScreen')
                }}/>

                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button title={'push to Test Screen'} color={'green'} onPress={() => {
                    props.history.push('/TestScreen')
                }}/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button title={'push to AlbumList Screen'} color={'grey'} onPress={() => {
                    props.history.push('/AlbumListScreen')
                }}/>


                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{margin: 10,}}>
                        <Text style={{fontSize: 35, fontWeight: "bold"}}>
                            testCount : {testStore.testCount}
                        </Text>
                    </View>
                </View>


            </IonContent>
        </IonPage>
    ))
}



