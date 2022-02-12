/// <reference types="cypress" />
import ProdutosPage from '../support/page-objects/produtos.page'
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosPerfil = require('../fixtures/perfil.json')
const dadosEndereco = require('../fixtures/endereco.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer o login, selecionar produtos fazendo checkout e validando compra no final', () => {
        cy.get('#username').type(dadosPerfil.usuario)
        cy.get('#password').type(dadosPerfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, aluno_ebac')

        ProdutosPage.adicionarProdutos()
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].cidade,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )

        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido')
    });   


})