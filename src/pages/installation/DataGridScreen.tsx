// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import {DataGrid, GridColDef, GridEditRowModelParams, GridValueGetterParams} from '@material-ui/data-grid';
import {View, Text, Image} from "react-native";
import {Avatar} from "@material-ui/core";
import {WhiteSpace} from "../../components/shared/SharedComponents";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 120},
    {field: 'mac', headerName: 'MAC', width: 150, editable: true},
    {field: 'sn', headerName: 'SN', width: 150, editable: true},
    {field: 'ip', headerName: 'IP', width: 220, editable: true},
    {field: 'gateway', headerName: 'Gateway', width: 150, editable: true},
    {field: 'memo', headerName: 'memo', width: 150, editable: true},

];

const rows = [
    {id: 1, mac: '2f:22:33:44:55', sn: '3129012asddkj', ip: '192.168.0.1', gateway: '255.255.221.0'},
    {id: 2, mac: '2f:22:33:44:52', sn: '132234sfsdf', ip: '192.168.0.2', gateway: '255.255.221.0'},
    {id: 3, mac: '2f:22:33:44:53', sn: '21342134sdfg', ip: '192.168.0.3', gateway: '255.255.221.0'},
    {id: 4, mac: '2f:22:33:44:57', sn: '234324fsdgs1234', ip: '192.168.0.4', gateway: '255.255.221.0'},
    {id: 5, mac: '2f:22:33:44:53', sn: '12341234asdf', ip: '192.168.0.5', gateway: '255.255.221.0'},
    {id: 6, mac: '2f:22:33:44:54', sn: '3129012asddkj', ip: '192.168.0.6', gateway: '255.255.221.0'},

];


type Props = {};
type State = {};


export const DataGridScreen = (props: Props) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editRowsModel, setEditRowsModel] = React.useState({});
    useEffect(() => {
        initFetchData();
    }, [])

    async function initFetchData() {

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

    const handleEditRowModelChange = React.useCallback(
        (params: GridEditRowModelParams) => {
            setEditRowsModel(params.model);
        },
        [],
    );


    function renderMembers() {

        return (
            <View style={{margin: 10, flexDirection: "row", backgroundColor: 'transparent'}}>
                <View style={{backgroundColor: 'transparent', alignSelf: "center", marginLeft: 5,}}>
                    <Text>
                        Members :
                    </Text>
                </View>
                <View>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                </View>
                <WhiteSpace/>
                <View>
                    <Avatar alt="고경준" src="../images/a1.jpeg"/>
                </View>
                <WhiteSpace/>
                <View>
                    <Avatar alt="황진하"
                            src='https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I='/>
                </View>
                <WhiteSpace/>
                <View>
                    <Avatar alt="황진하" src={'sdflkdl'}/>
                </View>

                <WhiteSpace/>
                <View>
                    <Avatar alt="김sdlkf" src={'sdflkdl'}/>
                </View>
            </View>
        )
    }

    function renderVersion() {
        return (
            <View style={{margin: 10, marginLeft: 15,}}>
                <Text>
                    Current version : Title title
                </Text>
            </View>
        )
    }

    function renderOwner() {
        return (
            <View style={{marginLeft: 15, marginVertical: 5, flexDirection: "row"}}>
                <View style={{
                    alignItems: 'flex-start',
                    alignSelf: 'center',
                    marginHorizontal: 10,
                    marginLeft: -1,
                    marginRight: 18,
                }}>
                    <Text>
                        Owner :
                    </Text>
                </View>
                <View>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginHorizontal: 10,
                    }}
                >
                    <Text>
                        Kim hanwha
                    </Text>
                </View>
            </View>
        )
    }

    function renderPjt() {
        return (
            <View style={{margin: 10, marginLeft: 15,}}>
                <Text>
                    Project : 한화테크윈
                </Text>
            </View>
        )
    }


    return useObserver(() => (
        <IonPage>
            {renderHeader('DataGrid Screen')}
            <IonContent>
                <View style={{width: '100%'}}>
                    {renderPjt()}
                    {renderOwner()}
                    {renderMembers()}
                    {renderVersion()}
                </View>
                <div style={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        onEditRowModelChange={handleEditRowModelChange}
                    />
                </div>
            </IonContent>
        </IonPage>
    ))
}
