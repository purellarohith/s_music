let RNFS = require('react-native-fs');
let subFolder = [];
let myFiles = [];
let filesCount = 0;
let count = 0;
let cacheData = [];
let myfilesData = [];
const dirLoop = async (folder) => {
  await RNFS.readDir(folder.path)
    .then(async (res) => {
      if (res.length >= 1) {
        res.forEach((item) => {
          if (item.isDirectory()) {
            subFolder[count] = item;
            // console.log(subFolder[count].path);
            // console.log(subFolder.length);
            // console.log(item.path);
            count++;
          }
          if (
            item.isFile() &&
            (item.path.endsWith('.mp3') ||
              item.path.endsWith('.aac') ||
              item.path.endsWith('.ogg') ||
              item.path.endsWith('.wav'))
          ) {
            myFiles[filesCount] = item;
            filesCount++;
          }
        });
      }
    })
    .catch((err) => console.log('error'));
};

export const FileReader = async (path, setData) => {
  // console.log('Came');
  await path.forEach(async (i) => {
    await RNFS.readDir(i.path)
      .then(async (res) => {
        // console.log(res, 'res');
        if (res.length >= 1) {
          await res.forEach(async (item, index) => {
            // console.log(item, 'item');
            if (item.isDirectory()) {
              await dirLoop(item);
              if (index === res.length - 1) {
                // console.table(subFolder);
                // console.table(res);
                // console.table(subFolder);
                cacheData = [];
                cacheData = [...subFolder];
                subFolder = [];
                count = 0;
                // console.table(cacheData);
                await cacheData.forEach(async (cacheRes, cacheIndex) => {
                  await dirLoop(cacheRes);
                  if (cacheIndex === cacheData.length - 1) {
                    // console.table(subFolder);
                    // console.log(subFolder);
                    cacheData = [];
                    cacheData = [...subFolder];
                    subFolder = [];
                    count = 0;
                    // console.log(myFiles);
                    myfilesData = [];
                    await myFiles.forEach(async (innerItem, innerIndex) => {
                      myfilesData[innerIndex] = await {
                        ...innerItem,
                        iconsChange: true,
                        changeBackGround: false,
                      };
                    });
                    // console.log(myfilesData);
                    setData(myfilesData);
                    if (cacheData.length >= 1) {
                      await FileReader(cacheData, setData);
                      // console.log(path);
                      // console.table(myFiles);
                      myfilesData = [];
                      await myFiles.forEach(async (innerItem, innerIndex) => {
                        myfilesData[innerIndex] = await {
                          ...innerItem,
                          iconsChange: true,
                          changeBackGround: false,
                        };
                      });
                      // console.log(myfilesData);
                      setData(myfilesData);
                      return myfilesData;
                    }
                  }
                });
              }
            }
            if (
              item.isFile() &&
              (item.path.endsWith('.mp3') ||
                item.path.endsWith('.aac') ||
                item.path.endsWith('.ogg') ||
                item.path.endsWith('.wav'))
            ) {
              myFiles[filesCount] = item;
              filesCount++;

              myfilesData = [];
              await myFiles.forEach(async (innerItem, innerIndex) => {
                myfilesData[innerIndex] = await {
                  ...innerItem,
                  iconsChange: true,
                  changeBackGround: false,
                };
              });
              // console.log(myfilesData);
              setData(myfilesData);
            }
          });
        }
      })
      .catch((err) => console.log(err));
  });
};
