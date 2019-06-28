var EvensOdds = {}
module.exports = {
    beforeEach: browser => {
        EvensOdds = browser.page.EvensOdds()
        EvensOdds.navigate()

    },
    after: browser => {
        EvensOdds.end()
    },
    'Odds and Evens': brower => {
        EvensOdds
            .setValue('@evensOddsField', '1,2')
            .click('@evensOddsBtn')
            .verify.containsText('@evens','2')
            .verify.containsText('@odds','1')
            .setValue('@filterObjectField', 'name')
            .click('@filterObjectBtn')
            .verify.containsText('@objectResult', 'name')
            .setValue('@filterStringField', 'James')
            .click('@filterStringBtn')
            .verify.containsText('@stringResult', 'James')
            .setValue('@palindromeField', 'civic')
            .click('@palindromeBtn')
            .expect.element('@palindromeResult').text.equal('Palindrome: true')
        EvensOdds
            .setValue('@sumField1', '10')
            .setValue('@sumField2', '5')
            .click('@sumBtn')
            .verify.containsText('@sumResult', '15')
    
    
    
    
    
    
    
        }




}