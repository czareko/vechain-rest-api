# Vechain Sample REST API

This is a very simple service exposing check balance and send tokens methods.

This is some simple PoC, to run it fast locally and check libraries, first you have to clone this repository

https://github.com/czareko/vechain-localstack

Next run local development stack.

What needs to be improved in this sample project:
- Validations
- Security
- Unit and integration tests
- Code static analysis

## Command line methods

Typescript compilation command:

```
npm run compile-typescript
```

Run command:

```
npm run start
```

## Exposed services

### Simple balance check without address exception handling

GET:  http://localhost:8080/balance/0xa40F151a783302513402342a5Df82F1aD59978b6

### Send tokens method

POST: http://localhost:8080/sendTokens

```json
{
	"fromPublicKey": "0x9d92bAE571D3Ba1b869c5102c0D28136b910A760",
	"fromPrivateKey": "075c841cc3aedbb65fbfdbfc577c0b776111d0cd10841d96eb8def988282ed6c",
	"toPublicKey": "0xa40F151a783302513402342a5Df82F1aD59978b6",
	"amount": "1"
}
```
I hope I don't have to tell you that you have to be crazy to expose your real private key.
In this request you can see test accounts, and account "from" was loaded with 500 tokens.

## Useful links

To generate your own address you can go here:

https://laalaguer.github.io/VeChain-Address/

To get test tokens you can go here:

https://faucet.vecha.in/

To check transactions or address balance you can go here:

https://insight.vecha.in/#/test/

