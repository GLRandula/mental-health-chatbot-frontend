import Image from "next/image";
import React from "react";

const UtilizeBody = ({ utilize }) => {
  return (
    <>
      {utilize &&
        utilize.map((data, index) => (
          <div id={data.id} className="single-inner-box" key={index}>
            <h3 className="section-title">{data.title}</h3>
            {data.body.map((inner, i) => (
              <div
                id={inner.id}
                className="rbt-elements-area rbt-shadow-box"
                key={i}
              >
                <div className="wrapper">
                  <h4 className="title-sm">{inner.title}</h4>
                  <div className="desc">
                    <div className="image">
                      <Image src={inner.img} width={892} height={617} alt="" />
                    </div>
                    <p className="b1">{inner.desc}</p>
                    <h6>{inner.subTitle}</h6>
                    <ul className="content-list">
                      {inner.list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.text}</li>
                      ))}
                      {/* <li>
                        Transformer models, like OpenAI's GPT (Generative
                        Pre-trained Transformer) series, became
                      </li>
                      <li>
                        AI text generators, including GPT-3, have found
                        applications in chatbots, content creation
                      </li> */}
                    </ul>
                  </div>
                </div>
                {inner.id === "developer-kernel" ? (
                  <div className="readme-content">
                    <p>
                      Intellibot is a terminal-based client for interacting with
                      the ViewMo cloud platform. It allows users to connect to
                      the platform using their credentials and chat with the bot
                      through a command-line interface. And also this package
                      let users to initialize there own RAG Agents and run them
                      on ViewMo platform.
                    </p>
                    <h4>Installation</h4>
                    <p>To install Intellibot, run:</p>
                    <pre>
                      <code>pip install intellibot</code>
                    </pre>
                    <h4>Usage</h4>
                    <p>
                      <strong>Connect to Intellibot</strong>
                    </p>
                    <p>
                      To connect to Intellibot, use the connect command with
                      your username and password:
                    </p>
                    <pre>
                      <code>
                        intellibot connect --username &lt;your-username&gt;
                        --password &lt;your-password&gt;
                      </code>
                    </pre>
                    <p>Example:</p>
                    <pre>
                      <code>
                        intellibot connect --username jane@gmail.com --password
                        pass
                      </code>
                    </pre>
                    <p>
                      This command logs in to Intellibot and saves credentials
                      to credentials.json.
                    </p>
                    <p>
                      <strong>Chat with Intellibot</strong>
                    </p>
                    <p>
                      Once connected, you can start a chat session with the bot
                      using the chat command:
                    </p>
                    <pre>
                      <code>intellibot chat</code>
                    </pre>
                    <p>Example:</p>
                    <pre>
                      <code>intellibot chat</code>
                    </pre>
                    <p>
                      This starts an interactive chat session where you can type
                      messages and receive responses until you type "exit" or
                      "quit".
                    </p>
                    <p>
                      <strong>Initialize AI Agents</strong>
                    </p>
                    <p>
                      To initialize the AI agent system with a JSON
                      configuration file, use the initialize command:
                    </p>
                    <pre>
                      <code>
                        intellibot initialize path/to/your/config.json
                      </code>
                    </pre>
                    <p>Example:</p>
                    <pre>
                      <code>
                        intellibot initialize
                        C:/intellihack_4.0/cli/ViewMo/config.json
                      </code>
                    </pre>
                    <p>
                      <strong>Check Available Projects</strong>
                    </p>
                    <p>
                      To list all available projects for the authenticated user,
                      use the projects command:
                    </p>
                    <pre>
                      <code>intellibot projects</code>
                    </pre>
                    <p>Example:</p>
                    <pre>
                      <code>intellibot projects</code>
                    </pre>
                    <p>
                      <strong>Execute a Project</strong>
                    </p>
                    <p>
                      To execute a specified project, use the execute command:
                    </p>
                    <pre>
                      <code>intellibot execute project_name</code>
                    </pre>
                    <p>Example:</p>
                    <pre>
                      <code>
                        intellibot execute "Mental health chatbot researcher"
                      </code>
                    </pre>
                    <p>
                      <strong>View Active User Details</strong>
                    </p>
                    <p>
                      To display details of the authenticated user, use the
                      user_details command:
                    </p>
                    <pre>
                      <code>intellibot user_details</code>
                    </pre>
                    <p>Example:</p>
                    <pre>
                      <code>intellibot user_details</code>
                    </pre>
                    <h4>Development</h4>
                    <p>
                      To install the package locally for development, navigate
                      to the root directory (where setup.py is located) and run:
                    </p>
                    <pre>
                      <code>pip install .</code>
                    </pre>
                    <p>
                      You can then use the intellibot CLI commands as described
                      above to test the functionality.
                    </p>
                    <a href="https://pypi.org/project/intellibot/">Follow the Documentation</a>
                  </div>
                ) : (
                  <>
                    {/* <h6>{inner.subTitle}</h6>
                        <p className="b1">{inner.desc}</p>
                        <ul className="content-list">
                          {inner.list.map((item, itemIndex) => (
                            <li key={itemIndex}>{item.text}</li>
                          ))}
                        </ul> */}
                  </>
                )}
                {inner.id === "ui-component" ? (
                  <div className="readme-content">
                    <h4>Installation</h4>
                    <p>
                      viewmo empowers you to seamlessly integrate a chat
                      interface into your React application. Here's a
                      step-by-step guide:
                    </p>
                    <pre>
                      <code>npm install viewmo</code>
                    </pre>
                    <h4>Usage</h4>
                    <p>
                    ViewMo empowers you to seamlessly integrate a chat interface into your React application. Here's a step-by-step guide:
                    </p>
                    <p>
                      <strong>1. Secure Credential Management:</strong>
                    </p>
                    <p>
                      For enhanced security, viewmo leverages environment
                      variables to store your chat credentials. Create a file
                      named .env.local at the root of your project. Inside this
                      file, define the following environment variables,
                      replacing the placeholders with your actual credentials:
                    </p>
                    <pre>
                      <code>
                        REACT_APP_USERNAME=your_username
                        <br />
                        REACT_APP_PASSWORD=your_password
                      </code>
                    </pre>
                    <p>
                      <strong>
                        2. Importing and Utilizing the {`<Chat>`} Component:
                      </strong>
                    </p>
                    <p>
                      Within your React component, import the {`<Chat>`}{" "}
                      component from ViewMo and leverage it as follows:
                    </p>
                    <pre>
                      <code>{`import React from 'react';
import Chat from 'viewmo';

const App = () => {
  // Retrieve credentials securely from environment variables
  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;

  return (
    <div>
      <h1>Welcome to Your Chat Interface</h1>
      <Chat username={username} password={password} />
    </div>
  );
};

export default App;`}</code>
                    </pre>
                    <p>
                      <strong>Explanation: </strong>
                    </p>
                    <ul>
                      <li>We import React and Chat from viewmo.</li>
                      <li>
                        We securely retrieve the username and password from
                        environment variables to safeguard sensitive
                        information.
                      </li>
                      <li>
                        We render the {"<Chat>"} component, passing the
                        retrieved credentials as props to configure the chat
                        functionality.
                      </li>
                    </ul>
                    <p>
                      <strong>
                        3. Comprehensive Example: Putting it All Together
                      </strong>
                    </p>
                    <p>
                      The following example demonstrates the complete setup and
                      usage of the {`<Chat>`} component in your project:
                    </p>
                    <pre>
                      <code>{`import React from 'react';
import Chat from 'viewmo';

const App = () => {
  // Retrieve credentials securely from environment variables
  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;

  return (
    <div>
      <h1>Welcome to Your Chat Interface</h1>
      <Chat username={username} password={password} />
    </div>
  );
};

export default App;`}</code>
                    </pre>
                    <p>
                      <strong>Important Note:</strong>
                    </p>
                    <p>
                      Remember to create the .env.local file at the project root
                      and define the environment variables with your specific
                      credentials:
                    </p>
                    <pre>
                      <code>
                        REACT_APP_USERNAME=your_username
                        <br />
                        REACT_APP_PASSWORD=your_password
                      </code>
                    </pre>
                    <a href="https://www.npmjs.com/package/viewmo?activeTab=readme">Follow the Documentation</a>
                  </div>
                ) : (
                  <>
                    {/* <h6>{inner.subTitle}</h6>
                        <p className="b1">{inner.desc}</p>
                        <ul className="content-list">
                          {inner.list.map((item, itemIndex) => (
                            <li key={itemIndex}>{item.text}</li>
                          ))}
                        </ul> */}
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
    </>
  );
};

export default UtilizeBody;
