let interestGain = {
	balance: 0,
	monthlyInterest: 0,
	timeInMonths: 0,
	depositAmount: 0,
	depositOcc: 0,
	withdrawalAmount: 0,
	withdrawalOcc: 0,
	withdraw: function() {},
	deposit: function() {},
	findInterest: function() {}
};

function InterestGain(
	balance,
	monthlyInterest,
	timeInYears,
	depositAmt,
	depositOcc,
	wdrawAmt,
	wdrawOcc
) {
	this.balance = balance * 100;
	this.monthlyInterest = monthlyInterest / 10000;
	this.timeInMonths = timeInYears * 12;
	this.depositAmount = depositAmt * 100;
	this.depositOcc = depositOcc * 100;
	this.withdrawalAmount = wdrawAmt * 100;
	this.withdrawalOcc = wdrawOcc * 100;
	this.withdraw = function() {
		this.balance -= this.withdrawalAmount;
	};
	this.deposit = function() {
		this.balance += this.depositAmount;
	};
	this.findInterest = function() {
		for (let i = 0; i < this.timeInMonths; i++) {
			if (i % this.withdrawalOcc == 0) {
				this.withdraw();
			}
			this.balance = this.balance + this.balance * this.monthlyInterest;
			this.balance = Math.floor(this.balance);
			if (i % this.depositOcc == 0) {
				this.deposit();
			}
		}
	};
	this.showNewBalance = function() {
		console.log(this.balance);
	};
}

let interest = new InterestGain(100, 0.5, 1, 50, 1, 10, 1);
interest.findInterest();
interest.showNewBalance();
// balance,
// 	monthlyInterest,
// 	timeInYears,
// 	depositAmt,
// 	depositOcc,
// 	wdrawAmt,
// 	wdrawOcc
