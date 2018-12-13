module.exports = async function () {
  console.log('enter dapp init')
  app.registerContract(1551, employee.employee);
  console.log("app.contract: ", app.contract);
  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}