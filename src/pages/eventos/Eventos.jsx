import React, { useState, useEffect } from 'react';
import './Eventos.css'; 
import { FaCalendarAlt, FaMapMarkerAlt, FaTag, FaTicketAlt } from 'react-icons/fa';

const mockEventos = [
  {
    id: 1,
    nome: 'Feira de Artesanato e Cultura Local',
    data: '15/Nov',
    local: 'Praça da Matriz',
    categoria: 'Feira',
    descricao: 'Exposição e venda de produtos artesanais e comidas típicas de Belo Jardim. Entrada gratuita.',
    preco: 'Grátis',
    link: '#',
  },
  {
    id: 2,
    nome: 'Festival de Gastronomia do Agreste',
    data: '22/Nov',
    local: 'Clube Municipal',
    categoria: 'Gastronomia',
    descricao: 'Degustação e concurso de pratos regionais.',
    preco: 'R$ 25,00',
    link: '#',
  },
  {
    id: 3,
    nome: 'Show da Banda X',
    data: '05/Dez',
    local: 'Casa de Shows Y',
    categoria: 'Música',
    descricao: 'Grande show para encerrar o ano com chave de ouro e muita animação.',
    preco: 'R$ 50,00',
    link: '#',
  },
  {
    id: 4,
    nome: 'Exposição de Arte "Raízes"',
    data: '30/Nov',
    local: 'Museu Municipal',
    categoria: 'Cultural',
    descricao: 'Coleção temporária de peças raras da região e obras de artistas locais.',
    preco: 'Grátis',
    link: '#',
  },
];

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEventos(mockEventos);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return (
        <div className="ge-loading-container">
            <div className="ge-loading-spinner"></div>
            <p>Carregando Agenda de Eventos...</p>
        </div>
    );
  }

  return (
    <div className="ge-main-wrapper">
      <div className="ge-header-section">
        <h1 className="rt-section-title">Agenda de Eventos</h1>
        <p className="rt-subtitle">Descubra a cultura, gastronomia e festividades da região.</p>
      </div>

      <div className="ge-eventos-list">
        {eventos.map(evento => (
            <div key={evento.id} className="ge-evento-card">
              
              <div className="ge-event-date">
                <div className="ge-date-badge">
                    <span className="ge-date-day">{evento.data.split('/')[0]}</span>
                    <span className="ge-date-month">{evento.data.split('/')[1]}</span>
                </div>
              </div>
              
              <div className="ge-event-details">
                <div className="ge-event-header">
                    <span className="ge-category-tag">{evento.categoria}</span>
                    <h3>{evento.nome}</h3>
                </div>
                
                <div className="ge-event-info-grid">
                    <p><FaMapMarkerAlt /> {evento.local}</p>
                    <p className="ge-price-tag"><FaTag /> {evento.preco}</p>
                </div>

                <p className="ge-event-description">{evento.descricao}</p>
              </div>
              
              <div className="ge-event-action">
                  <a href={evento.link} target="_blank" rel="noopener noreferrer" className="ge-cta-button">
                      <FaTicketAlt /> SAIBA MAIS
                  </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Eventos;