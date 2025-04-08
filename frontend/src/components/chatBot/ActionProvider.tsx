import React from 'react';
import { chatWithBot } from "@/lib/apis/apiCalls/chatBotApi"; // Import the API function

const ActionProvider = ({ createChatBotMessage, setState, children }: {
  createChatBotMessage: (message: string, options?: any) => any;
  setState: any;
  children: any;
}) => {
  const handleUserQuery = async (query: string) => {
    try {
      const response:any = await chatWithBot(query);

      if (response.message) {
        const botMessage = createChatBotMessage(response.message, {
          loading: false,
        });

        setState((prevState: any) => ({
          ...prevState,
          messages: [...prevState.messages, botMessage],
        }));
      }

      // Add items (if available) as messages
      if (response.items?.length > 0) {
        response.items.forEach((item: any) => {
          const itemMessage = createChatBotMessage(`Item: ${item.name}\nPrice: $${item.price}\nDescription: ${item.description}`);
          setState((prevState: any) => ({
            ...prevState,
            messages: [...prevState.messages, itemMessage],
          }));
        });
      }
    } catch (error) {
      const errorMessage = createChatBotMessage("Sorry, something went wrong. Please try again.");
      setState((prevState: any) => ({
        ...prevState,
        messages: [...prevState.messages, errorMessage],
      }));
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleUserQuery,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
