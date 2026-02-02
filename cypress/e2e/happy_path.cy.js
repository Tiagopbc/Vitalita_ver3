describe('Vitalità Critical Path', () => {
    const timestamp = new Date().getTime();
    const testEmail = `test${timestamp}@example.com`;
    const testPass = 'Test@123';
    const testName = 'Cypress Test User';

    it('should register (if needed), create a workout, and finish it', () => {
        cy.visit('/');

        // 1. Handle Login / Register
        cy.location('pathname').then((pathname) => {
            if (pathname === '/login') {
                // Try Registering a new user to ensure a fresh state
                cy.contains('button', 'Criar uma conta com e-mail').click();

                // Step 1
                cy.get('#signup-name').type(testName);
                cy.get('#signup-email').type(testEmail);
                cy.get('#signup-pass').type(testPass);
                cy.get('#signup-pass2').type(testPass);

                // Click "Próximo" - Step 1
                cy.get('form button[type="submit"]').click();

                // Step 2
                cy.contains('Dados pessoais').should('be.visible');
                cy.get('#signup-gender').select('masculino');
                cy.get('#birth-day').type('01');
                cy.get('#birth-month').type('01');
                cy.get('#birth-year').type('1990');
                cy.get('#height').type('180');
                cy.get('#weight').type('80');

                // Click "Criar conta"
                cy.contains('button', 'Criar conta').click();

                // Wait for redirect to home
                cy.location('pathname', { timeout: 20000 }).should('eq', '/');
            }
        });

        // 2. Dashboard Loaded
        cy.contains('Seu Progresso', { timeout: 20000 }).should('be.visible');

        // Handle Welcome Modal (It should appear for new users)
        cy.get('body').then(($body) => {
            if ($body.find('button:contains("Ir para o app")').length > 0) {
                cy.contains('button', 'Ir para o app').click();
            }
        });

        // 3. Create Workout
        cy.visit('/create');

        // 4. Fill Workout Form
        cy.get('input[placeholder*="Ex: Treino"]').type('Treino E2E ' + timestamp);

        // Add Exercise
        cy.contains('button', 'Adicionar Exercício').click();

        // Fill Exercise in Modal
        cy.get('input[placeholder*="Digite para buscar"]').type('Supino');
        cy.wait(1000);

        // Click "Adicionar"
        cy.get('div[class*="fixed"]').contains('button', 'Adicionar').click();

        // 5. Save Workout
        cy.contains('button', 'Salvar Treino').click();

        // Wait for save to complete (redirect to previous page)
        // Since we visited /create directly, onBack() might go to / (home) or /workouts if history
        // Let's assume redirect happens. Safe bet: wait a bit.
        cy.wait(3000);

        // 6. Go to Workouts Page
        cy.visit('/workouts');

        // Wait for list to load
        cy.contains('Meus Treinos', { timeout: 10000 }).should('be.visible');

        // Find created workout - Increase timeout for Firestore sync
        cy.contains('Treino E2E ' + timestamp, { timeout: 20000 }).should('be.visible').click();

        // Start Workout
        cy.contains('button', 'INICIAR').click();

        // 7. Execution Page
        cy.url().should('include', '/execute/');

        // Finish Workout - Correct Button Text
        cy.contains('button', 'FINALIZAR TREINO').click();

        // Confirm Modal - Correct Button Text
        cy.contains('button', 'Confirmar').click();

        // 8. Verify Success (and handle potential Achievement Modal)
        cy.get('body').then(($body) => {
            // Check for error toast first
            if ($body.find(":contains('Erro ao salvar treino')").length > 0) {
                throw new Error("Workout save failed with error toast!");
            }

            // Check for Achievement Modal
            // Wait for animations and fetch
            cy.wait(2000);
            const $achievement = $body.find(":contains('NOVA CONQUISTA')");
            const $btn = $body.find('button:contains("Continuar")');

            if ($achievement.length > 0 || $btn.length > 0) {
                cy.contains('button', 'Continuar').click();
            }
        });

        // Use regex for case-insensitive match
        cy.contains(/Treino Concluído!/i, { timeout: 20000 }).scrollIntoView().should('be.visible');

        // 9. Exit and Verify Home
        cy.contains('button', 'Fechar e Sair').scrollIntoView().click();
        cy.contains('Meta da semana', { timeout: 10000 }).should('be.visible');
    });
});
