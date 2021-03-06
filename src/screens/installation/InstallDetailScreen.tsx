// @flow
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
//@ts-ignore
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import {DataGrid, GridColDef, GridEditRowModelParams} from '@material-ui/data-grid';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Avatar, Button, createStyles, makeStyles, Modal, Snackbar, TextField, Theme} from "@material-ui/core";
import {AlertPopup, CommonHeader, WhiteSpace} from "../../components/shared/SharedComponents";
import gridRowStore from "../../stores/GridRowStore";
import _ from 'lodash'
import {getFirstThreeDigitNumber, getFourthDigitNumber, getModalStyle} from "../../services/shared/SharedService";
import {Alert} from '@material-ui/lab';
import globalStore from "../../stores/GlobalStore";

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


type Props = {
    history: any,
};
type State = {};


export const InstallDetailScreen = (props: Props) => {
    const classes = useStyles();
    const [open, setOpen]: any = useState(false);

    const [showModal, setShowModal]: any = useState(false);

    const [modalTitle, setModalTitle]: any = useState('');

    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [modalStyle] = React.useState(getModalStyle);
    const inputRef = useRef(null);
    const [editRowsModel, setEditRowsModel] = React.useState({});

    const [title, setTitle]: any = useState(false);


    useEffect(() => {
        let rowData = props.history.location.state.rowData;
        setTitle(rowData.project)
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
                    <Avatar alt="?????????" src="../images/a1.jpeg"/>
                </View>
                <WhiteSpace/>
                <View>
                    <Avatar alt="?????????"
                            src='https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I='/>
                </View>
                <WhiteSpace/>
                <View>
                    <Avatar alt="?????????" src={'sdflkdl'}/>
                </View>

                <WhiteSpace/>
                <View>
                    <Avatar alt="???sdlkf" src={'sdflkdl'}/>
                </View>
                <View style={Styles.circle001}>
                    <TouchableOpacity
                        style={Styles.touch001}
                        onPress={() => {
                            alert('?????? ??????~~')
                        }}
                    >
                        <Text style={{fontSize: 30, lineHeight: 100, marginTop: -5}}>
                            {`+`}
                        </Text>
                    </TouchableOpacity>
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
                        Kim ?????????
                    </Text>
                </View>
            </View>
        )
    }

    function renderPjt() {
        return (
            <View style={{margin: 10, marginLeft: 15,}}>
                <Text>
                    Project : &nbsp;&nbsp;&nbsp;????????? pjt
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
                    <h2 id="simple-modal-title">IP Address??? ??????..</h2>
                    <View>
                        <TextField
                            onKeyDown={e => {
                                if (e.keyCode == 13) {
                                    saveIpAddress()
                                }
                            }}
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
                            >??????</Button>
                            <WhiteSpace/>
                            <WhiteSpace/>
                            <WhiteSpace/>
                            <Button
                                variant="contained" color={'primary'}
                                onClick={() => saveIpAddress()}
                            >??????</Button>
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
                    <strong>?????? ????????? ????????? ???????????????!!</strong>
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
                    ip address multi ??????
                </Button>
                <WhiteSpace/>
            </View>
        )
    }

    function renderLeftMenu() {
        return (
            <View style={{flex: .15}}>
                <View>
                    <View style={{margin: 10,}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                            My Project
                        </Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <WhiteSpace size={8}/>
                        <Text>
                            ?????????
                        </Text>
                        <WhiteSpace size={8}/>
                        <Text>
                            ????????????
                        </Text>
                        <WhiteSpace size={8}/>
                        <Text>
                            ?????????
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderLeftMenu2() {
        return (
            <View style={{flex: .15}}>
                <View>
                    <View style={{margin: 10,}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                            Shared Project
                        </Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <WhiteSpace size={8}/>
                        <Text>
                            ?????????
                        </Text>
                        <WhiteSpace size={8}/>
                        <Text>
                            ?????????
                        </Text>
                        <WhiteSpace size={8}/>
                        <Text>
                            ???????????? ??????
                        </Text>
                        <WhiteSpace size={8}/>
                        <Text>
                            ???????????? ??????
                        </Text>
                        <WhiteSpace size={8}/>
                        <Text>
                            ?????????
                        </Text>
                        <WhiteSpace size={8}/>
                        <Text>
                            ?????? ????????????
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return useObserver(() => (
        <React.Fragment>
            <IonPage style={{marginTop: 70}}>
                <CommonHeader color={'white'} title={' Installation Service > History'} isRoot={false}/>
                <IonContent>
                    <View style={{flexDirection: "row"}}>
                        <View style={{flex: .15}}>
                            {renderLeftMenu()}
                            <WhiteSpace size={50}/>
                            {renderLeftMenu2()}
                        </View>
                        <View style={{flex: .85}}>
                            <View style={{margin: 10,}}>
                                <Text style={{fontSize: 25, fontWeight: 'bold'}}>{title}</Text>
                            </View>
                            <View style={{width: '100%'}}>
                                {renderPjt()}
                                {renderOwner()}
                                {renderMembers()}
                                {renderVersion()}
                            </View>
                            {/*todo:***********************************/}
                            {/*todo: DataGrid                         */}
                            {/*todo:***********************************/}
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 30,}}>
                                <Button
                                    color="primary" variant="contained" size={'small'}
                                    onClick={() => {
                                        setModalTitle('???????????? ???????????????')
                                        globalStore.setShowModal(true)
                                    }}
                                >Download</Button>
                                <WhiteSpace/>
                                <Button
                                    onClick={() => {
                                        setModalTitle('Edit ???????????????')
                                        globalStore.setShowModal(true)
                                    }}
                                    color="secondary" variant="contained" size={'small'}>Edit
                                </Button>
                                <WhiteSpace/>
                                <Button
                                    onClick={() => {
                                        setModalTitle('Delete ???????????????')
                                        globalStore.setShowModal(true)
                                    }}

                                    color="secondary" variant="contained" size={'small'}>Delete
                                </Button>
                            </View>
                            <WhiteSpace/>
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
                        </View>
                        <AlertPopup modal={showModal} title={modalTitle}/>
                    </View>
                </IonContent>
            </IonPage>
        </React.Fragment>

    ))
}


const Styles = StyleSheet.create({
    circle001: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    touch001: {
        backgroundColor: 'grey',
        width: 40,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    }
});


/*onRowSelected={(param) => {
                        let mapRows = param.api.current.getSelectedRows();
                        let rowList: any = []
                        mapRows.forEach((value: any, key: any) => {
                            //console.log("temp===>", value);
                            rowList.push(value)
                        });
                        //console.log("arrList===>", arrList);
                        console.log("temp===>", rowList[0]);
                        rowList[0].mac = '????????? ?????????'
                        gridRowStore.setRows(rowList)
                    }}*/
