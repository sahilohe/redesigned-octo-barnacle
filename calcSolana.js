const assert = require('assert');
const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

describe('calc_solana', () => {
    const provider = anchor.Provider.local();
    anchor.setProvider(provider);
  
    const calculator = anchor.web3.Keypair.generate();
    const program = anchor.workspace.calculator;
  
    it('Creates a calculator', async () => {
        await program.rpc.create("Welcome to Solana", { //this is causing error
          accounts: {
            calculator: calculator.publicKey,
            user: provider.wallet.publicKey,
            systemProgram: SystemProgram.programId,
          },
          signers: [calculator]
        });
    
        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.greeting === "Welcome to Solana");
        _calculator = calculator; // _calculator is not defined (error)
      });
  
      it("Adds two numbers", async function() {
        const calculator = _calculator;
        
        await program.rpc.add(new anchor.BN(2), new anchor.BN(3), {
          accounts: {
            calculator: calculator.publicKey,
          },
        });
    
        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.result.eq(new anchor.BN(5)));
        assert.ok(account.greeting === "Welcome to Solana");
      });
    it('Multiplies two numbers', async function() {
        const calculator = _calculator;
        
        await program.rpc.add(new anchor.BN(2), new anchor.BN(3), {
          accounts: {
            calculator: calculator.publicKey,
          },
        });
    
        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.result.eq(new anchor.BN(6)));
        assert.ok(account.greeting === "Welcome to Solana");
  
    })
  
    it('Subtracts two numbers', async function() {
        const calculator = _calculator;
        
        await program.rpc.add(new anchor.BN(3), new anchor.BN(2), {
          accounts: {
            calculator: calculator.publicKey,
          },
        });
    
        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.result.eq(new anchor.BN(1)));
        assert.ok(account.greeting === "Welcome to Solana");
  
    });
  
    it('Divides two numbers', async function() {
        const calculator = _calculator;
        
        await program.rpc.add(new anchor.BN(4), new anchor.BN(2), {
          accounts: {
            calculator: calculator.publicKey,
          },
        });
    
        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.result.eq(new anchor.BN(2)));
        assert.ok(account.greeting === "Welcome to Solana");
  
    });
  });
