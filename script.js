const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	let res=[]
	let arr1=[]
	let sum=0;

	for(let i=0;i<arr.length;i++){
		if(sum+arr[i]<=n){
			sum+=arr[i]
			arr1.push(arr[i])
		}else{
			res.push(arr1)
			arr1=[arr[i]]
			sum=arr[i]
		}
	}

	res.push(arr1)

	return res
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
