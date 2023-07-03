function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const calculateOrbitalPeriod = function(avgAlt) {
    const a = earthRadius + avgAlt;
    const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
    return Math.round(T);
  };

  return arr.map(function(obj) {
    return {
      name: obj.name,
      orbitalPeriod: calculateOrbitalPeriod(obj.avgAlt)
    };
  });
}
