import Header from './components/Header';
import Quizz from './components/Quizz'
import Home from './components/Home'
import QuizzCompleted from './components/QuizzCompleted'
import { useSelector } from "react-redux";

const App = () => {
  const subject = useSelector((state) => state.subject)
  const theme = useSelector((state) => state.theme)
  const completed = useSelector((state) => state.completed)
  document.body.id = theme
  const main = subject !== null ? <Quizz /> : <Home />

  return (
    <>
      <Header subject={subject} theme={theme} />
      {completed ? <QuizzCompleted /> : main}
    </>
    
  );
}

export default App;