// import bibliotecas
import { StyleSheet, View, Text, ImageBackground, FlatList} from "react-native"
import { useState, useEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

// import funções proprias
import CardProjeto from "../components/CardProjeto"
import H1 from "../components/H1"
import Button from "../components/Button"

const Projeto = () => {
    const router = useRoute()
    const navigation = useNavigation()
    const[projeto, setProjeto] =useState([])
    
    const GetProjetos = async() => {
        try {
            const result = await fetch('http://localhost:437/projetos')
            const data = await result.json()
            console.log(data.projeto);
            setProjeto(data.projeto)
        } catch (error) {
            console.log('Error postProjeto ' + error.message);
        }
    }

    useEffect(()=>{
        GetProjetos()
    },[])

    return(
        <ImageBackground 
            source={{uri: 'https://img.freepik.com/fotos-gratis/renderizacao-3d-do-astronauta_23-2151128635.jpg?t=st=1715969641~exp=1715973241~hmac=ef276b59a1e6aec097dbff84444b8fda21d96f0b7e082ef051178d9cfc76a435&w=740'}}
            style={Styles.imagefundo}
        >
        <View style={Styles.containerProjeto}>
                <Button
                    title={"criar um novo projeto"}
                    onPress={()=> navigation.navigate('Creates', {screen: 'CriarProjeto'}) } 
                />
            <H1>projetos</H1>

            {projeto.length?
                <FlatList
                    style={{width: '70%'}}
                    data={projeto}
                    renderItem={({item}) => <CardProjeto projeto={item} />}
                    keyExtractor={item => item.id}
                /> :
                <Text style={{color: '#FFF'}}>Loading...</Text>
            }
        </View>
        </ImageBackground>
    )
}
const Styles = StyleSheet.create({
    containerProjeto: {
        flex: 1,
        alignItems: 'center',
        color: '#FFF'
    },
    imagefundo: {
        flex: 1,
    }
})
export default Projeto