import { useState, useEffect } from 'react';
import imgPanela from '../../images/panela_de_barro.jpg';
import imgCristo from '../../images/Cristo_Redentor.jpg';
import imgBambu from '../../images/Parque_do_Bambu.jpg';
import imgMuseu from '../../images/Instituto_conceição.jpg';
import imgRebolo from '../../images/poço_rebolo.jpg';
import imgMacaco from '../../images/poço_do_macaco.jpg';
import imgBarragem from '../../images/Barragem_Bitury.jpg';
import imgMatriz from '../../images/igreja.jpg';
import imgArtesanato from '../../images/artesanato.jpg';
import imgBitury from '../../images/cachoeira.jpg';
import './Lugares.css'; 
import { FaStar, FaMapMarkerAlt, FaLocationArrow, FaTimes, FaInfoCircle } from 'react-icons/fa';

const mockLugares = [
  {
    id: '18',
    nome: 'Cachoeira do Bitury',
    categoria: 'Natureza/Aventura',
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 215,
    descricao: 'Uma linda queda d\'água, excelente para banho, piqueniques e lazer em família.',
    fotoUrl: imgBitury, 
    localizacao: 'Zona Rural', 
    curiosidade: 'As águas do Bitury são conhecidas por sua pureza e temperatura refrescante, mesmo no calor do agreste.',
    dica: 'O acesso final requer uma caminhada curta. Vá com calçados que possam molhar!'
  },
  {
    id: '19',
    nome: 'Poço Rebôlo',
    categoria: 'Natureza/Lazer',
    mediaAvaliacao: 4.7,
    totalAvaliacoes: 98,
    descricao: 'Refúgio natural com águas tranquilas, ideal para quem busca paz e contato com a fauna local.',
    fotoUrl: imgRebolo, 
    localizacao: 'Sítio Bitury', 
    curiosidade: 'É um dos locais favoritos dos fotógrafos de natureza da região pela transparência da água.',
    dica: 'Não há sinal de celular próximo ao poço. Aproveite para se desconectar totalmente!'
  },
  {
    id: '1',
    nome: 'Barragem Do Bitury',
    categoria: 'Natureza/Lazer',
    mediaAvaliacao: 4.4,
    totalAvaliacoes: 130,
    descricao: 'Grande reservatório de água cercado por vegetação, ideal para contemplação e fotos.',
    fotoUrl: imgBarragem, 
    localizacao: 'Belo Jardim', 
    curiosidade: 'Além de ponto turístico, é uma das principais fontes de abastecimento da região.',
    dica: 'O paredão da barragem oferece um ângulo incrível para fotos durante o "golden hour".'
  },
  {
    id: '3',
    nome: 'Poço do Macaco',
    categoria: 'Natureza/Trilha',
    mediaAvaliacao: 4.6,
    totalAvaliacoes: 85,
    descricao: 'Local encravado na serra com pequenas quedas d\'água e trilhas moderadas.',
    fotoUrl: imgMacaco, 
    localizacao: 'Serra do Vento', 
    curiosidade: 'O nome vem da presença constante de saguis que habitam as árvores ao redor das quedas.',
    dica: 'Contrate um guia local se for sua primeira vez fazendo as trilhas mais fechadas.'
  },

  {
    id: '17',
    nome: 'Cristo Redentor',
    categoria: 'Histórico/Religioso',
    mediaAvaliacao: 4.7,
    totalAvaliacoes: 154,
    descricao: 'Marco cultural no alto da serra, oferecendo uma vista panorâmica de 360 graus.',
    fotoUrl: imgCristo, 
    localizacao: 'Serra do Vento', 
    curiosidade: 'É o ponto mais alto visitável próximo ao centro, permitindo ver cidades vizinhas em dias limpos.',
    dica: 'Leve um agasalho. Por estar em altitude elevada, a temperatura cai bastante ao entardecer!'
  },
  {
    id: '4',
    nome: 'Igreja Matriz N. Sra. da Conceição',
    categoria: 'Religioso/Arquitetura',
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 420,
    descricao: 'A imponente igreja matriz dedicada à padroeira da cidade, marco do centro histórico.',
    fotoUrl: imgMatriz, 
    localizacao: 'Centro', 
    curiosidade: 'A igreja é o ponto central das festividades de dezembro, as mais tradicionais da cidade.',
    dica: 'Visite o interior para apreciar os detalhes da arquitetura neoclássica.'
  },
  {
    id: '6',
    nome: 'Instituto Conceição Moura - Museu Memórias Vivas',
    categoria: 'Cultural/Educativo',
    mediaAvaliacao: 4.9,
    totalAvaliacoes: 320,
    descricao: 'Centro de cultura e memória que preserva o legado industrial e social de Belo Jardim.',
    fotoUrl: imgMuseu,
    localizacao: 'Centro',
    curiosidade: 'O prédio é uma peça histórica por si só, tendo sido parte fundamental da evolução urbana da cidade.',
    dica: 'Verifique a agenda no site oficial; o instituto costuma ter oficinas e recitais de música.'
  },
  {
    id: '14',
    nome: 'Artesanato Tareco e Mariola',
    categoria: 'Cultura/Compras',
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 410,
    descricao: 'Ponto de parada obrigatório para adquirir artesanato em barro e os doces típicos da região.',
    fotoUrl: imgArtesanato,
    localizacao: 'Margens da BR-232',
    curiosidade: 'Belo Jardim é nacionalmente famosa pela produção desses doces tradicionais.',
    dica: 'Ideal para comprar lembrancinhas feitas por artesãos locais antes de pegar a estrada.'
  },

  {
    id: '13',
    nome: 'Parque do Bambu',
    categoria: 'Natureza/Lazer',
    mediaAvaliacao: 4.9,
    totalAvaliacoes: 500,
    descricao: 'Área verde urbana com excelente infraestrutura para lazer, caminhadas e esportes.',
    fotoUrl: imgBambu,
    localizacao: 'Bairro São Pedro',
    curiosidade: 'O bambuzal que dá nome ao parque cria um túnel natural que é um dos pontos mais fotografados.',
    dica: 'Final de tarde é o melhor horário para aproveitar a brisa e as quadras poliesportivas.'
  },
  {
    id: '2',
    nome: 'Restaurante Panela de Barro',
    categoria: 'Gastronomia',
    mediaAvaliacao: 4.5,
    totalAvaliacoes: 150,
    descricao: 'Referência em culinária regional, famoso pelo ambiente acolhedor e música ao vivo.',
    fotoUrl: imgPanela, 
    localizacao: 'Centro',
    curiosidade: 'O prato "Galinha de Capoeira" é o mais pedido e segue uma receita passada por gerações.',
    dica: 'Aos domingos o movimento é intenso. Chegar cedo garante os melhores lugares perto do palco.'
  }
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