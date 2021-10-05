import { useState, useEffect } from "react";

import DateInput from "./components/DateInput";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import Timer from './components/Timer';
import CheckBoxInput from './components/CheckBoxInput'
import { getAgeFrom } from "./helpers/dateHelpers";
import { getNewId } from "./services/idService";
import OnlineOffline from './components/OnlineOffline';

export default function App() {
  const [name, setName] = useState("Vitor");
  const [birthDate, setBirthDate] = useState("2001-11-12");
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {

    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOfflie() {
      setIsOnline(false);
    }
  
    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOfflie);

    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOfflie);
    }
  }, [])

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newDate) {
    setBirthDate(newDate);
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }

  return (
    <>
      <Header> React Hello </Header>
      <Main>
        <OnlineOffline isOnline={isOnline}/>

        {showTimer && (
            <div className='text-right mt-5 mr-3'>
              <Timer/>      
            </div>     
        )}

        <CheckBoxInput 
        labelDescription='Mostrar cronômetro'
        onCheckboxChange={toggleShowTimer}
        />

        <TextInput
          id={getNewId}
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <DateInput
          id={getNewId}
          labelDescription="Digite a sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <p>
          O meu nome é {name} e eu tenho {getAgeFrom(birthDate)}
        </p>
      </Main>
    </>
  );
}
