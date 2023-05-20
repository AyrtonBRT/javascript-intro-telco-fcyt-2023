const apiKey = 'dTVOOHuMdTNXXlix9ZTOcxzcOLneLtxX'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then (resp => resp.json())
.then (({data})=>{
    console.log(data.images.original.url)
})

.catch(console.warn);