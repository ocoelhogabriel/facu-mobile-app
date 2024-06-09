// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '@/config/config';
// import { IPontosHistoricos } from '@/interface/IPontosHistoricos';
// import { IAtividadeArLivre } from '@/interface/IAtividadeArLivre';
// import { IRestaurantes } from '@/interface/IRestaurantes';

// export const getPontosHistoricos = async (): Promise<IPontosHistoricos[]> => {
//   const querySnapshot = await getDocs(collection(db, 'pontosHistoricos'));
//   return querySnapshot.docs.map(doc => doc.data() as IPontosHistoricos);
// };

// export const getRestaurantes = async (): Promise<IRestaurantes[]> => {
//   const querySnapshot = await getDocs(collection(db, 'restaurantesRecomendados'));
//   return querySnapshot.docs.map(doc => doc.data() as IRestaurantes);
// };

// export const getAtividades = async (): Promise<IAtividadeArLivre[]> => {
//   const querySnapshot = await getDocs(collection(db, 'atividadeArLivre'));
//   return querySnapshot.docs.map(doc => doc.data() as IAtividadeArLivre);
// };

import { IPontosHistoricos } from '@/interface/IPontosHistoricos';
import { IAtividadeArLivre } from '@/interface/IAtividadeArLivre';
import { IRestaurantes } from '@/interface/IRestaurantes';

const pontosHistoricosMock: IPontosHistoricos[] = [
  {
    id: 1,
    name: "Museu de Arte",
    description: "Um dos museus mais famosos da cidade."
  },
  {
    id: 2,
    name: "Monumento Histórico",
    description: "Um monumento importante que marca a história da cidade."
  }
];

const restaurantesMock: IRestaurantes[] = [
  {
    id: 1,
    name: "Restaurante Italiano",
    cuisine: "Italiana",
    priceRange: "$$",
    description: "Oferece autêntica culinária italiana."
  },
  {
    id: 2,
    name: "Churrascaria Brasileira",
    cuisine: "Brasileira",
    priceRange: "$$$",
    description: "Especialidade em churrasco brasileiro."
  }
];

const atividadesMock: IAtividadeArLivre[] = [
  {
    id: 1,
    name: "Trilha na Montanha",
    description: "Uma trilha desafiadora com vistas deslumbrantes."
  },
  {
    id: 2,
    name: "Parque Central",
    description: "Um parque grande com muitas atividades ao ar livre."
  }
];

export const getPontosHistoricos = async (): Promise<IPontosHistoricos[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pontosHistoricosMock);
    }, 1000);
  });
};

export const getRestaurantes = async (): Promise<IRestaurantes[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(restaurantesMock);
    }, 1000);
  });
};

export const getAtividades = async (): Promise<IAtividadeArLivre[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(atividadesMock);
    }, 1000);
  });
};
