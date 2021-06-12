const database = require("../db");
const crypto = require("crypto");

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

  async getById(userID) {
    const rows = await database.query("SELECT * FROM user WHERE userID = ?", [
      userID,
    ]);
    return this.rowToArray(rows[0]);
  }

  async getByUsername(username) {
    const rows = await database.query("SELECT * FROM user WHERE username = ?", [
      username,
    ]);
    return this.rowToArray(rows[0]);
  }

  async getByMatric(matricNo) {
    const rows = await database.query(
      "SELECT * FROM student WHERE matricNo = ?",
      [matricNo]
    );
    return this.rowToArray(rows[0]);
  }

  async getByEmail(email) {
    const rows = await database.query("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    return this.rowToArray(rows[0]);
  }

  async register(user) {
    try {
      console.log(user);
      //TODO: need to be fixed
      await database.query(
        "INSERT INTO student(name, matricNo) values(?, ?); " +
          "SET @id = LAST_INSERT_ID(); " +
          "INSERT INTO user(username, email, password, salt, userType, studentID, addedDate)" +
          "values(?, ?, ?, ?, ?, @id, NOW());",
        [
          user.name,
          user.matricNo,
          user.username,
          user.email,
          user.password,
          user.salt,
          user.userType,
        ]
      );
    } catch (error) {
      throw error;
    }
  }

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
    if (!sqlRows) return null;
    return JSON.parse(JSON.stringify(sqlRows));
  }

  validatePasswordHash(password, hashedPassword, salt) {
    return (
      crypto
        .createHash("sha512")
        .update(password + salt)
        .digest("hex") == hashedPassword
    );
  }

  createPasswordHashAndSalt(password) {
    const salt = crypto.randomBytes(15).toString("hex");
    const passwordHashed = crypto
      .createHash("sha512")
      .update(password + salt)
      .digest("hex");
    return { passwordHashed: passwordHashed, salt: salt };
  }
}

module.exports = new User();
