const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HiKRGJfLerazQKf7g4eHopaYBztF6QxsARAZPhbeEx0LinBHmrPM7II4VLO4nMqHoFgYlNs6A9ZGlRFZ72ACXPI00e0wbv1zj');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
