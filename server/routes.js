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

    // app.get('/initialize', (req, res, next) => {
    //     db.Channels.create({
    //         name: 'general'
    //     }).then(()=> res.json(true));
    // });

    // app.get('/general', (req, res, next) => {
    //     console.log('extracting all users inside general');
    //     db.Channels.findOne({ name: 'general'})
    //         .populate('participants')
    //         .exec((err, data) => {
    //             console.log('here...............');
    //             res.json(data.participants);
    //         });
    // })
}