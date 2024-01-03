var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('password');
var nextButton = document.getElementById('nextButton');
var password = document.getElementById('passwordInput')
var formemail = document.getElementById('form-email')
var myLabel = document.querySelector('label[for="email"]');
var myLabel2 = document.querySelector('label[for="password"]');
var help = document.querySelector('.need-help');
var remember = document.querySelector('.remember-me');
var change = document.getElementById('ubah');
var passwordInputContainer = document.getElementById('passwordInputContainer');


function validateInputs() {
	var isEmailValid = isValidEmail(emailInput.value);
	var isPhoneValid = isValidPhone(emailInput.value);
	var isEmailValidNotNull = emailInput.value.trim() !== '';
	nextButton.disabled = !(isEmailValid || isPhoneValid) || !isEmailValidNotNull;
}

emailInput.addEventListener('input', validateInputs);

function togglePasswordInput() {
	var passwordInput = document.getElementById('passwordInput');
	var nextButton = document.getElementById('nextButton');
	var loginbutton = document.getElementById('loginbtn');
	passwordInput.type = 'password';
	nextButton.style.display = 'none';
	loginbutton.style.display = 'flex';
	passwordInputContainer.style.display = 'flex';
	emailInput.disabled = true;
	formemail.style.border = 'none';
	myLabel.textContent = 'Email';
	myLabel2.style.display = 'block';
	help.style.display = 'none';
	remember.style.display = 'flex';
	change.style.display = 'block';
	emailInput.style.paddingLeft = '0px';
	emailInput.style.paddingTop = '0px';
	emailInput.style.paddingBottom = '0px';
	emailInput.style.fontSize = '13.8px';
	formemail.style.height = '20px';

}

function changeEmailInput() {
	var nextButton = document.getElementById('nextButton');
	var loginbutton = document.getElementById('loginbtn');
	nextButton.style.display = '';
	loginbutton.style.display = '';
	emailInput.disabled = false;
	formemail.style.border = '';
	myLabel.textContent = 'Nomor HP atau Email';
	myLabel2.style.display = 'none';
	passwordInputContainer.style.display = '';
	help.style.display = '';
	remember.style.display = 'none';
	change.style.display = 'none';
	emailInput.style.paddingLeft = '';
	emailInput.style.paddingTop = '';
	emailInput.style.paddingBottom = '';
	emailInput.style.fontSize = '';
	formemail.style.height = '';


}




function togglePasswordVisibility() {
	var passwordInput = document.getElementById('passwordInput');
	var hideAndShowIcon = document.querySelector('.hideandshow img');

	passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

	hideAndShowIcon.src = passwordInput.type === 'password' ?
		'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/144f96b1.svg' :
		'https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/16c63cb0.svg';
}

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function isValidPhone(phone) {
	const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	return phoneRegex.test(phone);
}