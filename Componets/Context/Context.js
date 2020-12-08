import React from 'react';
import { PermissionsAndroid } from 'react-native';
import { check, PERMISSIONS } from 'react-native-permissions';
let fs = require('react-native-fs');
//

let lastdata = [];
//

export const DataApi = React.createContext();
//

export const ContextApi = ({ children }) => {
  //
  const [data, setData] = React.useState([]);
  //

  const firstCheck = async () => {
    //
    const Check = {};

    Check.readData = async () => {
      let a = [];
      let musicfiles = [];
      let musicCount = 0;
      //

      const firstfile = await fs
        .readDir(fs.ExternalStorageDirectoryPath)
        .then((i) => {
          i.forEach((b, c) => {
            a[c] = { ...b };
          });
          return a;
        })
        .catch((err) => console.log(err));
      console.log(fs.ExternalStorageDirectoryPath);

      //

      if (firstfile) {
        await firstfile.forEach(async (innerEle, innerInd) => {
          if (innerEle.isFile()) {
            if (innerEle.path.endsWith('.mp3')) {
              musicfiles[musicCount] = { ...innerEle };
              musicCount++;
              // console.log(musicCount);
              console.log('one');
            }
          }
          if (innerEle.isDirectory()) {
            console.log('two');
            await fs
              .readDir(innerEle.path)
              .then((next) =>
                next.forEach(async (k, inn) => {
                  if (k.isDirectory()) {
                    console.log('three');
                    await fs
                      .readDir(k.path)
                      .then((h) =>
                        h.forEach(async (dd, kk) => {
                          if (dd.isDirectory()) {
                            console.log('five');
                            await fs
                              .readDir(dd.path)
                              .then((j) =>
                                j.forEach(async (fsds, dsfs) => {
                                  console.log(fsds);
                                  if (fsds.isFile()) {
                                    if (fsds.path.endsWith('.mp3')) {
                                      musicfiles[musicCount] = { ...fsds };
                                      musicCount++;
                                      // console.log(musicCount);
                                      console.log('seven');
                                    }
                                  }
                                  if (fsds.isDirectory()) {
                                    console.log('eight');
                                  }
                                }),
                              )
                              .catch((errorfour) => console.log('errorFour'));
                          }
                          if (dd.isFile()) {
                            console.log('six');
                            if (dd.path.endsWith('.mp3')) {
                              musicfiles[musicCount] = { ...dd };
                              musicCount++;
                              // console.log(musicCount);
                              musicfiles.forEach((eee, iii) => {
                                lastdata[iii] = {
                                  ...eee,
                                  backgroundColor: true,
                                  iconsChange: true,
                                };
                              });
                              setData(lastdata);
                            }
                          }
                        }),
                      )
                      .catch((errthree) => console.log('error three'));
                  }
                  if (k.isFile()) {
                    if (k.path.endsWith('.mp3')) {
                      musicfiles[musicCount] = { ...k };
                      musicCount++;
                      // console.log(musicCount);
                      console.log('four');
                    }
                  }
                }),
              )
              .catch((errone) => console.log('errorTwo'));
          }
        });
      }
    };
    console.log('ten');

    Check.check = () => {
      check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
        .then((res) => {
          if (res === 'granted') {
            console.log('Granted');
            Check.readData();
          } else {
            console.log(false);
            Check.AskPermission();
          }
        })
        .catch((err) => console.log(err));
    };
    Check.check();
    Check.AskPermission = async () => {
      try {
        let Granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Read external storage',
            message: 'Nead permission to get files',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (Granted === 'granted') {
          console.log('granted');
          Check.readData();
        } else {
          console.log('not Granted');
          Check.AskPermission();
        }
      } catch (error) {
        console.warn(error);
      }
    };
  };

  React.useEffect(() => {
    firstCheck();
    return () => {
      true;
    };
  }, []);

  return (
    <>
      <DataApi.Provider value={[data, setData]}>{children}</DataApi.Provider>
    </>
  );
};
