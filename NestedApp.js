const div = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hey! I am a nested element.")));
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(div);
root.render(div);