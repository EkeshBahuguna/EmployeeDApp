module.exports = {
  employee: async function (address, name) {
    console.log("calling contract test: ", this);
    app.sdb.lock('employee.employee@' + address);
    let exists = await app.model.Employee.exists({ address: address });
    console.log("exists: ", exists);
    if (exists) return 'Address already registered';
    app.sdb.create('Employee', {
      address: address,
      name: name,
      empName: empName,
      salary: salary
    });
  }
}
