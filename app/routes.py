# app/routes.py
from flask import Blueprint, request, jsonify
import stripe
from firebase_admin import auth, db

main = Blueprint('main', __name__)

stripe.api_key = 'your-stripe-secret-key'

@main.route('/')
def home():
    return "Welcome to Wax Wizards!"

@main.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        data = request.get_json()
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'usd',
                    'product_data': {
                        'name': data['service_name'],
                    },
                    'unit_amount': data['amount'],
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url='http://your_domain.com/success',
            cancel_url='http://your_domain.com/cancel',
        )
        return jsonify({'id': session.id})
    except Exception as e:
        return jsonify(error=str(e)), 403

@main.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = auth.create_user(
        email=data['email'],
        password=data['password']
    )
    return jsonify({'id': user.uid})

@main.route('/add_service', methods=['POST'])
def add_service():
    data = request.get_json()
    ref = db.reference('services')
    ref.push(data)
    return jsonify({"status": "Service added"}), 201

@main.route('/get_services', methods=['GET'])
def get_services():
    services_ref = db.collection('services')
    docs = services_ref.stream()

    services = []
    for doc in docs:
        services.append(doc.to_dict())

    return jsonify(services)
