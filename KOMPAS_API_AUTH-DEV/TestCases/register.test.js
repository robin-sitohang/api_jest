const faker = require('faker');
const { post_register } = require('../api/post_register.js');
const email = faker.internet.email();
const password = faker.internet.password();

const testCase = {
    positive: {
      registerSuccess:
        'User successfully register with medium pass and valid params',
    },
    negative: {
      registerWithRegisteredEmail:
        'User get error register with registered email',
    },
  };


describe('register', function() {
    it(`@post ${testCase.positive.registerSuccess}`, async function() {
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
    }),

    it(`@post ${testCase.negative.registerWithRegisteredEmail}`, async function() {
        const response = await post_register({
          "email":  email,
          "firstname": faker.name.firstName(),
          "password": password,
          "lastName": faker.name.lastName(),
        })

        if (response instanceof Error) {
          throw response
        }

        expect(response.body.code).toBe(400)
        expect(response.body.message).toBe('Email telah digunakan.')
        console.log(response.body)
      });
});