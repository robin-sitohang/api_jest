const faker = require('faker');
const { post_register } = require('../api/post_register.js');
const { post_login } = require('../api/post_login.js');
const email = faker.internet.email();
const password = faker.internet.password();

const testCase = {
    positive: {
      loginSuccess:
        'User Successfully Login With Registered Email',
    },
    negative: {
      loginErorrEmptyEmail:
        'User Get Error Login With Empty Email',
      loginErorrEmptyPassword:
        'User Get Error Login With Empty Password',
      loginErorrMismatchPass:
        'User get error login with mismatch password',
    },
  };


describe('login', function() {
    it(`@post ${testCase.positive.loginSuccess}`, async function() {
      const response = await post_register({
        "email":  email,
        "firstname": faker.name.firstName(),
        "password": password,
        "lastName": faker.name.lastName(),
      })

      if (response instanceof Error) {
        throw response
      }

      expect(response.body.code).toBe(200)
      expect(response.body.data.accessToken).not.toBe('')
      console.log(response.body)

      const responseLogin = await post_login({
        "email":  email,
        "password":  password,
      })
      expect(responseLogin.body.code).toBe(200)
      expect(responseLogin.body.data.accessToken).not.toBe('')
      console.log(responseLogin.body)

    }),

    it(`@post ${testCase.negative.loginErorrEmptyEmail}`, async function() {
      const responseEmptyEmail = await post_login({
        "email":  "",
        "password":  password,
      })

      if (responseEmptyEmail instanceof Error) {
        throw responseEmptyEmail
      }

      expect(responseEmptyEmail.body.code).toBe(400)
      expect(responseEmptyEmail.body.message).toBe('Email wajib diisi. ')
      console.log(responseEmptyEmail.body)

    }),

    it(`@post ${testCase.negative.loginErorrEmptyPassword}`, async function() {
      const responseEmptyPassword = await post_login({
        "email":  email,
        "password":  "",
      })

      if (responseEmptyPassword instanceof Error) {
        throw responseEmptyPassword
      }

      expect(responseEmptyPassword.body.code).toBe(400)
      expect(responseEmptyPassword.body.message).toBe('Kata Sandi wajib diisi. ')
      console.log(responseEmptyPassword.body)
    }),

    it(`@post ${testCase.negative.loginErorrMismatchPass}`, async function() {
      const responseEmptyPassword = await post_login({
        "email":  email,
        "password":  password + '5678asd!!E',
      })

      if (responseEmptyPassword instanceof Error) {
        throw responseEmptyPassword
      }

      expect(responseEmptyPassword.body.code).toBe(400)
      expect(responseEmptyPassword.body.message).toBe('Kata Sandi wajib diisi. ')
      console.log(responseEmptyPassword.body)

    });

});