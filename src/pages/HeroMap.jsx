import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './HeroMap.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const pontosTuristicos = [
  // --- NATUREZA E LAZER ---
  { id: 1, nome: "Barragem Tabocas", coords: [-8.3099, -36.4263], imagem: require("../images/Barragem_Tabocas.jpg"), desc: "Importante reserva de água e beleza natural da região." },
  { id: 2, nome: "Espalhadeira de Taboca do Monte", coords: [-8.2511, -36.3927], imagem: require("../images/Espalhadeira.jpg"), desc: "Lugar perfeito para contato com a natureza e lazer em família." },
  { id: 3, nome: "Poço do Macaco", coords: [-8.2303, -36.3417], imagem: require("../images/poço_do_macaco.jpg"), desc: "Cachoeiras e trilhas no coração da Serra do Vento." },
  { id: 17, nome: "Cristo Redentor", coords: [-8.2246, -36.3734], imagem: require("../images/Cristo_Redentor.jpg"), desc: "Vista panorâmica incrível da cidade e cartão postal." },
  { id: 18, nome: "Cachoeira do Bitury", coords: [-8.2671, -36.4343], imagem: require("../images/cachoeira.jpg"), desc: "Uma linda queda d'água, excelente para banho, piqueniques e lazer em família." },
  { id: 19, nome: "Poço Rebôlo", coords: [-8.2570, -36.4251], imagem: require("../images/poço_rebolo.jpg"), desc: "Um dos tesouros naturais escondidos da região, ideal para quem busca tranquilidade." },
  
  // --- HISTÓRIA E CULTURA ---
  { id: 4, nome: "Igreja Matriz N. Sra. da Conceição", coords: [-8.3355, -36.4235], imagem: require("../images/igreja.jpg"), desc: "Padroeira da cidade, uma verdadeira joia da arquitetura local." },
  { id: 5, nome: "Estação Ferroviária", coords: [-8.3377, -36.4253], imagem: require("../images/estação1.jpg"), desc: "Marco histórico do desenvolvimento de Belo Jardim." },
  { id: 6, nome: "Instituto Conceição Moura", coords: [-8.3348, -36.4236], imagem: require("../images/Instituto_conceição.jpg"), desc: "Centro de cultura, educação e preservação da memória local." },
  { id: 7, nome: "Cine Teatro Cultura", coords: [-8.33490, -36.42403], imagem: require("../images/cine.jpg"), desc: "Palco de filmes, shows e teatro na Terra dos Músicos." },
  
  // --- PRAÇAS E PARQUES ---
  { id: 8, nome: "Calçadão", coords: [-8.33562, -36.42343], imagem: require("../images/calçadão1.jpg"), desc: "Ponto de comércio e encontro no centro da cidade." },
  { id: 9, nome: "Praça N. Sra. da Conceição", coords: [-8.33571, -36.42377], imagem: require("../images/carrossel3.jpg"), desc: "Espaço de lazer e arborizado logo em frente à Igreja Matriz." },
  { id: 10, nome: "Praça Des. João Paes", coords: [-8.3371, -36.4251], imagem: require("../images/praça1.jpg"), desc: "Praça central próxima da estação rodoviária." },
  { id: 11, nome: "Espaço Conceição Moura", coords: [-8.33382, -36.42393], imagem: require("../images/espaço.jpg"), desc: "Espaço de lazer integrado ao centro cultural." },
  { id: 12, nome: "Praça dos Eucaliptos", coords: [-8.3376, -36.4197], imagem: require("../images/eucalipto.jpg"), desc: "Espaço de lazer no bairro Tancredo Neves." },
  { id: 13, nome: "Parque do Bambu", coords: [-8.3331, -36.4253], imagem: require("../images/Parque_do_Bambu.jpg"), desc: "Área de lazer com pista de caminhada e contato com a natureza." },
  
  // --- MONUMENTOS ---
  { id: 14, nome: "Centro de Artesanato Tareco e Mariola", coords: [-8.3430, -36.4222], imagem: require("../images/artesanato.jpg"), desc: "Venda de artesanatos locais e produtos típicos da região." },
  { id: 15, nome: "Letreiro de Entrada", coords: [-8.34528, -36.43327], imagem: require("../images/letreiro1.jpg"), desc: "Famoso letreiro 'Belo Jardim' na entrada principal da cidade." },
  { id: 16, nome: "Letreiro (Rodoviária)", coords: [-8.3435, -36.4200], imagem: require("../images/carrossel1.jpeg"), desc: "Letreiro da cidade localizado próximo ao Terminal Rodoviário." },
];

const COORDENADAS_GERAIS = [-8.3344, -36.4236];

const CameraController = ({ activeSpot }) => {
  const map = useMap();
  useEffect(() => {
    if (activeSpot) {
      const targetLatLng = L.latLng(activeSpot.coords);
      const targetZoom = 16;
      const mapWidth = map.getSize().x;
      const offsetX = mapWidth > 768 ? mapWidth / 4 : 0; 
      const targetPoint = map.project(targetLatLng, targetZoom);
      const newCenterPoint = L.point(targetPoint.x - offsetX, targetPoint.y);
      const newCenterLatLng = map.unproject(newCenterPoint, targetZoom);
      map.flyTo(newCenterLatLng, targetZoom, { duration: 2.5 });
    } else {
      map.flyTo(COORDENADAS_GERAIS, 13, { duration: 2.5 });
    }
  }, [activeSpot, map]);
  return null;
};

const InteractionListener = ({ onInteract }) => {
  useMapEvents({
    dragstart: onInteract,
    mousedown: onInteract,
    touchstart: onInteract,
    wheel: onInteract
  });
  return null;
};

function HeroMap() {
  const [activeSpot, setActiveSpot] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    let initialTimeout;
    if (isAutoPlaying) {
      let currentIndex = -1; 
      const moverParaProximo = () => {
        currentIndex++;
        if (currentIndex >= pontosTuristicos.length) {
          currentIndex = -1;
          setActiveSpot(null);
        } else {
          setActiveSpot(pontosTuristicos[currentIndex]);
        }
      };
      initialTimeout = setTimeout(() => {
        moverParaProximo();
        interval = setInterval(moverParaProximo, 5000);
      }, 1500);
    }
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const handleUserInteraction = () => setIsAutoPlaying(false);

  return (
    <div className="hero-map-wrapper">
      <div className="hero-overlay-text">
        <h1>Venha conhecer <br/> <span>Belo Jardim</span></h1>
        <p>Explore o mapa e descubra nossos destinos!</p>
        
        {activeSpot && (
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${activeSpot.coords[0]},${activeSpot.coords[1]}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="active-spot-card-link"
          >
            <div className="active-spot-card">
              <img 
                src={activeSpot.imagem} 
                alt={activeSpot.nome} 
                className="spot-card-image" 
                onError={(e) => { e.target.src = "https://via.placeholder.com/140?text=RotaÊ+BJ" }}
              />
              <div className="spot-card-info">
                <h3>{activeSpot.nome}</h3>
                <p>{activeSpot.desc}</p>
                <span className="maps-hint">Ver no Google Maps 📍</span>
              </div>
            </div>
          </a>
        )}
      </div>

      <MapContainer 
        center={COORDENADAS_GERAIS} 
        zoom={13} 
        zoomControl={false}
        className="hero-map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        <CameraController activeSpot={activeSpot} />
        <InteractionListener onInteract={handleUserInteraction} />

        {pontosTuristicos.map((ponto) => (
          <Marker 
            key={ponto.id} 
            position={ponto.coords}
            eventHandlers={{
                click: () => {
                    setActiveSpot(ponto);
                    setIsAutoPlaying(false);
                },
            }}
          >
            <Popup>
              <strong>{ponto.nome}</strong><br/>
              {ponto.desc}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="hero-map-gradient-bottom"></div>
    </div>
  );
}

export default HeroMap;