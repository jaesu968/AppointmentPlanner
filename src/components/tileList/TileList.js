import React from "react";
import { Tile } from "../tile/Tile";

/* 
* 		Use the map() method on the array prop
* 		The map() callback function should have an object from the array as the first parameter and
 that object’s index as the second parameter
* 		Use restructuring syntax to extract the name property from each object and 
use ...rest syntax to get the description.
* 		The callback should return a Tile component with the object’s name as the name prop,
the rest of the object as the description and the index parameter used as the component’s key
*/ 
export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map(({ name, ...rest }, index) => {
        const description = { ...rest };
        return <Tile key={index} name={name} description={description} />;
      })}
    </div>
  );
};
