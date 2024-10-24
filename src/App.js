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
function App() {
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
            <img src={userIcon} alt="user" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio pariatur dolore deserunt non corrupti sapiente nemo
              dolores cupiditate nisi incidunt.
            </p>
          </div>
          <div className="chat">
            <img src={gptLogoIcon} alt="gpt" />
            <p className="txt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio pariatur dolore deserunt non corrupti sapiente nemo
              dolores cupiditate nisi incidunt.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <input placeholder="Send a message" className="input" />
          <button className="send">
            <img src={send} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
