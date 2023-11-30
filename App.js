import "react-native-gesture-handler";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { auth } from "./FirebaseConfig";
import SignInScreen from "./screens/SignInScreen";
import SuccessScreen from "./screens/SuccessScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId: "1040588492446-b18h6bpmr77qh0vb72sfkoapunflpclr.apps.googleusercontent.com",
    androidClientId: "1040588492446-piu0jm9762i8pb4i876qdrkev0jeiu3b.apps.googleusercontent.com",
  });

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setIsAuthenticated(false);
      AsyncStorage.removeItem("@user"); // Opcionalmente, elimina el usuario del almacenamiento local
    }).catch((error) => {
      console.log('Error al cerrar sesión', error);
    });
  };

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );

  return isAuthenticated ? <SuccessScreen onSignOut={handleSignOut} /> : <SignInScreen promptAsync={promptAsync} />;
}
