const h1 = React.createElement("h1", {id:"kuku"}, "Hey,I am H1");
const h2 = React.createElement("h2", {id:"kaku"}, "Hey,I'm H2");
const div = React.createElement("div", { id: "child" }, [h1, h2]);
const divp = React.createElement("div", { id: "parent" }, div);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divp);