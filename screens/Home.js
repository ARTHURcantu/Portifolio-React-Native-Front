// import bibliotecas
import { StyleSheet, View, Text} from "react-native"

// import funções proprias
import H1 from "../components/H1"
import NavBar from "../components/NavBar"

const Home = () => {
    return(
        <>
            <NavBar />
            <H1>so testano ele</H1>
        </>
    )
}
const Styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: '#F0F0F0F'
    }
})
export default Home