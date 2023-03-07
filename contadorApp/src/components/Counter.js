import { Component } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Counter extends Component {
    state = {
        count: 0,
    };
    incrementar(){
        this.setState({
            count: this.state.count + 1,
        });
    }
    decrementar(){
        if (this.state.count > this.props.min || this.props.min == undefined){
            this.setState({
                count: this.state.count - 1,
            });
        }
    }
    render() {
        return (
            <View style={styles.contador}>
                <Text>Contador: {this.state.count}</Text>
                <Button onPress={() => this.incrementar()} title="+" />
                <Button onPress={() => this.decrementar()} title="-" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});