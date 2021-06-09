const database = require("../db");

class User {
  constructor() {
    if (this.instance) return this.instance;
    User.instance = this;
  }

  async get() {
    const rows = await database.query(
      "SELECT userID, username, email, addedDate, userType, studentID FROM user"
    );
    return this.rowToArray(rows);
  }

  async getById(id) {
    const rows = await database.query(
      "SELECT userID, username, email, addedDate, userType, studentID  FROM user WHERE id = ?",
      [id]
    );
    return this.rowToArray(rows[0]);
  }

  async create(user) {}

  async update(id, user) {
    // const fields = []
    // const params = []
    // for (const attribute in todo) {
    //     fields.push('?? = ?')
    //     params.push(attribute, todo[attribute])
    // }
    // const stmt = `UPDATE todos SET ${fields.join(', ')} WHERE id = ?`
    // return database.query(stmt, [...params, parseInt(id)])
  }
  rowToArray(sqlRows) {
    return JSON.parse(JSON.stringify(sqlRows));
  }
}

module.exports = new User();
