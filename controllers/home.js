var express = require('express'),
  router = express.Router();

let importantEmails = [];
for (var i = 0; i <= 100; i++) {
  let read = (i.toString().indexOf("3") != -1) ? "read" : "";
  importantEmails.push({
    id: i,
    title: "E-mail importante número: " + i,
    url: "/email/" + i,
    isRead: (i.toString().indexOf("3") != -1) ? true : false
  })
}

let emails = [];
for (var i = 101; i <= 200; i++) {
  emails.push({
    id: i,
    title: "E-mail número: " + i,
    url: "/email/" + i,
    isRead: (i.toString().indexOf("3") != -1) ? true : false
  })
}

router.get('/', (req, res) => {
	res.render('home', {importantEmails, emails});
});

router.get('/optimized', (req, res) => {
	res.render('optimized', {importantEmails, emails});
});

router.post('/mark-read', (req, res) => {
  importantEmails.filter(e => e.id == req.query.id).map(e => e.isRead = true);
  emails.filter(e => e.id == req.query.id).map(e => e.isRead = true);
  res.sendStatus(200);
});

router.post('/mark-read-all', (req, res) => {
  let ids = req.query.ids.split(',');
  let allEmails = importantEmails;
  allEmails.concat(emails);

  ids.forEach(id => {
    allEmails.filter(e => e.id == id).map(e => e.isRead = true);
  });

  delete allEmails;

  res.sendStatus(200);
});

module.exports = router;
