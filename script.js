											//['Rock','Paper','Scissor']

var values = [1,2,3]

var scr = 1

// 📜 🜘

var pc = 1
window.onclick = function(value){
	if (value.isTrusted == true) {

		if (value.toElement.value in [1,2,3]) {
			var yash = Math.floor((Math.random() * 3) + 1);
			console.log(yash)
			e = document.createElement('h4')
			e.appendChild(document.createTextNode("Result: "))
			document.querySelector('#javascript_file').appendChild(e)
		}

		if(value.toElement.value == 1){
			if (yash == 1) {
				document.querySelector('#javascript_file').textContent = "Result: It's A Draw"
			}
			if (yash == 2) {
				document.querySelector('#javascript_file').textContent = "Result: You Loss"
				document.querySelector('.Scr_pal').textContent = scr+' | '+pc;
				pc = pc+1
			}
			if (yash == 3) {
				document.querySelector('#javascript_file').textContent = "Result: You Win"
				document.querySelector('.Scr_pal').textContent = scr+' | '+pc;
				scr = scr+1

			}
		}

		if (value.toElement.value == 2) {
			if (yash == 1) {
				document.querySelector('#javascript_file').textContent = "Result: You Win"
				document.querySelector('.Scr_pal').textContent = scr+' | '+pc;
				scr = scr+1
			}
			if (yash == 2) {
				document.querySelector('#javascript_file').textContent = "Result: It's A Draw"
			}
			if (yash == 3) {
				document.querySelector('#javascript_file').textContent = "Result: You Loss"
				document.querySelector('.Scr_pal').textContent = scr+' | '+pc;
				pc = pc+1
			}
		}

		if (value.toElement.value == 3) {
			if (yash == 1) {
				document.querySelector('#javascript_file').textContent = "Result:You Loss"
				document.querySelector('.Scr_pal').textContent = scr+' | '+pc;
				pc = pc+1
			}
			if (yash == 2) {
				document.querySelector('#javascript_file').textContent = "Result: You Win"
				document.querySelector('.Scr_pal').textContent = scr+' | '+pc;
				scr = scr+1
			}
			if (yash == 3) {
				document.querySelector('#javascript_file').textContent = "Result: It's A Draw"
			}
		}
	}
}

