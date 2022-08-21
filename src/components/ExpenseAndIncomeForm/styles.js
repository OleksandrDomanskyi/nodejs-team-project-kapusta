export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#F5F6FB" : "#ffffff",
    color: state.isSelected ? "#52555F" : "#C7CCDC",
    borderBottom: "1px solid #eee",
    // color: "#C7CCDC",
    "&:hover": {
      backgroundColor: "#F5F6FB",
    },
  }),
  control: () => ({
    display: "flex",
    justifyContent: "space-between",
    borderTop: "none",
    borderBottomLeftRadius: "22px",
    borderBottomRightRadius: "22px",
    padding: "2px 20px",
  }),
  placeholder: () => ({
    width: "107px",
    color: "#C7CCDC",
  }),
  valueContainer: () => ({
    display: "flex",
    alignItems: "center",
    color: "#C7CCDC",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  singleValue: () => ({
    color: "#52555F",
    fontSize: 12,
  }),
};
