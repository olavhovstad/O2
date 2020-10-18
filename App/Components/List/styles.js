import {StyleSheet} from 'react-native';

//Felles styling for componenter til Currency List
    export default styles = StyleSheet.create({
        container: {
            flex: 1,
            borderWidth: 2,
            margin: 5,
            padding:5,
            height: 50,
            justifyContent:'center',
            alignItems:'center',
           
            
            
        
        },
        label: { fontWeight: 'bold' , width: 50, padding:5,},

        detailContainer: { flex: 1, justifyContent: 'flex-start' },

        row: {
            margin: 5,
            padding: 5,
            flexDirection: 'row',
        },
        detailLabel: { width: 150, fontWeight: 'bold', padding: 5 },
        value: { flex: 1, padding: 5 },
    

});
