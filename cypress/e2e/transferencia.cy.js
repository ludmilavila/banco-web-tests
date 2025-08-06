describe('Transferências', () => {
    beforeEach( () => {
        cy.visit('/')
        cy.fazerLoginCredenciaisValidas()
    })
    
    it('Deve transferir quando informo dados e valor válidos', () => { 
        cy.realizarTransferencia('João', 'Maria', '11')

        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando transferir mais que 5 mil sem o token', () => { 
        cy.realizarTransferencia('João', 'Maria', '6000')

        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})


