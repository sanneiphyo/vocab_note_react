import { Button, Space } from 'antd';
import Radio from 'antd/es/radio/radio'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleIncorrectQuiz } from '../redux/services/QuizSlice';

const SelectAnswers = ({handleClickAnswer, options, correct_answer, next, quiz}) => {


    const [value, setValue] = useState('');
    const [color, setColor] = useState('')
    const [correct, setCorrect] = useState('default')
    const [check, setCheck] = useState(false)
    const [answer, setAnswer] = useState('')
    
    const dispatch = useDispatch()

    console.log(correct_answer);
    

  const onChange = (e) => {
    
    setValue(e.target.value)
    setAnswer(e.target.value)
   
  }

  const onSubmit = () => {

    setCheck(true)
    
    if ( answer == correct_answer) {
        console.log(correct_answer);
        
        setCorrect('true')
        setColor('border-green-500')
    }else if ( answer !== correct_answer){
        console.log('wrong');
        
        setCorrect('false')
        setColor('border-red-500')
    }else{
      setCorrect('')
      setColor('')
    }
    handleClickAnswer(answer)
  }

  console.log(color);
  

  const handleNext = () =>{
    setCheck(false)
    setCorrect('')
    next()
    setColor('')
  }

  const AddToIncorrectQuiz = () => {
    dispatch(handleIncorrectQuiz(quiz))
  }

 useEffect(()=>{
  if(correct == 'false')
  {
    AddToIncorrectQuiz()
  }
 },[correct])
 

  return (
    <>
    <Radio.Group  
     disabled={check} 
    className="block w-full">
    <div className='flex flex-row gap-3'>
        {
            options.map((opt, index) => (
              <div 
              className={`inline-block w-full p-2 border rounded-md ${color && opt == value ? color : '' }`}>
                   <Radio 
                
                onClick={onChange}
                
                key={index}
                 className={` text-[20px] `} value={opt}>{opt}</Radio> 
              </div>
               
            ))
        }
      
    
    </div>
  </Radio.Group>
        <br />

        {
            correct == 'true' ? <h3 className=' text-[20px] mt-4 text-green-500'>Your answer is correct</h3> :
             correct == 'false' ? <h3 className='text-[20px] mt-4  text-red-500'>Your answer is incorrect</h3> :
             ''
        }
        <br />
  <Button
  onClick={check? handleNext : onSubmit}
  
  className='mt-3 ' inline-block>{check ? 'Next' : 'Check'}</Button>
  </>
  )
}

export default SelectAnswers
