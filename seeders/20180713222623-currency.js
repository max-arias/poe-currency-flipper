'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Currencies', [
      { name: "Alteration" },
      { name: "Fusing" },
      { name: "Alchemy" },
      { name: "Chaos" },
      { name: "GCP" },
      { name: "Exalted" },
      { name: "Chrome" },
      { name: "Jeweller's Orb" },
      { name: "Orb of Chance" },
      { name: "Cartographer's Chisel" },
      { name: "Orb of Scouring" },
      { name: "Blessed Orb" },
      { name: "Orb of Regret" },
      { name: "Regal Orb" },
      { name: "Divine Orb" },
      { name: "Vaal Orb" },
      { name: "Scroll of Wisdom" },
      { name: "Portal Scroll" },
      { name: "Armourer's Scrap" },
      { name: "Blacksmith's Whetstone" },
      { name: "Glassblower's Bauble" },
      { name: "Orb of Transmutation" },
      { name: "Augmentation" }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Currencies', null, {});
  }
};
