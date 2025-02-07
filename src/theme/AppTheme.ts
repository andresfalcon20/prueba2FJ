import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    textBienvenido: {
        textAlign: "center"
    }, 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'grey', 
      },
     
      button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
        width: '80%', 
        alignItems: 'center', 
      },
      buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
      },
     
      input: {
        height: 40,
        width: 200,
        borderColor: 'blue',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 15,
      },

      imagen: {
        height: 400,
        width:400,
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        marginHorizontal: 15,
        marginVertical: 50
      },

      textImg:{
        marginVertical: 100,
        fontSize: 30,
        textAlign: "center"

      }



})
