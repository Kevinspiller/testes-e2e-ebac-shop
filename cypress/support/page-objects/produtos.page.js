class ProdutosPage{
    adicionarProdutos(){
        cy.addProdutos('Abominable Hoodie','L','Blue', 2)
        cy.get('.woocommerce-message').should('contain', 2 + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
        cy.addProdutos('Arcadio Gym Short',34,'Red', 2)
        cy.get('.woocommerce-message').should('contain', 2 + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')
        cy.addProdutos('Aether Gym Pant',36,'Brown', 5)
        cy.get('.woocommerce-message').should('contain', 5 + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
        cy.addProdutos('Apollo Running Short',32,'Black', 1)
        cy.get('.woocommerce-message').should('contain',' “Apollo Running Short” foi adicionado no seu carrinho.')
    }
}

export default new ProdutosPage()