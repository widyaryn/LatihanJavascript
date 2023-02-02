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

// // jalan tapi tanpa filter productCode
// let jumlah = 0;
// productBin.data.forEach(element => { 
//     jumlah += element.quantity ;
// });
// console.log("Total quantity untuk productCode FBR00040101 adalah: ", jumlah);




//dengan filter tapi jalan 3x
let jumlah = 0;
productBin.data.forEach(element => { 
  jumlah += element.quantity });
productBin.data.map(element => {
   if(element.productCode == 'FBR00040101'){
    console.log("Total quantity untuk productCode FBR00040101 adalah: ", jumlah);
   }
   else {
    console.log("Tidak ada hasil");
   }
});

// let jumlah = 0;
// productBin.data.forEach(element => { 
//    element?.productCode === 'FBR0004010as' 
//    jumlah += element.quantity 
//   });
//   console.log("Total quantity untuk productCode FBR00040101 adalah: ", jumlah)



// dengan filter tapi gamau ngefilter
// let jumlah = 0;
// productBin.data.forEach(element => { 
//     jumlah += element.quantity;
//     Object.keys(element.productCode==="FBR00040101x") ;
// });
// console.log("Total quantity untuk productCode FBR00040101 adalah: ", jumlah);

