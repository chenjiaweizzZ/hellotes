const obj = {
    name: "陈家伟",
    study: function () {
        //默认情况下this是any类型
        console.log(this.name)
    }
}

obj.study()



export { }