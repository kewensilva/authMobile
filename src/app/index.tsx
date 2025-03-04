import colors from "@/constants/colors";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "../lib/supabase";

export default function Login(){

    const [ email, setEmail] = useState('');
        const [name, setName] = useState('');
        const [password, setPassword] = useState('');
        const [loading, setLoading] = useState(false);
    
async function handleSignUp(){
           setLoading(true);
    const {data , error } = await supabase.auth.signUp({
        email,
        password,
    })
    setLoading(false)
    router.replace('/(panel)/profile/page');
}
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.textLogo}>Auth<Text style={{color: colors.green}}>App</Text></Text> 
            <Text style={styles.slogan}> Autenticando a Programação</Text>
            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                    placeholder="Digite seu email..."
                    keyboardType="email-address"
                    style={styles.input}    
                    />
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                    secureTextEntry
                    placeholder="Digite sua senha..."
                    style={styles.input}
                    />
                </View>
                <Pressable style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>{loading ? 'Acessando...' : 'Acessar'}</Text>
                </Pressable>

                <Link href={"/(auth)/signup/page"} style={styles.link}>
                    <Text> Não tem conta? <Text style={styles.textSpan}>cadastre-se</Text> </Text>
                </Link>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
container:{
    flex: 1,
    paddingTop: 34,
    backgroundColor: colors.zinc

},
textSpan:{
fontSize: 18,
fontWeight: 'bold'
},
header:{
paddingLeft: 14,
paddingRight: 14
},
textLogo:{
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 8
},
slogan:{
    fontSize: 34,
    color: colors.white,
    marginBottom: 34
},
form: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingTop: 34,
    paddingLeft: 14,
    paddingRight: 14,
},
label: {
    color: colors.zinc,
    marginBottom: 4,

},
input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 14,
    paddingBottom: 14
},
button:{
backgroundColor: colors.green,
paddingTop:14,
paddingBottom:14,
alignItems: 'center',
justifyContent: 'center',
width: '100%',
borderRadius: 8
},
buttonText:{
color: colors.white,
fontSize: 16,
fontWeight: 'black'
},
link:{
    marginTop: 16,
    fontSize: 16,
    textAlign: "right",
    paddingRight: 16
}
})
