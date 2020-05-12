import home from "../../pages/Home";

export default (option: "Women" | "Dresses" | "T-Shirts") => {
  home.selectMenuOption(option);
};
