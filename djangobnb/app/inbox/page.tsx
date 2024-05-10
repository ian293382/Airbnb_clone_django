import { getUserId } from "../lib/actions";
import apiService from "../services/apiService";
import React, { useState, useEffect } from 'react'; 
import Conversation from "../components/inbox/Conversation";

// 定義自己要哪些內容 聊天室
export type UserType = {
    id: string;
    name: string;
    avatar_url: string;
}
// 定義聊天室的編號及user
export type ConversationType = {
    id: string;
    users: UserType[];
}



const InboxPage = async () => {
    const userId = await getUserId();

    if (!userId) {
        return (
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>You need to be authenticated...</p>
            </main>
        )
    }

    const conversations = await apiService.get('/api/chat/')
    
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6  space-y-4">
            <h1 className="my-6 text-2xl">Inbox</h1>
            {conversations.map((conversation: ConversationType) => {
                return (
                    <Conversation
                        key={conversation.id}
                        userId={userId}
                        conversation={conversation}
                    />
                )
            })}
          

        </main>
    )
}

export default InboxPage;