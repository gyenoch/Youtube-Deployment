// Test file: insecure-email.js
const email = req.query.email; // Unvalidated user input
const dynamicLink = `<a href="mailto:${email}">Click Here</a>`; // Vulnerable code
console.log(dynamicLink);