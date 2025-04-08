import React from 'react';

const MessageParser = ({ children, actions }: {
  children: any;
  actions: { handleUserQuery: (query: string) => void };
}) => {
  const parse = (message: string) => {
    console.log("User input:", message); // Log user input
    actions.handleUserQuery(message); // Pass user input to ActionProvider
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};


export default MessageParser;