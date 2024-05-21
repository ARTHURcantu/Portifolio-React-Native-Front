import { Text, View, StyleSheet, Pressable, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';

const CardProjeto = ({projeto}) => {
    const navigation = useNavigation();
    return(
        <Pressable
        onPress={() => {
            navigation.navigate('')
        }}>
            <View style={Styles.card}>
                <Text>{projeto.Nome}</Text>
                <Image source={projeto.imagem__capa} style={{width: '90%', height:'78%', marginTop: 3, borderRadius:30}} />
            </View>
        </Pressable>
    )
}

const Styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        height: 130 ,
        width: '100%', 
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginTop: 5
    }
})

export default CardProjeto