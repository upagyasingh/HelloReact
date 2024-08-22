const heading1 = React.createElement(
    "h1",
    {id:"title1"},
    "heading 1"
)

const heading2 = React.createElement(
    "h2",
    {id:"title2"},
    [React.createElement("u",
        {class :"a1"},
        "i am underline tag of h2"
    ),
        React.createElement("br"),

        React.createElement("b",
            {class :"a1"},
            "i am bold tag of h2"
        )]
)

const container = React.createElement(
    "div",
    {id:"box"},
    [heading1,heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);