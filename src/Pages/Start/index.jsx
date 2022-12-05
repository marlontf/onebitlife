import React from 'react';
import { View, ScrollView, Text, Image} from 'react-native';

export default function Start(){
   return{
      <View>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View>
               <image
                  source={require("../../assets/icons/logo3.png")}
               />
               <text>
                  Vamos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nível.
               </text>
            </View>
         </ScrollView>
      </View>
   }
}