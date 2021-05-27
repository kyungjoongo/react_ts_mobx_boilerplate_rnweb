import {Button, Text, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {IonContent, IonPage} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import globalStore from "../stores/GlobalStore";
import {getList} from "../services/shared/SharedService";
import {CommonHeader, WhiteSpace} from "../components/shared/SharedComponents";
import testStore from "../stores/TestStore";

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


    return useObserver(() => (
        <IonPage>
            <CommonHeader title={'HomeScreen'} color={'warning'} isRoot={true}/>

            <IonContent>
                <View style={{height: 50}}/>
                <Button title={'push to DetailScreen hooks'} color={'red'} onPress={() => {
                    props.history.push('/DetailScreen')
                }}/>

                <View style={{height: 50}}/>
                <Button title={'push to DetailScreen Class Page'} color={'orange'} onPress={() => {
                    props.history.push('/DetailClassScreen')
                }}/>

                <View style={{justifyContent: 'center', alignItems: 'center', margin: 50,}}>
                    <Text style={{fontSize: 30}}>
                        {globalStore.counter2}
                    </Text>
                </View>
                <View>
                    <Button title={'plus_1'} onPress={() => {
                        globalStore.incrementQuaterCount()
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
                <Button title={'push to test Screen'} color={'green'} onPress={() => {
                    props.history.push('/TestScreen')
                }}/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button title={'push to AlbumList Screen(fetch from remote and set to globalStore'} color={'grey'}
                        onPress={() => {
                            props.history.push('/AlbumListScreen')
                        }}/>

                <WhiteSpace/>
                <Button title={'push to AlbumListScreen2'} color={'skyblue'} onPress={() => {
                    props.history.push('/AlbumListScreen2')
                }}/>
                <WhiteSpace/>

                <Button title={'push to 인스톨 상세 화면'} color={'maroon'} onPress={() => {
                    props.history.push('/InstallDetailScreen')
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



