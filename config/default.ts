export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-api-master",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5AvIuWiGzf6mpWgmAy7+SrEsn
uMXxEfOT9dcrsjUpO80xu3QrjKTFCb/Wv7YfFetZUlZBkZd1JukC9nFWeDDI7s49
a2DeBH2w39c2ao2su1k2flNM6Ul8dOIzuCN72X9XJl4CsmUDRVG5EsdO9m278qa2
aaHzpSbcYzNNWTJmVQIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQC5AvIuWiGzf6mpWgmAy7+SrEsnuMXxEfOT9dcrsjUpO80xu3Qr
jKTFCb/Wv7YfFetZUlZBkZd1JukC9nFWeDDI7s49a2DeBH2w39c2ao2su1k2flNM
6Ul8dOIzuCN72X9XJl4CsmUDRVG5EsdO9m278qa2aaHzpSbcYzNNWTJmVQIDAQAB
AoGAFhZT81SvUU6cYqttFwM8C7amAkf82ZrbCX8AASd1UUbiaF2IsOpJgXx4eprI
k016m19JDOrkuge7Ka9iOICA0kgtqkRekoOnYw2FIilc3TISHtJA75rxBOEY3MjR
jakhgxiR0csXYpUxvuJeqvWNhXIwhslr1hPZkYk62SKO6MECQQDjCBKx8Z9E74iY
a8ShXIupWyC77/LunsA+II5FFTS0JzVBtOX1BUGKZtfg75C9x8QVqNlHXVEywziD
asS1gTR/AkEA0J5Mr7jV+NF4vXd+7EypODtOrfqWUYzmjK/qf6yxEgBOD/Oi3Hwa
UQZ+HYFzOF7u+RDws7hZKifIbcZcv7LrKwJBAJvjRzL3/ayP7PL7zKAfs6Yt9GQX
dm9ygf4mzImS7gVlhqP/WobLfR1TUJga5v/o0zMsJUVjRgXdFkjmXvtiJHECQQCv
BC7nuNRh0zJNGWP0z/ejQjYmxTS4o9GDM84yYGmI5ZKX1VjLSp41XZIOJNzJ7PLl
Ju4YiE7di9SdK64B8RNTAkAAvwmPawGB8Ii7TAtFwqxBOSdKypATsc+rC2IzRUnZ
/WaP62xMCy4x7HcGOJKc+s6iG3K6bJKUvAkzN2XatRN6
-----END RSA PRIVATE KEY-----`,
};