# Vitalità

<div align="center">

![Vitalità Banner](https://img.shields.io/badge/Vitalità-Fitness_Tracking-blue?style=for-the-badge&logo=activity)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.0-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**O seu diário inteligente de treinos, evolução e performance.**

</div>

---

## 📖 Sobre o Projeto

O **Vitalità** é uma aplicação web progressiva (PWA) desenvolvida para praticantes de musculação que desejam registrar seus treinos com precisão, acompanhar sua evolução de cargas e manter a constância através de gamificação.

Diferente de apps genéricos, o Vitalità foi construído com foco na **experiência do usuário (UX)**, oferecendo uma interface limpa, moderna (estética "Dark Premium") e responsiva, que se comporta como um app nativo no celular.

### ✨ Diferenciais
- **Foco na Execução**: Interface otimizada para uso durante o treino, com inputs rápidos e cronômetro integrado.
- **Histórico Real**: Acompanhe a progressão de carga de cada exercício individualmente.
- **Gamificação**: Sistema de "Streaks" (sequência de dias), metas semanais e níveis (Bronze, Prata, Ouro, Diamante) para manter a motivação.
- **Biblioteca de Métodos**: Guia integrado explicando como executar técnicas avançadas (Drop-set, Rest-pause, etc.).

---

## 🚀 Funcionalidades Principais

### 🏋️‍♂️ Gestão de Treinos
- Criação e edição de rotinas de treino personalizadas.
- Registro detalhado de séries, repetições, carga e observações.
- Checkbox de conclusão para cada exercício.
- Timer de descanso inteligente.

### 📊 Dashboard e Analytics
- **Visão Geral**: Resumo da semana, último treino realizado e sugestão do próximo.
- **Gráficos de Evolução**: Visualização clara do progresso de força ao longo do tempo.
- **Streak & Weekly Goal**: Componente híbrido que monitora sua frequência semanal e sequência de treinos.

### 📚 Educacional
- **MethodModal**: Explicações detalhadas sobre métodos de intensificação (ex: Bi-set, Cluster Set) acessíveis diretamente na tela de treino.

### 🎨 Design System & UI
- **Tema Escuro Profundo**: Paleta de cores contrastante (Slate/Cyan) ideal para ambientes de academia.
- **Componentes Exclusivos**: Botões com efeito "Ripple", Cards com efeito Glassmorphism, Inputs animados.
- **Responsividade Total**: Otimizado para Mobile-First.

---

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza as versões mais recentes das principais ferramentas do ecossistema React:

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/) (PostCSS)
- **Backend & Auth**: [Firebase](https://firebase.google.com/) (Firestore, Authentication)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Linter**: ESLint (configuração Flat Config)

---

## ⚙️ Instalação e Configuração

Para rodar o Vitalità localmente, siga os passos abaixo:

### Pré-requisitos
- Node.js (v18+)
- Gerenciador de pacotes (npm, yarn ou pnpm)

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Tiagopbc/Vitalita_ver3.git
   cd Vitalita_ver3
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente**
   Crie um arquivo `.env` na raiz do projeto com suas credenciais do Firebase:
   ```env
   VITE_FIREBASE_API_KEY=sua_api_key
   VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=seu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=seu_bucket.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
   VITE_FIREBASE_APP_ID=seu_app_id
   ```

4. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   O app estará disponível em `http://localhost:5173`.

---

## 📱 Como usar no Mobile

O Vitalità foi desenhado para ser instalado como um PWA:

1. Acesse a aplicação pelo navegador do celular (Chrome/Safari).
2. Toque em **Compartilhar** (iOS) ou **Menu** (Android).
3. Selecione **"Adicionar à Tela de Início"**.
4. Abra o app pelo ícone criado para uma experiência em tela cheia (sem barras do navegador).

---

## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── design-system/  # Botões, Inputs, Cards (UI Kit)
│   ├── execution/      # Componentes específicos da tela de treino
│   └── ...
├── data/              # Dados estáticos (ex: métodos de treino)
├── pages/             # Páginas da aplicação (Rotas)
├── App.jsx            # Componente raiz e roteamento
├── main.jsx           # Ponto de entrada
├── firebaseConfig.js  # Configuração do Firebase
└── ...
```

---

## 📄 Licença

Este projeto é de uso pessoal e educacional. Sinta-se à vontade para estudar o código e adaptar para suas necessidades.

---

<div align="center">

Desenvolvido com 💪 e ☕ por **Tiago Cavalcanti**

</div>
