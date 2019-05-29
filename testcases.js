var assert = require('assert');

describe('#signUpPassword', function() {
    context('when password is correct', function() {
      it('show tick', function() {
      	assert.equal(password="Akanksha25",true);
      });
    });
    context('when not appropriate', function() {
      it('should return the password specification message', function() {
        assert.equal(password="Akan2",false);
      });
      it('should return the password specification message', function() {
        assert.equal(password="akanksha20",false);
      });
      it('should return the password specification message', function() {
        assert.equal(password="AKANKSHA20",false);
      });
      it('should return the password specification message', function() {
        assert.equal(password="akANKSHA",false);
      });
      it('should return the password specification message', function() {
        assert.equal(password="1234567889",false);
      });
      it('should return the password specification message', function() {
        assert.equal(password="AKANKSHA",false);
      });
      it('should return the password specification message', function() {
        assert.equal(password="akanksha",false);
      });
    });   
});

describe('#signUpUsername', function() {
    context('when username is unique', function() {
      it('show tick', function() {
        assert.equal(username='Akanksha29',true);
      });
    });
    context('when username is not unique', function() {
      it('should return the password specification message', function() {
        assert.equal(username="Akanksha",false);
      });
    });
});

describe('#signUpEmail', function() {
    context('when email is valid', function() {
      it('show tick', function() {
        assert.equal(email= "abc@gmail.com",true);
      });
    });
    context('when email is not valid', function() {
      it('should return invalid email message', function() {
        assert.equal(email= "abgmail.com",false);
      });
    });
    context('when email is already registered', function() {
      it('should return invalid email message', function() {
        assert.equal(email= "abc@gmail.com",false);
      
      });
    });
});

describe('#personalinfo', function() {
    context('when either of college or occ is filled', function() {
      it('show tick', function() {
 
        assert.equal((college='JIIT',occupation=''),true);
      });
      it('show tick', function() {
 
        assert.equal((college='', occupation=='Manager'),true);
      });
      it('show tick', function() {
 
        assert.equal((college='JIIT', occupation='Student'),true);
      });
    });
    context('when both of them is not filled', function() {

      it('Return message-Fill either clg or occ', function() {
        assert.equal((college='', occupation=''),false);
      });
    });
    context('viewing others details when his own isnt filled yet', function() {

      it('Return message-Fill yours first', function() {
        assert.equal((self.college="", user.college='JIIT'),"Fill yours first");
      });
    });
    context('viewing others details when his own is filled', function() {

      it('View the detail', function() {
        assert.equal((self.college='AMITY',user.college='JIIT'),"no action");
      });
    });
});

describe('#cloversAmt', function() {
    context('when clovers are not sufficient', function() {
      it('Insufficient clovers', function() { 
        assert.equal(clovers<13,"Please buy clovers");
      });
      it('Insufficient clovers', function() { 
        assert.equal(clovers<1,"Please Buy Clovers");
      });
      it('Insufficient clovers', function() { 
        assert.equal(clovers<2,"Please Buy Clovers");
      });

    });
    context('when clovers are sufficient', function(){
      it('Send coffee coupon', function() {
        assert.equal(clovers>=13,"Send coffee coupon");
      });
      it('View comments', function() {
        assert.equal(clovers>=1,"view comments");
      });
      it('Send view request', function() {
        assert.equal(clovers>=2,"Send req to view profile");
      });
    });
});

describe('#moments', function() {
    context('when time difference is less than 30 minutes', function() {
      it('delete moment from discover feed', function() {
		var today=new Date();
        assert.equal((upload.Time- today.getTime())>=1800000,"Delete from public feed");
      });
    });
    context('when time difference is greater than 30 minutes', function() {
      it('no action', function() {
        var today=new Date();
        assert.equal((upload.Time- today.getTime())<1800000,"no action");

      });
    });
});

describe('#vibes', function() {
    context('hashtags>6', function() {
      it('max limit msg', function() {
        assert.equal(hashtags=['#cool','#smart','#witty','#pretty','#vibes','#POTD','#tb'],"Only 6 hashtags allowed");
      });
    });
    context('hashtags<=6', function() {
       it('no action', function() {
        assert.equal(hashtags=['#cool','#smart','#witty','#pretty'],true);
      });
    });
    context('viewing valid comments', function() {
       it('no action', function() {
        assert.equal((userRank=5,commentRank=6),"Comments");
      });
    });
    context('viewing comments of rank lesser than his', function() {
       it('no action', function() {
        assert.equal((userRank=9,commentRank=6,clovers>=1),"Comments");
      });
       it('buy clovers', function() {
        assert.equal((userRank=9,commentRank=6,clovers=0),"Buy clovers");
      });
    });
});
