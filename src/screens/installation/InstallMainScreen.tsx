// @flow
import * as React from 'react';
import {useEffect, useRef} from 'react';
//@ts-ignore
import InputMask from "react-input-mask";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import {DataGrid, GridColDef} from '@material-ui/data-grid';
import {StyleSheet, Text, View} from "react-native";
import {Avatar} from "@material-ui/core";
import gridRowStore from "../../stores/GridRowStore";
import _ from 'lodash'
import {getModalStyle} from "../../services/shared/SharedService";
import {History} from 'history';

const columns: GridColDef[] = [
    {field: 'no', headerName: 'no', width: 120},
    {field: 'project', headerName: 'project', width: 150, editable: true},
    {field: 'date', headerName: 'date', width: 150, editable: true},
    {
        field: "members",
        headerName: "Members",
        sortable: false,
        width: 350,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            let members: any = params.formattedValue;
            return (
                <View style={{flexDirection: "row"}}>
                    {members.map((item: any, index: number) => {
                        return (
                            <View style={Styles.avatarOuter}>
                                <Avatar alt={item} src="https://materasdasdial-ui.com/static/images/avatar/1.jpg"/>
                            </View>
                        )
                    })}
                </View>
            );
        }
    },

];


type Props = {
    history: History,
}
type State = {}


export const InstallMainScreen = (props: Props) => {
    const [editRowsModel, setEditRowsModel] = React.useState({});
    useEffect(() => {
    }, [])

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
            {renderHeader('Install 메인')}
            <IonContent>
                <View style={{margin: 10,}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Installation Service</Text>
                </View>


                <div style={{height: 400, width: '100%'}}>
                    <DataGrid
                        onSelectionModelChange={(params) => {

                        }}
                        rows={_.cloneDeep(gridRowStore.projectRows)}
                        columns={columns}
                        onRowClick={(param, event) => {

                            props.history.push('/InstallDetailScreen', {
                                rowData: param.row
                            })
                        }}
                        pageSize={5}
                        checkboxSelection
                        //onEditRowModelChange={handleEditRowModelChange}
                    />
                </div>
            </IonContent>
        </IonPage>
    ))
}


const Styles = StyleSheet.create({
    avatarOuter: {
        width: 30,
        height: 30,
        margin: 8,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

});
