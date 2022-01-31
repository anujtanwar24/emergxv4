class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();

      if(lowercase.includes("heart attack")){
          this.actionProvider.greet();
      }

      if(lowercase.includes("nearest doctor")){
        this.actionProvider.gret();
    }
    }
  }
  
  export default MessageParser;