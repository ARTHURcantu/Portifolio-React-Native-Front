// import bibliotecas
import { StyleSheet, View, Text, ImageBackground, FlatList} from "react-native"
import { useState, useEffect } from "react"

// import funções proprias
import H1 from "../components/H1"
import NavBar from "../components/NavBar"

const Home = async() => {
    const[imagem, setImagem] = useState([])
    const[projeto, setProjeto] =useState([])

    const GetImagem = async () => {
        try{
            const result = await fetch('http://localhost:437/imagem')//depois mudar para a rota do render
            const data = await result.json()
            console.log(data.success)
            setUsers(data.imagem)
        } catch (error){
            console.log('Error getImagem ' + error.message)
        }
    }
    
    const GetProjetos = async() => {
        try {
            const result = await fetch('http://localhost:437/projetos')
            const data = await result.json()
            console.log(data);
            setProjeto(data.projeto)
        } catch (error) {
            console.log('Error postProjeto ' + error.message);
        }
    }

    const home = () => {
        return(
            <ImageBackground 
                source={{uri: 'https://img.freepik.com/fotos-gratis/renderizacao-3d-do-astronauta_23-2151128635.jpg?t=st=1715969641~exp=1715973241~hmac=ef276b59a1e6aec097dbff84444b8fda21d96f0b7e082ef051178d9cfc76a435&w=740'}}
                style={Styles.imagefundo}
            >
            <View style={Styles.containerHome}>
                <NavBar />
                <H1>Imagens</H1>

                {imagem.length?
                    <FlatList
                        style={{width:'70%'}}
                        data={imagem}
                        renderItem={([item]) => <CardImagem user={item} />}
                        keyExtractor={item => item.id}
                    /> :
                    <Text style={{color: '#FFF'}}>Loading...</Text>
                }

                <H1>projetos</H1>

                {projeto.length?
                    <FlatList
                        style={{width:'70%'}}
                        data={projeto}
                        renderItem={([item]) => <CardProjeto user={item} />}
                        keyExtractor={item => item.id}
                    /> :
                    <Text style={{color: '#FFF'}}>Loading...</Text>
                }
            </View>
            </ImageBackground>
        )
    }

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