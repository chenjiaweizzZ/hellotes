interface IIndexType {
    [index: number]:string
    [key: string]: any
    //下面的写法不允许: 数字类型索引的类型,必须是字符串类型索引的类型的子类型
    //结论 数字类型必须是比字符串类型更确定  
    // [index: number]:number | string
    // [key: string]: string
}

const names: IIndexType = ["abc","cna","nba"]
const item1 = names[0]
const forEachFn = names["forEach"]
 
export {}