import React from 'react';
import PageHeader from '../../components/PageHeader';

import whatsApp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeachersList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe non
            ea voluptatum et, totam sapiente doloribus iusto dolorum, aspernatur
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
      </main>
    </div>
  );
}

export default TeachersList;
