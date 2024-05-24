
import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const ExibirImagem = () => {
    const navigation = useNavigation()

    const [TxtProjetoId, setTxtProjetoId] = useState('')
    const [TxtUrl, setTxtUrl] = useState('')

    const [TxtImagemId, SetTxtImagemId] =  useState('')

    const Delete = async () =>{
      try{
        //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
        const result = await fetch('http://localhost:437/imagem/', { //depois mudar para a rota do render
          method: "PUT",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({idimagem: TxtImagemId})
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
          alert(error)
        }
      } 

      const EditarImagem = async () =>{
        try{
          //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
          const result = await fetch('http://localhost:437/imagem/', { //depois mudar para a rota do render
            method: "PUT",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({projeto_idprojeto: TxtProjetoId, url: TxtUrl})
          })
          const data = await result.json()
          console.log(data)
          alert("deu algo em", data)
          if(data?.success){
            navigation.goBack()
          } else {
            alert(data.error)
          }
        } catch (error){
          console.log('Error postUser ' + error.message)
          alert(error)
        }
      } 

    return (
        <ScrollView>
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                inputMode='numeric'
                placeholder='id do projeto...'
                keyboardType="numeric"
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
                    title="editar imagem"
                    onPress={EditarImagem}
                />
            </View>
            <View style={styles.formDelete}>
                <TextInput 
                style={styles.input}
                placeholder='id para deletar imagem...'
                onChangeText={SetTxtImagemId}
                value={TxtImagemId}
                />
                <Button 
                    title="deletar imagem"
                    onPress={Delete}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        padding: 40,
        backgroundColor:'#FFF'
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginBottom: 18,
        padding: 10,
    },
    formDelete: {
      display: 'flex',
      padding: 40,
      backgroundColor:'#000'
  },

})

export default ExibirImagem
