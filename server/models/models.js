const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
    uid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Test = sequelize.define('test', {
    test_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    image: {type: DataTypes.STRING},
    question: {type: DataTypes.STRING, allowNull: false}
})

const Topics = sequelize.define('topics', {
    topic_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const TestAnswers = sequelize.define('testAnswers', {
    answer_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    answer_text: {type: DataTypes.STRING, allowNull: false},
    is_correct: {type: DataTypes.BOOLEAN}
})

const UserAnswers = sequelize.define('userAnswers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    is_correct: {type: DataTypes.BOOLEAN}
})

const Tickets = sequelize.define('tickets', {
    ticket_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const TestTicket = sequelize.define('test_ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const TicketProgress = sequelize.define('ticketProgress', {
    progress_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    correct: {type: DataTypes.INTEGER},
    progress: {type: DataTypes.INTEGER}
})

Test.hasMany(TestAnswers)
TestAnswers.belongsTo(Test)

TestAnswers.hasMany(UserAnswers)
UserAnswers.belongsTo(TestAnswers)

Topics.hasMany(Test)
Test.belongsTo(Topics)

TicketProgress.hasMany(UserAnswers)
UserAnswers.belongsTo(TicketProgress)

TestTicket.hasMany(UserAnswers)
UserAnswers.belongsTo(TestTicket)

Test.belongsToMany(Tickets, {through: TestTicket});

Tickets.belongsToMany(Test, {through: TestTicket});

User.belongsToMany(Tickets, {through: TicketProgress})

Tickets.belongsToMany(User, {through: TicketProgress})

module.exports = {User, UserAnswers, TestAnswers, TestTicket, Topics, Test, Tickets, TicketProgress}
