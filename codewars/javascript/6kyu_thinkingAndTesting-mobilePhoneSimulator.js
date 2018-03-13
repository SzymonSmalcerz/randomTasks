/*


	No Story

	No Description

	Only by Thinking and Testing

	Look at result of testcase, guess the code!


*/


function Phone(){
  this.ring = ""
  this.screen = ""
  this.microphone = ""
  this.speaker = ""
  
  this.incomingcall = function(number){
    this.screen = `Call: stranger\nNumber: ${number}`
    this.ring = "Di Da Di"
    var that = this;
    contacts.forEach(contact => {
      if(contact.number == number){
        that.ring = contact.ring
        that.screen = `Call: ${contact.name}\nNumber: ${contact.number}`
        that.speaker = contact.name
      }
    })
  }
  
  this.connect = function(){
    this.ring = ""
    this.screen = ""
    this.microphone = `Hello, ${this.speaker ? this.speaker + "!" : "who is speaking, please?"}`
  }
  
  this.hangup = function(){
    this.ring = ""
    this.screen = ""
    this.microphone = ""
    this.speaker = ""
  }
}

/*
			PROVIDED TESTS:

		//Try to write a code for a mobile phone emulator
		//You don't need define the val 'contacts',
		//I will give you it after test beginning!
		contacts=[
		{name:"John",number:11111111,ring:"Do Re Mi"},
		{name:"Tom", number:22222222,ring:"Mi Re Do"},
		{name:"Jack",number:33333333,ring:"Fa So La Ti"}
		]
		//Waiting for a call...
		var aPhone=new Phone();
		Test.assertSimilar(aPhone.ring, "", "")
		Test.assertSimilar(aPhone.screen, "", "")
		Test.assertSimilar(aPhone.microphone, "", "")
		//Someone callin, is your friend John
		aPhone.incomingcall(11111111);
		Test.assertSimilar(aPhone.ring, "Do Re Mi", "")
		Test.assertSimilar(aPhone.screen, "Call: John\nNumber: 11111111", "")
		Test.assertSimilar(aPhone.microphone, "", "")
		//Connect the call
		aPhone.connect()
		Test.assertSimilar(aPhone.microphone, "Hello, John!", "")
		Test.assertSimilar(aPhone.ring, "", "")
		Test.assertSimilar(aPhone.screen, "", "")
		//Hangup the call
		aPhone.hangup()
		Test.assertSimilar(aPhone.ring, "", "")
		Test.assertSimilar(aPhone.screen, "", "")
		Test.assertSimilar(aPhone.microphone, "", "")
		//And next...
		aPhone.incomingcall(33333333);
		Test.assertSimilar(aPhone.ring, "Fa So La Ti", "")
		Test.assertSimilar(aPhone.screen, "Call: Jack\nNumber: 33333333", "")
		Test.assertSimilar(aPhone.microphone, "", "")
		aPhone.connect()
		Test.assertSimilar(aPhone.microphone, "Hello, Jack!", "")
		aPhone.hangup()
		//A stranger call in
		aPhone.incomingcall(44444444);
		Test.assertSimilar(aPhone.ring, "Di Da Di", "")
		Test.assertSimilar(aPhone.screen, "Call: stranger\nNumber: 44444444", "")
		Test.assertSimilar(aPhone.microphone, "", "")
		aPhone.connect()
		Test.assertSimilar(aPhone.microphone, "Hello, who is speaking, please?", "")
		aPhone.hangup()
		//Click "Submit" try more testcase...



*/
