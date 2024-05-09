import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

const NavBar = () => {
    return(
        <ScrollView con>
        <View styles={Styles.ConteinerNavBar}>
            <View>
                <Image source={{uri: 'https://fastly.picsum.photos/id/655/50/50.jpg?hmac=h55qWEy106YGCR8G6gCpUktJ8_76PNeMB9hb-e8pD4o'}}  />
                <Text sty></Text>
            </View>
        </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    ConteinerNavBar: {
        width: '100%',
    }
})

export default NavBar