import {TextInput, Button, View, StyleSheet} from 'react-native';
import { useForm, Controller} from 'react-hook-form'
import MultiSelect from './MultiSelect';

export default function InputForm() {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data) => {

  }
  return (
    <View style={styles.container}>
      <Controller
        control = {control}
        name = "activityName"
        render={({ field }) => (
        <TextInput
          {...field}
          style={styles.input}
          placeholder='Pavadinimas'
        />
        )}
      />
      <Controller
        control = {control}
        name = "km"
        render={({ field }) => (
        <TextInput
          {...field}
          style={styles.input}
          placeholder='Kilometrazas'
        />
        )}
      />
      <Controller
        control = {control}
        name = "AvgHR"
        render={({ field }) => (
        <TextInput
          {...field}
          style={styles.input}
          placeholder='AVG HR'
        />
        )}
      />
      <Controller
        control = {control}
        name = "climb"
        render={({ field }) => (
        <TextInput
          {...field}
          style={styles.input}
          placeholder='Sukilimas'
        />
        )}
      />
      <Controller
        control = {control}
        name = "time"
        render={({ field }) => (
        <TextInput
          {...field}
          style={styles.input}
          placeholder='laikas'
        />
        )}
      />
      <MultiSelect />
      <Button style={styles.buttonBox} title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  input: {
    width: 200,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});
