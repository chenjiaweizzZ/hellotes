import NewRequest from ".."

NewRequest.request({
    url: "/home/multidata"
}).then(res => {
    console.log(res.data)
})