'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books',[
      {
        name:'The Hobbit',
        author: 'J.R.R. Tolkein',
        year_published: 1937
      },
      {
        name:'Fellowship of the Rings',
        author: 'J.R.R. Tolkein',
        year_published: 1954
      },
      {
        name:'The Two Towers',
        author: 'J.R.R. Tolkein',
        year_published: 1954
      },
      {
        name:'Return of the King',
        author: 'J.R.R. Tolkein',
        year_published: 1955
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('books', null, {});
  }
};
