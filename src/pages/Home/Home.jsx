import { useState, useEffect } from 'react';
import { FaMountain, FaUtensils, FaUsers, FaCalendarAlt, FaStar, FaRoute, FaTimes, FaMapMarkerAlt, FaInfoCircle, FaLocationArrow } from 'react-icons/fa';
import './Home.css';
import imgcarrossel2 from '../../images/carrossel1.jpeg';
import imgCristo from '../../images/Cristo_Redentor.jpg';
import imgBambu from '../../images/Parque_do_Bambu.jpg';
import imgMuseu from '../../images/Instituto_conceição.jpg';
import imgPanela from '../../images/panela_de_barro.jpg';
import imgcarrossel1 from '../../images/carrossel2.jpeg';
import imgcarrossel3 from '../../images/carrossel3.jpg';

const heroImages = [imgcarrossel1, imgcarrossel2, imgcarrossel3];

const categorias = [
    { 
        titulo: 'Atrativos Naturais', 
        icone: <FaMountain />, 
        corDestaque: '#14B8A6',
        imagem: imgBambu,
        descricao: 'Belo Jardim é cercada por paisagens deslumbrantes no coração do Agreste. Nossas cachoeiras, serras e trilhas são o refúgio perfeito para quem busca conexão com a natureza.',
        curiosidade: 'A Cachoeira do Bitury é um dos pontos mais bonitos da região, oferecendo uma vista única e clima ameno o ano todo.'
    },
    { 
        titulo: 'Gastronomia Local', 
        icone: <FaUtensils />, 
        corDestaque: '#FFA726',
        imagem: imgPanela,
        descricao: 'Sabor que marca! A culinária vai da tradicional até pratos sofisticados com ingredientes regionais.',
        curiosidade: 'Não deixe de provar as sobremessas, doces típicos que são patrimônio da nossa cultura.'
    },
    { 
        titulo: 'Cultura e História', 
        icone: <FaCalendarAlt />, 
        corDestaque: '#4FC3F7',
        imagem: imgMuseu,
        descricao: 'Um mergulho no passado. Conheça nossos museus, igrejas centenárias e o legado dos músicos que fizeram história.',
        curiosidade: 'Belo Jardim é conhecida como a "Terra de Músicos" devido à sua forte tradição.'
    },
    { 
        titulo: 'Roteiros Prontos', 
        icone: <FaRoute />, 
        corDestaque: '#AB47BC',
        imagem: imgcarrossel3,
        descricao: 'Não sabe por onde começar? Nossos guias prepararam roteiros completos de 1, 2 ou 3 dias para você aproveitar o melhor da cidade sem preocupações.',
        curiosidade: 'Temos roteiros especiais para ciclistas e grupos que buscam verdadeiras aventuras.'
    },
    { 
        titulo: 'Serviços Turísticos', 
        icone: <FaUsers />, 
        corDestaque: '#EC407A',
        imagem: imgcarrossel1, 
        descricao: 'Encontre hotéis, pousadas, guias credenciados e transporte para tornar sua estadia confortável e segura.',
        curiosidade: 'Nossa rede hoteleira oferece desde opções econômicas no centro até hotéis fazenda com experiência rural completa.'
    },
];

const atracoesPopulares = [
    { 
        id: 1, 
        nome: 'Museu Memórias Vivas', 
        preco: "R$ 0", 
        avaliacao: 4.8, 
        reviews: 320, 
        fotoUrl: imgMuseu, 
        selo: "Preferido ROTAÊ",
        descricao: "Um espaço dedicado à preservação da história industrial e cultural da cidade, localizado no Instituto Conceição Moura.",
        dica: "Ótimo para visitar em finais de semana. Possui otimos guias na própria Instituição."
    },
    { 
        id: 2, 
        nome: 'Restaurante Panela de Barro', 
        preco: "R$ 45/pessoa", 
        avaliacao: 4.6, 
        reviews: 150, 
        fotoUrl: imgPanela, 
        selo: "Imperdível",
        descricao: "Referência em comida regional, com destaque para as músicas ao vivo e a grande variedade do cardápio.",
        dica: "Chegue cedo aos domingos para garantir a mesa ideal para a família."
    },
    { 
        id: 3, 
        nome: 'Parque do Bambu', 
        preco: "R$ 0", 
        avaliacao: 4.9, 
        reviews: 500, 
        fotoUrl: imgBambu, 
        selo: "Natureza",
        descricao: "Uma área revitalizada perfeita para piqueniques, caminhadas e lazer infantil com segurança.",
        dica: "Local muito bem arborizado, com lugares perfeitos para registrar, leve sua câmera!"
    },
    { 
        id: 4, 
        nome: 'Cristo Redentor', 
        preco: "R$ 0", 
        avaliacao: 4.4, 
        reviews: 80, 
        fotoUrl: imgCristo, 
        selo: "Religião",
        descricao: "Monumento histórico no alto da serra, oferecendo uma vista panorâmica de Serra do Vento.",
        dica: "A subida é íngreme, recomenda-se ir de carro ou moto. O vento lá em cima é forte!",
        localizacao: 'Serra do Vento'
    },
];

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null); 

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); 
        return () => clearInterval(intervalId);
    }, []);

    const formatPrice = (price) => {
        return price === "R$ 0" ? "Acesso Livre" : price;
    };

    const getMapLink = (item) => {
        const termoBusca = item.nome || item.titulo;
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(termoBusca + " Belo Jardim")}`;
    };

    const handleOpenInfo = (e, item) => {
        e.preventDefault();
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <main className="rt-home-container">
            
            <section className="rt-hero-section">
                <div className="rt-hero-carousel">
                    {heroImages.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={`rt-hero-image ${index === currentImageIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${imageUrl})` }}
                        />
                    ))}
                </div>
                <div className="rt-hero-content">
                    <h1 className="rt-main-search-title">Venha conhecer Belo Jardim!</h1>
                </div>
            </section>

            <div className="rt-main-content-wrapper">

                <section className="rt-categories-section-airbnb">
                    <h2 className="rt-section-title">Explore em Nossa Cidade</h2>
                    <div className="rt-category-scroll-wrapper">
                        {categorias.map((categoria, index) => (
                            <div 
                                key={index} 
                                className="rt-category-item-airbnb" 
                                style={{ '--icon-color': categoria.corDestaque }} 
                                onClick={(e) => handleOpenInfo(e, categoria)}
                            >
                                {categoria.icone}
                                <span>{categoria.titulo}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rt-main-content-section">
                    <h2 className="rt-section-title">Atrações Imperdíveis</h2>
                    <p className="rt-subtitle">Confira os roteiros mais procurados</p>

                    <div className="rt-attraction-cards-grid">
                        {atracoesPopulares.map((atracao) => (
                            <div 
                                key={atracao.id} 
                                className="rt-atracao-card-link" 
                                onClick={(e) => handleOpenInfo(e, atracao)}
                            >
                                <div className="rt-atracao-card">
                                    <div className="rt-card-image-atracao" style={{ backgroundImage: `url(${atracao.fotoUrl})` }}>
                                        <span className="rt-selo-destaque">{atracao.selo}</span>
                                    </div>
                                    <div className="rt-card-info-atracao">
                                        <div>
                                            <span className="location">
                                                <FaMapMarkerAlt size={10} /> {atracao.localizacao || 'Belo Jardim'}
                                            </span>
                                            
                                            <h4>{atracao.nome}</h4>
                                        </div>
                                        <div>
                                            <div className="rt-card-details">
                                                <p className="rt-card-price-atracao">
                                                    {formatPrice(atracao.preco)}
                                                </p>
                                                <div className="rt-card-rating-atracao">
                                                    <FaStar /> {atracao.avaliacao} ({atracao.reviews})
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            
            </div> 

            {selectedItem && (
                <div className="rt-modal-overlay" onClick={handleCloseModal}>
                    <div className="rt-modal-content" onClick={(e) => e.stopPropagation()}>
                        
                        <button className="rt-close-btn" onClick={handleCloseModal}>
                            <FaTimes />
                        </button>
                        
                        <div className="rt-modal-image" style={{ backgroundImage: `url(${selectedItem.imagem || selectedItem.fotoUrl})` }}>
                            <div className="rt-modal-image-overlay"></div>
                            <h3>{selectedItem.titulo || selectedItem.nome}</h3>
                        </div>

                        <div className="rt-modal-body">
 
                            <div className="rt-modal-location-tag">
                                <FaMapMarkerAlt /> Belo Jardim
                            </div>

                            {selectedItem.corDestaque && (
                                <div className="rt-modal-icon-header" style={{color: selectedItem.corDestaque}}>
                                    {selectedItem.icone} <span>Categoria Explorada</span>
                                </div>
                            )}

                            <p className="rt-modal-description">
                                {selectedItem.descricao}
                            </p>

                            {selectedItem.curiosidade && (
                                <div className="rt-modal-info-box">
                                    <FaInfoCircle />
                                    <div>
                                        <strong>Você sabia?</strong>
                                        <p>{selectedItem.curiosidade}</p>
                                    </div>
                                </div>
                            )}

                            {selectedItem.dica && (
                                <div className="rt-modal-info-box dica">
                                    <FaMapMarkerAlt />
                                    <div>
                                        <strong>Dica do Rotaê:</strong>
                                        <p>{selectedItem.dica}</p>
                                    </div>
                                </div>
                            )}
                            
                            {selectedItem.id && (
                                <a 
                                    href={getMapLink(selectedItem)} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="rt-modal-action-btn"
                                >
                                    <FaLocationArrow /> Como Chegar
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
            
        </main>
    );
}

export default Home;