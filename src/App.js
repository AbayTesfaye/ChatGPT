import "./App.css";
import gptlogo from "./assets/chatgpt.svg";
import add from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import send from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptLogoIcon from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";
function App() {
  const handleSend = () => {
    const res = sendMsgToOpenAI();
  };
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptlogo} alt="logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={add} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="message icon" />
              What is Programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="message icon" />
              What to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="home" className="listItemImg" /> Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="listItemImg" /> Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="rocket" className="listItemImg" /> Upgrade to
            pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="user" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio pariatur dolore deserunt non corrupti sapiente nemo
              dolores cupiditate nisi incidunt.
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptLogoIcon} alt="gpt" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae est, earum id cum ea commodi, saepe tempora ut
              perspiciatis, nesciunt in autem repellat tenetur minus
              repellendus. Ratione, voluptatem? Magnam asperiores sit voluptates
              architecto? Cupiditate porro id vitae veritatis, fugiat molestiae
              reprehenderit exercitationem atque, repudiandae in nostrum
              voluptatibus illum? Obcaecati consequuntur reprehenderit hic,
              enim, voluptates eos aliquid recusandae adipisci repellat eveniet
              id dolorem dolorum maxime impedit veritatis ipsum officia nobis
              nihil laborum sed nemo deleniti? Dolorum ratione, laboriosam
              distinctio delectus officiis aperiam, rerum similique sunt est
              perferendis laudantium recusandae error. Tenetur sunt temporibus
              exercitationem quisquam nulla dignissimos ea. Vel, quisquam quae!
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input placeholder="Send a message" />
            <button className="send">
              <img src={send} alt="send" />
            </button>
          </div>
          <p>
            ChatGPT may produce incorrect information about people,places or
            facts. Chatgpt August 20 version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
