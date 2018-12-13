module.exports = {
    name: 'Employee',
    fields: [
      {
        name: 'address',
        type: 'String',
        length: 256,
        not_null: true,
        index: true
      },
      {
        name: 'name',
        type: 'String',
        length: 30
      },
      {
          name: 'empName',
          type: 'String',
          length:50,
          not_null: true,
      },
      {
        name: 'salary',
        type: 'Number',
        default: 0,
        index: true
      }
    ]
  }