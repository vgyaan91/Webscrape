describe('WebScrape', function () {

    beforeEach(function () {
        cy.visit('https://www.bullion-rates.com/gold/INR/2007-1-history.htm')
    })

    it('Scrape Data', function () {
        cy.get('#dtDGrid>tbody>tr.DataRow')
        .each(function($row, index, $rows){

            cy.wrap($row).within(function(){
                cy.get('td')
                .each(function($cellData, index, $columns){
                    cy.log($cellData.text())
                }
                )
            }
            )
        }
        )
    })










})