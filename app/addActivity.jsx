import {StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { useForm, Controller} from 'react-hook-form';
import InputForm from '../components/InputForm';
import MultiSelect from '../components/MultiSelect';


export default function addActivity () {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data) => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Treniruote</Text>
        <InputForm />
      </View>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    gap: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    gap: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
})
