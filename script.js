const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	let res=[]
	let arr=[]
	let sum=0;

	for(let i=0;i<arr.length;i++){
		if(sum+arr[i]<=n){
			sum+=arr[i]
			arr.push(arr[i])
		}else{
			res.push(arr)
			arr=[arr[i]]
			sum=arr[i]
		}
	}

	res.push(arr)

	return res
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
