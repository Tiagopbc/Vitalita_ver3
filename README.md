# Vitalità

<div align="center">

![Vitalità Banner](https://img.shields.io/badge/Vitalità-Fitness_Tracking-blue?style=for-the-badge&logo=activity)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.0-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**O seu diário inteligente de treinos, evolução e performance.**

</div>

---

## 📖 Sobre o Projeto

O **Vitalità** é uma aplicação web progressiva (PWA) de alta performance, desenvolvida para entusiastas e profissionais de musculação. Mais do que um simples bloco de notas digital, o Vitalità é um ecossistema completo que une o registro preciso de treinos com ferramentas avançadas de gestão para Personal Trainers.

Com um design **"Dark Premium"** focado na usabilidade em ambientes de academia (modo noturno nativo, alto contraste), o app oferece uma experiência fluida, responsiva e engajadora através de elementos de gamificação.

### ✨ Diferenciais
- **Foco Absoluto na Execução**: Interface "Bubble" para contagem de séries, timer de descanso inteligente e inputs rápidos.
- **Ecossistema Aluno-Treinador**: Funcionalidades dedicadas para Personal Trainers gerenciarem seus alunos, prescreverem treinos e acompanharem o progresso remotamente.
- **Gamificação Real**: Sistema de Streaks, níveis de evolução (Bronze a Diamante) e metas semanais para combater a evasão nos treinos.
- **PWA First**: Instale como aplicativo nativo no iOS e Android, com suporte a funcionamento offline (em breve).

---

## 🚀 Funcionalidades

### 👤 Para Alunos (Atletas)

#### 🏋️‍♂️ Execução e Registro
- **Smart Tracking**: Registro de séries com ajuste rápido de carga e repetições.
- **Timer Automático**: Cronômetro de descanso que inicia automaticamente ao finalizar uma série.
- **Biblioteca de Métodos**: Popups explicativos para técnicas avançadas (Drop-set, Rest-pause, GVT, etc.).
- **Histórico Detalhado**: Visualização da evolução de carga e volume para cada exercício.

#### 📊 Dashboard Pessoal
- **Progressão Visual**: Gráficos de volume de carga e consistência.
- **Streak Weekly Goal**: Widget híbrido para monitorar a frequência semanal.
- **Sugestão Inteligente**: O app sugere automaticamente o próximo treino da sua rotação.

---

### 🎓 Para Personal Trainers

#### 👥 Gestão de Alunos
- **Painel do Treinador**: Visão geral de todos os alunos vinculados.
- **Sistema de Convites**: Gere códigos únicos para vincular novos alunos à sua conta.
- **Prescrição Remota**: Crie, edite e atribua fichas de treino diretamente para o perfil do aluno.
- **Monitoramento**: Acompanhe a frequência e o desempenho dos seus alunos em tempo real.
- **Ações Rápidas**: Copie treinos entre alunos para agilizar a montagem de periodizações.

---

## 🛠️ Tecnologias Utilizadas

Este projeto está na vanguarda do desenvolvimento web, utilizando as versões mais recentes das principais bibliotecas:

- **Core**: [React 19](https://react.dev/)
- **Build & Tooling**: [Vite 7](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/) (Com PostCSS)
- **Backend & Auth**: [Firebase](https://firebase.google.com/) (Firestore V3, Auth)
- **Animações**: [Motion](https://motion.dev/) (antigo Framer Motion)
- **Visualização de Dados**: [Recharts](https://recharts.org/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Utilitários**: `canvas-confetti` (celebrações), `html2canvas` (compartilhamento).

---

## ⚙️ Instalação e Configuração

Para rodar o Vitalità localmente, siga os passos abaixo:

### Pré-requisitos
- Node.js (v18 ou superior)
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

## 📱 Como usar no Mobile (PWA)

O Vitalità foi desenhado para oferecer a melhor experiência quando instalado:

1. Acesse a aplicação `https://vitalita-app.vercel.app/` pelo navegador do celular.
2. **iOS (Safari)**: Toque em "Compartilhar" e selecione **"Adicionar à Tela de Início"**.
3. **Android (Chrome)**: Toque no Menu (três pontos) e selecione **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.
4. Abra o app pelo ícone criado para uma experiência imersiva em tela cheia.

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React modularizados
│   ├── design-system/   # UI Kit (Botões, Inputs, Cards Glassmorphism)
│   ├── execution/       # Widgets da tela de execução de treino
│   └── ...
├── data/                # Dados estáticos (Métodos de treino, Mocks)
├── pages/               # Páginas da aplicação (Rotas)
│   ├── TrainerDashboard.jsx # Painel administrativo do Personal
│   ├── WorkoutExecution.jsx # Core da experiência de treino
│   └── ...
├── services/            # Camada de abstração do Firebase
├── utils/               # Funções auxiliares e formatadores
├── App.jsx              # Configuração de rotas e layout base
└── main.jsx             # Entry point
```

---

## 📄 Licença

Este projeto é desenvolvido e mantido por **Tiago Cavalcanti**.
A plataforma é de uso proprietário, mas o código está aberto para fins de estudo e portfólio.

---

<div align="center">

Desenvolvido com 💪, 🧠 e muito ☕

</div>
