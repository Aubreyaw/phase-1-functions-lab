function distanceFromHqInBlocks(streetNumber) {
    const headquartersLocation = 42;
    const distanceBetweenStreetNumbers = 1;
  
    
    const distanceInBlocks = Math.abs(streetNumber - headquartersLocation);
  
    return distanceInBlocks;
  }

  function distanceFromHqInFeet(streetNumber) {
    const distanceInBlocks = distanceFromHqInBlocks(streetNumber);
    const feetPerBlock = 264;
  
    const distanceInFeet = distanceInBlocks * feetPerBlock;
  
    return distanceInFeet;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
  
    const distanceInBlocks = Math.abs(startBlock - endBlock);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
  
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
  
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      const distanceInFeetAfterFreeSample = distanceInFeet - 400;
      const farePrice = distanceInFeetAfterFreeSample * 0.02;
      return farePrice;
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return ('cannot travel that far'); 
    }
  }