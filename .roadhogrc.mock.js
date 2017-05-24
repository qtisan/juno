
var mocks = {

  // 查找礼厅 @param  name, gender, date=""
  'GET /hall/list': {
    "success": true,
    "error_no": 0,
    "message": "ok",
    "data": [
      {
        "id": "123",
        "name": "李长江",
        "gender": "男",
        "age": 87,
        "date": "2017-06-14 15:00",
        "hall": "兰品厅",
        "image": "/images/s3.jpg"
      },
      {
        "id": "124",
        "name": "张媞",
        "gender": "女",
        "age": 64,
        "date": "2017-07-01 09:00",
        "hall": "博爱厅",
        "image": "/images/s2.jpg"
      },
      {
        "id": "125",
        "name": "吴诚光",
        "gender": "男",
        "age": 77,
        "date": "2017-07-19 12:00",
        "hall": "福安厅",
        "image": "/images/s1.jpg"
      }
    ]
  },

  'GET /deposit/list': {
    "success": true,
    "error_no": 0,
    "message": "ok",
    "data": [
      {
        "id": "123",
        "name": "李长江",
        "gender": "男",
        "age": 87,
        "expired": "2017-06-14 15:00",
        "position": "15-3303"
      },
      {
        "id": "124",
        "name": "张媞",
        "gender": "女",
        "age": 64,
        "expired": "2017-07-01 09:00",
        "position": "12-1088"
      }
    ]
  }

};



export default mocks;
