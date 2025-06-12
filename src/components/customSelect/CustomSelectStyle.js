export const CustomSelectStyles = () => ({
  control: (base) => ({
    ...base,
    backgroundColor: "#f7f7f7",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "none",
    height: "44px",
    color: "#101828",
    fontSize: "16px",
    fontFamily: "Manrope",
    fontWeight: "500",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: "#f7f7f7",
    color: state.isSelected ? "#101828" : "#8e929a",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 500,
    padding: "12px 16px",

    ":focus": {
      color: "#101828",
    },
    ":hover": {
      color: "#101828",
    },
    ":active": {
      backgroundColor: "#f7f7f7",
      color: "#101828",
    },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#f7f7f7",
    borderRadius: "12px",
    overflow: "hidden",
  }),

  menuList: (base) => ({
    ...base,
    maxHeight: "272px",
    margin: "12px 8px",
    borderRadius: "12px",
    scrollbarWidth: "thin",
    scrollbarColor: "#dadde1 transparent",

    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#dadde1",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-button": {
      display: "none",
      height: 0,
      width: 0,
    },
    "&::-webkit-scrollbar-button:single-button:vertical:decrement": {
      display: "none",
      height: 0,
      width: 0,
    },
    "&::-webkit-scrollbar-button:single-button:vertical:increment": {
      display: "none",
      height: 0,
      width: 0,
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#101828",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
});
