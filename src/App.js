import './magic_form_style.css'
import { useState } from 'react';

function App() {
const [uname,setUname]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmpassword,setConfirmpassword]=useState('')
const [error,setError]=useState('');

const emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const handleChangeuname=(event)=>{
     setUname(event.target.value);
}


const handleChangeemail=(event)=>{
  setEmail(event.target.value);
}

const handleChangepassword=(event)=>{
  setPassword(event.target.value);
}

const handleChangeconfirmpassword=(event)=>{
    setConfirmpassword(event.target.value);
}

const handleMouseOver=()=>{

  //  document.getElementById('submit').classList.remove('right')
  if(uname.trim()==='' || email.trim()==='' || password.trim()==='' || confirmpassword.trim()===''){

      setError('*No field should not be empty');
       if(document.getElementById('submit').classList.contains('left')){
        document.getElementById('submit').classList.remove('left');
        document.getElementById('submit').classList.add('right');
       }
    else  if(document.getElementById('submit').classList.contains('right')){
      document.getElementById('submit').classList.remove('right');
      document.getElementById('submit').classList.add('left');
     }

     console.log("name");
     
  }
  
  
  

  else if(password.trim().length!==8 || confirmpassword.trim().length!==8 ){

    setError('*Password must be eight characters');
    if(document.getElementById('submit').classList.contains('left')){
      document.getElementById('submit').classList.remove('left');
      document.getElementById('submit').classList.add('right');
     }
  else  if(document.getElementById('submit').classList.contains('right')){
    document.getElementById('submit').classList.remove('right');
    document.getElementById('submit').classList.add('left');
   }

   console.log("pass len not 8");
  }


  else if( password!==confirmpassword ){
    setError('*Password and confirm password must be same');

    if(document.getElementById('submit').classList.contains('left')){
      document.getElementById('submit').classList.remove('left');
      document.getElementById('submit').classList.add('right');
     }
  else  if(document.getElementById('submit').classList.contains('right')){
    document.getElementById('submit').classList.remove('right');
    document.getElementById('submit').classList.add('left');
   }
   console.log("conf pass not passs");
  }

  
  else{
  if(email.match(emailreg) ){
     setError('')
  }
    else{
      setError('*Enter valid email please');
      if(document.getElementById('submit').classList.contains('left')){
        document.getElementById('submit').classList.remove('left');
        document.getElementById('submit').classList.add('right');
       }
    else  if(document.getElementById('submit').classList.contains('right')){
      document.getElementById('submit').classList.remove('right');
      document.getElementById('submit').classList.add('left');
     }
  
     console.log("email");
    }

  }
   
}

const handleSubmit=()=>{
  alert('You entered all details correctly');
}

  return (
  <>
    <div className='note'>
    <p>Note: You cant't access the submit button until you enter correct credentials.</p>
    </div>
    
     <div className='formcontainer'>
        <div className='errordiv'>
              <p>{error}</p>
        </div>
        <div className='formdiv'>
        <form onSubmit={handleSubmit}>
          <div className='innerformdiv'>
          <label>UserName: </label><br/>
          <input className='i1' type='text' value={uname} onChange={handleChangeuname}></input><br/><br/>



          <label>Email: </label><br/>
          <input className='i2' type='email' value={email} onChange={handleChangeemail}></input><br/><br/>




          <label>Password: </label><br/>
          <input className='i3' type='password' value={password} onChange={handleChangepassword}></input><br/><br/>


          
          <label>Confirm Password: </label><br/>
          <input className='i4' type='password'  value={confirmpassword} onChange={handleChangeconfirmpassword}></input><br/><br/>


          <button id='submit' className='left' type='submit' onMouseOver={handleMouseOver}>Submit</button>
          </div>
        </form>
        </div>
     </div>

  </>
  );
}

export default App;
