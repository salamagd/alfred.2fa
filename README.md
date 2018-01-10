#### What is this?

This is an Alfred workflow that allows you to retrieve one-time passwords for sites that use two-factor authentication. You set up the sites in Alfred, then you can pull the one time password for the site at any time with Alfred. The password is automatically copied to the clipboard.

![pic](http://i.imgur.com/R9BFGgh.png)

![pic](http://i.imgur.com/wlkx0OR.png)

### Setup

1. Install Node.js: http://nodejs.org/download/ or `brew install node`
2. Install this workflow by clicking on https://github.com/salamagd/alfred.2fa/raw/master/2FA.alfredworkflow, then opening the downloaded file.
3. Setup two-factor authentication with some service (eg. GitHub, AWS, etc).
4. Scan the barcode into your mobile app (eg. Authy or Google Authenticator) and note the secret key.
5. Add the secret key into Alfred: `2f add [SERVICE_NAME] [SECRET_KEY]`
6. Use Alfred at any time to generate a one-time password and copy it to the clipboard: `2f [SERVICE_NAME]`

### Usage

#### Add new service:

```
2f add [SERVICE_NAME] [SECRET_KEY]

eg.:
2f add aws ASDJKS34DHUY12
```

#### Generate one-time password:

```
2f [SERVICE_NAME]

eg.:
2f aws
```

#### Remove existing service:

```
2f delete [SERVICE_NAME]

eg.:
2f delete aws
```


### Credits

Alfred feedback: https://github.com/lrrfantasy/alfred-feedback-xml-generation

OTP generation: https://www.npmjs.org/package/otp

Icons: http://fortawesome.github.io/Font-Awesome/
