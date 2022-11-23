import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Login({ navigation }) {
    return (
        <View style={styles.appcontainer}>
            <View style={styles.topbar}>
                <Text style={styles.topbarTitle}>Login</Text>
            </View>
            <View style={styles.login}>
                <Text style={styles.title}>Mr. Recipe</Text>
                <TextInput placeholder="Username" style={styles.inputField}></TextInput>
                <TextInput placeholder="Password" style={styles.inputField}></TextInput>
                <Text>Forgot Password?</Text>
                <Button title='Login' style={styles.loginButton}/>
                <View>
                  <Text>Need an account? </Text>
                  <Text onPress={() => navigation.navigate('Register')} style={{color: 'blue'}}>Sign up</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appcontainer: {
      height: '100%',
    },
    topbar: {
      paddingTop: 30,
      height: '13%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#518BFF',
    },
    topbarTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '87%',
    },
    title: {
      marginBottom: 20,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#518BFF',
    },
    inputField: {
      width: 200,
      marginVertical: 5,
      padding: 7,
      borderColor: '#518BFF',
      borderBottomWidth: 1,
      textAlign: 'center',
    },
    loginButton: {
      backgroundColor: '#518BFF',
    }
  });