import Title from "./components/Title";
import Counter from "./components/Counter";

import BirthdayWpp from "./assets/BirthdayWpp.jpg"

import useCountdown from "./hooks/useCountdown";

import './App.css'

function App() {
  const [day, hour, minute, second] = useCountdown("Mar 15, 2025 00:00:00")

  return (
    <>
      <div className="App" style={{backgroundImage: `url(${BirthdayWpp})`}}>
        <div className="container">
          <Title title="Contagem regressiva para aniversário da Emily" />
          <div className="countdown-container">
            <Counter title="Dias" number={day} />
            <Counter title="Horas" number={hour} />
            <Counter title="Minutos" number={minute} />
            <Counter title="Segundos" number={second} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
