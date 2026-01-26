// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaStar, FaMapMarkerAlt, FaClock, FaPhone, FaLink } from 'react-icons/fa'; 

// import './DetalheLugar.css'; 

// const mockLugar = {
//   id: '1',
//   nome: 'Memorial Frei Damião',
//   categoria: 'Cultural / Histórico',
//   descricao: 'Importante marco cultural e religioso de Belo Jardim, construído em homenagem ao Frei Damião. O local oferece uma visão da fé e da história local.',
//   endereco: 'Rua do Memorial, s/n, Centro',
//   coordenadas: { lat: -8.324, lng: -36.059 },
//   horario: 'Terça a Domingo, das 9h às 17h',
//   contato: '(81) 99999-0000',
//   mediaAvaliacao: 4.7,
//   totalAvaliacoes: 154,
//   fotos: [
//     { url: '/images/memorial1.jpg', alt: 'Vista externa do memorial' },
//     { url: '/images/memorial2.jpg', alt: 'Detalhe da estátua' },
//   ],
//   parceiroPremium: true,
// };

// const mockAvaliacoes = [
//   { id: 1, usuario: 'Turista SP', nota: 5, comentario: 'Lugar de paz, muito bem conservado. Vale a visita!' },
//   { id: 2, usuario: 'Morador BJ', nota: 4, comentario: 'As missas são muito bonitas. A lojinha de artesanato é ótima.' },
// ];
// // --------------------------------------------------------------------


// function DetalheLugar() {
//   const { id } = useParams();
//   const [lugar, setLugar] = useState(null);
//   const [avaliacoes, setAvaliacoes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLugar(mockLugar);
//       setAvaliacoes(mockAvaliacoes);
//       setLoading(false);
//     }, 500);
//   }, [id]);

//   if (loading) {
//     return <div className="dl-loading-message">Carregando detalhes do local...</div>;
//   }

//   if (!lugar) {
//     return <div className="dl-error-message">Local não encontrado.</div>;
//   }

//   const renderEstrelas = (media) => {
//     const estrelasCheias = Math.floor(media);
//     const estrelasParciais = Array(estrelasCheias).fill('★');
//     const estrelasVazias = Array(5 - estrelasCheias).fill('☆');
//     return (
//       <span className="dl-rating-stars">
//         {estrelasParciais.join('')}
//         {estrelasVazias.join('')}
//       </span>
//     );
//   };

//   return (
//     <div className="dl-detalhe-lugar-container">
//       <section className="dl-place-header">
//         <div className="dl-title-section">
//           <h1>{lugar.nome}</h1>
//           <p className="dl-category-tag">{lugar.categoria}</p>
//           {lugar.parceiroPremium && <span className="dl-premium-badge">PARCEIRO ROTAÊ PREMIUM</span>}
//         </div>
//         
//         <div className="dl-photo-gallery">
//           {lugar.fotos.map((foto, index) => (
//             <img 
//               key={index} 
//               src={foto.url || '/placeholder.jpg'} 
//               alt={foto.alt} 
//               className="dl-place-photo"
//             />
//           ))}
//         </div>
//       </section>

//       <section className="dl-info-section">
//         <div className="dl-rating-box">
//           <h2>Avaliação</h2>
//           <div className="dl-rating-display">
//             <span className="dl-rating-value">{lugar.mediaAvaliacao}</span>
//             {renderEstrelas(lugar.mediaAvaliacao)}
//             <p>Baseado em {lugar.totalAvaliacoes} avaliações</p>
//           </div>
//           
//           <button className="dl-cta-review-button">Deixar Minha Avaliação</button>
//         </div>

//         <div className="dl-details-box">
//           <p><FaMapMarkerAlt /> **Endereço:** {lugar.endereco}</p>
//           <p><FaClock /> **Horário:** {lugar.horario}</p>
//           <p><FaPhone /> **Contato:** {lugar.contato}</p>
//           
//           <a href={`tel:${lugar.contato}`} className="dl-cta-contact-button">
//              <FaLink /> Falar com o Local
//           </a>
//           
//           <div className="dl-mini-map-placeholder">
//              [Mini Mapa com Marcador AQUI]
//           </div>
//         </div>
//       </section>

//       <section className="dl-description-section">
//         <h2>Sobre o Local</h2>
//         <p>{lugar.descricao}</p>
//         
//         {lugar.parceiroPremium && (
//             <div className="dl-premium-content-box">
//                 <h3>Conteúdo Exclusivo Premium</h3>
//                 <p>História completa, galeria de fotos estendida e cupons de desconto (Apenas para parceiros Premium).</p>
//             </div>
//         )}
//       </section>
//       
//       <section className="dl-reviews-section">
//         <h2>Comentários Recentes</h2>
//         {avaliacoes.map(review => (
//           <div key={review.id} className="dl-review-card">
//             <p className="dl-review-user">**{review.usuario}**</p>
//             <p className="dl-review-nota">{renderEstrelas(review.nota)}</p>
//             <p className="dl-review-comentario">"{review.comentario}"</p>
//           </div>
//         ))}
//       </section>

//     </div>
//   );
// }

// export default DetalheLugar;