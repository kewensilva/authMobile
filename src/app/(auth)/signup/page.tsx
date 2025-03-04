import colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "@/src/lib/supabase";

export default function Signup(){
    const [ email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

   async function handleSignUp(){
       setLoading(true);
const {data , error } = await supabase.auth.signUp({
    email,
    password,
    options:{
        data:{
            name
        }
    }
})
setLoading(false)
router.replace('/');
        
    }
    return(
        <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: colors.white }}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.backButton}
                onPress={()=> router.back()}
                >
                    <Ionicons name="arrow-back" zise={24} color={colors.white} />
                </Pressable>
            <Text style={styles.textLogo}>Auth<Text style={{color: colors.green}}>App</Text></Text> 
            <Text style={styles.slogan}> Criar Conta</Text>
            </View>

            <View style={styles.form}>
            <View>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput
                    placeholder="Digite seu nome completo..."
                    style={styles.input}
                    value={name}    
                    onChangeText={setName}
                    />
                </View>
                <View>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                    placeholder="Digite seu email..."
                    style={styles.input}
                    value={email}    
                    onChangeText={setEmail}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                    secureTextEntry
                    placeholder="Digite sua senha..."
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    />
                </View>
                <Pressable style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>{loading ? 'Cadastrando...' : 'Cadastrar'}</Text>
                </Pressable>

                
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    paddingTop: 34,
    backgroundColor: colors.zinc

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
backButton:{
    backgroundColor: colors.green,
    alignSelf: "flex-start",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8
    }
    })