from flask import Blueprint, request, jsonify
from .ai_service import AiService

ai_bp = Blueprint('ai', __name__)
ai_service = AiService()

@ai_bp.route('/chat', methods=['GET'])
def ai_chat():
    user_query = request.args.get('query')
    if not user_query:
        return jsonify({"error": "Query parameter is required"}), 400

    result = ai_service.ai_chat(user_query)
    return jsonify(result)
