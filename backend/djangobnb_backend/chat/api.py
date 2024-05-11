from django.http import JsonResponse

from rest_framework.decorators import api_view

from .models import Conversation
from .serializers import ConversationListSerializer,ConversationDetailSerializer

@api_view(['GET'])
def conversation_list(request):
    serializer = ConversationListSerializer(request.user.conversations.all(), many=True)

    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def conversation_detail(request, pk):
    # only get conversations that you are apart of 
    conversation = request.user.conversations.get(pk=pk)

    conversation_serializer = ConversationDetailSerializer(conversation, many=False)

    return JsonResponse({
        'conversation': conversation_serializer.data
    }, safe=False)