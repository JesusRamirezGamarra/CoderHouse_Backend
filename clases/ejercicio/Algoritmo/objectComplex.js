//https://dev.to/saritchaethudis/working-with-complex-objects-in-javascript-the-friendly-beginners-guide-clh
//https://stackoverflow.com/questions/70676011/how-to-update-a-deeply-nested-object-in-javascript

const NFTStore = {
    artPieces: [
        {
            pieceName: "Emo Flamingos",
            price: 30,
            ownerList: [
                {
                name: "Fida Ernest",
                userID: 23849,
                purchaseDate: "09/13/2021",
                },
                {
                name: "Eric Karger",
                userID: 23510,
                purchaseDate: "09/13/2021",
                },
            ],
        },
        {
            pieceName: "Where is my bit wallet",
            price: 100,
            ownerList: [],
        },
    ],
    storeCredits: 1000,
};

console.log(NFTStore); 

// NFTStore {...}
// artPieces [piece1, piece2..]
//      piece1 {pieceName, price, ownerList}
//          ownerList [ owner1, owner2..]
//              owner {name, userID, purchaseDate}
// storeCredits (number)


// // // // // const EmoFlamingoPrice = NFTStore.artPieces[0].price;
// // // // // console.log(EmoFlamingoPrice); //30

// // // // // const buyer = {
// // // // //     name: "Rose Daniel",
// // // // //     userID: 23849,
// // // // //     purchaseDate: "11/29/2021",
// // // // // };

// // // // // NFTStore.artPieces[0].ownerList

// // // // // console.log(NFTStore.artPieces[0].ownerList); 
// // // // // NFTStore.artPieces[0].ownerList.push(buyer);
// // // // // //see the list with new buyer :
// // // // // console.log(NFTStore.artPieces[0].ownerList); 


NFTStore.storeCredits += NFTStore.artPieces[0].price;
console.log(NFTStore); 
console.log(NFTStore.storeCredits); //new credit is 1030



function buyPiece(NFTStore, buyer, pieceName) {
    // get the piece using its name
    const piece = NFTStore.artPieces.find(
    (piece) => piece.pieceName === pieceName
    );
    // add buyer to owner list
    piece.ownerList.push(buyer);
    // add piece price to store credit
    NFTStore.storeCredits += piece.price;
}