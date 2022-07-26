import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imctext, setImcText] = useState("");
  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    setImcText("");
    if (imc < 18.6) {
      setImcText("Voce esta abaixo do peso! " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setImcText("Peso Ideal! " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setImcText("Levemente acima do peso! " + imc.toFixed(2));
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder={"Peso (kg)"}
        keyboardType="numeric"
        placeholderTextColor={"#fff"}
      />
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder={"Altura (cm)"}
        keyboardType="numeric"
        placeholderTextColor={"#fff"}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.imcText}>{imctext}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 30,
  },
  input: {
    backgroundColor: "#121212",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: "#fff",
    fontSize: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#41aef4",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
  imcText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
});
