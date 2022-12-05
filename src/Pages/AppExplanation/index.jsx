import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function AppExplanation() {
   return (
      <View style={styles.container}>
         <ScrollView>
            <Text style={styles.title}>
               Antes, deixa {"\n"} eu te explicar...
            </Text>
            <Text style={styles.description}>
               Pronto(a) para subir de nível na vida?
            </Text>
            <Text style={styles.description}>
               Na próxima tela você vai poder escolher {"\n"} seus 4 hábitos de
               forma individual.
            </Text>
            <DefaultButton
               buttonText={"Continuar"}
               handlePress={handleSetShowHome}
               width={250}
               height={50}
            />
         </ScrollView>
      </View>
   );
}
