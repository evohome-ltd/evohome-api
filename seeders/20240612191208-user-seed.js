module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Test',
        middle_name: 'T',
        last_name: 'Test',
        account_id: 1,
      },
      {
        first_name: 'Test1',
        middle_name: 'T1',
        last_name: 'Test1',
        account_id: 2,
      },
      {
        first_name: 'Test2',
        middle_name: 'T2',
        last_name: 'Test2',
        account_id: 3,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null);
  },
};
