from django.http import JsonResponse

from rest_framework.decorators import api_view

from .models import Conversation
from .serializers import ConservationListSerializer

@api_view(['GET'])
def conversation_list(request):
    serializer = ConservationListSerializer(request.user.conservations.all(), many=True)

    return JsonResponse(serializer.data)