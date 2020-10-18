import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import CurrencyListItem from '../Components/List/CurrencyListItem';
import styles from './styles';
import Header from '../Components/Header';


class CurrencyList extends React.Component {
    state = {
        currency: {},
    };
    
    componentDidMount() {
        firebase
            .database()
            .ref('/Currency')
            .on('value', snapshot => {
                this.setState({ currency: snapshot.val() });
            });
    }

    handleSelectCurrency = acronym => {
        this.props.navigation.navigate('Detailed currency', { acronym });
    };
        // Vi viser ingenting hvis der ikke er data
    render() {
        const { currency } = this.state;
        if (!currency) {
            return null;
        }
        // Flatlist forventer et array. Derfor tager vi alle values fra vores cars objekt, og bruger som array til listen
                // Vi skal også bruge alle currencies, så vi tager alle keys også.
        const currencyArray = Object.values(currency);
        const currencyKey = Object.keys(currency);
        return (
            <View>    
                <Header {...this.props}/>
                <FlatList
                    data={currencyArray}
                    // Vi bruger currencyKey til at finde acronymet på den aktuelle currency og returnerer dette som key, og giver det med som acronym til CurrencyListItem
                    keyExtractor={(item, index) => currencyKey[index]}
                    renderItem={({ item, index }) => (
                        <CurrencyListItem
                            currency={item}
                            acronym={currencyKey[index]}
                            onSelect={this.handleSelectCurrency}
                        />
                    )}
                />
            </View>
        );
    }
}
export default CurrencyList;
