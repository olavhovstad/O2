import * as React from 'react';
import {Text, TouchableOpacity,} from 'react-native';
import styles from './styles';

class CurrencyListItem extends React.Component {

      //Pakker ut fra props
                //kaller onSelect prop vi får, sammen med akronymet som vi får som argument
    handlepress = () => {
      
        const {acronym, onSelect} = this.props
        onSelect(acronym)
    };

    render(){
        const { currency } = this.props;
        return(
            <TouchableOpacity style={styles.container} onPress={this.handlepress}>
                <Text style={styles.label}>
                    {currency.acronym}
                </Text>
            </TouchableOpacity>
        )
    }
}
export default CurrencyListItem;