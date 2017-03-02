'use strict'

const express=require('express')
const bodyParser=require('body-parser')
const request=require('request')

const app=express()

app.set('port',(process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', function(req,res){
	res.send("hi I am a ChatBot")
})

app.get('/webhook/', function(req,res){
	if(req.query['hub.verify_token'] ==="blondiebytes"){
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong Token")
})

app.listen(app.get('port'), function(){
	console.log("running port")
})