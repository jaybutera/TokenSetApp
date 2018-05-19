//const { assertRevert, assertInvalidOpcode } = require('@aragon/os/test/helpers/assertThrow.js')
const SetToken = artifacts.require('SetToken')
const SimpleERC20 = artifacts.require('SimpleERC20')

contract('SetToken app', (accounts) => {
   let token1, token2
   let admin = accounts[0]

   before( async () => {
      //token1 = await getContract('SimpleERC20').new()
      token1 = await SimpleERC20.new()
      token2 = await SimpleERC20.new()
      //token2 = await getContract('SimpleERC20').new()
   })

   context('Test', async () => {
      let setContract = null

      beforeEach( async () => {
         let supply1 = (await token1.totalSupply()).toNumber() / Math.pow(10, 9)
         let supply2 = (await token1.totalSupply()).toNumber() / Math.pow(10, 9)
         console.log(typeof(supply2.toString()))

         setContract = await SetToken.new([token1.address.toString(), token2.address.toString()], [await token1.totalSupply(), await token2.totalSupply()])
         //setContract = await SetToken.new()
      })

      it('TokenSet contains two tokens', async() => {
         //let tokens = (await setContract.tokens).toNumber()
         //assert.equal((await setContract.size()) == 2)
      })
   })
})
