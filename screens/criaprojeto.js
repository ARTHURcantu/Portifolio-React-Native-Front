import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const CadastrarProjeto = () => {
    const navigation = useNavigation()

    const [txtName, setTxtName] = useState('')
    const [TxtUrl_capa, setTxtUrl_capa] = useState('')

    const postUser = async () =>{
        try{
          ///const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
          const result = await fetch('http://localhost:437/projetos/', { //depois mudar para a rota do render
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({Nome: txtName, imagem_capa: TxtUrl_capa})
          })
          const data = await result.json()
          console.log(data)
          if(data?.success){
            navigation.goBack()
          } else {
            alert(data.error)
          }
        } catch (error){
          console.log('Error postUser ' + error.message)
          alert(error.message)
        }
      } 

    return (
        <ScrollView>
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder='Nome...'
                onChangeText={setTxtName}
                value={txtName}
                />
                <TextInput 
                style={styles.input}
                placeholder='imagem de capa...'
                onChangeText={setTxtUrl_capa}
                value={TxtUrl_capa}
                />
                <Button 
                    title="Cadastrar Projeto"
                    onPress={postUser}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        padding: 40
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginBottom: 18,
        padding: 10,
    }
})

export default CadastrarProjeto
