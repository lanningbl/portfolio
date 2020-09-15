require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
const { EMAIL, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;

const myOAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, OAUTH_PLAYGROUND);
myOAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});
const myAccessToken = myOAuth2Client.getAccessToken();

app.post('/api/form', (req, res) => {
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: myAccessToken,
      },
    });

    let mailOptions = {
      to: EMAIL,
      replyTo: req.body.email,
      subject: `Message sent from ${req.body.name}`,
      text: req.body.message,
      html: htmlEmail,
    };

    transporter.sendMail(mailOptions, (err, response) => {
      error ? console.log(err) : console.log(response);

      transporter.close();
    });
  });
});

if (process.env.NODE_ENV === 'production') {
  // app.use(express.static(path.join(__dirname, '../client/build')));
  app.use(express.static('../client/build'));

  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../client/build'));
  // });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
