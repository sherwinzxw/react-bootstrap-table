export function mergeObjectNestedPropertiesByMatchedPropertyKey(
  object1Array: Array<object>,
  object2Array: Array<object>
) {
  let newObjectArray = [] as Array<any>;
  Object.entries(object1Array).map(
    (
      [object1Key, object1]: [object1Key: string, object1: any],
      objectIndex: number
    ) => {
      let newObject: any = {};
      Object.keys(object1).forEach(function (key: any, index: number) {
        newObject[key] = {
          ...object2Array[key],
          value: object1[key],
          key: key,
        };
      });
      newObjectArray.push(newObject);
    }
  );
  return newObjectArray;
}

export function sliceObjectArrayByPageNumber(
  objectArray: Array<object>,
  pageNumber: number,
  pageSize: number
) {
  
  return objectArray.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize
  );
}


export function sliceObjectArrayToPages(
  objectArray: Array<object>,
  pageNumberTotal: number,
  pageSize: number
) {
  let newObjectArray = [];
  for(var i = 1; i <= pageNumberTotal; i++){
    let pageData = objectArray.slice(
      (i - 1) * pageSize,
      i * pageSize
    );
    newObjectArray.push(pageData)
  }
  return newObjectArray
}
