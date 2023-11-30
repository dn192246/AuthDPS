import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../FirebaseConfig';
import SignInScreen from './SignInScreen';

export default function SuccessScreen({ onSignOut }){

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto}>Ha iniciado sesión correctamente</Text>
            <Text style={styles.subtitulo}>-DPS941 - Foro 2-</Text>
            <Button title="Cerrar Sesión" onPress={onSignOut} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    texto:{
        fontSize:30,
        fontWeight:"800",
        textAlign:"center"
    },
    subtitulo:{
        fontSize:20,
        fontWeight:"400",
        textAlign:"center"
    }
});