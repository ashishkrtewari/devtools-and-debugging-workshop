const user = {};
const infos = () => {
  const count = 10;
  console.info("Welcome to DevTools and Debugging Workshop");
  user.name = "Ashish";
};
const warnings = () => {
  console.warn("Keep Learning");
  console.warn("Its getting boring");
  user.country = "India";
};
const errors = () => {
  console.error("No Student Found");
  console.error("No Mentor Found");
  user.hobby = "singing";
};
const renderLogs = () => {
  infos();
  warnings();
  errors();
};
