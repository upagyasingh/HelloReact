
# 01 - Inception




## What is Emmet ? 

Emmet is a set of plug-ins for text editors that help web developers write HTML and CSS code faster

## 1. Difference between Library and Framework ? 

**Library** (Building the House with Bricks):

A library is a collection of pre-written code that you can use to perform common tasks. You have control over how and when to use it, integrating it into your own codebase as needed.

Control: You have the flexibility to choose when and how to use the library within your application. You’re in charge of the flow and the structure of your application.

Example: Think of a library like buying bricks, cement, and tools to build your house. You choose the design, lay out the bricks, and control every aspect of the construction process. You use the materials (library) as needed, but you build the entire house (application) yourself.
Example of Library:

**Framework** (Buying a Prebuilt House):

Definition: A framework provides a structure or skeleton for your application. It dictates the overall design and flow, including the architecture and standard practices. You build your application according to the framework’s guidelines.

Control: The framework controls the flow and structure of your application. You plug your code into the framework, and it manages the overall architecture. The framework "calls" your code rather than you calling the framework.

Example: Buying a prebuilt house is like using a framework. The house (framework) is already constructed with a specific layout, style, and features. You fit your furniture and decorations (your code) into the house, but the overall structure and design are predefined.

## 2. What is a CDN ? 

A Content Delivery Network (CDN) is a network of distributed servers designed to deliver content to users more efficiently by serving it from locations closer to them.

example : 

A CDN is like setting up multiple food stalls at a concert. Instead of having one central food stand, you place several stalls around the venue. This way, attendees get their food faster and don’t have to wait in long lines. Similarly, a CDN distributes content across many servers worldwide, so users can access it more quickly and reliably from a nearby server.

**CDN and React**

When working with React or any JavaScript framework/library, using a CDN (Content Delivery Network) to serve React and other dependencies can be a quick way to set up and prototype applications.

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

**Explanation:**

React CDN: https://unpkg.com/react@17/umd/react.development.js is the URL to the development version of React.


ReactDOM CDN: https://unpkg.com/react-dom@17/umd/react-dom.development.js is the URL to the development version of ReactDOM.



**For a more robust setup, consider using modern build tools like Create React App, Vite, or Next.js, which handle dependencies, versioning, and optimizations. However, for learning and quick testing, using CDN links is a straightforward and effective approach.**

## 3. Why React is called React ?

React is named for its core functionalities that focus on efficiently updating the user interface. Here are the key reasons:

- **React to State Changes**: 
  - Automatically updates the UI when the application state changes.

- **Declarative UI**: 
  - Defines what the UI should look like based on the state, with React handling the necessary updates.

- **Component-Based**: 
  - Components react to changes in props and state, updating only the necessary parts of the UI.

- **Efficient Rendering**: 
  - Uses a Virtual DOM to minimize updates and optimize performance.

React's name reflects its ability to dynamically respond to changes and efficiently manage UI updates.

## 4. What is crossorigin in script tag ? 

- Cross-Origin refers to interactions between web pages or resources that come from different origins. 
- `Cross-Origin Resource Sharing (CORS)` is related to web security and protocols, but it's not a protocol itself. Instead, it's a set of rules and headers that web browsers use to manage cross-origin requests securely.
### Coffee Shop Analogy for `crossorigin`

**Scenario**: You’re at a coffee shop (your website) and want to get a special blend of coffee from a famous roaster (a different domain).

### 1. Without `crossorigin` (Default)

- **Analogy**: You walk up to the coffee shop counter and order a coffee. The shop handles the request without any special instructions.
- You order from a coffee shop with no special handling for your details. If the shop’s policy doesn’t allow such orders, you might not get the coffee.
- **Real World**: The resource (like a script) is requested without special CORS settings. The response might not be shared if there are no proper CORS headers.

### 2. With `crossorigin="anonymous"`

- **Analogy**: You order your coffee without giving any personal details. The coffee shop just needs to have the right coffee blend ready for you.
- You order, and the shop will give you the coffee if it’s available without needing your personal details.
- **Real World**: The request for the resource is made without sending credentials (cookies or authentication). The response must include CORS headers allowing the resource to be accessed.


### 3. With `crossorigin="use-credentials"`

- **Analogy**: You order your coffee and provide your membership card (credentials) for a special discount. The coffee shop checks your membership and gives you the blend.
- You show your membership card for a special blend, and the shop will only give you the coffee if your membership is valid and the shop accepts such requests.
- **Real World**: The request includes credentials (like cookies). The server must include specific headers to allow the resource to be accessed, and it must accept credentials.


In web terms, the `crossorigin` attribute dictates how the browser requests and handles resources from other domains, controlling whether credentials are sent and how the server should respond.

## 5. Difference between React and ReactDOM ? 

### React vs. ReactDOM: Building and Furnishing a House

### React: Designing the House

- **Role**: `React` is like the `architect or interior designer` who creates the blueprints and design plans for the house. They define the layout, room configurations, and the overall design of the house.
- **Function**: React focuses on defining the components of the house (e.g., living room, kitchen, bedrooms) and how they interact. It creates a plan but doesn’t actually build or place anything.

### ReactDOM: Constructing and Furnishing the House

- **Role**: `ReactDOM` is like the `construction crew and interior decorators` who take the design plans and execute them. They build the house based on the blueprints and furnish it with actual items like furniture and decorations.
- **Function**: ReactDOM takes the design defined by React and renders it into a physical house. It places the rooms, furniture, and decorations exactly where they should be based on the architect’s plans.


| **Aspect**              | **React**                                          | **ReactDOM**                                     |
|-------------------------|----------------------------------------------------|--------------------------------------------------|
| **Purpose**             | Provides the tools for creating and managing UI components | Renders the UI components created with React into the DOM |
| **Role**                | Defines the structure, behavior, and state of components | Handles the actual insertion and updating of components in the browser |
| **Primary Responsibility** | Component definition, lifecycle management, and state management | Actual rendering of components to the web page and updating them |
| **Functionality**       | - Defines components and their interactions <br> - Manages component state and lifecycle methods | - Translates React components into actual HTML elements <br> - Updates the DOM to reflect changes in the React component tree |
| **Usage**               | Used to create components (e.g., `class MyComponent extends React.Component`) | Used to render components into a specific DOM element (e.g., `ReactDOM.render(<MyComponent />, document.getElementById('root'))`) |
| **Code Example**        | ```const MyComponent = () => { return <div>Hello, World!</div>; };``` | ```import ReactDOM from 'react-dom'; ReactDOM.render(<MyComponent />, document.getElementById('root'));``` |
| **APIs and Functions**  | - `React.createElement()` <br> - `React.Component` <br> - `React.useState()` | - `ReactDOM.render()` <br> - `ReactDOM.unmountComponentAtNode()` |


## 6. What is difference between react.development.js and react.production.js files via CDN?

### React: Development vs. Production

| **Aspect**      | **react.development.js**                | **react.production.js**                     |
|-----------------|-----------------------------------------|---------------------------------------------|
| **Purpose**     | For development and debugging           | For production performance                  |
| **Size**        | Larger, includes debugging info          | Smaller, minified for efficiency            |
| **Error Messages** | Detailed, helps with debugging        | Minimal, optimized for performance          |
| **Source Maps** | Often included for easier debugging     | Typically not included                      |
| **Performance** | Slower due to extra checks               | Faster due to optimizations                 |
| **Usage**       | Use during development                   | Use in production environments              |
| **Example**     | `<script src="https://unpkg.com/react@18/umd/react.development.js"></script>` | `<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>` |


## 7. Difference between async and defer ? 

### Async Coffee Delivery

The coffee shop hires a coffee delivery service that brings fresh coffee beans. The delivery service arrives at any time and quickly drops off the coffee beans. As soon as the coffee beans are delivered, the barista starts using them to make coffee, regardless of whether the shop is fully set up or not. This is like using the `async` attribute: the script loads quickly and runs as soon as it's available, without waiting for the entire page to be ready.

### Defer Newspaper Delivery

The coffee shop also gets a daily newspaper delivered, but the delivery person arrives only after the shop opens. They wait until the shop is fully set up before delivering the newspaper to make sure it’s placed on the counter where customers can see it. This is like using the `defer` attribute: the script waits until the HTML is completely loaded before running, ensuring everything is in place.

| **Attribute** | **Download**                           | **Execution Timing**                       | **Order of Execution**          |
|---------------|----------------------------------------|--------------------------------------------|---------------------------------|
| **async**     | Asynchronously, while HTML is parsing   | Immediately after download, can interrupt HTML parsing | Not guaranteed; may vary       |
| **defer**     | Asynchronously, while HTML is parsing   | After the HTML is fully parsed             | Maintained as per script order  |

### When to Use `defer` vs. `async`

- **`defer`**:
  - **Best for**: Scripts that need to wait until the DOM is fully available and should run in the order they appear in the HTML.
  - **Benefits**: Ensures that all HTML is parsed before execution.
  - **Example**:
    ```html
    <script src="setup.js" defer></script>
    ```
    `setup.js` will run after the entire HTML document is parsed, making sure that DOM elements are ready to be manipulated.

- **`async`**:
  - **Best for**: Scripts that can run independently of other scripts and the DOM.
  - **Benefits**: Executes as soon as the script is downloaded, which can be faster but does not guarantee the order of execution.
  - **Example**:
    ```html
    <script src="analytics.js" async></script>
    ```
    `analytics.js` will run as soon as it’s downloaded, regardless of the HTML parsing status, and does not wait for other scripts or the complete DOM.

