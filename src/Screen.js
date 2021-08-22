import React from "react";
// this is the screen component to diplay the required page
class Screen extends React.Component {
  render() {
    // these were passed in props when the screen component was included inside the ipod
    const { Page, changeTheScreen } = this.props;
    // object destructing
    const { Heading, list, isHalf, img } = Page;
    // this is the cnt of id's of the buttons and these id's are given dynamically in sequence so that the active button
    // can be changed easily
    var cnt = -1;
    return (
      <div id="screen" key={Page.id}>
        {/* there are actually two types of pages ,first in which we have the half creens of the ipod with the list of
        buttons and the other half with the image and second in whih the whole screen has the image only */}
        {/* isHalf conatins whether the screen is of halfscreen type or full scree type */}
        {/* this is the jsx for the half tyope screen */}
        {isHalf && (
          // this is the half type screen
          <div id="halfScreen">
            {/* this is the heading of the half type screen */}
            <div id="halfheading">
              <strong>{Heading}</strong>
            </div>
            {/* this is the conatiner of the list as well as the image in a half type screen */}
            <div id="list-image-container">
              {/* this is the conatiner of the list of buttons and also data attribute has the length of the list of the buttons
              so that our code is more general */}
              <div id="list" data={list.length}>
                {/* this is the map functionof the javascript array so that we can traverse the whole list of buttons
                to make the corresponding jsx as required */}
                {list.map((item) => {
                  // made count++ everytime so that id's are guived dynamically to all the buttons of the list
                  cnt++;

                  return (
                    <div id="button-container" key={item + ""}>
                      <button
                        // id given dynamically
                        id={cnt + ""}
                        // onclick eventlistener applied so that the ipod becomes touch screen ,so that it judges the clicking
                        // on the buttons as well as on the ok button inside the wheel
                        onClick={() => {
                          changeTheScreen(item);
                        }}
                        // default class name of active is given to the 0th item bevause if there is a list then it will atleast
                        // have the first item of the list,else it will be of the full image type screen
                        className={cnt === 0 ? "Active" : ""}
                        // heading of the screen specified inside the data attribute so that it can be used in the fucntions respectively
                        data={item + ""}
                      >
                        {/* name of the button is also given dynamically according to the list item(or the page heading) */}
                        {item}
                      </button>
                      <br />
                    </div>
                  );
                })}
              </div>
              {/* this is the image of the half typpe screen */}
              <div id="halfimg">
                <img src={img} alt="display" height="100%" width="100%" />
              </div>
            </div>
          </div>
        )}
        {/* here the jsx of the fullscreen with image type screen starts */}
        {!isHalf && (
          // this is the whole full tyoe screen
          <div id="fullScreen">{
            
          }
            {/* this div of list is just added so that when the user is on the half type screen he must not see the error as
            if the compiler will not be able to apply the event hndler to a list as it is in the full type screen and correspondingly
            give the error of cannot read the className types */}
            {/* actully in its css its display property is made none so that it must not be visible to the user even if it exsists
            it is just a list so that when the user rotates the wheel the active class wil keep on removing and adding on
            these buttons only */}
            {/* also in its data heading is sent so that even when the user tries to click on the inner circle he/she wil be 
            directed back to this page only and user will think that the clicking is not working on halftype screen  */}
            <div id="list" data={4}>
              <button id="0" className="Active" data={Heading}></button>
              <button id="1" className="Active" data={Heading}></button>
              <button id="2" className="Active" data={Heading}></button>
              <button id="3" className="Active" data={Heading}></button>
            </div>
            {/* it is the heading of the full type screen */}
            <div id="fullHeading">
              <strong>{Heading}</strong>
            </div>
            {/* it is the required image of the full type screen */}
            <div id="fullImg">
              {/* this is the image */}
              <img src={img} alt="display" height="100%" width="100%" />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Screen;