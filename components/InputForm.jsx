import React from 'react';
import { TextInput, Button, View, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import MultiSelect from './MultiSelect'; // Assuming MultiSelect is set up to return selected values
import RNFS from 'react-native-fs'; // React Native FS for local file handling

export default function InputForm() {
  const { control, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    // Prepare the form data for submission
    const formJSON = {
      activityName: data.activityName,
      km: data.km,
      AvgHR: data.AvgHR,
      climb: data.climb,
      runningType: data.runningType, // This should be an array from MultiSelect
    };

    try {
      // Define the path for the local JSON file
      const path = RNFS.DocumentDirectoryPath + '/exercises.json';

      // Check if the file exists
      const fileExists = await RNFS.exists(path);
      let exercises = [];

      // If the file exists, read its content and parse it into the exercises array
      if (fileExists) {
        const fileContent = await RNFS.readFile(path);
        exercises = JSON.parse(fileContent);
      }

      // Append the new form data to the exercises array
      exercises.push(formJSON);

      // Write the updated data back to the file
      await RNFS.writeFile(path, JSON.stringify(exercises, null, 2));

      // Show success message
      Alert.alert('Success', 'Data has been successfully saved to the file!');
    } catch (error) {
      console.error('Error saving file:', error);
      Alert.alert('Error', 'An error occurred while trying to save the data.');
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="activityName"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Pavadinimas"
          />
        )}
      />
      <Controller
        control={control}
        name="km"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Kilometrazas"
          />
        )}
      />
      <Controller
        control={control}
        name="AvgHR"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="AVG HR"
          />
        )}
      />
      <Controller
        control={control}
        name="climb"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Sukilimas"
          />
        )}
      />
      <MultiSelect />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 12,
  },
});
