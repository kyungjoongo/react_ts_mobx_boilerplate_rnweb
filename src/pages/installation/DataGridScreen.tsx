// @flow
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
//@ts-ignore
import InputMask from "react-input-mask";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import {DataGrid, GridColDef, GridEditRowModelParams} from '@material-ui/data-grid';
import {Text, View} from "react-native";
import {Avatar, Button, createStyles, makeStyles, Modal, Snackbar, TextField, Theme} from "@material-ui/core";
import {WhiteSpace} from "../../components/shared/SharedComponents";
import gridRowStore from "../../stores/GridRowStore";
import _ from 'lodash'
import {getFirstThreeDigitNumber, getFourthDigitNumber, getModalStyle, rand} from "../../services/shared/SharedService";
import {Alert} from '@material-ui/lab';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 120},
    {field: 'mac', headerName: 'MAC', width: 150, editable: true},
    {field: 'sn', headerName: 'SN', width: 150, editable: true},
    {field: 'ip', headerName: 'IP', width: 220, editable: true},
    {field: 'gateway', headerName: 'Gateway', width: 150, editable: true},
    {field: 'memo', headerName: 'memo', width: 150, editable: true},

];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);


type Props = {};
type State = {};


export const DataGridScreen = (props: Props) => {
    const classes = useStyles();
    const [open, setOpen]: any = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [modalStyle] = React.useState(getModalStyle);
    const inputRef = useRef(null);
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


    function saveIpAddress() {
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
        setOpen(false)
    }

    function renderIpModal() {
        return (
            <Modal
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">IP Address를 입력..</h2>
                    <View>
                        <TextField
                            ref={inputRef}
                            autoFocus={true}
                            id="standard-basic"
                            placeholder={'000.000.000.000'}
                            style={{width: 150}}
                            onChange={(e) => {
                                console.log("onChange===>", e.target.value);
                                gridRowStore.setIpAddress(e.target.value)
                            }}
                        />
                        <WhiteSpace/>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Button
                                variant="contained" color={'secondary'}
                                onClick={() => {
                                    setOpen(false)
                                }}
                            >취소</Button>
                            <WhiteSpace/>
                            <WhiteSpace/>
                            <WhiteSpace/>
                            <Button
                                variant="contained" color={'primary'}
                                onClick={() => saveIpAddress()}
                            >저장</Button>
                        </View>
                    </View>
                </div>
            </Modal>
        )
    }

    function renderSnackBar() {
        return (
            <Snackbar open={snackbarOpen} autoHideDuration={6000}
                      onClose={() => {
                          setSnackbarOpen(false)
                      }}
            >
                <Alert onClose={() => {
                    setSnackbarOpen(false)
                }} severity="warning">
                    <strong>하나 이상의 로우를 선택하시요!!</strong>
                </Alert>
            </Snackbar>
        )
    }

    function renderBottomBtns() {
        return (
            <View style={{flexDirection: 'row'}}>
                <WhiteSpace/>
                <Button
                    variant={'outlined'} color={'primary'}
                    onClick={() => {
                        console.log("gridRowStore.rows===>", _.cloneDeep(gridRowStore.rows));
                    }}

                >Get all rows</Button>
                <WhiteSpace/>
                <Button color='secondary' variant='outlined' onClick={() => {
                    if (gridRowStore.selectedRows.length === 0) {
                        setSnackbarOpen(true)
                    } else {
                        setOpen(true)
                    }
                }}>
                    ip address multi 입력
                </Button>

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
                            let selectRows = params.selectionModel
                            gridRowStore.setSelectedRows(selectRows)
                            console.log("selectedRows===>", _.cloneDeep(gridRowStore.selectedRows));
                        }}
                        rows={_.cloneDeep(gridRowStore.rows)}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        onEditRowModelChange={handleEditRowModelChange}
                    />
                </div>
                {renderBottomBtns()}
                {renderIpModal()}
                {renderSnackBar()}
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
