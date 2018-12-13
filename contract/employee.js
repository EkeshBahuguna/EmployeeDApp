module.exports = {
  test: async function(address, name) {
    console.log("calling contract test: ", this);
    app.sdb.lock('test.test@' + address);
    let exists = await app.model.Test.exists({address: address});
    console.log("exists: ", exists);
    if (exists) return 'Address already registered';
    app.sdb.create('Test', {
      address: address,
      name: name,
      empName:empName,
      salary:salary
    });
  }
}
