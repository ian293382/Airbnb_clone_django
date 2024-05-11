

# this is something we need to make it possible to store things in database 
# because we can't just directly do that in a socket 
import json

from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from .models import ConversationMessage


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'chat_{self.room_name}'

        # Join room

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()


    async def disconnect(self):
        await self.channel_layer.group_disconnect(
            self.room_group_name,
            self.channel_name
        ) 