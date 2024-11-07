import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function B(){
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Text>B Page</Text>
        <Button title="To A" onPress={() => navigation.navigate('A')} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});