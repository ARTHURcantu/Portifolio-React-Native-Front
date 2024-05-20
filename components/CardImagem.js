import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";

const CardImagem = ({image}) => {
    return(    
        <View style={Styles.card}>
            <View>
                <Image source={image.url}/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        height: 130,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginTop: 5
    }
})

export default CardImagem