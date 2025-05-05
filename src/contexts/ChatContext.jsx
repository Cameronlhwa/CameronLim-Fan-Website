import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [messageCount, setMessageCount] = useState(0);
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <ChatContext.Provider value={{  // Fixed typo here
            messageCount,
            setMessageCount,
            selectedUser,
            setSelectedUser
        }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    return useContext(ChatContext);
}