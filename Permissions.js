import react from 'react';
import { check, request, RESULTS } from 'react-native-permissions';
import OpenSettings from 'react-native-open-settings';
import { Alert } from 'react-native';
import { FileReader } from './Componets/FileReader';
let RNFS = require('react-native-fs');

let folder = [{ path: RNFS.ExternalStorageDirectoryPath }];

export const androidCheckPermission = (PermissionType, setData) => {
  check(PermissionType)
    .then((res) => {
      switch (res) {
        case RESULTS.BLOCKED:
          {
            console.log('this future is not requestable anymore');
            Alert.alert(
              'StorageReadPermission',
              'Allow Storage Permission in App Settings',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Canceled'),
                  style: 'cancel',
                },
                {
                  text: 'Ok',
                  onPress: () => OpenSettings.openSettings(),
                  style: 'default',
                },
              ],
            );
          }
          break;
        case RESULTS.DENIED:
          console.log('this future is requestable but denied');
          request(PermissionType)
            .then((result) => {
              console.log('this future is Granted');
              return FileReader(folder, setData);
            })
            .catch((err) => console.log(err));
          break;
        case RESULTS.LIMITED:
          console.log('this future is Limited');
          break;
        case RESULTS.GRANTED:
          console.log('this future is Granted');
          return FileReader(folder, setData);
        case RESULTS.UNAVAILABLE:
          console.log('this future is not avaliable');
          break;
        default:
          console.log('Default');
          break;
      }
    })
    .catch((err) => console.log('Permission Check:', err));
};
