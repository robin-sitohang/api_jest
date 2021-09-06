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



//eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGlnZW4ua29tcGFzLmlkIiwiaWF0IjoxNjIzMjM5OTM2LCJleHAiOjE2MjMyNDA4MzYsImRhdGEiOnsiaWQiOiJkNjcyN2M2Mi1iNmU5LTQ4ZGEtOGEwNS1lZmNlMDEyN2FjMWUiLCJlbWFpbCI6Inl1bmkucHV0cmlAa29tcGFzLmNvbSIsInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfX0.Sj5QYRXlLAPVFR9rM0CidYO1hK_xJKBCyblYkag49gnkU1swooxOSs_7k18V4K5LpgJh9UDQorz3dMZP7zaZVAOuFfeHkQF4KRyDMiE3t292sO0AwC50u9y86S0hoVkIm1Fd85Hw-Lf2PCS8k6gWEGeOd5bIpGevyHUVXoKaIQcnprM
