let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  }

  // totalan
count = Array.from(
        productBin.data.reduce(
            (m, { productCode ,quantity }) => m.set(productCode, (m.get(productCode) || 0) + quantity),
            new Map
        ),
        ([productCode, count]) => ({ [productCode]: count })
    );
console.log("Total quantity untuk productCode FBR00040101 adalah")
console.log(count);










//   let jumlah = 0;
//   productBin.data.forEach(element => { 
//     jumlah += element.quantity });
//   productBin.data.map(element => {
//      if(element.productCode == 'FBR00040101'){
//       console.log("Total quantity untuk productCode FBR00040101 adalah: ", jumlah);
//      }
//      else {
//       console.log("Tidak ada hasil");
//      }
//   });






















