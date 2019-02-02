import React, {Fragment} from 'react';


const ImageCard = (props)=>{

  return(<div className="ui small card" onClick={(event)=>props.handleClick(props.image)}>
          <div className="image">
            <img src={props.image.imageUrl} alt="can't load" />
          </div>
          <div className="content">
            <span className="right floated">
              <i className="heart like icon"></i>
              {props.image.clickCount} likes
            </span>
              {props.image.clickOrder > 0
                ?
                <Fragment><img className="emoji" src="https://media.tenor.com/images/37dc12243e77e7127bd891a2eae3d91a/tenor.gif" alt="error loading"/> Click Order: {props.image.clickOrder}</Fragment>
                :
                <Fragment><img className="emoji" src="https://media.tenor.com/images/566837eba034cef161f09e090d191bb1/tenor.gif" alt="error loading" /> You haven't click on me</Fragment>
            }

          </div>
        </div>)
}

export default ImageCard;
