describe('Testes de funcionalidades da aplicação de agenda de contatos', () => {
    beforeEach(() => {
        "https://agenda-contatos-react.vercel.app/"
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve ser possível adicionar um novo contato', () => {
        const nome = 'João da Silva'
        const email = 'joao.silva@example.com'
        const telefone = '(11) 99999-9999'

        cy.get('[data-cy=nome]').type(nome)
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=telefone]').type(telefone)
        cy.get('[data-cy=adicionar-contato]').click()

        // Verificar se o novo contato foi adicionado à lista
        cy.contains(nome)
        cy.contains(email)
        cy.contains(telefone)
    })

    it('Deve ser possível alterar os dados de um contato', () => {
        const nomeAntes = 'Contato Antes da Alteração'
        const emailAntes = 'contato.antes@example.com'
        const telefoneAntes = '(11) 88888-8888'

        cy.get('[data-cy=nome]').type(nomeAntes)
        cy.get('[data-cy=email]').type(emailAntes)
        cy.get('[data-cy=telefone]').type(telefoneAntes)
        cy.get('[data-cy=adicionar-contato]').click()

        const nomeDepois = 'Contato Depois da Alteração'
        const emailDepois = 'contato.depois@example.com'
        const telefoneDepois = '(11) 77777-7777'

        cy.contains(nomeAntes).parent().within(() => {
            cy.get('[data-cy=editar-contato]').click()
        })

        cy.get('[data-cy=nome]').clear().type(nomeDepois)
        cy.get('[data-cy=email]').clear().type(emailDepois)
        cy.get('[data-cy=telefone]').clear().type(telefoneDepois)
        cy.get('[data-cy=salvar-alteracoes]').click()

        cy.contains(nomeDepois)
        cy.contains(emailDepois)
        cy.contains(telefoneDepois)
    })

    it('Deve ser possível remover um contato', () => {
        const nome = 'Contato para Remover'
        const email = 'contato.remover@example.com'
        const telefone = '(11) 66666-6666'

        cy.get('[data-cy=nome]').type(nome)
        cy.get('[data-cy=email]').type(email)
        cy.get('[data-cy=telefone]').type(telefone)
        cy.get('[data-cy=adicionar-contato]').click()

        cy.contains(nome).parent().within(() => {
            cy.get('[data-cy=remover-contato]').click()
        })

        cy.contains(nome).should('not.exist')
    })
})
