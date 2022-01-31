
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }


 greet = () => {
     
     const message = this.createChatBotMessage("Showing first-aid for Heart attack");
     this.addMessageToState(message);
 };

 gret = () => {
     
    const message = this.createChatBotMessage("searching");
    this.addMessageToState(message);
};

 addMessageToState = (message) => {
     this.setState(prevState => ({
         ...prevState,
         messages: [...prevState.messages, message]
     }))
 }
}
 
 export default ActionProvider;