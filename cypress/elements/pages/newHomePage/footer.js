class footer {
    constructor(){

    }
//===================================  ELEMENTS  ======================================
    buttonCaptchaPP(){
        return cy.get('[href="https://www.google.com/intl/en/policies/privacy/"]');
    }
    
    buttonCaptchaTOS(){
        return cy.get('[href="https://www.google.com/intl/en/policies/terms/"]');
    }

    buttonTOS(){
        return cy.get('[href="/terms-of-service#row"]');
    }
    
    buttonPP(){
        return cy.get('[href="/privacy-policy#row"]');
    }

    buttonCP(){
        return cy.get('[href="/cookie-policy"]');
    }

    buttonDirectory(){
        return cy.get('[href="/directory"]');
    }

    buttonRD(){
        return cy.get('[href="/responsible-disclosure"]');
    }
//===================================  METHODS  =======================================
//===================================  VALIDATION  =======================================
    validateCaptchaPP(){
        const button = this.buttonCaptchaPP();
        const link = "https://www.google.com/intl/en/policies/privacy/";
        button.should('be.visible')
        .and('have.attr', 'href', link)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener noreferrer');
    }

    validateCaptchaTOS(){
        const button = this.buttonCaptchaTOS();
        const link = "https://www.google.com/intl/en/policies/terms/";
        button.should('be.visible')
        .and('have.attr', 'href', link)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener noreferrer');
    }
}

export default footer;