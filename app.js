const searchResult = document.getElementsByName("send");
const button = searchResult[0];

function action()
{
	const firstInput = document.getElementById("firstNumber");
	const firstInputValue = firstInput.value; 
	const secondInput = document.getElementById("secondNumber");
	const secondInputValue = secondInput.value;
	const select = document.getElementById("sign");
	const selectValue = select.value;
	let resultValue;

	if(firstInputValue === "")
	{
		alert("первое число пустое");
		return;
	}
	if(secondInputValue === "")
	{
		alert("второе число пустое");
		return;
	}

	const firstInputValueNumber = Number(firstInputValue);
	const secondInputValueNumber = Number(secondInputValue);

	console.log(firstInputValueNumber)

	if( isNaN(firstInputValueNumber) || isNaN(secondInputValueNumber) )
	{	
	    alert("Введите число!!!");
		return;
	}
	

	if(selectValue == "+")
	{
		resultValue = Number(firstInputValue) + Number(secondInputValue);
	}
	else if(selectValue == "-")
	{
		resultValue = Number(firstInputValue) - Number(secondInputValue);
	}
	else if(selectValue == "*")
	{
		resultValue = Number(firstInputValue) * Number(secondInputValue);
	}
	else
	{
		if(secondInputValueNumber == 0)
		{
			alert("Cant divide on zerro, dummy ass!!!");
			return;
		}

		resultValue = Number(firstInputValue) / Number(secondInputValue);
	}

	const result = document.getElementById("result");
	result.value = resultValue;

	console.log(result);

}
	
button.addEventListener('click', action);