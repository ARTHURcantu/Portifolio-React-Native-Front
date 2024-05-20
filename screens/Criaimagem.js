import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const CadastrarImagem = () => {
    const navigation = useNavigation()

    const [TxtProjetoId, setTxtProjetoId] = useState('')
    const [TxtUrl, setTxtUrl] = useState('')

    const postUser = async () =>{
        try{
          //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
          const result = await fetch('http://localhost:437/imagem/', { //depois mudar para a rota do render
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({projeto_idprojeto: TxtProjetoId, url: TxtUrl})
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
                placeholder='id do projeto...'
                onChangeText={setTxtProjetoId}
                value={TxtProjetoId}
                />
                <TextInput 
                style={styles.input}
                placeholder='link da imagem...'
                onChangeText={setTxtUrl}
                value={TxtUrl}
                />
                <Button 
                    title="Cadastrar Usuário"
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

export default CadastrarImagem
