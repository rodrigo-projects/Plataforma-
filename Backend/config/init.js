module.exports = app=>{
    const carCont = app.db('carros').count('id').frist()
}