import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default function FirstScreen({navigation}) {
    return (
        <View>
            <Text>First Screen </Text>
            <TouchableOpacity onPress={(abc) --> navigation.navigate("Second")} style ={{backgroundcolour:'red' , padding: '2%'}}></TouchableOpacity>
                <Text style = {{colour: '#fff',fontsize: 18}}>Go to Page 2</Text>
        </View>
    );
}