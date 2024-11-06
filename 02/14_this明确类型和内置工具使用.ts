// function foo() {
//     console.log(this)
// }

function foo(this: { name: string }, info: { name: string }) {
    console.log(this, info)
}

// type FooType = (this: { name: string }, info: { name: string }) => void


type FooType = typeof foo

//获取FooType中的this类型
type FooThisType = ThisParameterType<FooType>
//删除this参数类型,剩余的函数类型
type PureFooType = OmitThisParameter<FooType>



export { }