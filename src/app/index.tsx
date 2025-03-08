import colors from "@/constants/colors";

import { ActivityIndicator, StyleSheet, View } from "react-native";


export default function Index(){

    return(
        <View style={styles.container}>
            <ActivityIndicator size={48} color={colors.green} />
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: colors.zinc,
    alignItems: "center",
    justifyContent: "center"
}
})
