# API Reference (BoxesWorld Starter)

Base URL: {{baseUrl}} (use Postman environment)

## Auth
- POST /api/auth/signup
  - body: {email, name, password}
- POST /api/auth/login
  - body: {email, password}

## Boxes
- GET /api/boxes
- POST /api/boxes
  - body: {title, description, user_id, embed_url, media}
- GET /api/boxes/:id
- PUT /api/boxes/:id
- DELETE /api/boxes/:id

## Subscriptions & Payments
- POST /api/subscribe
- GET /api/subscriptions/:user_id
- POST /api/payments/history
- POST /api/payment/callback (JazzCash/EasyPaisa callbacks go here)
