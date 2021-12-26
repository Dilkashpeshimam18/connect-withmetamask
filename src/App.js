import React,{useState} from "react";
import './App.css'
import {ethers} from 'ethers'


function App() {
  const [errMessage,setErrMessage] =useState(null)
  const[defaultAccount,setdefaultAccount]= useState(null)
  const[balance,setBalance]= useState(null)



  const WalletHandler=()=>{
    if(window.ethereum){
      window.ethereum.request({method:'eth_requestAccounts'})
      .then(result=>{
        accountChangeHandler(result[0])

      })

    }else{
      setErrMessage('Install MetaMask')
    }

  }

  const accountChangeHandler=(newAccount)=>{
    setdefaultAccount(newAccount);
    //getUserBalance(newAccount.toString());

  }
  // const getUserBalance = (address)=>{
  //   window.ethereum.request({method:'eth_getBalance',params:[address,'latest']})
  //   .then(balance=>{
  //     setBalance(ethers.utils.formatEther(balance));
  //   })


  // const chainChangedHandler =()=>{
  //   window.location.reload();
  // }

  window.ethereum.on('accountsChanged',accountChangeHandler);
 // window.ethereum.on('chainChanged',chainChangedHandler)

  return (
    <div className="app">
      <div className="content">
      <button onClick={WalletHandler}  className='btn purple'>Connect to Metamask</button>
      <h2 className="text">Address:{defaultAccount}</h2>



      </div>
      <p>{errMessage}</p>
    </div>
  );
}

export default App;
