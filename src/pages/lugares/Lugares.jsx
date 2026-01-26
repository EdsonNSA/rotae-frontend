import { useState, useEffect } from 'react';
import imgPanela from '../../images/panela_de_barro.jpg';
import imgCristo from '../../images/Cristo_Redentor.jpg';
import imgBambu from '../../images/Parque_do_Bambu.jpg';
import imgMuseu from '../../images/Instituto_conceição.jpg';
import './Lugares.css'; 
import { FaStar, FaMapMarkerAlt, FaLocationArrow, FaTimes, FaInfoCircle } from 'react-icons/fa';

const mockLugares = [
  {
    id: '1',
    nome: 'Cristo Redentor',
    categoria: 'Histórico/Religioso',
    mediaAvaliacao: 4.7,
    totalAvaliacoes: 154,
    descricao: 'Importante marco cultural e religioso da cidade, oferecendo uma vista panorâmica.',
    fotoUrl: imgCristo, 
    localizacao: 'Serra do Vento', 
    curiosidade: 'Do alto da serra, é possível ter uma visão de 360 graus de toda a cidade e arredores.',
    dica: 'O pôr do sol visto daqui é considerado um dos mais bonitos do estado. Leve um casaco, venta bastante!'
  },
  {
    id: '2',
    nome: 'Restaurante Panela de Barro',
    categoria: 'Gastronomia',
    mediaAvaliacao: 4.5,
    totalAvaliacoes: 89,
    descricao: 'Comida regional nordestina, servida em um ambiente familiar e acolhedor.',
    fotoUrl: imgPanela, 
    curiosidade: 'O tempero utilizado na galinha de capoeira é uma receita de família guardada há 3 gerações.',
    dica: 'Aos domingos, chegue antes das 12h para evitar filas e pegar uma mesa na varanda.'
  },
  {
    id: '3',
    nome: 'Parque do Bambu',
    categoria: 'Natureza/Lazer',
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 210,
    descricao: 'Área de lazer com playground infantil, quadras e ótimo para caminhadas.',
    fotoUrl: imgBambu,
    curiosidade: 'O parque foi construído em uma área de preservação e conta com diversas espécies nativas da caatinga.',
    dica: 'Perfeito para piqueniques no final da tarde. O parque é pet-friendly!'
  },
  {
    id: '4',
    nome: 'ICM - Museu Memórias Vivas',
    categoria: 'Cultural',
    mediaAvaliacao: 4.2,
    totalAvaliacoes: 55,
    descricao: 'Coleção de peças que contam a história de Belo Jardim e sua evolução industrial.',
    fotoUrl: imgMuseu,
    curiosidade: 'O prédio do museu antigamente abrigava a primeira grande fábrica da cidade.',
    dica: 'Agende uma visita guiada para conhecer os detalhes de cada peça do acervo.'
  },
];

function Lugares() {
  const [lugares, setLugares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); 

  useEffect(() => {
    setTimeout(() => {
      setLugares(mockLugares);
      setLoading(false);
    }, 300);
  }, []);

  const getMapLink = (lugar) => {
    const local = lugar.localizacao ? `${lugar.nome} ${lugar.localizacao}` : `${lugar.nome} Belo Jardim`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local)}`;
  };

  const getSelo = (lugar) => {
    if (lugar.mediaAvaliacao >= 4.8) return 'Lazer';
    if (lugar.categoria.includes('Gastronomia')) return 'Sabor Local';
    if (lugar.categoria.includes('Histórico')) return 'Cultura';
    return lugar.categoria.split('/')[0].trim();
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

  if (loading) {
    return (
        <div className="lg-loading-container">
            <div className="lg-loading-spinner"></div>
            <p>Buscando lugares incríveis...</p>
        </div>
    );
  }

  return (
    <div className="lg-main-wrapper">
      
      <div className="lg-header-section">
        <h1 className="rt-section-title">Pontos de Interesse</h1>
        <p className="rt-subtitle">Explore o melhor que Belo Jardim tem a oferecer.</p>
      </div>
      
      <div className="lg-lugares-grid">
        {lugares.length > 0 ? (
          lugares.map(lugar => (
            <div 
                key={lugar.id} 
                className="lg-atracao-card"
                onClick={(e) => handleOpenInfo(e, lugar)}
                style={{ cursor: 'pointer' }}
            >
              <div className="lg-card-image-atracao" style={{ backgroundImage: `url(${lugar.fotoUrl})` }}>
                <span className="lg-selo-destaque">{getSelo(lugar)}</span>
                <div className="lg-image-overlay"></div>
              </div>

              <div className="lg-card-info-atracao">
                <div className="lg-info-header">
                    <span className="lg-location-tag">
                        <FaMapMarkerAlt size={10}/> {lugar.localizacao || 'Belo Jardim'}
                    </span>
                    <h4>{lugar.nome}</h4>
                </div>
                
                <p className="lg-card-description">{lugar.descricao}</p>
                
                <div className="lg-card-footer">
                  <div className="lg-card-rating-atracao">
                      <FaStar /> 
                      <span className="rating-value">{lugar.mediaAvaliacao.toFixed(1)}</span>
                      <span className="rating-count">({lugar.totalAvaliacoes})</span>
                  </div>

                  <a 
                    href={getMapLink(lugar)} 
                    onClick={stopProp}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="lg-btn-map" 
                    title="Ver no Mapa"
                  >
                    <FaLocationArrow /> Como Chegar
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="lg-no-results">Nenhum local cadastrado no momento.</p>
        )}
      </div>

      {/* --- MODAL --- */}
      {selectedItem && (
        <div className="rt-modal-overlay" onClick={handleCloseModal}>
            <div className="rt-modal-content" onClick={(e) => e.stopPropagation()}>
                
                <button className="rt-close-btn" onClick={handleCloseModal}>
                    <FaTimes />
                </button>
                
                <div className="rt-modal-image" style={{ backgroundImage: `url(${selectedItem.fotoUrl})` }}>
                    <div className="rt-modal-image-overlay"></div>
                    <h3>{selectedItem.nome}</h3>
                </div>

                <div className="rt-modal-body">
                    
                    <div className="rt-modal-location-tag">
                        <FaMapMarkerAlt /> {selectedItem.localizacao || 'Belo Jardim'}
                    </div>

                    <div className="rt-modal-icon-header" style={{color: '#14B8A6'}}>
                         <span>{selectedItem.categoria}</span>
                    </div>

                    <p className="rt-modal-description">
                        {selectedItem.descricao}
                    </p>

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
                                <strong>Dica do RotaÊ:</strong>
                                <p>{selectedItem.dica}</p>
                            </div>
                        </div>
                    )}
                    
                    <a 
                        href={getMapLink(selectedItem)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rt-modal-action-btn"
                    >
                        <FaLocationArrow /> Como Chegar
                    </a>
                </div>
            </div>
        </div>
      )}

    </div>
  );
}

export default Lugares;