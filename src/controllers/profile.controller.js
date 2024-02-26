import UserService from "../services/dao/mongoDb/users.dao.js";

const userService = new UserService();

export const renderProfile = async (request, response) => {
  try {
    if (!request.isAuthenticated()) {
      return response.status(401).send("Unauthorized: Usuario no autenticado");
    }

    const userEmail = request.user.email;
    const userFromDatabase = await userService.getUserByEmail(userEmail);
    const userToRender = new UserDTO(userFromDatabase);

    response.render("profile", {
      title: "Perfil",
      userToRender,
      fileCss: "../css/styles.css",
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).send("Internal Server Error");
  }
};
