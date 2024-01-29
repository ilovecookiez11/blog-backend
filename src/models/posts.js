const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig.development);

class Post {
    static async create(title, author, content) {
        try {
        const [result] = await knex('posts').insert({
            title,
            author,
            content
        });
        return result;
        } catch (error) {
        console.error('Error creating post:', error);
        throw error;
        }
    }

    static async getAllPosts() {
        try {
            const posts = await knex('posts').select(knex.raw('author, title, id, post_date, LEFT(content, 70) AS content'));
            return posts;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    static async getPostById(id) {
        try {
            const posts = await knex('posts').where('id', id);
            return posts;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    static async search(queryParams) {
        try {
            const posts = await knex('posts').where((qb) => {
                if (queryParams.author) {
                    qb.where('posts.author', '=', queryParams.author);
                }
                if (queryParams.content) {
                    qb.where('posts.content', 'like', queryParams.content);
                }
                if (queryParams.title) {
                    qb.where(knex.raw('LOWER(title)'), 'like', queryParams.title.toLowerCase())
                }
            });
            return posts;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error; 
        }
    }

}

module.exports = Post;