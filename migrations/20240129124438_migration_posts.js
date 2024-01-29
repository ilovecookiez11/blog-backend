/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', function (table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.dateTime('post_date').notNullable().defaultTo(knex.fn.now());
        table.text('content').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
