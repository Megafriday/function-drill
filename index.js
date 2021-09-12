const arr1 = [1, 2, 3, 4]
// .slice(開始位置, 終了位置)
console.log(arr1.slice(1, 3))	//=> [2, 3]
console.log(arr1)									//=> [1, 2, 3, 4] 非破壊的

const arr4 = [1, 2, 3, 4]
// .splice(開始位置[, 削除カウント[, 追加要素1[, 追加要素2, ...]]])
console.log(arr4.splice(1, 0, "q", "w"))		//=> [2, 3]
console.log(arr4)										//=> [1, 4] 破壊的
