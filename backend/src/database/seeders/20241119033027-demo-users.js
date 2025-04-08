'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: 'hashedpassword123',
        phone_number: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'janedoe',
        email: 'janedoe@example.com',
        password: 'hashedpassword456',
        phone_number: '0987654321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jim',
        last_name: 'Beam',
        username: 'jimbeam',
        email: 'jimbeam@example.com',
        password: 'hashedpassword789',
        phone_number: '1122334455',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

