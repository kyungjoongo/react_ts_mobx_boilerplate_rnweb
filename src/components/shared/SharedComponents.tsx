import {View} from "react-native";
import {IonBackButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar} from "@ionic/react";
import * as React from "react";
import {PhonelinkLock, Ballot, Person, MenuBook, MenuTwoTone, Gamepad} from '@material-ui/icons'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {useObserver} from "mobx-react-lite";
import globalStore from "../../stores/GlobalStore";


export function WhiteSpace({size = 15}) {
    return (
        <View style={{height: size, width: size}}/>
    )
}

export function MainHeader({title, color = 'warning', isRoot = false}: any) {
    return (
        <IonHeader>
            <IonToolbar color={color}>

                <View style={{flexDirection: 'row'}}>
                    <IonTitle>Wisenet</IonTitle>
                    <IonTitle>
                        Installation Service
                    </IonTitle>
                    <IonTitle>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: 35}}>
                                <Gamepad style={{fontSize: 35,}}/>
                            </View>
                            <WhiteSpace/>
                            <View style={{width: 35}}>
                                <MenuTwoTone style={{fontSize: 35,}}/>
                            </View>
                            <WhiteSpace/>
                            <View style={{width: 35}}>
                                <Person style={{fontSize: 35,}}/>
                            </View>
                        </View>
                    </IonTitle>
                </View>
            </IonToolbar>
        </IonHeader>
    )
}


export function CommonHeader({title, color = 'primary', isRoot = false}: any) {
    return (
        <IonHeader>
            <IonToolbar color={color}>
                {isRoot ?
                    <IonMenuButton>

                    </IonMenuButton>
                    :
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/"/>
                    </IonButtons>
                }

                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export function AlertPopup(props: any) {

    function closeModal() {
        globalStore.setShowModal(false)
    }

    return useObserver(() => (
        (
            <Dialog
                open={globalStore.showModal}
                onClose={() => {
                    closeModal()
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    경고!

                </DialogTitle>
                <DialogContent style={{width: 350}}>
                    <DialogContentText id="alert-dialog-description">
                        {props.title}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        closeModal()
                    }} color="primary">
                        아니오!
                    </Button>
                    <Button onClick={() => {
                        closeModal()
                    }} color="primary" autoFocus>
                        넹!
                    </Button>
                </DialogActions>
            </Dialog>
        )
    ))
}
