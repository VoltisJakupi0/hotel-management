import React from "react";

export default () => {
  const language = localStorage.getItem("language");
  return (
    <div style={{ marginTop: 80 }}>
      <h3>
        {language == "sq"
          ? "Miresevini ne Menaxhimin e Hotilieris"
          : "Welcome to Hotel Management Dashboard"}
      </h3>
      <h5>
        {language == "sq"
          ? "Eksplorini tabat ne menu per te mesuar me shume rreth aplikacionit"
          : "Explore tabs in menu to learn more about our dashboard"}
      </h5>
    </div>
  );
};
