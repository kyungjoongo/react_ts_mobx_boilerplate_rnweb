// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import {ActivityIndicator, Text, View} from "react-native";
import albumService from "../../services/album/AlbumService";
import {TypeAlbum} from "../../types/Types";
import _ from 'lodash'
import albumStore from "../../stores/AlbumStore";

type Props = {};
type State = {};


export const AlbumListScreen = (props: Props) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        initFetchData();
    }, [])

    async function initFetchData() {
        setLoading(true)
        let albumList: any = await albumService.getAlbumList()
        console.log("results-===>", albumList);
        setTimeout(() => {
            setLoading(false);
            albumStore.setAlbumList(albumList)
        }, 500)
    }

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
            {renderHeader('album List Screen')}
            <IonContent>
                <View>
                    {loading && <View style={{margin: 10,}}>
                        <ActivityIndicator size={'large'} color={'orange'}/>
                    </View>}
                    {!loading && albumStore.albumList.map((item: TypeAlbum, index) => {
                        console.log("item===>", _.cloneDeep(item));
                        return (
                            <View key={index.toString()} style={{flexDirection: "row"}}>
                                <View style={{margin: 10}}>
                                    <Text>{item.id}</Text>
                                </View>
                                <View style={{margin: 10}}>
                                    <Text>{item.title}</Text>
                                </View>

                            </View>
                        )
                    })}
                </View>
            </IonContent>
        </IonPage>
    ))
}
