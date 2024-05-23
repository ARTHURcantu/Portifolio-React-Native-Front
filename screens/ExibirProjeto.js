
import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const ExibirProjeto = () => {
    const navigation = useNavigation()

    const [TxtProjetoNome, setTxtProjetoNome] = useState('')
    const [TxtUrl, setTxtUrl] = useState('')

    const [TxtProjetoIdOF, SetTxtProjetoIdOF] =  useState('')

    const Delete = async () =>{
      try{
        //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
        const result = await fetch('http://localhost:437/imagem/', { //depois mudar para a rota do render
          method: "PUT",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({idprojeto: TxtProjetoIdOF})
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

      const EditarProjeto = async () =>{
        try{
          //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
          const result = await fetch('http://localhost:437/imagem/', { //depois mudar para a rota do render
            method: "PUT",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({idprojeto, TxtProjetoIdOF ,Nome: TxtProjetoNome, url: TxtUrl})
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
                inputMode='numeric'
                placeholder='id do projeto...'
                keyboardType="numeric"
                onChangeText={SetTxtProjetoIdOF}
                value={TxtProjetoIdOF}
                />
                <TextInput 
                style={styles.input}
                placeholder='link da capa...'
                onChangeText={setTxtUrl}
                value={TxtUrl}
                />
                <TextInput 
                style={styles.input}
                placeholder='Nome do Projeto...'
                onChangeText={setTxtProjetoNome}
                value={TxtProjetoNome}
                />
                <Button 
                    title="editar projeto"
                    onPress={EditarProjeto}
                />
            </View>
            <View style={styles.formDelete}>
                <TextInput 
                style={styles.input}
                placeholder='id para deletar projeto...'
                onChangeText={SetTxtProjetoIdOF}
                value={TxtProjetoIdOF}
                />
                <Button 
                    title="deletar projeto"
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
