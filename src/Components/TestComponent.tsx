// @flow
import * as React from 'react';
import {Button, View} from "react-native";

type Props = {

};
type State = {

};

export default class TestComponent extends React.Component<Props, State> {
    render() {
        return (
            <View>
                <Button title={'test'} onPress={()=>{
                    alert('sdflksdlkfflsdkfl')
                }}></Button>
            </View>
        );
    };
};
