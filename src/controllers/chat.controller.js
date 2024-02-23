import ChatService from "../services/dao/chat.dao.js";
import chatSocket from "../sockets/chat.socket.js";

const chatService = new ChatService();

export const renderChatLog = (request, response) => {
  response.render("chat", {
    title: "Chat.",
    fileCss: "../css/styles.css",
  });
};

export const sendMessage = async (request, response) => {
  const { user, message } = request.body;
  const mesg = { user, message };

  try {
    await chatService.createMessage(mesg);
    chatSocket.emitAddProduct(mesg);
    response.status(201).json({
      data: {
        message: "Mensaje creado",
      },
    });
  } catch (e) {
    response.status(500).json({
      error: {
        message: e.message,
      },
    });
  }
};
