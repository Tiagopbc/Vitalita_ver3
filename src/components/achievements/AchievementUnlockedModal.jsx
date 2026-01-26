import React, { useRef, useState } from 'react';
import { Share2, X, Trophy, Download } from 'lucide-react';
import { Button } from '../design-system/Button';
import html2canvas from 'html2canvas';

export function AchievementUnlockedModal({ achievements, onClose }) {
    const [sharing, setSharing] = useState(false);
    const cardRef = useRef(null);

    // Se houver mais de uma, mostramos a primeira ou uma lista?
    // Vamos focar na primeira/principal para o cartão de compartilhamento.
    const mainAchievement = achievements[0];

    const handleShare = async () => {
        if (!cardRef.current) return;
        setSharing(true);
        try {
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: '#020617',
                scale: 3, // Alta qualidade
                useCORS: true
            });

            canvas.toBlob(async (blob) => {
                if (!blob) return;
                const file = new File([blob], 'conquista_vitalita.png', { type: 'image/png' });

                if (navigator.share && navigator.canShare({ files: [file] })) {
                    await navigator.share({
                        title: 'Nova Conquista - Vitalità',
                        text: `Desbloqueei a conquista "${mainAchievement.title}" no Vitalità! 🏆`,
                        files: [file]
                    });
                } else {
                    // Fallback download
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'conquista.png';
                    a.click();
                    URL.revokeObjectURL(url);
                }
                setSharing(false);
            }, 'image/png');
        } catch (err) {
            console.error(err);
            setSharing(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
            <div className="w-full max-w-sm flex flex-col items-center">

                {/* --- CARTÃO COMPARTILHÁVEL --- */}
                <div
                    ref={cardRef}
                    className="relative w-full aspect-[4/5] bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-900 border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden mb-8"
                >
                    {/* Efeitos de Fundo */}
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    {/* Ícone Glorioso */}
                    <div className="relative mb-8 group">
                        <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-40 animate-pulse" />
                        <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-300 to-amber-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.4)] border-4 border-yellow-200/20 z-10">
                            <Trophy size={48} className="text-white drop-shadow-md" strokeWidth={2.5} />
                        </div>
                        {/* Partículas CSS (Opcional, simplificado aqui) */}
                    </div>

                    <h3 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em] mb-3 drop-shadow-sm">
                        Nova Conquista
                    </h3>

                    <h1 className="text-3xl font-black text-white mb-4 leading-tight">
                        {mainAchievement.title}
                    </h1>

                    <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] mb-8 font-medium">
                        {mainAchievement.description}
                    </p>

                    {/* Footer do Cartão */}
                    <div className="mt-auto flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest border-t border-white/5 pt-6 w-full justify-center">
                        <div className="w-4 h-4 rounded bg-cyan-500 flex items-center justify-center text-black font-black text-[8px]">V</div>
                        Vitalità Pro
                    </div>
                </div>

                {/* --- AÇÕES --- */}
                <div className="flex flex-col w-full gap-3 animate-in slide-in-from-bottom-4 duration-500 delay-150">
                    <Button
                        onClick={handleShare}
                        className="w-full h-14 bg-white hover:bg-slate-200 text-slate-900 font-bold rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] text-sm tracking-wide uppercase flex items-center justify-center gap-2"
                        disabled={sharing}
                    >
                        {sharing ? 'Gerando...' : (
                            <>
                                <Share2 size={20} />
                                Compartilhar
                            </>
                        )}
                    </Button>

                    <button
                        onClick={onClose}
                        className="w-full h-12 text-slate-400 font-bold uppercase tracking-wider text-xs hover:text-white transition-colors"
                    >
                        Continuar
                    </button>
                </div>

            </div>
        </div>
    );
}
