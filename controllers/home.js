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

module.exports = router;
