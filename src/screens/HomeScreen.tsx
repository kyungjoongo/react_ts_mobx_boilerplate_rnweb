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
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <Button title={'push to MainScreen'} color={'navy'} onPress={() => {
                    props.history.push('/InstallMainScreen')
                }}/>

                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>


            </IonContent>
        </IonPage>
    ))
}



