import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header.js';
import { CourseRate } from './components/CourseRate.js';
import { FeedbackForm } from './components/FeedbackForm.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header name="Liubomyr Dakh"/>
      <CourseRate max="8"/>
      <FeedbackForm/>
      <Footer name="Liubomyr Dakh"/>
    </div>
  );
}

export default App;
