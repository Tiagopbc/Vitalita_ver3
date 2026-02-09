// src/firebaseDb.js
/**
 * Inicialização isolada do Firestore + persistência offline.
 * Carregado sob demanda para reduzir JS inicial.
 */
import { app } from "./firebaseApp";

let firestorePromise;
let dbPromise;

export function loadFirestore() {
    if (!firestorePromise) {
        firestorePromise = import('firebase/firestore');
    }
    return firestorePromise;
}

export async function getDb() {
    if (!dbPromise) {
        dbPromise = (async () => {
            const { getFirestore, enableIndexedDbPersistence } = await loadFirestore();
            const db = getFirestore(app);
            // Habilitar Persistência Offline
            enableIndexedDbPersistence(db).catch((err) => {
                if (err.code === 'failed-precondition') {
                    console.warn('Falha na persistência: Múltiplas abas abertas');
                } else if (err.code === 'unimplemented') {
                    console.warn('Persistência não suportada pelo navegador');
                }
            });
            return db;
        })();
    }
    return dbPromise;
}

export async function getFirestoreDeps() {
    const [db, firestore] = await Promise.all([getDb(), loadFirestore()]);
    return { db, ...firestore };
}
