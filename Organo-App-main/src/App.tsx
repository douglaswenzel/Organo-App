import { useState } from "react";
import { v4 as id } from 'uuid';
import Swal from 'sweetalert2';
import { IUser } from "./shared/interfaces/iUser";
import { ICrew } from "./shared/interfaces/iCrew";
import Banner from "./shared/componentes/banner/banner";

function App() {

  return (
    <div className="App">
      <Banner></Banner>
      <h1>Olá mundo!</h1>
  
    </div>
  );
}

export default App;