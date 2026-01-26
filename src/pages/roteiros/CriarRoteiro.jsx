// import React, { useState } from 'react';
// import { FaPlus, FaTimes, FaMap, FaInfoCircle, FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
// import './CriarRoteiro.css'; 

// const mockPontos = [
//   { id: 'p1', nome: 'Memorial Frei Damião', categoria: 'Cultural', duracaoEstimada: '2' },
//   { id: 'p2', nome: 'Restaurante Sabor da Terra', categoria: 'Gastronomia', duracaoEstimada: '1.5' },
//   { id: 'p3', nome: 'Parque Ecológico do Cristo', categoria: 'Natureza', duracaoEstimada: '3' },
//   { id: 'p4', nome: 'Centro de Artesanato', categoria: 'Cultural', duracaoEstimada: '1' },
//   { id: 'p5', nome: 'Barragem do Bitury', categoria: 'Natureza', duracaoEstimada: '2.5' },
// ];

// function CriarRoteiro() {
//   const [passo, setPasso] = useState(1);
//   const [dadosRoteiro, setDadosRoteiro] = useState({
//     titulo: '',
//     descricao: '',
//     duracaoEstimada: 0,
//     pontosSelecionados: [],
//   });


//   const handleChange = (e) => {
//     setDadosRoteiro({ ...dadosRoteiro, [e.target.name]: e.target.value });
//   };

//   const adicionarPonto = (ponto) => {
//     if (!dadosRoteiro.pontosSelecionados.find(p => p.id === ponto.id)) {
//       const novosPontos = [...dadosRoteiro.pontosSelecionados, ponto];
//       const novaDuracao = novosPontos.reduce((total, p) => total + parseFloat(p.duracaoEstimada), 0);
//       
//       setDadosRoteiro({
//         ...dadosRoteiro,
//         pontosSelecionados: novosPontos,
//         duracaoEstimada: novaDuracao
//       });
//     }
//   };

//   const removerPonto = (pontoId) => {
//     const novosPontos = dadosRoteiro.pontosSelecionados.filter(p => p.id !== pontoId);
//     const novaDuracao = novosPontos.reduce((total, p) => total + parseFloat(p.duracaoEstimada), 0);
//     
//     setDadosRoteiro({
//       ...dadosRoteiro,
//       pontosSelecionados: novosPontos,
//       duracaoEstimada: novaDuracao
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (dadosRoteiro.pontosSelecionados.length === 0) {
//       alert('Por favor, adicione pelo menos um Ponto de Interesse ao seu roteiro.');
//       return;
//     }
//     console.log('Roteiro a ser salvo:', dadosRoteiro);
//     alert('Roteiro criado com sucesso! (Simulação)');
//   };

//   const Passo1 = () => (
//     <form>
//       <h2>Passo 1: Detalhes do Roteiro</h2>
//       <div className="cr-form-group">
//         <label htmlFor="titulo">Título do Roteiro</label>
//         <input
//           type="text"
//           id="titulo"
//           name="titulo"
//           value={dadosRoteiro.titulo}
//           onChange={handleChange}
//           placeholder="Ex: Minha Jornada Cultural em 1 Dia"
//           required
//           className="cr-input-field"
//         />
//       </div>
//       <div className="cr-form-group">
//         <label htmlFor="descricao">Descrição</label>
//         <textarea
//           id="descricao"
//           name="descricao"
//           value={dadosRoteiro.descricao}
//           onChange={handleChange}
//           placeholder="Conte sobre o seu roteiro, o que o torna especial e a quem ele se destina."
//           rows="4"
//           required
//           className="cr-textarea-field"
//         />
//         <div className="cr-action-group">
//           <button 
//             type="button" 
//             onClick={() => setPasso(2)} 
//             className="cr-cta-button cr-main-action" 
//             disabled={!dadosRoteiro.titulo || !dadosRoteiro.descricao}
//           >
//             Avançar para Seleção <FaMap />
//           </button>
//         </div>
//       </div>
//     </form>
//   );

//   const Passo2 = () => (
//     <div className="cr-selection-layout">
//       <h2>Passo 2: Selecione os Pontos de Interesse (POI)</h2>
//       <div className="cr-poi-list cr-available-pois">
//         <h3>Pontos em Belo Jardim</h3>
//         {mockPontos.map(ponto => (
//           <div key={ponto.id} className="cr-poi-card cr-available">
//             <div className="cr-poi-info">
//               <span className="cr-poi-name">{ponto.nome}</span>
//               <span className="cr-poi-meta">({ponto.categoria} - {ponto.duracaoEstimada}h)</span>
//             </div>
//             <button 
//               type="button" 
//               onClick={() => adicionarPonto(ponto)} 
//               className="cr-add-button"
//               disabled={dadosRoteiro.pontosSelecionados.find(p => p.id === ponto.id)}
//             >
//               {dadosRoteiro.pontosSelecionados.find(p => p.id === ponto.id) ? 'Adicionado' : <FaPlus />}
//             </button>
//           </div>
//         ))}
//         <button 
//           type="button" 
//           onClick={() => setPasso(1)} 
//           className="cr-back-button cr-side-action"
//         >
//           Voltar
//         </button>
//       </div>
//       <div className="cr-poi-list cr-selected-pois">
//         <h3>Seu Roteiro ({dadosRoteiro.pontosSelecionados.length} Pontos)</h3>
//         {dadosRoteiro.pontosSelecionados.length === 0 ? (
//           <p className="cr-empty-message">Adicione pontos da lista ao lado.</p>
//         ) : (
//           <>
//             <p className="cr-duration-summary">
//               **Duração Total Estimada:** {dadosRoteiro.duracaoEstimada.toFixed(1)} horas
//             </p>
//             {dadosRoteiro.pontosSelecionados.map((ponto, index) => (
//               <div key={ponto.id} className="cr-poi-card cr-selected">
//                 <span className="cr-poi-order">{index + 1}</span>
//                 <div className="cr-poi-info">
//                   <span className="cr-poi-name">{ponto.nome}</span>
//                 </div>
//                 <button 
//                   type="button" 
//                   onClick={() => removerPonto(ponto.id)} 
//                   className="cr-remove-button"
//                 >
//                   <FaTimes />
//                 </button>
//               </div>
//             ))}
//           </>
//         )}
//         <button 
//           type="button" 
//           onClick={() => setPasso(3)} 
//           className="cr-cta-button cr-main-action" 
//           disabled={dadosRoteiro.pontosSelecionados.length === 0}
//         >
//           Avançar para Revisão <FaCheckCircle />
//         </button>
//       </div>
//     </div>
//   );

//   const Passo3 = () => (
//     <div className="cr-review-container">
//       <h2>Passo 3: Revisão e Publicação</h2>

//       <div className="cr-review-section">
//         <h3><FaInfoCircle /> Detalhes Gerais</h3>
//         <p><strong>Título:</strong> {dadosRoteiro.titulo}</p>
//         <p><strong>Descrição:</strong> {dadosRoteiro.descricao}</p>
//         <p><strong>Duração Estimada:</strong> {dadosRoteiro.duracaoEstimada.toFixed(1)} horas</p>
//       </div>

//       <div className="cr-review-section">
//         <h3><FaMap /> Pontos Incluídos ({dadosRoteiro.pontosSelecionados.length})</h3>
//         <ol className="cr-review-poi-list">
//           {dadosRoteiro.pontosSelecionados.map((ponto, index) => (
//             <li key={ponto.id}>
//               {ponto.nome} ({ponto.categoria})
//             </li>
//           ))}
//         </ol>
//       </div>
//       
//       <div className="cr-review-actions">
//         <button type="button" onClick={() => setPasso(2)} className="cr-back-button cr-side-action">
//           Voltar e Editar
//         </button>
//         <button type="button" onClick={handleSubmit} className="cr-cta-button cr-publish-button">
//           <FaCheckCircle /> Publicar Roteiro
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="cr-criar-roteiro-container">
//       <div className="cr-header-passos">
//         <div className={`cr-step ${passo === 1 ? 'cr-active' : ''}`}>1. Detalhes</div>
//         <div className={`cr-step ${passo === 2 ? 'cr-active' : ''}`}>2. Seleção de Pontos</div>
//         <div className={`cr-step ${passo === 3 ? 'cr-active' : ''}`}>3. Revisão</div>
//       </div>

//       {passo === 1 && <Passo1 />}
//       {passo === 2 && <Passo2 />}
//       {passo === 3 && <Passo3 />}
//     </div>
//   );
// }

// export default CriarRoteiro;