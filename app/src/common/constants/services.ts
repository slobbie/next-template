export default Object.freeze({
  api: {
    version: '/api/v1/',
    host: 'http://localhost:3005',
    contentType: 'application/json; charset=utf-8',
    method: {
      post: 'POST',
      get: 'GET',
    },
  },
  url: {
    // 약관동의
    agree: 'agree',
  },
  code: {
    success: '00000', // 성공,
    fail: '00001', // 실패
    notFound: '00002', // 올바르지 않은 접근
  },
  token: {
    Authorization: 'Authorization',
    Bearer: 'bearer=',
  },
})
