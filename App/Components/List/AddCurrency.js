import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import firebase from 'firebase';

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' },
    row: {
        flexDirection: 'row',
        height: 30,
        margin: 10,
    },
    label: { fontWeight: 'bold', width: 150 },
    input: { borderWidth: 1, flex: 1 },
});

//Brukes for å legge inn valuta, samt kursen inn til databasen
//eksisterer ikke som et View, pga er kun admin som skal ha tilgang.
export default class AddCurrency extends React.Component {
    state = {
        acronym: '',
        value: '',
        dkk: '100'
      
    };

    handleAcronymChange = text => this.setState({ acronym: text });

    handleValueChange = Number => this.setState({ value: Number });

    handleDKK = Number => this.setState({ dkk: Number});

   

    handleSave = () => {
        const { acronym, value, dkk } = this.state;
        try {
            const reference = firebase
                .database()
                .ref('/Currency/')
                .push({ acronym, value, dkk  });
            Alert.alert(`Saved`);
            this.setState({
                acronym,
                value,
                dkk
            });
        } catch (error) {
            Alert.alert(`Error: ${error.message}`);
        }
    };

    render() {
        const { acronym, value, dkk } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.row}>
                        <Text style={styles.label}>Currency</Text>
                        <TextInput
                            value={acronym}
                            onChangeText={this.handleAcronymChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Value</Text>
                        <TextInput
                            value={value}
                            onChangeText={this.handleValueChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Danish Krones</Text>
                        <TextInput
                            value={dkk}
                            onChangeText={this.handleDKK}
                            style={styles.input}
                        />
                    </View>
                   
                    <Button title="Add Currency" onPress={this.handleSave} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
