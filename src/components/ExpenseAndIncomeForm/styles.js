export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#C7CCDC" : "#F5F6FB",
    borderBottom: "1px solid #eee",
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
    fontWeight: 700,
    fontSize: 12,
  }),
};
