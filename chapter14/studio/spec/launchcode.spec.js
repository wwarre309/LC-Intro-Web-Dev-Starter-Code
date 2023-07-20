// launchcode.spec.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  it ("Checks the vaule of 'organization'", function() {
    let result = launchcode.organization;
    expect(result).toEqual("nonprofit");
  });

  it ("Checks the value of 'executiveDirector'", function() {
    let result = launchcode.executiveDirector;
    expect(result).toEqual("Jeff");
  });
  it ("Checks the valur of 'percentageCoolEmployees'", function() {
    let result = launchcode.percentageCoolEmployees;
    expect(result).toEqual(100);
  });
  it ("Checks the value of 'programsOffered'", function() {
    let result = launchcode.programsOffered;
    expect(result[0]).toEqual("LC101");
    expect(result[1]).toEqual("LaunchCode Women+");
    expect(result[2]).toEqual("CodeCamp");
    expect(result.length).toEqual(3);
  });
  it ("Provide proper answers for 'launchOutput()'", function() {
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
    expect(launchcode.launchOutput(3)).toEqual("Code!");
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
  })
  
});

