export default {
  url: '/mock/demo/test',
  method: 'get',
  response: () => {
    return {
      "code": 100000,
      "msg": "succ",
      "data": {
        "text": "test api"
      },
      "trace_id": "ff06e29d53663a47b5fc5cd39b3f6f05",
      "is_sampled": false
    }
  }
}