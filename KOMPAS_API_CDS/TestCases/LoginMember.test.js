const { post_cds_login } = require('../api/post_login.js');

const testCase = {
    positive: {
      loginSuccess:
        'User successfully login',
    },
    negative: {
     invalidEmail:
        'User get error login with invalid email',
    },
  };

describe('login', function() {
    it(`@post ${testCase.positive.loginSuccess}`, async function() {
      const response = await post_cds_login({
        "email":  'akunkompasid10@gmail.com',
        "password": 'Testing2020@',
      })

      if (response instanceof Error) {
        throw response
      }
      console.log(response.body)
    }),

    it(`@post ${testCase.negative.invalidEmail}`, async function() {
        const responseInvalid = await post_cds_login({
          "email":  'akunkompasid',
          "password": 'Testing2020@',
        })

        if (responseInvalid instanceof Error) {
          throw response
        }
        console.log(responseInvalid.body)
      });
});

