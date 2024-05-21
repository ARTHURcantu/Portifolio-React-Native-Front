import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";

const CardImagem = ({image}) => {
    return(    
        <View style={Styles.card}>
            <Image source={image.url} style={{width: '90%', height:'90%', borderRadius:30}} />
        </View>
    )
}

const Styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginTop: 5
    }
})

export default CardImagem