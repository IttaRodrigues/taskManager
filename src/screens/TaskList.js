import { View, Text, StyleSheet } from "react-native";


export default function TaskList(){
    return(
        <View style={styles.container}>
            <Text>TaskList</Text>                        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'certer',
        alignItems: 'center'
    }
})