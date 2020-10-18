import * as React from 'react';
import { View, Text, Platform, Button, Alert } from 'react-native';
import firebase from 'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';
import styles from './styles';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1){
        _console.warn(message);
    }
};

class CurrencyDetails extends React.Component {
    state = { currency : null};
    
    //Utleseer akronym fra navigation parameteret og loader currency når komponent starter. 
    componentDidMount(){
        const acronym = this.props.navigation.getParam('acronym');
        this.loadCurrency(acronym);
    }
 //Akronymet fra funksjonens argument innsettes i stien.
    loadCurrency = acronym => {
        firebase
        .database()
        .ref('/Currency/' + acronym)
        .on('value', asds => {
            this.setState({currency: asds.val()});
        });
    };

    render() {
        const {currency} = this.state;
        if(!currency){
            return <Text>No data input</Text>
        }
        return(
            <View style={styles.detailContainer}>
                <Button title = 'Convert'/>
                <View style={styles.row}>
                    <Text style={styles.detailLabel}>Currency</Text>
                    <Text style={styles.value}>{currency.acronym}</Text>
                </View>
                <View style={styles.row}>
                <Text style={styles.detailLabel}>Value</Text>
                    <Text style={styles.value}>{currency.value}</Text>
                </View>
                <View style={styles.row}>
                <Text style={styles.detailLabel}>Danish krones</Text>
                    <Text style={styles.value}>{currency.dkk}</Text>
                </View>
            </View>
        )
    }
}
export default CurrencyDetails;