import React, { useEffect } from 'react';
import { TextInput, Button, View, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import SQLite from 'react-native-sqlite-storage';
import MultiSelect from './MultiSelect';

// Open or create a SQLite database
const dbPath = 'activity.db';
const db = SQLite.openDatabase({ name: dbPath, location: 'default' });

export default function InputForm() {
  const { control, handleSubmit } = useForm();

  // Create table on app load (useEffect)
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS activities (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          activityName TEXT,
          km TEXT,
          avgHR TEXT,
          climb TEXT,
          time TEXT
        )`
      );
    });
  }, []);

  const onSubmit = (data) => {
    const { activityName, km, AvgHR, climb, time } = data;

    // Insert form data into the SQLite table
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO activities (activityName, km, avgHR, climb, time) VALUES (?, ?, ?, ?, ?)',
        [activityName, km, AvgHR, climb, time],
        () => {
          Alert.alert('Success', 'Activity data has been saved!');
        },
        (error) => {
          console.error('Error saving data:', error);
          Alert.alert('Error', 'Failed to save activity data.');
        }
      );
    });
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
      <Controller
        control={control}
        name="time"
        render={({ field }) => (
          <TextInput
            {...field}
            style={styles.input}
            placeholder="Sukilimas"
          />
        )}
      />
      <MultiSelect />
      <Button style={styles.buttonBox} title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
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
  buttonBox: {
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
