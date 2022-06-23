'use strict';

const words = require('../wordList.json');

let wordsList = [];

module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 0; i < words.length; i += 1) {
      wordsList.push({
        word: words[i],
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    try {
      const result = await queryInterface.bulkInsert('words', wordsList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('words', null, {});
  },
};
