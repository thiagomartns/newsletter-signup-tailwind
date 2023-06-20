import MainImgDesktop from './assets/img/illustration-sign-up-desktop.svg';
import CheckImg from './assets/img/icon-success.svg'
import './App.css'
import { useState } from 'react';

function App() {

  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }

    console.log(isEmailValid);
    
    
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-mainBackground'>
      <div className='bg-white w-[728px] h-[530px] rounded-3xl flex items-center justify-center gap-3 px-5'>
        <div className='flex flex-col w-1/2 p-4 justify-center gap-3 h-full'>
          <div className="text flex flex-col gap-5">
            <h1 className='text-darkNavy font-bold text-4xl'>Stay updated!</h1>
            <p className='font-normal text-base text-darkNavy'>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="bullets text-darkNavy font-normal text-base mb-5 flex flex-col gap-2">
              <div className="bullet flex items-center gap-2">
                <img src={CheckImg} className='w-5' alt="" />
                <h2 className='text-sm'>Product discovery and building what matters</h2>
              </div>
              <div className="bullet flex items-center gap-2">
                <img src={CheckImg} className='w-5' alt="" />
                <h2 className='text-sm'>Measuring to ensure updates are a success</h2>
              </div>
              <div className="bullet flex items-center gap-2">
                <img src={CheckImg} className='w-5' alt="" />
                <h2 className='text-sm'>And much more!</h2>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col items-start gap-5'>
            <div className="input flex flex-col gap-2 w-full mb-2">
              <label htmlFor="" className='font-bold text-darkNavy text-xs'>Email Address</label>
              <input 
                className='rounded-lg border border-greyCustom border-solid outline-0 w-full px-3 py-2 hover:border-darkNavy'
                type="text" 
                placeholder='email@company.com'
                onChange={handleChangeEmail}
                value={email}
              />
            </div>
            <button 
              onClick={handleSubmit} 
              className='bg-darkNavy text-white p-3 rounded-lg hover:bg-tomato w-full hover: shadow-lg'
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className='w-1/2'>
          <img className='w-full' src={MainImgDesktop} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
