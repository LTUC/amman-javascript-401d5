import React from 'react';

export default function Product(props) {
  console.log("PROPS",props.match)
  return (<div>
    {props.match.params.productname}
  </div>)
}
