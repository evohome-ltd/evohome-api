module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('accounts', [
      {
        username: 'test',
        email: 'test@email.com',
        password: 'test-password',
        password_hash: 'test-password-hash',
      },
      {
        username: 'test2',
        email: 'test2@email.com',
        password: 'test2-password',
        password_hash: 'test2-password-hash',
      },
      {
        username: 'test3',
        email: 'test3@email.com',
        password: 'test3-password',
        password_hash: 'test3-password-hash',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('accounts', null);
  },
};
