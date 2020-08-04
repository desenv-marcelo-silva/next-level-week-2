import React from 'react';

import whatsApp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/18222796?s=460&u=69b77bfeaf625a570eb0d5be6086cd1e3811262e&v=4"
          alt="Marcelo Silva"
        />
        <div>
          <strong>Marcelo Silva</strong>
          <span>Computer science</span>
        </div>
      </header>
      <p>
        Entusiasta Python e principalmente Javascript.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe non ea
        voluptatum et, totam sapiente doloribus iusto dolorum, aspernatur
        similique temporibus voluptatem quam maxime eius quaerat voluptate
        corporis modi odio?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 69,00</strong>
        </p>
        <button type="button">
          <img src={whatsApp} alt="WhatsApp icon" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
