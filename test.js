		// Go through each value in array, Log
		var x;
		x = ['Hello', 'Gudetame', 14, 'WOW']
		for (var i = 0; i < x.length; i++){
			console.log( x[i] );
		}
		// Add new value (100) in arry
		x.push(100);
		console.log(x);
		// Add new array in array
		x.push(['New Array', 15]);
		console.log(x);
		// Sum all numbers 1-10, Console Log final sum
		var sum = 0;
		for (var i = 1; i < 11; i++){
			sum += i;
		}
		console.log(sum);
		// Loop through array to find minimum value
		var y = [4, 5, 100, 12, 0];
		var minimum = y[0];
		for (var i = 0; i < y.length; i++){
			if (y[i] < minimum){
				minimum = y[i];
			};
		};
		console.log(minimum);
		// Loop through array to find average
		var o = [1, 2, 3, 4, 5];
		var average = 0;
		var total = o[0];
		for (var i = 1; i < o.length; i++){
			total += o[i];
		};
		average = total / o.length;
		console.log(average);

		// Navigate through object, console each key pair
		var new_egg = {
			name: 'Gude',
			profession: 'Lazy Egg'
		};
		for (var each_key in new_egg){
			console.log(each_key + " : " + new_egg[each_key]);
		};

