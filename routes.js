/**
 * routes.js - Expanded routes for BoxesWorld starter
 * Note: This is still a starter demo. Replace in-memory stores with DB.
 */
const express = require('express');
const router = express.Router();

// In-memory demo stores (replace with DB)
let users = [];
let boxes = [];
let subscriptions = [];
let payments = [];

// Helpers (VERY simple)
const findUser = (email) => users.find(u=>u.email===email);

// Auth: signup/login (very simplified, no password hashing in demo)
router.post('/auth/signup', (req,res)=>{
  const {email, name, password} = req.body;
  if(!email || !password) return res.status(400).json({error:'missing_fields'});
  if(findUser(email)) return res.status(400).json({error:'already_exists'});
  const user = {id: users.length+1, email, name, password, created_at: new Date()};
  users.push(user);
  res.json({user:{id:user.id,email:user.email,name:user.name}});
});

router.post('/auth/login', (req,res)=>{
  const {email, password} = req.body;
  const u = findUser(email);
  if(!u || u.password !== password) return res.status(401).json({error:'invalid_credentials'});
  // NOTE: in production return JWT
  res.json({user:{id:u.id,email:u.email,name:u.name}, token: 'demo-token'});
});

// Boxes CRUD
router.get('/boxes', (req,res)=>{
  res.json(boxes);
});

router.post('/boxes', (req,res)=>{
  const {title, description, category, user_id, embed_url, media} = req.body;
  if(!title || !user_id) return res.status(400).json({error:'missing_fields'});
  const b = {id: boxes.length+1, title, description, category, user_id, embed_url, media, status:'active', created_at: new Date()};
  boxes.push(b);
  res.json(b);
});

router.get('/boxes/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  const b = boxes.find(x=>x.id===id);
  if(!b) return res.status(404).json({error:'not_found'});
  res.json(b);
});

router.put('/boxes/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  const b = boxes.find(x=>x.id===id);
  if(!b) return res.status(404).json({error:'not_found'});
  Object.assign(b, req.body);
  res.json(b);
});

router.delete('/boxes/:id', (req,res)=>{
  const id = parseInt(req.params.id);
  const idx = boxes.findIndex(x=>x.id===id);
  if(idx===-1) return res.status(404).json({error:'not_found'});
  boxes.splice(idx,1);
  res.json({deleted:true});
});

// Subscriptions & payments (demo)
router.get('/subscriptions/:user_id', (req,res)=>{
  const uid = parseInt(req.params.user_id);
  res.json(subscriptions.filter(s=>s.user_id===uid));
});

router.post('/payments/history', (req,res)=>{
  const {user_id} = req.body;
  res.json(payments.filter(p=>p.user_id===user_id));
});

module.exports = router;
