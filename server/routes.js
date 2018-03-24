const db = require('./models');

module.exports = (app) => {
    console.log('Initializing routes');

    app.post('/login', (req, res, next) => {
        const username = req.body.username;
        
        if (!username) {
            return;
        }
        db.Users.findOneOrCreate({
            username: req.body.username
        }, (err, user) => {
            res.json(user);
        })
    });
}