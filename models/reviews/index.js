let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const getAllReviews = `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM ${database}.users u JOIN ${database}.reviews r ON u.id = r.uid WHERE rating >= ? ORDER BY date DESC;`;
const getReviewById = `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM ${database}.users u JOIN ${database}.reviews r ON u.id = r.uid WHERE r.id = ?;`;
const addUserReview = `INSERT INTO ${database}.reviews (uid, text, rating, date, image) VALUES (?);`;
const deleteUserReview = `DELETE FROM ${database}.reviews WHERE id = ? AND uid = ?;`;
const updateUserReview = `UPDATE ${database}.reviews SET text = ?, rating = ?, image = ? WHERE id = ? AND uid = ?;`;

module.exports = {
    getAllReviews,
    getReviewById,
    addUserReview,
    deleteUserReview,
    updateUserReview
};