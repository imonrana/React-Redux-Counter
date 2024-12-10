
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './Slice/CounterSlice'

function App() {

  const dispatch = useDispatch()
  const count = useSelector(selector =>(selector.counter.value));
  return (
    <>
     <div className='flex justify-center  items-center flex-col h-[700px]'>
     
     <h1 className='text-7xl font-bold '>Redux</h1>
     <div className='flex gap-3 mt-10'>
      <button 
      onClick={()=> dispatch(increment())}
      title='Increment the Value'
      type="button" className='text-3xl  py-3 px-5 bg-red-500 text-white font-medium rounded-lg' >Increment</button>
      <p className='font-bold text-6xl'>{count}</p>
      
      <button 
      onClick={()=>dispatch(decrement())}
      disabled={count===0}
      title={count ===0 ? "Cannot decrement below 0" : "Decrement the value"}
      type="button" 
      className={`${count===0 ? 'bg-red-400' :  'bg-red-500'} text-3xl py-2 px-2 text-white font-medium rounded-lg`} >
        Decrement
        </button>
     </div>
    
     </div>
    </>
  )
}

export default App
