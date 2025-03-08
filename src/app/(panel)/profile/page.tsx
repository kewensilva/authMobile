import colors from "@/constants/colors";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function profile() {
    return(
        <View style={styles.container}>
            <Text > Page Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.zinc   
    }
})