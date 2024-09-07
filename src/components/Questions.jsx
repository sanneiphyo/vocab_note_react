import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, Flex, List, Spin, Typography
    
 } from 'antd'
import Title from 'antd/es/skeleton/Title'
import useQuizApi from '../hooks/useQuizApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange } from '../redux/services/QuizSlice'
import { PoweroffOutlined } from '@ant-design/icons-svg'
import QuestionLayout from './QuestionLayout'


const getrandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {



    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score
    } = useSelector(state => state)


    const navigate = useNavigate()
    const dispatch = useDispatch()

    

    let apiUrl = `/api.php?amount=10`

    const {response, loading} = useQuizApi({url: apiUrl})

    const [questionIndex, setQuestionIndex] = useState(0)
    const [options, setOptions] = useState([])

    console.log(response);
    

    useEffect(()=>{
        if (response?.results.length) {
            const question = response.results[questionIndex]
            let answers = [...question.incorrect_answers]

            console.log(getrandomInt(3));

            answers.splice(getrandomInt(question.incorrect_answers.length), 0 , question.correct_answer);

            setOptions(answers)
     
        }
    }, [response, questionIndex])


    const handleClickAnswer = (e) => {
        const question = response.results[questionIndex]
        if (e.target.textContent == question.correct_answer) {
            dispatch(handleScoreChange(score+1))
        }
        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1)
            
        }else {
            navigate('/revise/quiz/score')
        }
    }

    if (loading) {
        return (

            <div className="flex justify-center align-middle">
                <Spin size="large" />
            </div>
            
                 
         
        )
    }

  return (
    <>

   <QuestionLayout  
   />
       
    {/* {
       response  &&  response.results.length > 0 ? 
        <Card
    title={response?.results[questionIndex].question}
    extra={<p>Questions {questionIndex + 1}</p>}
    style={{
      width: 'auto',
    }}
  >
    <Divider>
        <Title  level={4}></Title>

        <List>
            {
                options.map((data,id) => (
                <List.Item  key={id}>
                        <Typography.Text>
                        <Button onClick={handleClickAnswer}>{data}</Button>
                        </Typography.Text>
                    
                </List.Item>
                ))
            }
           
        </List>

        <Typography.Text  level={4}>Score : {score} / {amount_of_question}</Typography.Text>

    </Divider>
        </Card>
             : 
    
        <Title level={2}>There is no quiz !</Title>
    
    } */}
    

  </>
  )
}

export default Questions
