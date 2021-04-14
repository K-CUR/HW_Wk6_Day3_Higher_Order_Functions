const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStartList = this.journeys.map((journey) => journey.startLocation);
  return journeyStartList;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndList = this.journeys.map((journey) => journey.endLocation);
  return journeyEndList;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter((journey) => journey.transport === transport);
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysOver1000 = this.journeys.filter((journey) => journey.distance > minDistance);
  return journeysOver1000
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((sum, journey) => {return sum + journey.distance},0);
  return totalDistance
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let uniqueTransport = new Set (this.journeys.map((journey) => journey.transport));
//   return uniqueTransport
// };


module.exports = Traveller;
