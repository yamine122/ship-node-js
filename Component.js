const compo = {
	div(id){
		const div = document.createElement('div')
		div.setAttribute('id', id)
		div.setAttribute('style','border : 1px solid black')
		return div
	},
	inputText(id, type){
		const input = document.createElement('input')
		input.setAttribute('id', id)
		input.setAttribute('type',type)
		return input
	},
	inputButton(id, type, val){
		const input = document.createElement('input')
		input.setAttribute('type', type)
		input.setAttribute('value', val)
		input.setAttribute('id', id)
		return input
	},
	br(){
	
		return document.createElement('br')
	}
}
function Div(){
	this.make = function (id) {

		
	}
}
function InputText(){
	this.make = function (id, type) {

		
	}
}
function InputButton(){
	this.make = function (id, type, val) {

		
	}

}
function Br() {
	this.make = function () {
		
	}
}
function Func02() {
	this.play = function () {
		if (input == undefined || input == null || input == '') {
			alert('텍스트필드를입력하세요')
		} else {
			alert((input.value !== '') ? input.value : '먼저입력하시오')
			input.focus()
		}
		choice.value = 0
	}
}
function Factory(type){
	switch (type) {
		case 'inputText': return new InputText()
			
		case 'inputButton': return new InputButton()
			
		case 'br': return new Br()
			
		case 'div' : return new Div()
	}
}

