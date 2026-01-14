import React, { forwardRef } from 'react';
import { Trophy, Clock, Dumbbell, Activity, Calendar } from 'lucide-react';

export const ShareableWorkoutCard = forwardRef(({ session, userName }, ref) => {
    if (!session) return null;

    // Format date: "Sábado, 12 de Jan"
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
        day: '2-digit',
        month: 'short'
    }).format(new Date()).replace('.', '');

    // Background is a dark gradient
    return (
        <div
            ref={ref}
            id="share-card"
            ref={ref}
            id="share-card"
            // PURE INLINE STYLES TO AVOID ANY TAILWIND v4 OKLAB/OKLCH LEAKAGE
            style={{
                position: 'fixed',
                left: '-9999px',
                top: 0,
                width: '400px',
                height: '711px',
                backgroundColor: '#020617',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                fontFamily: 'sans-serif',
                color: '#ffffff',
                padding: '2rem',
                zIndex: -50,
                opacity: 1,
                pointerEvents: 'none'
            }}
        // w=400, h=711 => 9:16 approx
        >
            {/* Background Texture / Gradients */}
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] blur-[100px] rounded-full" style={{ background: 'rgba(6, 182, 212, 0.1)' }} />
            <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[50%] blur-[90px] rounded-full" style={{ background: 'rgba(37, 99, 235, 0.1)' }} />

            {/* HEADER */}
            <div className="relative z-10 grid gap-2">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <Activity size={18} style={{ color: '#22d3ee' }} />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#22d3ee' }}>Vitalita App</span>
                </div>
                <h1 className="text-5xl font-black italic tracking-tighter leading-none" style={{ color: '#ffffff' }}>
                    TREINO<br />
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #22d3ee, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>CONCLUÍDO</span>
                </h1>
                <p className="text-lg font-medium mt-2 capitalize" style={{ color: '#94a3b8' }}>{formattedDate}</p>
            </div>

            {/* MAIN CONTENT - STATS */}
            <div className="relative z-10 flex flex-col gap-6 my-auto">
                {/* Big Stat: Workout Name */}
                <div className="backdrop-blur-md rounded-2xl p-6 shadow-xl" style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', borderColor: 'rgba(30, 41, 59, 0.6)', borderWidth: '1px', borderStyle: 'solid' }}>
                    <span className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: '#64748b' }}>Rotina</span>
                    <h2 className="text-2xl font-bold" style={{ color: '#ffffff' }}>{session.templateName || "Treino Livre"}</h2>
                </div>

                {/* Grid Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="backdrop-blur-md rounded-2xl p-5" style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', borderColor: 'rgba(30, 41, 59, 0.4)', borderWidth: '1px', borderStyle: 'solid' }}>
                        <Clock size={24} style={{ color: '#fbbf24' }} className="mb-3" />
                        <span className="text-3xl font-bold block" style={{ color: '#ffffff' }}>{session.duration}</span>
                        <span className="text-xs font-bold uppercase" style={{ color: '#64748b' }}>Duração</span>
                    </div>

                    <div className="backdrop-blur-md rounded-2xl p-5" style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', borderColor: 'rgba(30, 41, 59, 0.4)', borderWidth: '1px', borderStyle: 'solid' }}>
                        <Dumbbell size={24} style={{ color: '#22d3ee' }} className="mb-3" />
                        <span className="text-3xl font-bold block" style={{ color: '#ffffff' }}>{session.exercisesCount}</span>
                        <span className="text-xs font-bold uppercase" style={{ color: '#64748b' }}>Exercícios</span>
                    </div>

                    {session.volumeLoad > 0 && (
                        <div className="col-span-2 backdrop-blur-md rounded-2xl p-5 flex items-center justify-between" style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', borderColor: 'rgba(30, 41, 59, 0.4)', borderWidth: '1px', borderStyle: 'solid' }}>
                            <div>
                                <span className="text-xs font-bold uppercase block" style={{ color: '#64748b' }}>Carga Total/Volume</span>
                                <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>{(session.volumeLoad / 1000).toFixed(1)} <span className="text-sm font-normal" style={{ color: '#94a3b8' }}>toneladas</span></span>
                            </div>
                            <Trophy size={32} style={{ color: '#eab308' }} className="opacity-80" />
                        </div>
                    )}
                </div>
            </div>

            {/* FOOTER */}
            <div className="relative z-10" style={{ borderTop: '1px solid rgba(30, 41, 59, 0.5)', paddingTop: '1.5rem' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: 'rgba(22, 78, 99, 0.3)', borderColor: 'rgba(6, 182, 212, 0.3)', borderWidth: '1px', borderStyle: 'solid', color: '#22d3ee' }}>
                        {userName ? userName.charAt(0).toUpperCase() : 'V'}
                    </div>
                    <div>
                        <p className="text-sm font-bold leading-tight" style={{ color: '#ffffff' }}>{userName || 'Atleta Vitalita'}</p>
                        <p className="text-xs font-medium" style={{ color: '#22d3ee' }}>Keep moving.</p>
                    </div>
                </div>
            </div>
        </div>
    );
});
