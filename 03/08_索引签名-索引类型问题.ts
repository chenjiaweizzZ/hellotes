interface IIndexType {
    [bbb: string]: any
}

const nums: IIndexType = ["aaa","bbb","ccc"]
console.log(nums[0])

const info: IIndexType = { name: "WHY",age: 18 }
console.log(info["name"])


export {}