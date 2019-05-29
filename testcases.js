var assert = require('assert');

describe('#signUpPassword', function() {
    context('when password is correct', function() {
      it('show tick', function() {
      	assert.equal(password="Akanksha25",true);
      });
    });
    context('when not appropriate', function() {
      //length is less than 8
      it('should return the password specification message', function() {
        assert.equal(password="Akan2",false);
      });
      //no upper case
      it('should return the password specification message', function() {
        assert.equal(password="akanksha20",false);
      });
      //no lower case
      it('should return the password specification message', function() {
        assert.equal(password="AKANKSHA20",false);
      });
      //no digit
      it('should return the password specification message', function() {
        assert.equal(password="akANKSHA",false);
      });
      //no letters
      it('should return the password specification message', function() {
        assert.equal(password="1234567889",false);
      });
       //no digits and lower case
      it('should return the password specification message', function() {
        assert.equal(password="AKANKSHA",false);
      });
       //no digits and upper case
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
        //assuming Akanksha is already a registered username in the database.
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
      //invalid email
      it('should return invalid email message', function() {
        assert.equal(email= "abgmail.com",false);
      });
    });
    context('when email is already registered', function() {
      it('should return invalid email message', function() {
        assert.equal(email= "abc@gmail.com",false);
        //assuming abc@gmail.com is already registered
      });
    });
});

describe('#personalinfo', function() {
    context('when either of college or occ is filled', function() {
      it('show tick', function() {
      	//college is filled
        assert.equal((college='JIIT',occupation=''),true);
      });
      it('show tick', function() {
      	//occupation is filled
        assert.equal((college='', occupation=='Manager'),true);
      });
      it('show tick', function() {
      	//occupation and job both are filled
        assert.equal((college='JIIT', occupation='Student'),true);
      });
    });
    context('when both of them is not filled', function() {
      //error case
      it('Return message-Fill either clg or occ', function() {
        assert.equal((college='', occupation=''),false);
      });
    });
    context('viewing others details when his own isnt filled yet', function() {
      //error case
      it('Return message-Fill yours first', function() {
        assert.equal((self.college="", user.college='JIIT'),"Fill yours first");
      });
    });
    context('viewing others details when his own is filled', function() {
      //error case
      it('View the detail', function() {
        assert.equal((self.college='AMITY',user.college='JIIT'),"no action");
      });
    });
});

describe('#clovers', function() {
    context('when clovers are not sufficient', function() {
      it('Insufficient clovers', function() {
      	//sending coffee coupon
        assert.equal(clovers<12,"Please buy clovers");
      });
      it('Insufficient clovers', function() {
      	//viewing comments
        assert.equal(clovers<1,"Please Buy Clovers");
      });
      it('Insufficient clovers', function() {
      	//sending request to view profile
        assert.equal(clovers<2,"Please Buy Clovers");
      });

    });
    context('when clovers are sufficient', function() {
      //sending coupons
      it('Send coffee coupon', function() {
        assert.equal(clovers>=13,"Send coffee coupon");
      });
      //viewing comments
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
      	//time diff>30
		var today=new Date();
        assert.equal((upload.Time- today.getTime())>1800000,"Delete from public feed");
      });
    });
    context('when time difference is greater than 30 minutes', function() {
      //time diff <30
      it('no action', function() {
        var today=new Date();
        assert.equal((upload.Time- today.getTime())<1800000,"no action");

      });
    });
});

describe('#vibes', function() {
    context('hashtags>6', function() {
    	//hashtags>6
      it('max limit msg', function() {
        assert.equal(hashtags=['#cool','#smart','#witty','#pretty','#vibes','#POTD','#tb'],"Only 6 hashtags allowed");
      });
    });
    context('hashtags<=6', function() {
      //hashtags upto 6
       it('no action', function() {
        assert.equal(hashtags=['#cool','#smart','#witty','#pretty'],true);
      });
    });
    context('viewing valid comments', function() {
      //views comments of rank greater than his
       it('no action', function() {
        assert.equal((userRank=5,commentRank=6),"Comments");
      });
    });
    context('viewing comments of rank lesser than his', function() {
      //views comments of rank greater than his
       it('no action', function() {
        assert.equal((userRank=9,commentRank=6,clovers>=1),"Comments");
      });
       it('buy clovers', function() {
        assert.equal(((userRank=9,commentRank=6,clovers=0),"Buy clovers");
      });
    });
});
