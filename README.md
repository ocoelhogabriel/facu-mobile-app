# Guia Turístico - App Mobile

Um aplicativo móvel desenvolvido com React Native e Expo que funciona como um guia turístico interativo, oferecendo informações sobre pontos históricos, restaurantes recomendados e atividades ao ar livre.

## 📱 Sobre o Projeto

O **Guia Turístico** é uma aplicação mobile desenvolvida como atividade acadêmica que permite aos usuários explorar diferentes categorias de pontos de interesse turístico de forma intuitiva e visualmente atraente.

## ✨ Funcionalidades

- **Pontos Históricos**: Navegue por uma lista de locais históricos importantes com suas descrições
- **Restaurantes Recomendados**: Descubra restaurantes com informações sobre tipo de cozinha, faixa de preço e descrições detalhadas
- **Atividades ao Ar Livre**: Explore opções de atividades e locais para aproveitar ao ar livre
- **Interface Moderna**: Design responsivo com tema escuro e elementos visuais atraentes
- **Navegação Intuitiva**: Sistema de navegação fluido entre as diferentes telas

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento e build
- **TypeScript**: Tipagem estática para JavaScript
- **React Navigation**: Navegação entre telas
- **NativeWind**: Estilização com Tailwind CSS para React Native
- **Firebase**: Configurado para integração futura (atualmente usando dados mock)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Aplicativo Expo Go no seu dispositivo móvel (disponível na [App Store](https://apps.apple.com/app/expo-go/id982107779) e [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent))

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/ocoelhogabriel/devMobile-atividade-facu.git
cd devMobile-atividade-facu
```

2. Instale as dependências:
```bash
npm install
```

## 💻 Como Executar

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

### Executar em Diferentes Plataformas

```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

### Usando Expo Go

1. Execute `npm start`
2. Escaneie o QR Code exibido no terminal com:
   - **Android**: Aplicativo Expo Go
   - **iOS**: Câmera nativa do dispositivo

## 📂 Estrutura do Projeto

```
├── App.tsx                          # Componente raiz da aplicação
├── assets/                          # Imagens e recursos estáticos
├── src/
│   ├── api/
│   │   └── api.ts                   # Funções para buscar dados (mock)
│   ├── components/
│   │   ├── Button.tsx               # Componente de botão
│   │   ├── Card.tsx                 # Componente de card
│   │   ├── Loading.tsx              # Componente de loading
│   │   └── ...
│   ├── config/
│   │   └── config.ts                # Configurações do Firebase
│   ├── interface/
│   │   ├── IAtividadeArLivre.ts     # Interface para atividades
│   │   ├── IPontosHistoricos.ts     # Interface para pontos históricos
│   │   └── IRestaurantes.ts         # Interface para restaurantes
│   ├── pages/
│   │   ├── appNavigation.tsx        # Configuração de navegação
│   │   ├── home.tsx                 # Tela inicial
│   │   ├── pontosHistoricosScreen.tsx
│   │   ├── restaurantesScreen.tsx
│   │   └── atividadesArLivreScreen.tsx
│   ├── styles/
│   │   ├── global.css               # Estilos globais
│   │   └── theme.ts                 # Configuração de tema
│   └── lib/
│       └── utils.ts                 # Funções utilitárias
├── package.json
└── tsconfig.json
```

## 🎨 Interfaces de Dados

### Pontos Históricos
```typescript
interface IPontosHistoricos {
  id: number;
  name: string;
  description: string;
}
```

### Restaurantes
```typescript
interface IRestaurantes {
  id: number;
  name: string;
  cuisine: string;
  priceRange: string;
  description: string;
}
```

### Atividades ao Ar Livre
```typescript
interface IAtividadeArLivre {
  id: number;
  name: string;
  description: string;
}
```

## 🔄 Estado Atual

O aplicativo está configurado com dados mock para demonstração. A integração com Firebase está preparada no arquivo `src/config/config.ts` e pode ser ativada descomentando o código em `src/api/api.ts`.

## 👨‍💻 Autor

Gabriel Coelho - [@ocoelhogabriel](https://github.com/ocoelhogabriel)

## 📝 Licença

Este projeto foi desenvolvido como atividade acadêmica.

---

⌨️ com ❤️ por [Gabriel Coelho](https://github.com/ocoelhogabriel)