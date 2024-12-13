import React from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario: React.FC = () => {
  return (
    <section>
      <form>
        <CampoTexto label="Nome" placeholder="Insira um nome" />
        <CampoTexto label="Cargo" placeholder="Insira um cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Formulario;
