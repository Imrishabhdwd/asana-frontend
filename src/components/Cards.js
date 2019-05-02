import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';
export default function Cards(props) {
  console.log(props,"cards =========")
  return (
    // <Card>
    //     <CardBody onClick = {(e) => props.handleClick(e.target.id)} id={props.index}>
    //       <div className="cardBody" key={props.index} id={props.index}>
    //         {/* <CardTitle><h6 id={props.index}>{props.item.title}</h6></CardTitle>
    //         <CardSubtitle id={props.index}>{props.item.subtitle}</CardSubtitle>
    //         <CardText id={props.index}>{props.item.message}</CardText> */}
            
         
    //           <h4 id={props.index}>{props.item.title}</h4>
    //           <ul className="cards-ul">
    //           <li className="cards-li"><span className="label">Sub Title:</span> <span></span>{ props.item.subtitle}</li>
    //           <li className="cards-li"><span className="label">Message:</span>{props.item.message}</li>
    //           <li className="cards-li"><span className="label">Assigne:</span>{props.item.assignedTo}</li>
    //         </ul>
    //       </div>
    //     </CardBody>
    // </Card>
    <div class="container"key={props.index} onClick = {(e) => props.handleClick(e.target.id)} id={props.index}>
  <h2 id={props.index}>{props.item.title}</h2>
  <table class="table" id={props.index}>
    <thead>
      <tr>
        <th id={props.index}>Subtitle</th>
        <th id={props.index}>Description</th>
        <th id={props.index}>Assigne</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td id={props.index}>{props.item.subtitle}</td>
        <td id={props.index}>{props.item.description}</td>
        <td id={props.index}>{props.item.assignedTo}</td>
      </tr>      
    </tbody>
  </table>
</div>
  )
}

Cards.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
}

