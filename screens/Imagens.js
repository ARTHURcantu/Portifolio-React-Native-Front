// import bibliotecas
import { StyleSheet, View, Text, ImageBackground, FlatList,} from "react-native"
import { useState, useEffect } from "react"
import { useNavigation, useRoute} from "@react-navigation/native"

// import funções proprias
import H1 from "../components/H1"
import CardImagem from "../components/CardImagem"
import Button from "../components/Button"

const Home = () => {
    const navigation = useNavigation()
    const[imagem, setImagem] = useState([])

    const GetImagem = async () => {
        try{
            const result = await fetch('http://localhost:437/imagem')//depois mudar para a rota do render
            const data = await result.json()
            console.log(data)
            setImagem(data.imagem)
        } catch (error){
            console.log('Error getImagem ' + error.message)
        }
    }

    useEffect(()=>{
        GetImagem()
    },[])

    return(
        <ImageBackground 
                source={{uri: 'https://img.freepik.com/fotos-gratis/renderizacao-3d-do-astronauta_23-2151128635.jpg?t=st=1715969641~exp=1715973241~hmac=ef276b59a1e6aec097dbff84444b8fda21d96f0b7e082ef051178d9cfc76a435&w=740'}}
                style={Styles.imagefundo}
            >
            <View style={Styles.containerImagem}>
                <Button
                    title={"criar uma nova imagem"}
                    onPress={()=> navigation.navigate('CriarImagem')} 
                />
                <H1>Imagens</H1>

                {imagem.length?
                    <FlatList
                        style={{width:'70%'}}
                        data={imagem}
                        renderItem={({item}) => <CardImagem image={item} />}
                        keyExtractor={item => item.id}
                    /> :
                    <Text style={{color: '#FFF'}}>Loading...</Text>
                }

            </View>    
        </ImageBackground>
    )
}
const Styles = StyleSheet.create({
    containerImagem: {
        flex: 1,
        alignItems: 'center',
        color: '#FFF'
    },
    imagefundo: {
        flex: 1,
    }
})
export default Home