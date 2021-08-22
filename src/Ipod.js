import React from "react";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
// import firebase from "firebase/app";
// import "firebase/firestore";
//this the component which has the required screen component as well as the buttons which are below the screen
class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      //these are the required pages which will come on the screen respectively ,all in one array
      pages: [],
      // here i have explained on page and in similar way we can understand the data of other pages respectively
       pages:[{
          //this is the heading of a particular page
          Heading: "IPOD",
          //it is the list of buttons in that page
          list: ["Music", "Settings", "Games", "Apps"],
          //this is for whether it is a page in which half the screen is with image and half with options or only an image
          isHalf: true,
          //this is the required image in a page(irrespective of whether half or full)
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvxtbA68xdAqondYCwOzjbYiQX6lLcU5pVQ&usqp=CAU",
          back: "IPOD",
        },
        {
          Heading: "Music",
          list: [],
          isHalf: false,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmlodnrWBtGSpRHuKltQrzumJilN_Shqonw&usqp=CAU",
          back: "IPOD",
        },
        {
          Heading: "Settings",
          list: [],
          isHalf: false,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZieuWRl-TqN9Je5GJDFOJqcsToHi83AovQ&usqp=CAU",
          back: "IPOD",
        },
        {
          Heading: "Games",
          list: [],
          isHalf: false,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxbHt9yPDBypozZuV26VA40X7B9cpQaDSCg&usqp=CAU",
          back: "IPOD",
        },
        {
          Heading: "Apps",
          list: ["Facebook", "Whatsapp", "Snapchat", "Gmeet"],
          isHalf: true,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOa1byQIa6_iwSzAL3jreSh1ssYPSI0hoOg&usqp=CAU",
          back: "IPOD",
        },
        {
          Heading: "Facebook",
          list: [],
          isHalf: false,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeje5u8ZW_PriaW8fk8j_qZoxUW4nS2lXMiw&usqp=CAU",
          back: "Apps",
        },
        {
          Heading: "Whatsapp",
          list: [],
          isHalf: false,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEp4QCJTNi94110rqbRfteoG5OSw03JhXuQ&usqp=CAU",
          back: "Apps",
        },
        {
          Heading: "Snapchat",
          list: [],
          isHalf: false,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7dHUw3wIGznZSdiRloSTr-LpFykfRgVn-8Q&usqp=CAU",
          back: "Apps",
        },
        {
          Heading: "Gmeet",
          list: [],
          isHalf: false,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYa4TKVHQnA31cxCguK8qLSxLWrNfcp-zog&usqp=CAU",
          back: "Apps",
        },
      ],
      // // pages was the data of all the pages
      // // but this Active is the  page which is  currently active on the screen
      // // by default i have provided the Ipod page
      Active: {
        Heading: "IPOD",
        list: ["Music", "Settings", "Games", "Apps"],
        isHalf: true,
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvxtbA68xdAqondYCwOzjbYiQX6lLcU5pVQ&usqp=CAU",
        id: "100",
        back: "IPOD",
      },
      // this is the time visible on the top left corner and defined in state so that re rendering takes place when the
      // state changes
      currentTime: new Date().toLocaleTimeString(),
    };
  }
  //this is the function to change the screen according to what is clicked by the user
  changeTheScreen = (item) => {
    //here we get the heading of the page to be opened in (item)

    const { pages } = this.state;
    //this is to take out the page which the user requires to come on the screen
    //from the data in the araray of pages
    let page1 = pages.filter((page) => page.Heading === item);
    //this to set the state so that rerendring takes place and the page requested by the user goes inside the Active option
    //and so it comes on the screen respectively

    this.setState({
      Active: page1[0],
    });
  };

  //this is the function for the clicking event that will occur in the button inside that rotating wheel
  //so that the page coresponding to the active button shall open up
  clicking = () => {
    //this is to take out which button is active
    // console.log(document.getElementsByClassName("Active"));
    let item = document.getElementsByClassName("Active")[0];
    //if it comes out to be undefined it means there is no list in the screen and we are inside the page
    //in which we have only a image on the whole screen

    if (item !== undefined) {
      //In jsx ,i have provided the corresponding heading in a data attribute
      item = item.getAttribute("data");
      // console.log(item);
      //used the function defined above to make the necessary changes
      this.changeTheScreen(item);
    }
  };
  // this function is for the backcliking to go one page back
  backClicking = () => {
    // just taken the Active element from the state and changed the screen accordingly by function defined above
    const { Active } = this.state;
    this.changeTheScreen(Active.back);
  };
  // it is componentDidMount funtion with required event listenersfrom zingtouch,also data fetching from the firebase is
  // in it so that the app has the data form starting
  componentDidMount() {
    // this  is to take read data from firebase
    // pages is a collection made in FB
    
    
    
    // firebase
    //   .firestore()
    //   .collection("pages")
    //   .get()
    //   .then((snapshot) => {
    //     const pages = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       // id is also specified so that it may be required in future
    //       data["id"] = doc.id;
    //       return data;
    //     });
    //     // state is set at starting only
    //     this.setState({
    //       pages,
    //     });
    //   });

    // var currentAngle = 0;
    //Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
    //first of all i have taken the target element from DOM and made a new zingtouch region
    var target = document.getElementById("outerCircle");
    var region = new ZingTouch.Region(target);
    //lastTime indicates the id of previously active button
    let lastTime = 0;
    //LastTimeAngle denotes that when we last time changed the active button (at which angle)
    var LastTimeAngle = 0;

    //now we have bound the zingtouch region with the rotate gesture
    region.bind(target, "rotate", function (e) {
      //in e we get the required events that are captured
      // currentAngle += e.detail.distanceFromLast;

      let angle = e.detail.distanceFromOrigin;
      //this is made so that after every rotate of 15 degrees the active button must be changed
      //lesser and greater are according to whether the user rotates in the clockwise or anticlockwise direction.
      if (angle - LastTimeAngle > 15) {
        //here len is the length of the list of the buttons n a particular screen,in jsx its size is defined in an attribute
        //data so that we get a more general code in which the number of buttons on a screen can be different
        let len = document.getElementById("list").getAttribute("data");
        //here I have removed the active class from the button which was active before
        
        document.getElementById(lastTime + "").classList.remove("Active");
        //here I have added the active class to the next button
        // all the expressions are written without the addition sign so that there is no problem in javascript
        document.getElementById("" + ((lastTime - (1 - 2)) % len)).className =
          "Active";
       
        //here the last time has been changed for future as well as LastTimeAngle
        lastTime = (lastTime - (1 - 2)) % len;
        LastTimeAngle = angle;
      } else if (angle - LastTimeAngle < -15) {
        //similarly the else case is also made
        let len = document.getElementById("list").getAttribute("data");

        const num = len;
      
        document.getElementById(lastTime + "").classList.remove("Active");
        
        document.getElementById(
          "" +
            ((((lastTime - 1 - (num - (2 * num))) % num) - (num - (2 * num))) % num)
        ).className = "Active";

        lastTime =
          (((lastTime - 1 - (num - (2 * num))) % num) - (num - (2 * num))) % num;
          
        LastTimeAngle = angle;
      }
      //this is a call to setoutput function which will make the string from the data collected from the event
      //and print it on the console respectively
      setOutput([
        ["Gesture", "Rotate"],
        ["angle", Math.floor(e.detail.angle) + "°"],
        ["distanceFromOrigin", Math.floor(e.detail.distanceFromOrigin) + "°"],
        ["distanceFromLast", Math.floor(e.detail.distanceFromLast) + "°"],
      ]);
    });
    //funciton to print on console the events as made by muse by the user
    function setOutput(data) {
      var outputStr = "> ";
      for (var i = 0; i < data.length; i++) {
        outputStr +=
          data[i][0] + ": " + data[i][1] + (i === data.length - 1 ? "" : " , ");
      }

      console.log(outputStr);
    }
    // this function is used so that the time at the top left corener changes after every one second
    setInterval(() => {
      // state is changed after every one second so that re render takes place and date get refreshed everytime
      this.setState({
        // it is a function to take out the time
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      //this is the outer div inside which my Ipod wil come(like body)
      <div id="main">
        {/* this is the required Ipod to be formed */}
        <div id="ipod">
          {/* this div has the icons visible on the top of the IPAD */}
          <div id="icons">
            {/* it has the time and it is taken from the state so that time changes after every re render */}
            <div id="clock">{this.state.currentTime}</div>
            {/* this div has the required icons on the top right corner */}
            <div id="right-side-icons">
              {/* here we have those icons in their respective divs */}
              <div>
                <img
                  src="https://image.flaticon.com/icons/png/128/1436/1436397.png"
                  alt="signals"
                ></img>
              </div>
              <div>
                <img
                  src="https://image.flaticon.com/icons/png/128/254/254613.png"
                  alt="wifiIcon"
                ></img>
              </div>
              <div>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/566/566236.svg"
                  alt="blutoothIcon"
                ></img>
              </div>

              <div>
                <img
                  src="https://www.flaticon.com/premium-icon/icons/svg/2200/2200004.svg"
                  alt="BatteryIcon"
                ></img>
              </div>
            </div>
          </div>
          {/* this is the screen component */}
          <Screen
            //this is the page data which has to be displyed on the screen is passed as props to the screen component
            Page={this.state.Active}
            //this is the function to change the screen so that  the child component can raise an event to change
            //screen as required
            changeTheScreen={this.changeTheScreen}
          />
          <br />
          {/* this is the buttons container(outerRectangle) */}
          <div id="outerRectangle">
            {/* this is the outer circle of the ring where rotating event need to be catched */}
            <div id="outerCircle">
              {/* this is the menu button so that user can go directly to the menu when required */}
              <div id="menu">
                <button
                  onClick={() => {
                    //raised an event to change the screen page to Ipod as user want's to go back to menu
                    this.changeTheScreen("IPOD");
                  }}
                >
                  MENU
                </button>
              </div>
              {/* these are the required flaticons */}
              <div id="leftArrow">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/854/854183.svg"
                  alt="left-arrow"
                  draggable="false"
                />
              </div>
              <div id="rightArrow">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/854/854184.svg"
                  alt="right-arrow"
                  draggable="false"
                />
              </div>
              <div id="back">
                <button
                  onClick={() => {
                    this.backClicking();
                  }}
                >
                  {"<<"}
                </button>
              </div>
              {/* this is the innner circle of the ring in which ,if clicked will take us to the the screen corresponding to */}
              {/* the button that is currently active */}
              <button
                id="innerCircle"
                onClick={() => {
                  this.clicking();
                }}
              ></button>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Ipod;