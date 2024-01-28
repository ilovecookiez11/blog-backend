const knexConfig = require('../config/knexfile');
const knex = require('knex')(knexConfig.development);

class Post {
    static async create(title, author, content) {
        try {
        const [result] = await knex('posts').insert({
            title,
            author,
            content
        });
        console.log("query result:", result)
        return result[0]; // Return the newly created post ID
        } catch (error) {
        console.error('Error creating post:', error);
        throw error; // Re-throw the error for proper handling in controller
        }
    }

    static async getAllPosts() {
        try {
            const posts = await knex('posts').select();
            return posts;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error; // Re-throw the error for proper handling in the route handler
        }
        }

  // Add other methods for retrieving, updating, or deleting posts as needed
}

module.exports = Post;