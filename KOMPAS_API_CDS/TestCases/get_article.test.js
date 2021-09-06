const { post_cds_login } = require('../api/post_login.js');
const { get_cds_article } = require('../api/get_article.js');

const testCase = {
    positive: {
      validAuth:
        'User successfully get article by name with valid auth',
    },
    negative: {
     invaliAuth:
        'User get error when get article by name with expired auth',
    },
  };


describe('get article', function() {
    it(`@get ${testCase.positive.validAuth}`, async function() {
      const responseSuccess = await post_cds_login({
        "email":  'akunkompasid10@gmail.com',
        "password": 'Testing2020@',
      })
      expect(responseSuccess.body.code).toBe(200)
      expect(responseSuccess.body.result.accessToken).not.toBe('')
      console.log(responseSuccess.body)
      const dataToken = responseSuccess.body.result.access_token


      const responseGetArticle = await get_cds_article({
        "token":  dataToken,
      })

      console.log(responseGetArticle.body)
    }),

    it(`@get ${testCase.negative.invaliAuth}`, async function() {
        const responseInvalidGetArticle = await get_cds_article({
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGlnZW4ua29tcGFzLmlkIiwiaWF0IjoxNjIzMjM5OTM2LCJleHAiOjE2MjMyNDA4MzYsImRhdGEiOnsiaWQiOiJkNjcyN2M2Mi1iNmU5LTQ4ZGEtOGEwNS1lZmNlMDEyN2FjMWUiLCJlbWFpbCI6Inl1bmkucHV0cmlAa29tcGFzLmNvbSIsInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfX0.Sj5QYRXlLAPVFR9rM0CidYO1hK_xJKBCyblYkag49gnkU1swooxOSs_7k18V4K5LpgJh9UDQorz3dMZP7zaZVAOuFfeHkQF4KRyDMiE3t292sO0AwC50u9y86S0hoVkIm1Fd85Hw-Lf2PCS8k6gWEGeOd5bIpGevyHUVXoKaIQcnprM",
        })

        console.log(responseInvalidGetArticle.body)
      });
});

