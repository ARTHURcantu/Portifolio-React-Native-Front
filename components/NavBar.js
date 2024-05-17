import { View, StyleSheet, Image,} from "react-native";

const NavBar = () => {
    return(
        <View style={Styles.ContainerNavBar}>
            <View >
                <Image
                    source={{uri: 'https://fastly.picsum.photos/id/655/50/50.jpg?hmac=h55qWEy106YGCR8G6gCpUktJ8_76PNeMB9hb-e8pD4o'}}
                    style={Styles.Avatar}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    ContainerNavBar: {
        width: '100%',
        backgroundColor: '#000000',
        minHeight: 100,
        justifyContent: 'space-around'
    },
    Avatar: {
        width: 50,
        height: 50,

    }

})

export default NavBar