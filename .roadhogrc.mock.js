
var mocks = {

  // 查找礼厅 @request param:  name="逝者姓名", gender=1,2（1男2女）, date="yyyy-MM-dd"
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

  // 查找寄存 @request param: name="逝者姓名", gender=1,2（1男2女）, operator="经办人", mobile="经办人手机"
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
  },

  // 查找壁葬 @request param: name="逝者姓名", gender=1,2（1男2女）, operator="经办人", mobile="经办人手机"
  'GET /wall/list': {
    "success": true,
    "error_no": 0,
    "message": "ok",
    "data": [
      {
        "id": "123",
        "name": "李长江",
        "gender": "男",
        "age": 87,
        "position": "15-3303"
      },
      {
        "id": "124",
        "name": "张媞",
        "gender": "女",
        "age": 64,
        "position": "12-1088"
      }
    ]
  },

  // 查找消费记录 @request param: name="逝者姓名", cremation="火化证号", year="yyyy"
  'GET /consume/list': {
    "success": true,
    "error_no": 0,
    "message": "ok",
    "data": {
      "payroll": 26802.00, // 消费总额
      "exchange": 21870.00, // 实付金额
      "goods": [
        {
          "id": "123",
          "title": "香烛",
          "count": 18,
          "price": 22.80
        },
        {
          "id": "124",
          "title": "棺材",
          "count": 1,
          "price": 19000.00
        },
        {
          "id": "125",
          "title": "XL大花圈",
          "count": 4,
          "price": 688.00
        },
        {
          "id": "126",
          "title": "纸钱（100个/包）",
          "count": 50,
          "price": 47.90
        },
        {
          "id": "127",
          "title": "遗像框3XL精装版",
          "count": 2,
          "price": 1288.00
        }
      ]
    }
  }


};



export default mocks;
