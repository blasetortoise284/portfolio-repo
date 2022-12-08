import React from 'react';
import "./projects.css";
import {Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Development = () => {
    const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 5rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
    return (
        <section id="Development" data-scroll-section>
            <div className="section">
                <Fade keyframes={customAnimation} direction="up" triggerOnce={true}>

                </Fade>
                <div className="projSect">
                    <h1>Development</h1>
                    <div className="headingSub">
                    <subtitle>DEVELOPMENT INDIVIDUAL PROJECT</subtitle>
                    </div>
                    
                    <h2>The Project</h2>
                    <p>The goal of this project was to develop an interactive interface, use interface components, and link the components to an internal data state by becoming familiar with React.
                        I decided to make an application that represents my current shoe collection as if it were an actual shoe store, enabling users to choose and purchase as many of their own pairs that they may desire.
                        The value in this application is that it allows users to view the kinds of shoes a current college student interested in dance and streetwear owns, possibly gain inspiration from having a personal insight to someone's closet, sort and filter these items easily according to their own interests, and be able to purchase their own pairs easily from a single webpage.</p>
                </div>

                <div className="projSect">
                    <h2>Ideation</h2>
                    <div className="subsection">
                    <h3>Functional Features</h3>
                    <p>For my application, I implemented filtering, sorting, and aggregating features in how the user would be able to interact with the application. As my project focused on emulating an online store, I found that filtering and sorting would be key for users to sift through and organize the information on the webpage in a way that is most conducive to their personal needs. As online stores also provide users the option to compile selected items to view the total number of items selected and cost overall, I also implemented a shopping cart for users to aggregate their shoes and the resulting costs.</p>
                    <h3>Usability Principles</h3>
                    <p>Since this was my first time working with Javascript and React outside of the studios from the semester, I had difficulty considering both the implementation of usability principles and functionality while working on this assignment. Regardless, I tried to highlight consistency & predictability, effectivity, controllability, customizability, and visibility while working on this assignment:</p>
                    <ul>
                        <li>Consistency & predictability: The layout and hierarchy of this application are consistent across the display and cart, and the functionality of the filtering, sorting, and aggregating features are also predictable for each attribute chosen and each action taken. All of the displayed follow a clear information hierarchy, which was achieved by using a consistent template for each shoe card. This same approach was used for each cart card. Using the filtering and sorting features results in a display change that is consistent for each attribute regardless of which attribute is chosen. This goes for the incrementing/decrementing and remove features for each cart card, as all reactivity and functionality is available and consistent for each one. Lastly, the cart and side bar for filtering/sorting are consistently visible to the user as they scroll through the display.</li>
                        <li>Effectivity: This application essentially displays no other unneccesary information besides the key points highlighted for the goal of the webpage: a display of shoes, user control in how the shoes are displayed using filtering and shorting, and functional features for users to add desired items to a cart and control what and how many items are in their cart. All of these support any major task at hand a user is wanting to complete when using this application.</li>
                        <li>Controllability: All of the control lies with the user in terms of displaying certain shoes and adding them to their cart, most of which comes with the customizability feature of this application. However, one particular control feature I implemented was not immediately removing items from the cart once it has been decremented to 0. Under default conditions, a shoe would immediately be removed from the cart once this occurred, but considering a user may accidentally or purposefully decrement a shoe count to 0 but didn't want the shoe to be removed entirely, I decided to implement a "Remove Shoe From Cart" that enabled the user to completely control what shoes they decide to include in their cart in addition to the "Add to Cart" buttons.</li>
                        <li>Customizability: The user essentially has all of the power in deciding what shoes to view and how those shoes are organized through the sort and filter features included. Not only can users filter by colors or shoe type, but they can use this filter with however many attributes under these categories simultaneously as they see fit. Additionally, users are able to sort the displayed shoes by price from low to high and high to low, easily being able to see shoes according to their price needs. Once users have decided whether or not they would like to purchase any shoes, they have the ability to add them to a cart to checkout as they desire. Users are then able to control how many of a given shoe they may want to purchase using either the shoe count control that is included in each card for a given shoe in the cart, or the displayed shoe card's "Add to Cart" button. Finally, users have the option to reset any changes they have made, as they have the options to reset any and all filters selected, remove a given shoe from the cart, and clear the cart entirely. A blank cart demonstrates when no items have been added to the cart, or when the cart has been cleared.</li>
                        <li>Visibility: All changes induced by the user are made visible to the user so that they can view exactly where they are in the system. With filtering and sorting, the boxes indicate whether a certain attribute has been selected or not, and the displayed cards will rearrange according to those selected attributes. When no shoes fulfill a certain condition, no shoes being displayed indicates this clearly. Users can also clearly see the state of the cart and the number of each item in the cart by the shoe count displayed in each card for a given shoe. They are also able to view when the shoe count changes through their actions in incrementing/decrementing through the cart, or incrementing through the display.</li>
                    </ul>
                    </div>
                    <div className="subsection">
                    <h3>Sketches and Lo-Fi Wireframing</h3>
                    </div>
                    <div className="subsection-end">
                    <h3>Hi-Fi Prototyping</h3>
                    </div>
                </div>

                <div className="projSect">
                    <h2>Within the Code</h2>
                    <div className="subsection">
                    <h3>Organization of Components</h3>
                    <p>I used a total of 5 components within the App component:</p>
                    <ul>
                        <li>Cart is the component that holds all of the CardCart items, as well as an appropriate title, a button to clear the cart, the total cost of the items currently held in the cart, and a button to check out (though not functional, as it would require another webpage). This component is updated each time an item is added or removed from the cart, when the cart is cleared, and when a given item is incremented or decremented.</li>
                        <li>CartCard is the component for each item that is present in the cart and includes the name of the added shoe, a count number indicating how many of a given shoe are currently in the cart, a button to remove the shoe from the cart, and an incrementor/decrementor to control the count number.</li>
                        <li>CustomBar is the component for the side bar that holds all of the options under which a user can filter or sort the displayed items. It includes a button to reset all of the filters (does not apply to sorting), two filter categories called "Shoe Color" and "Shoe Type", and a sorting category called "Sort By". Each of the categories has a number of attributes under which the user can customize the displayed items.</li>
                        <li>Header is the component for the header of the page and includes the title of the application.</li>
                        <li>ShoeCard is the component for each shoe displayed on the page, including information about the name of the shoe, the color(s) of the shoe, the shoe type, the price of the shoe, as well as a button to add a given shoe to the cart.</li>
                    </ul>
                    </div>
                    <div className="subsection">
                    <h3>How Data is Passed Down Through Components</h3>
                    <p>All of the data about the shoes is extracted from a JSON file I created called "shoe-data.json" in the "assets" folder of the "src" folder, which provides information about each of the 13 shoes displayed on the application. "shoe-data.json" provides the name, color(s), type, price, and image path for each shoe. This is imported as "shoeData."</p>
                    <ul>
                        <li>ShoeCard: I used the arrow function included from the React Studio stencil code in order to import the images for each shoe, and I passed each given shoe and its index (since the shoes are arranged in an index in the JSON), as well as the function "updateCart" as props to a ShoeCard component using a mapping arrow function on "displayData." "displayData" is the array of all the shoes that are to be displayed on the page according to what filter/sort attributes have been selected. The function "updateCart" enables the adding of an item to the cart on the click of the "Add to Cart" button for a given shoe.</li>
                        <li>CustomBar: This component has a total of four functions passed in as props. "resetDisplay" is a function that updates the state of the display in response to the click of the "Reset All Filters" button in the CustomBar. "createCheckboxesColors", "createCheckboxesTypes", and "createSortRadios" are all functions that generate the necessary checkboxes or radio buttons for the filtering and sorting features of the application. These functions will also indicate to the display on what shoes to show based on what particular attributes for a given filtering/sorting group have been selected.</li>
                        <li>Cart: This component takes in 3 functions and 2 values. The three functions include "resetCart," "handlePairs," and "removeShoe." "resetCart" updates the cart to be empty when the "Clear" button in the Cart component is clicked, "handlePairs" updates the count for each item in the cart when the incrementor/decrementor button is pressed, and "removeShoe" removes a shoe from the cart when the "Remove Shoe From Cart" button for a given CartCard is clicked. The two values include the cart products "prods" and cart total "total," "prods" being a dictionary of all of the shoes currently contained in the cart and "total" being the aggregated cost of all items in the cart. "prods" is used generate a CartCard item for each shoe currently in the cart through a mapping arrow function, and "total" is displayed at the bottom of the cart.</li>
                        <li>CartCard: This component takes in two values and two functions, the two values being "name" and "prods." These are inherited from the Cart component, as the CartCard component is used within the Cart, to display the name, price, and count of a given CartCard item. Since "prods" is a dictionary of all of the items as keys and their values being an array containing the price and count of the shoe, "name" is used to extract the prices and counts from "prods". The count is updated using the two functions "handlePairs" and "removeShoes" inherited from the Cart component. "handlePairs" updates the count of the shoes upon the incrementation/decremenation of the shoe, and "removeShoe" resets the count of a given shoe in the cart and the cart total on the click of the "Remove Shoe From Cart" button.</li>
                    </ul>
                    </div>
                    <div className="subsection-end">
                    <h3>How the User Triggers State Changes</h3>
                    <p>I used a total of 4 states, "typeState," "colorState", "sortState", and "cart."</p>
                    <h4>typeState, colorState, and sortState</h4>
                    <p>"typeState" is initialized to a dictionary with the key "checkboxes" paired with the value of a dictionary containing keys of the types of shoes and values to the boolean of "false." The user can trigger changes in the "typeState" according to what checkboxes have been selected for the "Shoe Types" filtering category, which will update the boolean to true/false as necessary. This same data structure was used for "colorState" and "sortState." For "colorState" and "typeState," the user triggering state changes will update constants "typeArray" and "colorArray" to contain all of the attributes that have been selected in the "isSelected" function. This also goes for when the user triggers a state change by clicking the "Reset All Filters" button, which will map all keys in "typeState" and "colorState" to "false." Finally, the functions "filterBy" and "sortBy" use these arrays and "sortState" to evaluate whether or not an item will be displayed, and these functions are called when "sort" and "filter" are called on "shoeData." These all go into updating "displayData."</p>
                    <h4>cart</h4>
                    <p>"cart" is initialized to a dictionary with keys "prods" and "total," the value for "prods" being a blank dictionary and "total" being the number 0. The user is able to trigger state changes in "cart" by clicking the "Add to Cart" button for a displayed shoe, clicking the "Clear" button on the cart, incrementing/decrementing a cart item, or clicking the "Remove Shoe From Cart" button.</p>
                    <ul>
                        <li>Clicking "Add to Cart" Button on a Shoe Item: clicking this button updates the "cart" state to add the price of that shoe to "cart.total" and a key-value pair to "cart.prods," which has the name of the shoe as the key and an array containing the price and count of the shoe as the value. Clicking this multiple times for a shoe already added update the state of "cart" again by incrementing the count and "cart.total" accordingly.</li>
                        <li>Clicking "Clear" Button: clicking this button updates the "cart" state to reset so that the "cart.prods" key has a blank dictionary as the value and the "cart.total" key has a value of 0, which is the initial state "cart" was set as before anything was added.</li>
                        <li>Incrementing/Decrementing a Cart item: clicking the incrementing or decrementing button for a cart item updates the "cart" state so that the name of the cart item is keyed on "cart.prods" to update that item's count, which is then used to update the value corresponding to the "cart.total" key.</li>
                        <li>Clicking "Remove Shoe From Cart" on a Cart Item: clicking this button updates the "cart" state so that the key-value pair for the given shoe is removed from "cart.prods" and the total aggregated cost of that shoe is removed from "cart.total."</li>
                    </ul>
                    </div>

                </div>
                <div>
                <h2>Conclusion</h2>
                    <div className="subsection">
                    <h3>The Application</h3>
                    </div>
                    <div className="subsection-end">
                    <h3>Reflection</h3>
                    </div>
                </div>
                    
            </div>
        </section>
    )
}

export default Development;