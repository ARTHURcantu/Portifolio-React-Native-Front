import react from "react";
import { StyleSheet, Text } from "react-native";

const H1 = ({children}) => {
    return(
        <>
        <Text style={styles.FontSize}>{children}</Text>
        </>
    )
}
const styles = StyleSheet.create({
    FontSize:{
        fontSize: 30
    }
})

export default H1



