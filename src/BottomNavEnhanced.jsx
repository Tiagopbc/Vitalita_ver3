/**
 * BottomNavEnhanced.jsx
 * Barra de navegação inferior aprimorada para mobile com FAB (Botão de Ação Flutuante) animado.
 * Gerencia o estado da aba ativa e fornece feedback visual para interações de toque.
 */
import React, { useState } from 'react';
import { Home, Dumbbell, Plus, History, User, Users } from 'lucide-react';

export function BottomNavEnhanced({ activeTab, onTabChange }) {
    const [pressedTab, setPressedTab] = useState(null);

    const tabs = [
        {
            id: 'home',
            label: 'Home',
            icon: Home
        },
        {
            id: 'workouts',
            label: 'Treinos',
            icon: Dumbbell
        },
        {
            id: 'new',
            label: 'Novo',
            icon: Plus,
            isSpecial: true
        },
        {
            id: 'history',
            label: 'Histórico',
            icon: History
        },
        {
            id: 'profile',
            label: 'Perfil',
            icon: User
        }
    ];



    const handlePress = (tabId) => {
        setPressedTab(tabId);
        setTimeout(() => setPressedTab(null), 150);
        onTabChange(tabId);
    };

    return (
        <nav
            className="pointer-events-auto mb-6 mx-4"
            style={{
                position: 'relative',
                zIndex: 100,
            }}
        >
            <div
                className="flex items-center gap-1 p-1.5 rounded-[32px] border border-white/10 relative overflow-hidden backdrop-blur-3xl"
                style={{
                    background: 'rgba(12, 12, 14, 0.45)',
                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                }}
            >
                {/* Noise Texture Overlay for authenticity */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    const isPressed = pressedTab === tab.id;

                    // ========== BOTÃO CENTRAL FAB (Destaque) ==========
                    if (tab.isSpecial) {
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handlePress(tab.id)}
                                onTouchStart={() => setPressedTab(tab.id)}
                                onTouchEnd={() => setPressedTab(null)}
                                className="relative group mx-1"
                                style={{
                                    WebkitTapHighlightColor: 'transparent',
                                    outline: 'none'
                                }}
                                aria-label={tab.label}
                            >
                                <div
                                    className="flex items-center justify-center transition-all duration-300 relative z-10"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '24px',
                                        background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                                        boxShadow: isPressed
                                            ? '0 2px 10px rgba(6,182,212,0.3)'
                                            : '0 8px 20px rgba(6,182,212,0.4)',
                                        transform: isPressed ? 'scale(0.92)' : 'scale(1)',
                                        animation: 'fab-pulse 3s infinite'
                                    }}
                                >
                                    <Plus size={24} className="text-white" strokeWidth={3} />
                                </div>
                            </button>
                        );
                    }

                    // ========== ITENS NORMAIS ==========
                    return (
                        <button
                            key={tab.id}
                            onClick={() => handlePress(tab.id)}
                            onTouchStart={() => setPressedTab(tab.id)}
                            onTouchEnd={() => setPressedTab(null)}
                            className="relative flex flex-col items-center justify-center px-4 py-2 transition-all duration-300"
                            style={{
                                WebkitTapHighlightColor: 'transparent',
                                outline: 'none',
                                opacity: isActive ? 1 : 0.5,
                                transform: isPressed ? 'scale(0.95)' : 'scale(1)',
                                minWidth: '64px'
                            }}
                        >
                            {/* Active background pill */}
                            {isActive && (
                                <div
                                    className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 z-0 transition-all duration-300"
                                    style={{
                                        animation: 'fade-in 0.2s ease-out'
                                    }}
                                />
                            )}

                            <div className="relative z-10 flex flex-col items-center gap-1">
                                <Icon
                                    size={22}
                                    strokeWidth={isActive ? 2.5 : 2}
                                    className={`transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-300'}`}
                                />
                                <span className={`text-[10px] font-medium transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`}>
                                    {tab.label}
                                </span>
                            </div>

                            {/* Badge */}
                            {tab.badge > 0 && (
                                <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse" />
                            )}
                        </button>
                    );
                })}
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }

                 @keyframes fab-pulse {
                    0% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(6, 182, 212, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
                }
            `}</style>
        </nav>
    );
}
