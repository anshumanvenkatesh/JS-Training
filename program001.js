 /**           Author : V Anshuman      
 			   Date : 1/20/2015
 			   Title: Quicksort
 */



function quicksort (arr, lo, hi) {
	console.log(arr);
	if (lo < hi) {
		var p = partition (arr, lo, hi)[1];
		arr = partition(arr, lo, hi)[0];
		console.log("::::::::::::::::::::::" + arr);
		arr = quicksort (arr, lo, p - 1);
		arr = quicksort(arr, p + 1, hi);
	}	
	return arr;
}

function swap(arr, a, b) {
	var temp = arr[b];
	arr[b] = arr[a];
	arr[a] = arr[temp];	
	console.log("................................................swap indices: .............................." + a + ',' + b);
	console.log("................................................swap array: .............................." + arr);
	return arr;

}

function partition (arr, lo, hi) {
	var pivotIndex = arr.length - 1;
	var pivotValue = arr[pivotIndex];
	var storeIndex = lo;

	for (var i = 0; i < hi; i += 1) {
		if (arr[i] < pivotValue) {
			arr = swap(arr, i, storeIndex);
			storeIndex += 1;
		}
	}
	arr = swap(arr, storeIndex, hi);
	return [arr, storeIndex];
}


var arr = [54,6976,789657,4535686,9,65656978,998,987796];
arr = quicksort(arr, 0, arr.length - 1);
console.log(arr);