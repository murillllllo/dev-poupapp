import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>

      <Image source={require('./imgs/logo.png')} style={estilos.logo} />

      <View style={estilos.retlogin}>

        <TextInput
          style={estilos.input}
          keyboardType="email-address"
          placeholder='E-mail'/>

        <TextInput
          style={estilos.input}
          secureTextEntry={true}
          placeholder='Senha'/>
  
        <Text>Esqueceu a senha?</Text>

      </View>

      <TouchableOpacity style={estilos.button}>
        <Text>
          GRAVAR
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },

  retlogin: {
    backgroundColor: "#F0F",
    width: "88%",
    height: "24%",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    borderRadius: 8,
  },
 
  input: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width: "80%",
    height: "20%",
  },



  texto: {
    color: "#000",
    fontSize: 12,
    backgroundColor: "#F00",
  },
  button: {
    backgroundColor: "#fff",
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    width: "48%"
  },
  logo: {
    width: 304,
    height: 304,
  }
});