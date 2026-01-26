import React, { useState, useEffect } from 'react';
import './Roteiros.css'; 
import { FaClock, FaTag, FaStar, FaRoute, FaWhatsapp, FaMapMarkedAlt, FaEnvelope, FaTimes, FaMapMarkerAlt, FaInfoCircle, FaLocationArrow } from 'react-icons/fa';
import imgPraça from '../../images/praça.jpg';
import imgCachoeira from '../../images/cachoeira.jpg';
import imgArtesanato from '../../images/artesanato.jpg';

const mockRoteiros = [
  {
    id: 'R01',
    titulo: 'Natureza e Águas de Belo Jardim',
    tema: 'Aventura',
    duracao: 'Dia Inteiro (8h)',
    custoMedio: 'Baixo (R$ 30 - R$ 80)',
    descricao: 'Roteiro focado nos atrativos naturais: visita à Cachoeira do Bitury e piquenique.',
    pontosChave: ['Cachoeira do Bitury', 'Bica do Bitury'],
    mediaAvaliacao: 4.9,
    parceiroPremium: false,
    fotoUrl: imgCachoeira,
    curiosidade: 'A água da Cachoeira do Bitury é considerada uma das mais puras da região, nascendo diretamente da serra.',
    dica: 'Leve repelente e sapatos confortáveis para trilha. O sinal de celular pode oscilar.'
  },
  {
    id: 'R02',
    titulo: 'Centro de Artesanato Tareco e Mariola',
    tema: 'Cultural',
    duracao: 'Meio Período (4h)',
    custoMedio: 'Médio (R$ 50 - R$ 300)',
    descricao: 'Imersão na história de Belo Jardim e sua exposição de artesanatos locais.',
    pontosChave: ['Centro de Artesanato'],
    mediaAvaliacao: 4.6,
    parceiroPremium: false,
    fotoUrl: imgArtesanato,
    curiosidade: 'O artesanato em barro e palha é uma tradição passada de geração em geração pelas famílias locais.',
    dica: 'Ótimo lugar para comprar lembrancinhas.'
  },
  {
    id: 'R03',
    titulo: 'Passeio Urbano e Histórico',
    tema: 'Urbano/Histórico',
    duracao: 'Meio Período (4h)',
    custoMedio: 'Baixo (R$ 30 - R$ 50)',
    descricao: 'Caminhada pelas praças centrais (Motoristas e Conceição), finalizando no Parque do Bambu.',
    pontosChave: ['Praça dos Motoristas', 'Igreja Matriz'],
    mediaAvaliacao: 4.4,
    parceiroPremium: false,
    fotoUrl: imgPraça,
    curiosidade: 'A Igreja Matriz possui uma arquitetura preservada do século passado e é o marco zero da cidade.',
    dica: 'Faça esse roteiro no final da tarde para aproveitar o pôr do sol no Parque do Bambu.'
  },
];

function Roteiros() {
  const [roteiros, setRoteiros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setRoteiros(mockRoteiros);
      setLoading(false);
    }, 300);
  }, []);
  
  const getWhatsappLink = (roteiro) => {
    const numero = "5581988306577";
    const mensagem = `Olá! Vi o roteiro "${roteiro.titulo}" no Rotaê e gostaria de saber mais detalhes e disponibilidade.`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  };

  const getMapLink = (roteiro) => {
    const localBusca = roteiro.pontosChave[0] || roteiro.titulo;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(localBusca + " Belo Jardim Pernambuco")}`;
  };

  const handleOpenInfo = (e, item) => {
    e.preventDefault(); 
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const stopProp = (e) => {
    e.stopPropagation();
  }

  const renderEstrelas = (media) => {
    const estrelasCheias = Math.floor(media);
    const estrelas = [];
    for (let i = 0; i < 5; i++) {
      if (i < estrelasCheias) {
        estrelas.push(<FaStar key={`star-full-${i}`} className="star-filled" />);
      } else {
        estrelas.push(<FaStar key={`star-empty-${i}`} className="star-empty" />);
      }
    }
    return <span className="rtn-rating-stars">{estrelas}</span>;
  };

  if (loading) {
    return (
        <div className="rtn-loading-container">
            <div className="rtn-loading-spinner"></div>
            <p>Carregando roteiros...</p>
        </div>
    );
  }

  return (
    <div className="rtn-main-wrapper">
      <div className="rtn-header-section">
        <h1 className="rt-section-title">Roteiros Prontos</h1>
        <p className="rt-subtitle">Escolha seu caminho: Aventura, Cultura ou Gastronomia em Belo Jardim.</p>
      </div>
      
      <div className="rtn-custom-roteiro-cta">
        <div className="rtn-cta-content">
            <div className="icon-wrapper">
                <FaEnvelope />
            </div>
            <div className="text-wrapper">
                <h3>Quer adicionar seu roteiro aqui?</h3>
                <p>É um guia ou agência? Entre em contato e divulgue seu trabalho no Rotaê.</p>
            </div>
        </div>
        
        <a href="mailto:contato.rotae@gmail.com?subject=Quero divulgar meu roteiro no Rotaê" className="rtn-cta-custom-button">
            Fale Conosco
        </a>
      </div>

      <div className="rtn-roteiros-list">
        {roteiros.length > 0 ? (
          roteiros.map(roteiro => (
            <div 
                key={roteiro.id} 
                className="rtn-roteiro-card"
                onClick={(e) => handleOpenInfo(e, roteiro)}
                style={{ cursor: 'pointer' }}
            >
              <div className="rtn-card-image" style={{ backgroundImage: `url(${roteiro.fotoUrl})` }}>
                <span className="rtn-card-tag rtn-card-tag-theme">{roteiro.tema}</span>
                {roteiro.parceiroPremium && <span className="rtn-card-tag rtn-card-tag-premium">PREMIUM</span>}
                <div className="rtn-image-overlay"></div>
              </div>
              
              <div className="rtn-card-details">
                <div className="rtn-card-header">
                    <h3>{roteiro.titulo}</h3>
                    <div className="rtn-card-rating-points">
                        <span className="rtn-rating-value">{roteiro.mediaAvaliacao.toFixed(1)}</span>
                        {renderEstrelas(roteiro.mediaAvaliacao)}
                    </div>
                </div>
                
                <div className="rtn-card-meta">
                  <div className="meta-item"><FaClock /> {roteiro.duracao}</div>
                  <div className="meta-item"><FaTag /> {roteiro.custoMedio}</div>
                </div>
                
                <p className="rtn-card-description">{roteiro.descricao}</p>
                
                <div className="rtn-card-actions">
                    <a href={getMapLink(roteiro)} onClick={stopProp} target="_blank" rel="noopener noreferrer" className="rtn-btn rtn-btn-map">
                        <FaMapMarkedAlt /> Mapa
                    </a>
                    <a href={getWhatsappLink(roteiro)} onClick={stopProp} target="_blank" rel="noopener noreferrer" className="rtn-btn rtn-btn-whatsapp">
                        <FaWhatsapp /> Interesse
                    </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="rtn-no-results">Nenhum roteiro cadastrado no momento.</p>
        )}
      </div>

      {selectedItem && (
        <div className="rt-modal-overlay" onClick={handleCloseModal}>
            <div className="rt-modal-content" onClick={(e) => e.stopPropagation()}>
                
                <button className="rt-close-btn" onClick={handleCloseModal}>
                    <FaTimes />
                </button>
                
                <div className="rt-modal-image" style={{ backgroundImage: `url(${selectedItem.fotoUrl})` }}>
                    <div className="rt-modal-image-overlay"></div>
                    <h3>{selectedItem.titulo}</h3>
                </div>

                <div className="rt-modal-body">
                    
                    <div className="rt-modal-location-tag">
                        <FaRoute /> {selectedItem.tema}
                    </div>

                    <p className="rt-modal-description">
                        {selectedItem.descricao}
                    </p>

                    <div className="rtn-card-meta" style={{ marginBottom: '20px' }}>
                        <div className="meta-item"><FaClock /> {selectedItem.duracao}</div>
                        <div className="meta-item"><FaTag /> {selectedItem.custoMedio}</div>
                    </div>

                    {selectedItem.curiosidade && (
                        <div className="rt-modal-info-box">
                            <FaInfoCircle />
                            <div>
                                <strong>Curiosidade</strong>
                                <p>{selectedItem.curiosidade}</p>
                            </div>
                        </div>
                    )}

                    {selectedItem.dica && (
                        <div className="rt-modal-info-box dica">
                            <FaMapMarkerAlt />
                            <div>
                                <strong>Dica do Guia:</strong>
                                <p>{selectedItem.dica}</p>
                            </div>
                        </div>
                    )}
                    
                    <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexDirection: 'column' }}>
                        <a 
                            href={getWhatsappLink(selectedItem)} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="rt-modal-action-btn"
                            style={{ backgroundColor: '#25D366', color: '#fff' }}
                        >
                            <FaWhatsapp /> Falar com Guia (Agendar)
                        </a>

                        <a 
                            href={getMapLink(selectedItem)} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="rt-modal-action-btn"
                        >
                            <FaLocationArrow /> Ver Rota no Mapa
                        </a>
                    </div>

                </div>
            </div>
        </div>
      )}

    </div>
  );
}

export default Roteiros;