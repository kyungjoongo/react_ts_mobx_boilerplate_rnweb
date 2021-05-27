// @flow
import * as React from 'react';
//@ts-ignore
import InputMask from "react-input-mask";
import {useEffect, useState} from 'react';
import {Delete, Facebook} from '@material-ui/icons';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import {DataGrid, GridColDef, GridEditRowModelParams, GridValueGetterParams} from '@material-ui/data-grid';
import {View, Text, Image} from "react-native";
import {Avatar, Button, TextField} from "@material-ui/core";
import {WhiteSpace} from "../../components/shared/SharedComponents";
import gridRowStore from "../../stores/GridRowStore";
import _ from 'lodash'
import {getFourthDigitNumber, getFirstThreeDigitNumber} from "../../services/shared/SharedService";


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 120},
    {field: 'mac', headerName: 'MAC', width: 150, editable: true},
    {field: 'sn', headerName: 'SN', width: 150, editable: true},
    {field: 'ip', headerName: 'IP', width: 220, editable: true},
    {field: 'gateway', headerName: 'Gateway', width: 150, editable: true},
    {field: 'memo', headerName: 'memo', width: 150, editable: true},

];


type Props = {};
type State = {};


export const DataGridScreen = (props: Props) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectRow, setSelectRow]: any = useState([]);


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
                    Project : &nbsp;&nbsp;&nbsp;한화 에어로 스페이스
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

                {/*todo:***********************************/}
                {/*todo: DataGrid                         */}
                {/*todo:***********************************/}
                <div style={{height: 400, width: '100%'}}>
                    <DataGrid
                        onSelectionModelChange={(params) => {

                            console.log("selectionModel===>", params.selectionModel);

                            let selectRows = params.selectionModel

                            gridRowStore.setSelectedRows(selectRows)


                            console.log("checkedRowscheckedRowscheckedRows===>", _.cloneDeep(gridRowStore.selectedRows));

                        }}


                        rows={_.cloneDeep(gridRowStore.rows)}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        onEditRowModelChange={handleEditRowModelChange}
                    />
                </div>
                <View style={{margin: 15, width: 200,}}>
                </View>
                <View style={{margin: 25}}>
                    {/* <InputMask
                        mask="999.999.999.999"
                        value={'sdlfksldkf'}
                        placeholder={'000.000.000.000'}


                    >
                        {() =>

                        }
                    </InputMask>*/}

                    <TextField
                        id="standard-basic"
                        label="ip_address"
                        placeholder={'000.000.000.000'}
                        style={{width: 130}}
                        onChange={(e) => {
                            console.log("onChange===>", e.target.value);
                            gridRowStore.setIpAddress(e.target.value)
                        }}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <WhiteSpace/>
                    <Button
                        startIcon={<Facebook/>}
                        variant="contained" color={'primary'} onClick={() => {
                        alert('sdflksdlfk')
                    }}>get all row data</Button>
                    <WhiteSpace/>
                    <Button
                        variant="contained" color={'secondary'}
                        onClick={() => {
                            console.log("gridRowStore.rows===>", _.cloneDeep(gridRowStore.rows));
                        }}

                    >Default</Button>
                    <WhiteSpace/>
                    <Button variant="contained">Default</Button>
                    <WhiteSpace/>


                    <View>
                        <Button variant="contained" color={'primary'}
                                onClick={() => {
                                    let allRows = _.cloneDeep(gridRowStore.rows);

                                    console.log("allRows===>", allRows);

                                    console.log("selectedRows===>", _.cloneDeep(gridRowStore.selectedRows));

                                    let selectedRowsList = _.cloneDeep(gridRowStore.selectedRows);

                                    let threeDigitNo = getFirstThreeDigitNumber(gridRowStore.ipAddress)

                                    let forthDigitNo = getFourthDigitNumber(gridRowStore.ipAddress)

                                    selectedRowsList.map((item, index) => {
                                        allRows[parseInt(item) - 1].ip = threeDigitNo.toString() + '.' + (parseInt(forthDigitNo) + parseInt(index.toString())).toString()
                                    })

                                    gridRowStore.setRows(allRows)
                                }}


                        >set rows</Button>
                    </View>


                    <WhiteSpace/>


                    <WhiteSpace/>
                </View>
            </IonContent>
        </IonPage>
    ))
}


/*onRowSelected={(param) => {
                        let mapRows = param.api.current.getSelectedRows();
                        let rowList: any = []
                        mapRows.forEach((value: any, key: any) => {
                            //console.log("temp===>", value);
                            rowList.push(value)
                        });
                        //console.log("arrList===>", arrList);
                        console.log("temp===>", rowList[0]);
                        rowList[0].mac = '고경준 맥주소'
                        gridRowStore.setRows(rowList)
                    }}*/
