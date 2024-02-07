/*

https://www.geeksforgeeks.org/generate-a-qr-code-in-node-js/?ref=ml_lbp

A QR code is a monochromatic matrix with embedded data that is used in manufacturing industries in order to label the products. 
Nowadays QR codes are being used for payments in UPI-based apps, some chatting apps like WhatsApp, and in the play store. 
These are some most common examples, but we can use QR code in our apps for a far better purpose. 
If we are creating a website using MEAN/MERN Stack or any JavaScript related technology, 
We can generate QR codes in order to build advanced apps.
*/

// Require the package
const QRCode = require('qrcode')

// Creating the data
let data = {
	name:"Vishnuvarthan",
	age:27,
	department:"Software",
	id:"aisuoiqu3234738jdhf100223"
}

// Converting the data into String format
let stringdata = JSON.stringify(data)


// Print the QR code to terminal
QRCode.toString(stringdata,{type:'terminal'},
					function (err, QRcode) {

	if(err) return console.log("error occurred")

	// Printing the generated code
	console.log(QRcode)
})

// Converting the data into base64 
QRCode.toDataURL(stringdata, function (err, code) {
	if(err) return console.log("error occurred")

	// Printing the code
	//console.log(code)
})
