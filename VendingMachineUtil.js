// 포장마차리필 
// 배열을 처리하는 6가지
// for 
// forEach
// map
// find
// reduce
// filter
const util = {
	forTest(arr){},
	forEachTest(arr){},
	
}
function Looping() {
	this.forTest = function (arr) {
		let returnVal = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				returnVal.push(arr[i])
			}
		}
		return returnVal
	}
	this.forEachTest = function (arr) {
		let returnVal = []
		arr.forEach(i => { if (i % 2 == 0) returnVal.push(i) })
		return returnVal
	}
	this.mapTest = function (arr) {
		return arr.map(i => i * 100)
	}
	this.findTest = function (arr) {
		return (arr.find(function (i) {
			return i > 5
		}))
	}
	this.findTest2 = function (arr, id) {
		let resultVal = (arr.find(i => i.id == id))
		return (resultVal == undefined) ? '찾는 id가 없습니다' : resultVal.name


	}
	this.reduceTest = function (arr) {
		return arr.reduce((i, j) => i + j)
	}
	this.filterTest = function (arr) {
		return arr.filter(i => (i % 2 == 0))
	}
	this.ofTest = function (arr) {
		let temp = []
		for (const item of arr) {
			temp.push(item.name)
		}
		return temp
	}
	this.fromTest = function (arr) {
		return Array.from(arr, i => i + i)
	}
	this.argumentsTest = function () {
		return [...arguments]
	}
	this.joinTest = function () {
		return [...arguments].join("\n")
	}
	this.sortTest = function () {
		let t1 = [...arguments].sort()
		let t2 = [...t1].reverse()
		return [...t1, ...t2]
	}
	this.reverseTest = function () {
		return [...[...arguments].sort().reverse()]
	}
	this.todos = function (arr) {
		const todos = arr

		// 비교 함수
		function compare(key) {
			return function (a, b) {
				// 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
				return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
			};
		}

		// id를 기준으로 정렬
		resultVal = todos.sort(compare('id'));
		console.log(todos);

		// content를 기준으로 정렬
		arr = todos.sort(compare('content'));
		
		let temp = []
		for (const item of arr) {
			temp.push(item.content)
		}
		return temp
	}

}


