module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'accounts',
      {
        id: {
          type: Sequelize.INTEGER,
          unsigned: true,
          autoIncrement: true,
          primaryKey: true,
          notNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          notNull: true,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: Sequelize.DATE,
          notNull: true,
          defaultValue: Sequelize.literal(
            'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
          ),
        },
        username: {
          type: Sequelize.STRING(100),
          unique: true,
          notNull: true,
        },
        email: {
          type: Sequelize.STRING(100),
          unique: true,
          notNull: true,
        },
        password: {
          type: Sequelize.STRING(100),
          notNull: true,
        },
        password_hash: {
          type: Sequelize.STRING(200),
          notNull: true,
        },
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['email', 'username'],
          },
        ],
      },
    );
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        unsigned: true,
        autoIncrement: true,
        primaryKey: true,
        notNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        notNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        notNull: true,
        defaultValue: Sequelize.literal(
          'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
        ),
      },
      first_name: {
        type: Sequelize.STRING(100),
        notNull: false,
        defaultValue: null,
      },
      middle_name: {
        type: Sequelize.STRING(50),
        notNull: false,
        defaultValue: null,
      },
      last_name: {
        type: Sequelize.STRING(100),
        notNull: false,
        defaultValue: null,
      },
      account_id: {
        type: Sequelize.INTEGER,
        unsigned: true,
        notNull: true,
        references: {
          model: 'accounts',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('accounts');
    await queryInterface.dropTable('users');
  },
};
