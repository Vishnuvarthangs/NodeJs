/*

https://www.geeksforgeeks.org/reading-qr-codes-using-node-js/?ref=ml_lbp

we might want our apps to interact with external apps or payment gateways that provide QR codes to communicate the information

To work with the qrcode-reader, we also need an image parser. Jimp Module is used for image parsing.
npm install qrcode-reader jimp

*/

//Importing jimp module
const Jimp = require("jimp");
// Importing filesystem module
const fs = require('fs')
// Importing qrcode-reader module
const qrCode = require('qrcode-reader');

// Read the image and create a buffer
// (Here image.png is our QR code)
const buffer = fs.readFileSync(__dirname + '/image.png');

// Parse the image using Jimp.read() method
Jimp.read(buffer, function (err, image) {
	if (err) {
		console.error(err);
	}
	// Creating an instance of qrcode-reader module
	let qrcode = new qrCode();
	qrcode.callback = function (err, value) {
		if (err) {
			console.error(err);
		}
		// Printing the decrypted value
		console.log(value.result);
	};
	// Decoding the QR code
	qrcode.decode(image.bitmap);
});
