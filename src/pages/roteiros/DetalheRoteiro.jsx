// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { FaMapMarkerAlt, FaClock, FaTag, FaRoute, FaArrowRight, FaCalendarAlt, FaStar } from 'react-icons/fa';
// import './DetalheRoteiro.css'; 

// const mockRoteiro = {
//   id: 'R01',
//   titulo: 'Natureza e Águas de Belo Jardim (1 Dia)',
//   tema: 'Aventura',
//   duracao: 'Dia Inteiro (8h)',
//   custoMedio: 'Baixo (R$ 30 - R$ 80)',
//   mediaAvaliacao: 4.9,
//   descricao: 'Uma jornada refrescante e revigorante pelas belezas naturais do entorno de Belo Jardim. Perfeito para quem busca trilhas leves e contato com a natureza.',
//   parceiroPremium: true,
//   pontos: [
//     {
//       ordem: 1,
//       nome: 'Ponto de Partida: Praça da Matriz',
//       detalhe: 'Encontro para pegar o transporte local ou iniciar a caminhada.',
//       poiId: null,
//       icone: <FaMapMarkerAlt />,
//     },
//     {
//       ordem: 2,
//       nome: 'Cachoeira do Bitury',
//       detalhe: 'Primeira parada. Tempo estimado de 3 horas para trilha e banho. Leve lanche!',
//       poiId: 'p1',
//       icone: <FaArrowRight />,
//     },
//     {
//       ordem: 3,
//       nome: 'Almoço: Restaurante O Caipira',
//       detalhe: 'Parada para almoço no restaurante parceiro (Comida caseira). Tempo de 1.5 horas.',
//       poiId: 'p2', 
//       icone: <FaArrowRight />,
//     },
//     {
//       ordem: 4,
//       nome: 'Bica do Bitury',
//       detalhe: 'Visita à bica para um piquenique relaxante no final da tarde. Tempo de 2 horas.',
//       poiId: 'p3',
//       icone: <FaArrowRight />,
//     },
//     {
//       ordem: 5,
//       nome: 'Encerramento: Pôr do Sol na Barragem',
//       detalhe: 'Opcional: Breve parada para fotos no mirante da Barragem do Bitury antes do retorno.',
//       poiId: 'p4',
//       icone: <FaArrowRight />,
//     },
//   ],
// };


// function DetalheRoteiro() {
//   const { id } = useParams();
//   const [roteiro, setRoteiro] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     
//     setTimeout(() => {
//       setRoteiro(mockRoteiro); 
//       setLoading(false);
//     }, 500);
//   }, [id]);

//   if (loading) {
//     return <div className="dr-loading-message">Carregando detalhes do roteiro...</div>;
//   }

//   if (!roteiro) {
//     return <div className="dr-error-message">Roteiro não encontrado.</div>;
//   }
//   const renderEstrelas = (media) => {
//     const estrelasCheias = Math.floor(media);
//     const estrelasParciais = Array(estrelasCheias).fill('★');
//     const estrelasVazias = Array(5 - estrelasCheias).fill('☆');
//     return (
//       <span className="dr-rating-stars">
//         {estrelasParciais.join('')}
//         {estrelasVazias.join('')}
//       </span>
//     );
//   };
//   
//   return (
//     <div className="dr-detalhe-roteiro-container">
//       <section className="dr-roteiro-header">
//         <div className="dr-roteiro-details-box">
//           <span className="dr-theme-tag">{roteiro.tema}</span>
//           <h1>{roteiro.titulo}</h1>
//           <p className="dr-summary">{roteiro.descricao}</p>
//           
//           <div className="dr-meta-info">
//             <p><FaClock /> **Duração:** {roteiro.duracao}</p>
//             <p><FaTag /> **Custo Médio:** {roteiro.custoMedio}</p>
//             {roteiro.parceiroPremium && <span className="dr-premium-roteiro-badge">ROTEIRO PREMIUM</span>}
//           </div>
//           
//           <div className="dr-rating-display">
//             <span className="dr-rating-value">{roteiro.mediaAvaliacao.toFixed(1)}</span>
//             {renderEstrelas(roteiro.mediaAvaliacao)}
//           </div>
//           
//           <button className="dr-cta-button-action"><FaCalendarAlt /> Salvar na Minha Agenda</button>
//         </div>
//         <div className="dr-roteiro-map-placeholder">
//           <FaRoute className="dr-map-icon" />
//           <p>Mapa Interativo do Roteiro (Futura implementação com Leaflet/Google Maps)</p>
//           <button className="dr-review-button">Ver Roteiro no Mapa</button>
//         </div>
//       </section>
//       <section className="dr-timeline-section">
//         <h2>Passos da sua Jornada</h2>
//         
//         <div className="dr-timeline">
//           {roteiro.pontos.map((ponto, index) => (
//             <div key={index} className="dr-timeline-item">
//               <div className="dr-timeline-dot">{ponto.ordem}</div>
//               <div className="dr-timeline-content">
//                 <h3>{ponto.nome}</h3>
//                 <p>{ponto.detalhe}</p>
//                 {ponto.poiId && (
//                   <Link to={`/lugares/${ponto.poiId}`} className="dr-poi-link-cta">
//                     Ver Detalhes do Local <FaArrowRight />
//                   </Link>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="dr-reviews-section-roteiro">
//         <h2>Avaliações do Roteiro</h2>
//         <div className="dr-review-summary">
//           <p>Seja o primeiro a avaliar este roteiro e ajude outros turistas!</p>
//           <button className="dr-cta-button-action">Deixar Avaliação do Roteiro</button>
//         </div>
//       </section>
//       
//     </div>
//   );
// }

// export default DetalheRoteiro;