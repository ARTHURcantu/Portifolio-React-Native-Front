// import bibliotecas
import { StyleSheet, View, Text, ImageBackground, FlatList} from "react-native"

// import funções proprias
import H1 from "../components/H1"
import NavBar from "../components/NavBar"


const GetImagem = async () => {
    try{
        const result = await fetch('http://localhost:437/imagem')//depois mudar para a rota do render
        const data = await result.json()
        console.log(data.success)
        setUsers(data.users)
    } catch (error){
        console.log('Error getUsers ' + error.message)
    }
}

const Home = () => {
    return(
        <ImageBackground 
            source={{uri: 'https://img.freepik.com/fotos-gratis/renderizacao-3d-do-astronauta_23-2151128635.jpg?t=st=1715969641~exp=1715973241~hmac=ef276b59a1e6aec097dbff84444b8fda21d96f0b7e082ef051178d9cfc76a435&w=740'}}
            style={Styles.imagefundo}
        >
        <View style={Styles.containerHome}>
            <NavBar />
            <H1>Imagens</H1>
            <FlatList
                style={{width:'70%'}}
                data={d}
            />
        </View>
        </ImageBackground>
    )
}
const Styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        alignItems: 'center'
    },
    imagefundo: {
        flex: 1,
    }
})
export default Home