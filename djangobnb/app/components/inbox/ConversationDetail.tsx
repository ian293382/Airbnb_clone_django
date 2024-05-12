'use client';

import CustomButton from "../forms/CustomButton";
import { ConversationType } from "@/app/inbox/page";
import { useEffect, useState, useRef } from "react";
import useWebSocket, {ReadyState} from "react-use-websocket";

interface ConversationDetailProps {
    userId: string;
    token: string;
    conversation: ConversationType;
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    conversation,
    userId,
    token,
}) => {
    const messagesDiv = useRef(null)
    const [newMessage, setNewMessage] = useState('');
    const myUser = conversation.users?.find((user) => user.id == userId)
    const otherUser = conversation.users?.find((user) => user.id != userId)

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}/`, {
        share: false,
        shouldReconnect: ()=> true
    }) 

    useEffect(()=> {
        console.log('Connect state changed', readyState)
    }, [readyState])

    const sendMessage = async () => {
        console.log('send message')
        sendJsonMessage({
            event: 'chat_message',
            data: {
                body: newMessage,
                name: myUser?.name,
                sent_to_id: otherUser?.id,
                conversation_id: conversation.id
            }
        });
        setNewMessage('');

        setTimeout(()=> {
            scrollToBottom()
        }, 50)
    }

    const scrollToBottom = () => {
        if (messagesDiv.current) {
            messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight
        }
    }

    return (
        <>
          <div
            ref={messagesDiv} 
            className="max-h-[400px] overflow-auto flex flex-col space-y-4">
            <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                <p className="font-bold text-gray-500">
                    John Doe
                </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quaerat reprehenderit ab delectus! Hic tempora unde veli
                      veritatis libero numquam.</p>
            </div>
            <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200 ">
                <p className="font-bold text-gray-500">
                    code with stein
                </p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quaerat reprehenderit ab delectus! Hic tempora unde veli
                      veritatis libero numquam.</p>
            </div>
        </div>

        <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4"> 
            <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 bg-gray-200 rounded-xl"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />

            <CustomButton
                onClick={sendMessage}
                label='Send'
                className="w-[100px]"
            />
        </div>
        </>
      
    )
}

export default ConversationDetail;