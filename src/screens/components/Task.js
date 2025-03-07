import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'


export default props => {
    return(
    <View style={styles.container}>     
        <TouchableWithoutFeedback onPress={() => console.log('oi')}>
            <View style={styles.checkContainer}>
                <View style={styles.pending}></View>
            </View>
        </TouchableWithoutFeedback>    

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:'#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor:'#FFF'
    },
    pending:{
        height: 25,
        width:25,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#555'
    },
    checkContainer:{
        width:'20%',
        alignContent: 'center',
        alignItems: 'center'
}
})